// Get the current date
var today = new Date();
// Get the current year from the date object
var thisYear = today.getFullYear();
// Find the footer element
let footer = document.querySelector('footer');
// Create a new paragraph element for the copyright information
let copyright = document.createElement('p');
// Set the text of the copyright paragraph to include the current year
copyright.innerText = `Victoria ${thisYear}`;
// Append the copyright paragraph to the footer element
footer.append(copyright)
// Define an array of skills
let skills = ["UX Design", "UX Research", "Wireframing", "Prototyping"];
// Find the section of the page that contains the skills list
var skillsSection = document.querySelector('#skills');
// Find the unordered list element within the skills section
var skillsList = skillsSection.querySelector('ul');
// Define a function that logs a message to the console and prevents the default form submission behavior
function logSubmit(event) {
    console.log("the log submit function");
    event.preventDefault();
}
// Loop through the skills array and create a new list item for each skill, then append it to the skills list
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.append(skill);
};
// Find the form element with the name attribute "leave_message"
let messageForm = document.getElementsByName('leave_message');
// Log the form element to the console
console.log(messageForm)
// Add an event listener to the form that prevents the default submission behavior and creates a new message element with the form data
messageForm[0].addEventListener("submit", (event) => {
    event.preventDefault()
    // Get the name, email, and message values from the form
    const name = event.target.name
    const email = event.target.email
    const message = event.target.message

    // Log the form values to the console
    console.log(name.value, email.value, message.value);

    // Find the section of the page that contains the messages
    const messageSection = document.getElementById("messages");
    console.log(messageSection)

    // Find the unordered list element within the messages section
    const messageList = messageSection.querySelector('ul')

    // Create a new list item element for the new message
    const newMessage = document.createElement('li')

    // Set the innerHTML of the new message to include the name, email, and message values
    newMessage.innerHTML = `<a href="mailto:${email.value}" target="_blank"> ${name.value}</a>
        <span> wrote a message: ${message.value}</span>`

    // Create a new remove button element for the new message
    const removeButton = document.createElement("button")
    removeButton.innerText = "remove"
    removeButton.type = "button"
    // Add an event listener to the remove button that removes the message element from the page
    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode
        entry.remove()
    })
    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)
    messageForm[0].reset()
})

// Fetch API Requestttttttttt
fetch('https://api.github.com/users/Victoria240/repos')
  .then(response => response.json()) // Parse response JSON data
  .then(repositories => { // Execute code with response data
    console.log(repositories);

    // DOM Selection
    const projectSection = document.querySelector('#projects');
    const projectList = projectSection.querySelector('ul');

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
  });




 // The XmlHttpRequest code and event listener included -CODE STARTTTTTTT
// let githubRequest = new XMLHttpRequest();
// githubRequest.open('GET', 'https://api.github.com/users/Victoria240/repos');
// githubRequest.send();

// githubRequest.addEventListener('load', function(event) {
//   let repositories = JSON.parse(this.response);
//   console.log(repositories);

//   // DOM Selection
//   const projectSection = document.querySelector('#projects');
//   const projectList = projectSection.querySelector('ul');

//   // Loop through repositories Array
//   for (let i = 0; i < repositories.length; i++) {
//     // Create new list item element
//     const project = document.createElement('li');
//     // Set the inner text of the project element
//     project.innerText = repositories[i].name;
//     // Append the project element to the projectList element
//     projectList.appendChild(project);
//   }
// });


// // Loop through repositories array
// for (let i = 0; i < repositories.length; i++) {
//   // Create new list item element
//   const project = document.createElement('li');

//   // Create new link element
//   const link = document.createElement('a');
//   link.href = repositories[i].html_url;
//   link.target = '_blank'; // Open link in new tab
//   link.innerText = repositories[i].name;
  
//   // Create new paragraph element for additional info
//   const description = document.createElement('p');
//   description.innerText = repositories[i].description;

//   // Append link and description elements to project element
//   project.appendChild(link);
//   project.appendChild(description);

//   // Append project element to projectList element
//   projectList.appendChild(project);
// }
// ENDDDDDDDDDDDDDDDDDDD





// OLD CODEEEEEEEEEEEEEEEE
// let githubRequest = new XMLHttpRequest();
// githubRequest.open('GET', 'https://api.github.com/users/Victoria240/repos');
// githubRequest.send();

// githubRequest.addEventListener('load', function(event) {
//   let repositories = JSON.parse(this.response);
//   console.log(repositories);
// });



// // DOM Selection
// const projectSection = document.querySelector('#projects');
// const projectList = projectSection.querySelector('ul');

// // Loop through repositories Array
// for (let i = 0; i < repositories.length; i++) {
//   // Create new list item element
//   const project = document.createElement('li');
//   // Set the inner text of the project element
//   project.innerText = repositories[i].name;
//   // Append the project element to the projectList element
//   projectList.appendChild(project);
// }


// for (let i = 0; i < repositories.length; i++) {
//   const repository = repositories[i];

//   // Create a new list item element
//   const project = document.createElement('li');

//   // Create a new anchor element with the repository name as the link text
//   const repoLink = document.createElement('a');
//   repoLink.textContent = repository.name;

//   // Set the href attribute of the anchor element to the repository's HTML URL
//   repoLink.href = repository.html_url;

//   // Create a new paragraph element for the repository description
//   const description = document.createElement('p');
//   description.textContent = repository.description;

//   // Create a new paragraph element for the repository date
//   const date = document.createElement('p');
//   date.textContent = new Date(repository.updated_at).toLocaleDateString();

//   // Append the anchor element and paragraph elements to the list item element
//   project.appendChild(repoLink);
//   project.appendChild(description);
//   project.appendChild(date);

//   // Append the list item element to the projectList element
//   projectList.appendChild(project);
// }
