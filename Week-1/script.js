function showTeacher(subject) {
    const teacher = {
        'PROGRAMMING BASICS': '<b>Prof. Ram Kumar</b><br>Email: ram_kumar@btech.edu<br>Room: B-101, Contact: 9991234567',
        'DATABASE SYSTEMS': '<b>Prof. Shalini Mehta</b><br>Email: shalini_mehta@btech.edu<br>Room: B-102, Contact: 9987654321',
        'NETWORKING': '<b>Prof. Amit Kumar</b><br>Email: amit_kumar@btech.edu<br>Room: B-103, Contact: 9976543210',
        'WEB DEVELOPMENT': '<b>Prof. Nisha Gupta</b><br>Email: nisha_gupta@btech.edu<br>Room: B-104, Contact: 9965432109',
        'SOFTWARE TESTING': '<b>Prof. Rakesh Sharma</b><br>Email: rakesh_sharma@btech.edu<br>Room: B-105, Contact: 9954321098',
        'PROGRAMMING LAB': '<b>Prof. Anil Raj</b><br>Email: anil_raj@btech.edu<br>Lab: L-201, Contact: 9943210987',
        'DATABASE SYSTEMS LAB': '<b>Prof. Priya Singh</b><br>Email: priya_singh@btech.edu<br>Lab: L-202, Contact: 9932109876',
        'NETWORKING LAB': '<b>Prof. Sunil Kumar</b><br>Email: sunil_kumar@btech.edu<br>Lab: L-203, Contact: 9921098765',
        'WEB DEVELOPMENT LAB': '<b>Prof. Seema Verma</b><br>Email: seema_verma@btech.edu<br>Lab: L-204, Contact: 9910987654',
        'Lunch': '<b>Enjoy your Lunch Break!</b>'
    };

    document.getElementById('details').innerHTML = teacher[subject];
    document.getElementById('teacher').style.display = 'flex';
}

function closeModal() {
    document.getElementById('teacher').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('teacher');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
