import axios from 'axios';

const BASE_URL = "http://localhost:8000";

async function generatePDF(data) {
    try {
        alert();
        const response = await axios.post(`${BASE_URL}/generate`, data, {
            responseType: 'blob'
        });

        const blob = new Blob([response.data], { type: 'application/pdf' });

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `Thanks${data.name}! - CF365.pdf`;
        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

    } catch (error) {
        console.error('Error generating PDF:', error);
    }
}

export {
    generatePDF,
}