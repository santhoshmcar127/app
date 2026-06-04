import os
import zipfile

def zipdir(path, ziph):
    # ziph is zipfile.ZipFile object
    for root, dirs, files in os.walk(path):
        # Exclude node_modules, dist, .git
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if 'dist' in dirs:
            dirs.remove('dist')
        if '.git' in dirs:
            dirs.remove('.git')
        
        for file in files:
            # Do not zip the script itself or existing zips
            if file == 'zip_project.py' or file.endswith('.zip'):
                continue
            
            filepath = os.path.join(root, file)
            # Write file with relative path
            relpath = os.path.relpath(filepath, path)
            ziph.write(filepath, relpath)

if __name__ == '__main__':
    zip_filename = 'quantumflow-ai.zip'
    print(f"Creating archive {zip_filename}...")
    
    with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        zipdir('.', zipf)
        
    print(f"Success! Project compressed into: {os.path.abspath(zip_filename)}")
