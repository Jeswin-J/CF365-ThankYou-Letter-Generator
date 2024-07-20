import json

def read_json(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
            return data
    except FileNotFoundError:
        raise FileNotFoundError(f"Member Data File not found.")
    except json.JSONDecodeError:
        raise ValueError(f"Not a valid JSON file.")
