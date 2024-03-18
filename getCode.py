import os

def read_js_files(folder):
    js_files = []
    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.endswith(".js"):
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding='utf-8') as f:  # Specify encoding here
                    js_code = f.read()
                    js_files.append((file_path, js_code))
    return js_files

def main():
    components_folder = "components"
    screens_folder = "screens"

    components_files = read_js_files(components_folder)
    screens_files = read_js_files(screens_folder)

    print("==== Components ====")
    for file_path, code in components_files:
        print("File Path:", file_path)
        print("Code:\n", code)
        print("\n")

    print("==== Screens ====")
    for file_path, code in screens_files:
        print("File Path:", file_path)
        print("Code:\n", code)
        print("\n")

if __name__ == "__main__":
    main()
