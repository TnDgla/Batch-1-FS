function openTeacherDetails(subject, teacher) {
    const teacherDetails = `Subject: ${subject}\nTeacher: ${teacher}`;
    alert(teacherDetails); // You can also open a new page for more detailed info.
    // Uncomment the line below to redirect to a teacher's page (you'll need separate HTML pages for this)
    // window.location.href = `teacher.html?subject=${subject}&teacher=${teacher}`;
}
