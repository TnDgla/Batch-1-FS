
const subjects = document.querySelectorAll('.subject');
subjects.forEach(subject => {
    subject.addEventListener('click', function(event) {
        event.preventDefault();
        const teacherName = this.getAttribute('data-teacher');
        window.location.href = `teacher.html?teacher=${teacherName}`;
    });
});
