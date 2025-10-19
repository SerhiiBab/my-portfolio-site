const dropdownMenu = document.querySelector("#dropdownMenu");
const menuIcon = document.querySelector("#menu");
const list = document.querySelector(".toggle-list");

menuIcon.addEventListener("click", () => {
    menuToggle();
    menuIcon.classList.toggle("scale-105");
    list.addEventListener("click", () => {
        dropdownMenu.classList.remove("flex");
        dropdownMenu.classList.add("hidden");
    })
})

function menuToggle(params) {
        dropdownMenu.classList.toggle("hidden");
        dropdownMenu.classList.toggle("flex");
}



//Projects Lists

const projectList = [

  {
    id: 5,
    title: "Medware - Healthcare Companion",
    img: "build/img/medware.png",
    githubLink: "https://github.com/tanpreetjolly/Medware",
    live: "https://medware.onrender.com",
    desc: "A Healthcare Website consisting of a Disease Predictor made in React, Django, Tailwind and Machine Learning.",
  },
  {
    id: 11,
    title: "Kanban Todo App + Unsplash-API",
    img: "build/img/kanban-to-do.jpg",
    githubLink: "https://github.com/SerhiiBab/kanban-todo.git",
    live: "https://kanban-todo-nu.vercel.app/",
    desc: "Ein interaktives Kanban-Todo-App-Projekt mit Drag-&-Drop-Funktion und automatischer Bildanzeige über die Unsplash-API.",
  },
  {
    id: 8,
    title: "Maus JS Spiel",
    img: "build/img/maus-spiel.jpg",
    githubLink: "https://github.com/tanpreetjolly/swift-chat-app",
    live: "https://maus-spiel.vercel.app/",
    desc: "A chatapp built with WebSocket API and ws lib. MERN Stack with TailwindCSS. Feat inlcudes realtime msg exchange and user authentication with email verification.",
  },
];

// function to return project-card
const projectContainer = document.getElementById("project-container");

function displayAllProjects(projectsList){
    let displayProjects = projectsList.map(function(item){
        return `
        <div class="project-card" class="text-gray-300">
            <img src= ${item.img} alt=${item.title}>
            <h2 class="text-xl lg:text-2xl  font-bold mx-3 pt-1 underline underline-offset-8">${item.title}</h2>
            <p class="m-1 text-xs lg:text-base">${item.desc}</p>
            <div class="flex justify-between w-full px-4  projectLinkContainer items-center" >
              <a href=${item.live} target="_blank"><p class="text-sm lg:text-lg">Projekt ansehen -></p></a>
              <a href="${item.githubLink}" target="_blank"><img src="build/img/footer-github.png" alt="github-link""></a>
            </div>
            
        </div>`

    });
    displayProjects = displayProjects.join("");
    projectContainer.innerHTML = displayProjects;

}


window.addEventListener("DOMContentLoaded", function(){
    displayAllProjects(projectList);
})
