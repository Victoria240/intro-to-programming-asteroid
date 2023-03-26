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

    let githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/Victoria240/repos');
githubRequest.send();

githubRequest.addEventListener('load', function(event) {
  let repositories = JSON.parse(this.response);
  console.log(repositories);

  // DOM Selection
  const projectSection = document.querySelector('#projects');
  const projectList = projectSection.querySelector('ul');

  // Loop through repositories Array
  for (let i = 0; i < repositories.length; i++) {
    // Create new list item element
    const project = document.createElement('li');
    // Set the inner text of the project element
    project.innerText = repositories[i].name;
    // Append the project element to the projectList element
    projectList.appendChild(project);
  }
});


// Loop through repositories array
for (let i = 0; i < repositories.length; i++) {
  // Create new list item element
  const project = document.createElement('li');

  // Create new link element
  const link = document.createElement('a');
  link.href = repositories[i].html_url;
  link.target = '_blank'; // Open link in new tab
  link.innerText = repositories[i].name;
  
  // Create new paragraph element for additional info
  const description = document.createElement('p');
  description.innerText = repositories[i].description;

  // Append link and description elements to project element
  project.appendChild(link);
  project.appendChild(description);

  // Append project element to projectList element
  projectList.appendChild(project);
}


