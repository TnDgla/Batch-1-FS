// Teacher data
const teachers = {
    1: {
        name: "Prof. Prateek Bhansali",
        subject: "Design and Analysis of Algorithms",
        email: "prateek.bhansali@college.edu",
        office: "Room 301",
        officeHours: "Mon-Wed 2-4 PM",
        phone: "555-0301",
        expertise: "Algorithms, Data Structures, Complexity Theory"
    },
    2: {
        name: "Dr. Sonal Singh",
        subject: "Agile Software Development",
        email: "sonal.singh@college.edu",
        office: "Room 405",
        officeHours: "Tue-Thu 1-3 PM",
        phone: "555-0405",
        expertise: "Agile Methodologies, Scrum, Project Management"
    },
    3: {
        name: "Dr. Shivanshu Upadhyay",
        subject: "Machine Learning",
        email: "shivanshu.upadhyay@college.edu",
        office: "Room 202",
        officeHours: "Wed-Fri 11-1 PM",
        phone: "555-0202",
        expertise: "AI, Deep Learning, Neural Networks"
    },
    4: {
        name: "Prof. Suresh Pratap Singh",
        subject: "Competitive Programming",
        email: "suresh.singh@college.edu",
        office: "Room 304",
        officeHours: "Mon-Wed 3-5 PM",
        phone: "555-0304",
        expertise: "Problem Solving, Data Structures, Algorithms"
    },
    5: {
        name: "Prof. Jay Prakash Garg",
        subject: "Logical Reasoning",
        email: "jay.garg@college.edu",
        office: "Room 203",
        officeHours: "Tue-Thu 2-4 PM",
        phone: "555-0203",
        expertise: "Logic, Critical Thinking, Problem Analysis"
    }
};

// Initialize Bootstrap modal
const teacherModal = new bootstrap.Modal(document.getElementById('teacherModal'));

// Add click event listeners to subject cells
document.addEventListener('DOMContentLoaded', function() {
    // Handle subject cell clicks
    const subjects = document.querySelectorAll('.subject');
    subjects.forEach(subject => {
        subject.addEventListener('click', function() {
            const teacherId = this.dataset.teacher;
            showTeacherDetails(teacherId);
        });
    });

    // Handle contact buttons
    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const teacherId = this.dataset.teacher;
            showContactForm(teacherId);
        });
    });
});

// Show teacher details in modal
function showTeacherDetails(teacherId) {
    const teacher = teachers[teacherId];
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <div class="teacher-profile">
            <h4>${teacher.name}</h4>
            <p class="text-muted">${teacher.subject}</p>
            <hr>
            <p><strong>Expertise:</strong> ${teacher.expertise}</p>
            <p><strong>Email:</strong> ${teacher.email}</p>
            <p><strong>Office:</strong> ${teacher.office}</p>
            <p><strong>Office Hours:</strong> ${teacher.officeHours}</p>
            <p><strong>Phone:</strong> ${teacher.phone}</p>
        </div>
    `;
    teacherModal.show();
}

// Show// Show contact form
function showContactForm(teacherId) {
    const teacher = teachers[teacherId];
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <h4>Contact ${teacher.name}</h4>
        <form id="contactForm" class="mt-3">
            <div class="mb-3">
                <label for="studentName" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="studentName" required>
            </div>
            <div class="mb-3">
                <label for="studentEmail" class="form-label">Your Email</label>
                <input type="email" class="form-control" id="studentEmail" required>
            </div>
            <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="subject" required>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
    `;

    // Add form submission handler
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real application, you would send this data to a server
        alert(`Message sent to ${teacher.name}! (Demo - no actual message sent)`);
        teacherModal.hide();
    });

    teacherModal.show();
}