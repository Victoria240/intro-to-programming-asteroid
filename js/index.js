var today = new Date();
var thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerText = `Victoria ${thisYear}`;
footer.append(copyright)
let skills = ["UX Design", "UX Research", "Wireframing", "Prototyping"];
var skillsSection = document.querySelector('#skills');
var skillsList = skillsSection.querySelector('ul');
function logSubmit(event) {
    console.log("the log submit function");
    event.preventDefault();
  }
for (let i=0; i<skills.length; i++) {
        let skill = document.createElement('li');
        skill.innerText = skills[i];
        skillsList.append(skill);
    };
    let messageForm = document.getElementsByName('leave_message');  
    console.log (messageForm)
 
    messageForm[0].addEventListener("submit", (event) =>{
        event.preventDefault()
        const name = event.target.name
        const email = event.target.email
        const message = event.target.message
        console.log(name.value, email.value, message.value );
        const messageSection = document.getElementById("messages");
        console.log (messageSection)
        const messageList = messageSection.querySelector('ul') 
        const newMessage = document.createElement('li')
        newMessage.innerHTML=`<a href="mailto:${email.value}" target="_blank"> ${name.value}</a>
        <span> wrote a message: ${message.value}</span>`
        const removeButton= document.createElement("button")
        removeButton.innerText="remove"
        removeButton.type="button"
        removeButton.addEventListener('click', (event) => {
            const entry= event.target.parentNode
            entry.remove()
        })
        newMessage.appendChild(removeButton)
        messageList.appendChild(newMessage)
        messageForm[0].reset()
        
    })