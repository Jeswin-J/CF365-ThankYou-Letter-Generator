from utils.letter_gen import add_text_to_pdf
from datetime import datetime


async def generate_letter(data: dict):
    name = data["name"]
    date = str(datetime.now().day) + " / " + str(datetime.now().month) + " / " + str(datetime.now().year)
    day = datetime.now().strftime("%A")
    file_path = add_text_to_pdf(name, date, day)
    return file_path 
