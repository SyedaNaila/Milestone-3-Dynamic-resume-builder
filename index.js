var resumeForm = document.getElementById("resumeform");
var resumeOutPut = document.getElementById("resumeoutput");
//function to generte the resume
if (resumeForm && resumeOutPut) {
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        var description = document.getElementById("description").value;
        //Generate HTML for the Resume
        var resumeHTML = "\n    <h2>Generated Resume</h2>\n    <p><strong>Name:</strong>".concat(name, "</p>\n    <p><strong>email:</strong>").concat(email, "</p>\n    <p><strong>phone No:</strong>").concat(phone, "</p>\n    <p><strong>Education:</strong>").concat(education, "</p>\n     <p><strong>experience:</strong>").concat(experience, "</p>\n <p><strong>skills:</strong>").concat(skills, "</p>\n       <p><strong>Description:</strong>").concat(description, "</p>\n    \n    ");
        resumeOutPut.innerHTML = resumeHTML;
    });
}
else {
    console.error('Form or output div not found in the DOM');
}
