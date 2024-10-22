document.addEventListener('DOMContentLoaded', function () {
    const subjectCells = document.querySelectorAll('.subject-cell');

    subjectCells.forEach(cell => {
        cell.addEventListener('click', function () {
            const teacher = this.getAttribute('data-teacher');
            const subject = this.getAttribute('data-subject');
            const phone = this.getAttribute('data-phone');
            const email = this.getAttribute('data-email');

            // Store teacher info in localStorage
            localStorage.setItem('teacherInfo', JSON.stringify({
                teacher,
                subject,
                phone,
                email
            }));

            // Redirect to teacher details page
            window.location.href = 'teacher.html';
        });
    });

    // Load teacher info on the teacher details page
    if (document.getElementById('teacher-info')) {
        const teacherInfo = JSON.parse(localStorage.getItem('teacherInfo'));

        if (teacherInfo) {
            document.getElementById('teacher-info').innerHTML = `
                <strong>Teacher:</strong> ${teacherInfo.teacher}<br>
                <strong>Subject:</strong> ${teacherInfo.subject}<br>
                <strong>Phone:</strong> ${teacherInfo.phone}<br>
                <strong>Email:</strong> <a href="mailto:${teacherInfo.email}">${teacherInfo.email}</a>
            `;
        }
    }
});
