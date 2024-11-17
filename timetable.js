document.querySelectorAll('.subject').forEach(cell => {
    cell.addEventListener('click', function() {
        const subject = this.getAttribute('data-subject');
        const teacher = this.getAttribute('data-teacher');
        window.location.href = `details.html?subject=${subject}&teacher=${teacher}`;
    });
});
