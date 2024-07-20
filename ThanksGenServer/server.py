from fastapi import FastAPI, HTTPException
from starlette.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from services.gen_service import generate_letter
import uvicorn
from typing import Dict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)


@app.post("/generate")
async def generate(data : Dict):
    try:
        file_path = await generate_letter(data)
        
        if file_path is None:
            print("PDF generation failed!! NOT A CODERS FORUM MEMBER!.")
            return {"error": "Thank you for showing us your Support!"}
        
        return FileResponse(file_path, media_type='application/pdf')
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate letter: {str(e)}")


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)