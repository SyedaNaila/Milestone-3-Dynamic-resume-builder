const resumeForm = document.getElementById("resumeform") as HTMLFormElement|null
const resumeOutPut = document.getElementById("resumeoutput") as HTMLDivElement|null
//function to generte the resume
if(resumeForm && resumeOutPut){
    resumeForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        
        const name=(document.getElementById("name")as HTMLInputElement).value;
        const email=(document.getElementById("email")as HTMLInputElement).value;
        const phone=(document.getElementById("phone")as HTMLInputElement).value;
        const education=(document.getElementById("education")as HTMLInputElement).value;
        const experience=(document.getElementById("experience")as HTMLInputElement).value;
        const skills=(document.getElementById("skills")as HTMLInputElement).value;
        const description=(document.getElementById("description")as HTMLInputElement).value;


        //Generate HTML for the Resume
    const resumeHTML=`
    <h2>Generated Resume</h2>
    <p><strong>Name:</strong>${name}</p>
    <p><strong>email:</strong>${email}</p>
    <p><strong>phone No:</strong>${phone}</p>
    <p><strong>Education:</strong>${education}</p>
     <p><strong>experience:</strong>${experience}</p>
 <p><strong>skills:</strong>${skills}</p>
       <p><strong>Description:</strong>${description}</p>
    
    `;
    resumeOutPut.innerHTML=resumeHTML;

 } );
} else{
    console.error('Form or output div not found in the DOM');
 
    }  