document.querySelectorAll('.timetable-cell').forEach(cell => {
    cell.addEventListener('click', function () {
        let teacherId = this.getAttribute('data-teacher');

        // Hide all teacher info
        document.querySelectorAll('.teacher-info').forEach(info => {
            info.style.display = 'none'; // Hide all teacher info
        });

        // Show selected teacher info
        const selectedInfo = document.getElementById(teacherId);
        if (selectedInfo) {
            selectedInfo.style.display = 'block'; // Show the clicked teacher's info
        }
    });
});