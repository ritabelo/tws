#!/usr/bin/env python3
"""
Compress images larger than 2MB.
Strategy:
1. Try quality=85 with original dimensions
2. If still > 2MB, scale down so longest edge is at most 1920px
3. If still > 2MB, reduce quality in steps of 5 until under 2MB or quality reaches 50
"""
import os
import sys
from pathlib import Path
from PIL import Image

MAX_SIZE = 2 * 1024 * 1024  # 2MB
MAX_DIMENSION = 1920

def compress_image(filepath):
    filepath = Path(filepath)
    original_size = filepath.stat().st_size
    if original_size <= MAX_SIZE:
        return False, original_size, original_size

    img = Image.open(filepath)
    # Convert RGBA/Palette to RGB for JPEG output
    if img.mode in ('RGBA', 'P'):
        img = img.convert('RGB')

    # Try quality 85 first
    quality = 85
    saved = False
    temp_path = filepath.with_suffix('.tmp' + filepath.suffix)

    def save_with_quality(img_to_save, q):
        if filepath.suffix.lower() in ('.jpg', '.jpeg', '.JPG', '.JPEG'):
            img_to_save.save(temp_path, 'JPEG', quality=q, optimize=True)
        else:
            img_to_save.save(temp_path, 'PNG', optimize=True)
        return temp_path.stat().st_size

    current_size = save_with_quality(img, quality)

    # If still too big, resize
    if current_size > MAX_SIZE:
        w, h = img.size
        if max(w, h) > MAX_DIMENSION:
            ratio = MAX_DIMENSION / max(w, h)
            new_size = (int(w * ratio), int(h * ratio))
            img = img.resize(new_size, Image.LANCZOS)
            current_size = save_with_quality(img, quality)

    # If still too big, reduce quality
    while current_size > MAX_SIZE and quality > 50:
        quality -= 5
        current_size = save_with_quality(img, quality)

    # If still too big after all that, reduce dimensions further
    while current_size > MAX_SIZE:
        w, h = img.size
        if w <= 800 or h <= 800:
            break
        ratio = 0.8
        new_size = (int(w * ratio), int(h * ratio))
        img = img.resize(new_size, Image.LANCZOS)
        current_size = save_with_quality(img, quality)

    if current_size < original_size:
        os.replace(temp_path, filepath)
        return True, original_size, current_size
    else:
        if temp_path.exists():
            os.remove(temp_path)
        return False, original_size, original_size

if __name__ == '__main__':
    directories = [
        '/Users/ritabelo/tws/versions/v1/public/images',
        '/Users/ritabelo/tws/versions/v2/website-claude/public/images',
    ]

    for directory in directories:
        for ext in ('*.jpg', '*.jpeg', '*.png', '*.JPG', '*.JPEG', '*.PNG'):
            for filepath in Path(directory).glob(ext):
                size = filepath.stat().st_size
                if size > MAX_SIZE:
                    compressed, orig, new = compress_image(filepath)
                    status = "COMPRESSED" if compressed else "SKIPPED"
                    print(f"{status}: {filepath} ({orig/1024/1024:.1f}MB -> {new/1024/1024:.1f}MB)")

    print("Done.")
