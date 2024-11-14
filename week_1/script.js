function showTeacher(subject) {
  const teacher = {
    "MACHINE LEARNING":
      "<b>Jagdish Kumar</b> - jagdishkumar@gla.ac.in<br><br>Room: AB1 201, Contact: 791558602",
    "THEORY OF AUTOMATA":
      "<b>Nitu Faujdar</b> - nitufaujdar_@gla.ac.in<br><br>Room: AB9 106, Contact: 8955622330",
    "AGILE SOFTWARE DEVELOPMENT":
      "<b>Sonal Singh</b> - sonalsingh_cs22@gla.ac.in<br><br>Room: AB3 301, Contact: 7617765062",
    "QUANT AND APTITUDE":
      "<b>Jay Prakash Dixit</b> - jay_prakash_cs22@gla.ac.in<br><br>Room: AB3 202, Contact: 81551123865",
    "GROUP DISCUSSION":
      "<b>Dr. Anjali Mehra</b><br><br>Room: AB1 403, Contact: 76589865211",
    "MACHINE LEARNING LAB":
      "<b>Presit Deshai</b> - presit_desai_cs22@gla.ac.in<br><br>Room: AB1 202, Contact: 78156532895",
    "DATA STRUCTURES AND ALGORITHM":
      "<b>Armendra Singh</b> - Armendra_singh_cs22@gla.ac.in<br><br>Room: AB1 413, Contact: 87255665452",
    FULL_STACK:
      "<b>Govind Jha</b> - govind_jha_cs22@gla.ac.in<br><br>Room: AB9 109, Contact: 8901234567",
  };

  document.getElementById("details").innerHTML = teacher[subject];
  document.getElementById("teacher").style.display = "block";
}

function closeModal() {
  document.getElementById("teacher").style.display = "none";
}
