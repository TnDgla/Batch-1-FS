const subject_codes=["BCSC0011","BCSE0053","BCSE0281","BCSE1251","PCPH0002","PVRH001","PGDH0001","BCSC0022","BCSC0812","PQRH0001","BCSE0105","BCSE0133","PQRH0002"];
const subject_names=["Theory Of Automata And Formal Languages","Agile Software Development","Full Stack Using Scripting Technologies Lab","Full Stack Using Scripting Technologies","Competitive Programming","Verbal Aptitude","Group Discussion & Personal Interview","Analysis And Design Of Algorithm","Analysis And Design Of Algorithm Lab","Quant & Reasoning Aptitude","Machine Learning","Machine Learning Lab","Logical Reasoning"];
const faculty_info=[
    {"faculty":"Shubham Shukla","mail":"shubham.shukla@gla.ac.in","contact":"9236925601"},
    {"faculty":"Madhu Sudan Kumar","mail":"madhusudan.kumar@gla.ac.in","contact":"7488044629"},
    {"faculty":"Shiv Kumar Sharma","mail":"jztshiva@gmail.com","contact":"9319136945"},
    {"faculty":"Suresh Pratap Singh","mail":"directortnd@gla.ac.in","contact":"9959961616"},
    {"faculty":"Sohil Khan","mail":"sohil00017@gmail.com","contact":"7900352613"},
    {"faculty":"Jagjeet Kumar","mail":"jagjeet831@hotmail.com","contact":"9896034822"},
    {"faculty":"Anjal Mehra","mail":"anjali.mehra@gla.ac.in","contact":"**********"},
    {"faculty":"Ayush Gupta","mail":"ayush.guptaa@gla.ac.in","contact":"8171248044"},
    {"faculty":"Quazi Ziauddin","mail":"ziauddin.quazi@gla.ac.in","contact":"8585929589"}];

function displayFacultyInformation(num){
    let faculty=document.getElementById("faculty-"+num);
    let phone=document.getElementById("contact-"+num);
    let mail=document.getElementById("mail-"+num);
    faculty.textContent=" "+faculty_info[num].faculty;
    phone.textContent=" "+faculty_info[num].contact;
    mail.textContent=" "+faculty_info[num].mail;
}

window.onload=function(){
    for(let i=0;i<9;i++){
        displayFacultyInformation(i);
    }
}
