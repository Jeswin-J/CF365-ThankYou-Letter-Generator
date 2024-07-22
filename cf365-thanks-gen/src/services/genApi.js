import axios from 'axios';

const BASE_URL = "http://13.233.90.226:8000";

async function generatePDF(data) {
    try {
        const response = await axios.post(`${BASE_URL}/generate`, data, {
            responseType: 'blob'
        });

        const contentType = response.headers['content-type'];
        const isPDF = contentType && contentType.includes('application/pdf');
        
        if (isPDF) {
            const blob = new Blob([response.data], { type: 'application/pdf' });
            let filename = `Thanks ${data.roll_num}! - CF365.pdf`;

            const contentDisposition = response.headers['content-disposition'];
            if (contentDisposition) {
                const matches = /filename="([^"]+)"/.exec(contentDisposition);
                if (matches && matches[1]) {
                    filename = matches[1];
                }
            }

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } else {
            return -1;
        }
    } catch (error) {
        alert('An error occurred while generating the PDF.');
    }
}

export {
    generatePDF,
}
