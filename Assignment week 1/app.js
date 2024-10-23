
    document.querySelectorAll('.hoverable-cell').forEach(cell => {
        cell.addEventListener('click', function() {
            // Redirect to a new page or display a pop-up with the teacher's contact details
            const subject = this.innerText;
            window.location.href = `teacher-details.html?subject=${subject}`;
        });
    });

