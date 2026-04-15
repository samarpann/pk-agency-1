import os
import hashlib
import shutil

def get_hash(filename):
    hasher = hashlib.md5()
    with open(filename, 'rb') as f:
        buf = f.read()
        hasher.update(buf)
    return hasher.hexdigest()

src_dir = 'src/image'
dst_dir = 'public/assets'

if not os.path.exists(dst_dir):
    os.makedirs(dst_dir)

# Map hashes of existing files in public/assets
existing_hashes = {}
for f in os.listdir(dst_dir):
    path = os.path.join(dst_dir, f)
    if os.path.isfile(path):
        existing_hashes[get_hash(path)] = f

# Copy unique from src/image
copied_count = 0
for f in os.listdir(src_dir):
    path = os.path.join(src_dir, f)
    if os.path.isfile(path):
        h = get_hash(path)
        if h not in existing_hashes:
            # Generate a name for it
            new_name = f"NEW-{len(existing_hashes)+1}.jpg"
            if f.endswith('.mp4'):
                new_name = f"NEW-VID-{len(existing_hashes)+1}.mp4"
            
            shutil.copy(path, os.path.join(dst_dir, new_name))
            existing_hashes[h] = new_name
            print(f"Copied {f} as {new_name}")
            copied_count += 1
        else:
            print(f"Skipped duplicate: {f} (same as {existing_hashes[h]})")

print(f"Finished. Copied {copied_count} new files.")
