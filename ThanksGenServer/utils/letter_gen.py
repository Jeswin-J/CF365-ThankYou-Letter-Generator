from PyPDF2 import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from io import BytesIO
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

import os


TEMPLATE_PATH = "./assets/letterTemplate/Thanks! - Coders Forum.pdf"
OUTPUT_DIR = "./output"


def create_overlay(name, date, day):
    packet = BytesIO()
    can = canvas.Canvas(packet, pagesize=letter)
    
    can.drawString(450, 600, date)

    pdfmetrics.registerFont(TTFont('Monterchi', './assets/font/monterchi-serif-bold.ttf'))
    can.setFont("Monterchi", 16)
    can.drawString(98, 525, f"{name},")
    can.drawString(450, 580, day)
    can.save()
    packet.seek(0)
    return packet


def add_text_to_pdf(name, date, day):
    overlay = create_overlay(name, date, day)
    overlay_pdf = PdfReader(overlay)
    template_pdf = PdfReader(open(TEMPLATE_PATH, "rb"))

    writer = PdfWriter()

    for page in template_pdf.pages:
        page.merge_page(overlay_pdf.pages[0])
        writer.add_page(page)

    output_file_name = f"Thanks! {name} - CF365.pdf"
    output_file_path = os.path.join(OUTPUT_DIR, output_file_name)
    
    with open(output_file_path, "wb") as output_pdf:
        writer.write(output_pdf)

    return output_file_path


