from utils.letter_gen import add_text_to_pdf
from datetime import datetime
from utils.json_util import read_json


async def generate_letter(data: dict):
    roll_num = data["roll_num"]
    
    path = './database/memberData.json'
    
    try:
        json_data = read_json(path)
    except (FileNotFoundError, ValueError) as e:
        print(e)
        return None

    if roll_num in json_data:
        name = json_data[roll_num]
    else:
        print(f"Roll number {roll_num} not found in Members Data.")
        return None
    
    date = f"{datetime.now().day} / {datetime.now().month} / {datetime.now().year}"
    day = datetime.now().strftime("%A")
    
    file_path = add_text_to_pdf(name, date, day)
    
    return file_path