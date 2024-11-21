document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const subjectTitle = document.getElementById('subject-title');
    const teacherDetails = document.getElementById('teacher-details');

    const teacherInfo = {
        'Machine Learning': {
            name: 'Presit Mangesh Deshai',
            email: 'presit.desai@gla.ac.in',
            contact: '9359572867'
        },
        'Agile Software Development': {
            name: 'Nikhil Govil',
            email: 'nikhil.govil@gla.ac.in',
            contact: '8171326789'
        },
        'Quant & Reasoning Aptitude': {
            name: 'Jay Prakash Garg',
            email: 'jay.garg@gla.ac.in',
            contact: '9897097010'
        },
        'Logical Reasoning': {
            name: 'Jay Prakash Garg',
            email: 'jay.garg@gla.ac.in',
            contact: '9897097010'
        },
        '.......': {
            name: 'NaN',
            email: 'NaN',
            contact: 'NaN'
        },
        'Group Discussion & Personal interview': {
            name: 'Dr. Anjali Mehra',
            email: 'anjali.mehra@gla.ac.in',
            contact: '**********',
        },
        'Verbal Aptitude': {
            name: 'Shiv Kumar',
            email: 'kumar.shiv@gla.ac.in',
            contact: '7906063845'
        },
        'Rashtra Gaurav': {
            name: 'Preeti Verma',
            email: 'preeti.verma@gla.ac.in',
            contact: '**********'
        },
        'Machine Learning Lab': {
            name: 'Presit Mangesh Deshai',
            email: 'presit.desai@gla.ac.in',
            contact: '9359572867'
        },
        'Design And Analysis Of Algorithms': {
            name: 'Sohil Khan',
            email: 'Sohil.Khan@gla.ac.in',
            contact: '7900352613'
        },
        'Design And Analysis Of Algorithms Lab': {
            name: 'Sohil Khan',
            email: 'Sohil.Khan@gla.ac.in',
            contact: '7900352613'
        },
        'Competitive Programming': {
            name: 'Sohil Khan',
            email: 'directortnd@gla.ac.in',
            contact: '9559961616'
        }
    };

    document.querySelectorAll('td[data-subject]').forEach(cell => {
        cell.addEventListener('click', () => {
            const subject = cell.getAttribute('data-subject');
            const teacher = teacherInfo[subject];

            if (teacher) {
                subjectTitle.textContent = subject;
                teacherDetails.innerHTML = `
                    <p><strong>Teacher:</strong> ${teacher.name}</p>
                    ${teacher.email ? `<p><strong>Email:</strong> ${teacher.email}</p>` : ''}
                    ${teacher.contact ? `<p><strong>Contact:</strong> ${teacher.contact}</p>` : ''}
                    ${teacher.room ? `<p><strong>Room:</strong> ${teacher.room}</p>` : ''}
                `;
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});