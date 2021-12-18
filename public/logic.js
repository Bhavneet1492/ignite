// sleep function implementation
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// function to display name on toggling
function display() {
  let Switch = document.getElementById("switch");
  const Name = document.getElementById("fName");
  const altName = document.getElementById("faltName");
  const projects = document.getElementById("projects");
  const altprojects = document.getElementById("altprojects");
  const bar = document.getElementById("bar");
  const altbar = document.getElementById("altbar");
  const skills = document.getElementById("skills");
  const altskills = document.getElementById("altskills");
  const Contact = document.getElementById("Contact");
  const altContact = document.getElementById("altContact");
  const p_link = document.getElementById("p");
  const s_link = document.getElementById("s");
  const c_link = document.getElementById("c");
  const heading1 = document.getElementById("project heading 1");
  const heading2 = document.getElementById("project heading 2");
  const heading3 = document.getElementById("project heading 3");
  const p1 = document.getElementById("p1");
  const p2 = document.getElementById("p2");
  const p3 = document.getElementById("p3");
  let skillbar = document.querySelectorAll(".progbar");
  let skillbarspan = document.querySelectorAll(".progbar span");
  if (Switch.checked == true) {
    sleep(200).then(function () {
      Name.style.display = "flex";
      altName.style.display = "none";
      projects.style.display = "flex";
      altprojects.style.display = "none";
      bar.style.display = "flex";
      altbar.style.display = "none";
      skills.style.display = "flex";
      altskills.style.display = "none";
      Contact.style.display = "flex";
      altContact.style.display = "none";
      p_link.href = "#projects";
      s_link.href = "#skills";
      c_link.href = "#Contact";
      heading1.style.color = "white";
      heading2.style.color = "white";
      heading3.style.color = "white";
      p1.style.color = "rgba(255, 255, 255, 0.5)";
      p2.style.color = "rgba(255, 255, 255, 0.5)";
      p3.style.color = "rgba(255, 255, 255, 0.5)";
      for (var i = 0; i < skillbar.length; i++) {
        skillbar[i].style.boxShadow = "0px 0px 10px white";
        skillbar[i].style.border = "1px solid white";
        skillbarspan[i].style.background = "white";
      }
    });
  } else {
    sleep(200).then(function () {
      Name.style.display = "none";
      altName.style.display = "flex";
      projects.style.display = "none";
      altprojects.style.display = "flex";
      bar.style.display = "none";
      altbar.style.display = "flex";
      skills.style.display = "none";
      altskills.style.display = "flex";
      Contact.style.display = "none";
      altContact.style.display = "flex";
      p_link.href = "#altprojects";
      s_link.href = "#altskills";
      c_link.href = "#altContact";
      heading1.style.color = "black";
      heading2.style.color = "black";
      heading3.style.color = "black";
      p1.style.color = "black";
      p2.style.color = "black";
      p3.style.color = "black";
      for (var i = 0; i < skillbar.length; i++) {
        skillbar[i].style.boxShadow = "none";
        skillbar[i].style.border = "1px solid rgba(255, 255, 255, 0.3)";
        skillbarspan[i].style.background = "rgba(255, 255, 255, 0.3)";
      }
    });
  }
}

// footer button onclick
const cool = document.getElementById("cool");
const hot = document.getElementById("hot");
const rxn = document.getElementById("rxn");
cool.addEventListener("click", function () {
  cool.innerHTML = `
    just like you
    <ion-icon name="heart"></ion-icon> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  
    `;
  cool.style.width = "250px";
  cool.style.fontSize = "1rem";
  hot.style.width = "0px";
  hot.innerHTML = ``;
  cool.style.textAlign = "right";
});
hot.addEventListener("click", function () {
  cool.innerHTML = ``;
  hot.innerHTML = `&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  
    just like you
    <ion-icon name="heart"></ion-icon>
    `;
  hot.style.width = "250px";
  cool.style.width = "0px";
  hot.style.textAlign = "left";
  hot.style.fontSize = "1rem";
});

// contact form
const submitBtn = document.getElementById("submitBtn");
let Name = document.getElementById("username");
let email = document.getElementById("email");
let message = document.getElementById("message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (Name.value === "") {
    Name.value = "None";
  }
  if (email.value === "") {
    email.value = "None";
  }

  if (message.value === "") {
    message.value = "None";
  }

  let formData = {
    name: Name.value,
    email: email.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Message sent successfully!");
      Name.value = "";
      email.value = "";
      message.value = "";
      phone.value = "";
      subject.value = "";
    } else {
      alert("something went wrong :(");
    }
  };
  xhr.send(JSON.stringify(formData));
});

// sliding navbar menu indicator
let marker = document.querySelector(".nav-menu .bottom-bar");
let item = document.querySelectorAll("nav ul li a");
function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}
item.forEach((link) => {
  link.addEventListener("click", (e) => {
    indicator(e.target);
  });
});

// indicate on scroll

// about-slide up animation
const txts = document.querySelector(".animate-text").children,
  txtsLen = txts.length;

let index = 0;
const textInTimer = 2000,
  textOutTimer = 1800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");
  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index === txtsLen - 1) {
      index = 0;
    } else {
      index += 1;
    }
    animateText();
  }, textInTimer);
}
window.onload = animateText;
