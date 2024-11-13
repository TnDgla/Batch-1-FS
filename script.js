const subjectDetails = {
    Agile: { teacher: 'Mr. Nikil', cabin: '103', phone: '100-156-7790' },
    'Machine learning': { teacher: 'Dr. Desai', cabin: '107', phone: '101-202-3003' },
    'Competetive programming': { teacher: 'Mr. Kumar', cabin: '127', phone: '474-565-0986' },
    Automata: { teacher: 'Ms. Neha', cabin: '134', phone: '025-616-7847' },
    Verbal: { teacher: 'Mr. Shiv', cabin: '109', phone: '986-707-8128' },
    'Group Discussion': { teacher: 'Ms. Anjali', cabin: '115', phone: '654-800-6543' },
    DAA: { teacher: 'Mr. Sohil', cabin: '114', phone: '876-324-0100' },
    English: { teacher: 'Mrs. Divya', cabin: '129', phone: '054-181-4356' },
    DIP: { teacher: 'Mr. Anand', cabin: '110', phone: '111-222-3333' },
    Quant: { teacher: 'Mr. Suresh', cabin: '011', phone: '252-233-0583' },
    CN: { teacher: 'Mrs Anupam', cabin: '122', phone: '549-612-0934' },
    WEBD: { teacher: 'Mr. Rahul', cabin: '213', phone: '452-123-0768' },
    DSA: { teacher: 'Mr. Abhishek', cabin: '144', phone: '435-786-6574' },
    PQRH: { teacher: 'Mrs. Anjali', cabin: '215', phone: '980-700-8018' },
    'BCSC 0105': { teacher: 'Dr. Gupta', cabin: '136', phone: '717-088-1299' },
    CP: { teacher: 'Mr. Bhavy', cabin: '117', phone: '808-919-0111' },
};

// Select all subject links
const subjectLinks = document.querySelectorAll(".subject");
subjectLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); 
        const subject = this.getAttribute("data-subject").trim(); 
        openNewWindow(subject);
    });
});


function openNewWindow(subject) {
    const details = subjectDetails[subject];
    if (!details) {
        alert('No details available for this subject.'); 
        return;
    }
    
    const subjectTitle = capitalizeFirstLetter(subject); 

    const newWindow = window.open("", "_blank", "width=400,height=400");
    newWindow.document.write(`
        <html>
            <head>
                <title>${subjectTitle} Details</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h2 { color: #333; }
                    p { font-size: 16px; margin: 5px 0; }
                    strong { font-weight: bold; }
                    a { color: blue; text-decoration: none; display: block; margin-top: 30px; }
                    a:hover { text-decoration: underline; }
                </style>
            </head>
            <body>
                <h2>${subjectTitle}</h2>
                <p><strong>Teacher:</strong> ${details.teacher}</p>
                <p><strong>Cabin No:</strong> ${details.cabin}</p>
                <p><strong>Phone No:</strong> ${details.phone}</p>
                <a href="#" onclick="window.close()">Go Back to Timetable</a>
            </body>
        </html>
    `);
    newWindow.document.close(); 
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
