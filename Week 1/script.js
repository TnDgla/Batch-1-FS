document.querySelectorAll('.subject-cell').forEach(cell => {
    cell.addEventListener('click', function () {
        const teacher = this.getAttribute('data-teacher');
        const subject = this.getAttribute('data-subject');
        window.location.href = `details.html?teacher=${teacher}&subject=${subject}`;
    });
});

const urlParams = new URLSearchParams(window.location.search);
const teacher = urlParams.get('teacher');
const subject = urlParams.get('subject');

const teacherInfo = {
    'Teacher A': { name: 'Teacher A', email: 'teacherA@example.com', subject: 'Math' },
    'Teacher B': { name: 'Teacher B', email: 'teacherB@example.com', subject: 'Science' },
    'Teacher C': { name: 'Teacher C', email: 'teacherC@example.com', subject: 'English' }
};

document.getElementById('teacher-info').innerHTML = `
    <h2>${teacherInfo[teacher].name}</h2>
    <p><strong>Subject:</strong> ${teacherInfo[teacher].subject}</p>
    <p><strong>Email:</strong> ${teacherInfo[teacher].email}</p>
`;