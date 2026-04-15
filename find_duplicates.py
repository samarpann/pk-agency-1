import os
import hashlib

def get_hash(filename):
    hasher = hashlib.md5()
    with open(filename, 'rb') as f:
        buf = f.read()
        hasher.update(buf)
    return hasher.hexdigest()

dirs = ['src/image', 'public/assets']
all_files = {}

for d in dirs:
    if os.path.exists(d):
        for f in os.listdir(d):
            path = os.path.join(d, f)
            if os.path.isfile(path):
                size = os.path.getsize(path)
                h = get_hash(path)
                all_files[path] = {'size': size, 'hash': h, 'name': f}

# Group by hash
by_hash = {}
for path, info in all_files.items():
    h = info['hash']
    if h not in by_hash:
        by_hash[h] = []
    by_hash[h].append(path)

print("Duplicates:")
for h, paths in by_hash.items():
    if len(paths) > 1:
        print(f"Hash {h}: {paths}")

print("\nUnique files (prioritizing public/assets names if possible):")
unique_files = {}
for h, paths in by_hash.items():
    # Prefer path in public/assets
    best_path = paths[0]
    for p in paths:
        if p.startswith('public/assets'):
            best_path = p
            break
    unique_files[h] = best_path

for h, p in unique_files.items():
    print(f"{h}: {p}")
