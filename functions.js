function loadHTML(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
          document.getElementById(elementId).innerHTML = data;
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