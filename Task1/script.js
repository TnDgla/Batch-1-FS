function showTeacher(sub) {
    if (sub.trim() !== '') {
        // Navigate to the teacher details page with the subject code as a parameter
        window.location.href = `teacher-details.html?teacher=${sub}`;
    } else {
        // Handle empty lectures (if needed)
        alert('No class scheduled for this time.');
    }
}
