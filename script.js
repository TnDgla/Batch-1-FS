function showTeacher(subject) {
    const teacher = {
        'MACHINE LEARNING': '<b>Anushka Shukla</b> - anushkashukla@gla.ac.in<br><br>Contact: 9638527411',
        'AGILE SOFTWARE DEVELOPMENT': '<b>Vibhoo Sharma</b> - vibhoosharma_cs22@gla.ac.in<br><br>Contact: 9638527412',
        'QUANTS AND APTITUDE': '<b>Ayush Gupta</b> - ayushgupta_cs22@gla.ac.in<br><br>Contact: 9638527413',
        'GROUP DISCUSSION': '<b>Dr. Anjali Mehra</b><br><br>Contact: 9638527414',
        'MACHINE LEARNING LAB': '<b>Anushka Shukla</b> - anushkashukla_cs22@gla.ac.in<br><br>Contact: 9638527411',
        'DESIGN AND ANALYSIS OF ALGORITHMS': '<b>Abhishek</b> - abhishek_cs22@gla.ac.in<br><br>Contact: 9638527415',
        'COMPETITIVE PROGRAMMING': '<b>Suresh Pratap Singh</b> - directortnd@gla.ac.in<br><br>Contact: 9638527416',
        'LOGICAL REASONING': '<b>Ayush Gupta</b> - ayushgupta@gla.ac.in<br><br>Contact: 9638527413',
        'VERBAL APTITUDE': '<b>Shiv Kumar</b> - shivkumar_cs22@gla.ac.in<br><br>Contact: 9638527417'
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
