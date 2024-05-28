async function loadHTML(url, elementId, callback) {
  console.log(url, elementId)
    await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
          document.getElementById(elementId).innerHTML = data;
          if (callback) {
              callback();
          }
        })
        .catch(error => {
            console.error('Error fetching the HTML:', error);
        });
}

function openEmail() {
  var emailAddress = 'jtlagumbay@up.edu.ph';
  var subject = 'Let\'s Connect';

  var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress);
  if (subject) {
    mailtoLink += '?subject=' + encodeURIComponent(subject);
  }
  console.log(mailtoLink)
  window.open(mailtoLink);
}

function openLinkedIn() {
  window.open(
    "https://www.linkedin.com/in/lagumbay-jhoanna-rica-37a45520a/",
    "_blank"
  )
}

function openGithub() {
  window.open(
    "https://github.com/jtlagumbay/",
    "_blank"
  )
}

async function populateProjects() {
  var project_card_container = document.getElementById("PROJECT-CARD-CONTAINER")
  if(project_card_container){
    const projects = await fetch('projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        return data.projects
      })
      .catch(error => {
        console.error('Error fetching the JSON:', error);
      });
    
    const project_child = await fetch('project-card.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        return data
      })
      .catch(error => {
        console.error('Error fetching the JSON:', error);
      });
    const parser = new DOMParser();
    const project_child_html = parser.parseFromString(project_child, 'text/html')
    projects.map(project => {
      var new_child = project_child_html
      console.log(project)
      new_child.getElementById("PROJECT-CARD-TITLE").innerText = project.title
      console.log(new_child)
      project_card_container.appendChild(new_child.documentElement)
    })
  }
}

let images = ["./images/guia-1.png", "./images/guia-2.png", "./images/guia-3.png", "./images/guia-4.png"]
let index = 0;
function changeThumbnail() {
  const imgElement = document.querySelector('#PROJECT-THUMBNAIL');
  imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}