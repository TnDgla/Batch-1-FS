// Get the query parameter from URL
const urlParams = new URLSearchParams(window.location.search);
const teacherName = urlParams.get('name');

const teachersData = {
  "Mr.Jones": {
    subject: "Mathematics",
    email: "jones@school.com"
  },
  "Ms.Smith": {
    subject: "Physics",
    email: "smith@school.com"
  }
};

document.getElementById('name').textContent = teacherName;
document.getElementById('subject').textContent = teachersData[teacherName].subject;
document.getElementById('email').textContent = teachersData[teacherName].email;
