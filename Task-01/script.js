document.addEventListener('DOMContentLoaded', function() {
    const subjects = document.querySelectorAll('.subject');

    subjects.forEach(subject => {
        subject.addEventListener('click', function(e) {
            e.preventDefault();
            const teacher = this.getAttribute('data-teacher');
            const subjectName = this.textContent;
            showTeacherDetails(teacher, subjectName);
        });
    });
});

function showTeacherDetails(teacher, subject) {
    const modalHtml = `
        <div class="modal fade" id="teacherModal" tabindex="-1" aria-labelledby="teacherModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="teacherModalLabel">Teacher Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Name:</strong> ${teacher}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Email:</strong> ${teacher.toLowerCase().replace(' ', '.')}@school.edu</p>
                        <p><strong>Phone:</strong> (91) 123456-7890</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('teacherModal'));
    
    modal.show();
    
    const modalElement = document.querySelector('.modal-dialog');
    modalElement.style.transform = 'scale(0.7)';
    modalElement.style.opacity = '0';
    setTimeout(() => {
        modalElement.style.transform = 'scale(1)';
        modalElement.style.opacity = '1';
        modalElement.style.transition = 'all 0.3s ease-out';
    }, 50);

    document.getElementById('teacherModal').addEventListener('hidden.bs.modal', function () {
        this.remove();
    });
}