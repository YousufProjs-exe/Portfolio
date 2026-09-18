
const projects = [

  {
    title: "YSH — Yousuf Shell | Java Terminal Shell",
    images: [
      "assets/projects/ysh-devmode.png",
      "assets/projects/ysh-nightmsg.png"
    ],
    desc: "YSH (Yousuf Shell) is a Java-based desktop terminal shell and developer tool combining a graphical terminal interface with shell-style commands, filesystem operations, LAN networking, command history, themes, calculations, notes, and developer utilities.",
    github: "https://github.com/YousufProjs-exe/YSH",
    download: "https://github.com/YousufProjs-exe/YSH/releases/tag/v8-stable",
    live: "https://yshweb.netlify.app/"
  },

  {
    title: "Arc by YSH | C++ Qt Web Browser",
    image: "https://opengraph.githubassets.com/1/YousufProjs-exe/Arc-",
    desc: "Arc is a lightweight, developer-focused desktop web browser built with C++ and Qt 6 using Qt WebEngine and CMake, with a focus on minimal UI, fast startup, and YSH ecosystem integration.",
    github: "https://github.com/YousufProjs-exe/Arc-"
  },

  {
    title: "SelectionFX | Windows Desktop Utility",
    image: "assets/projects/selectionFX.png",
    desc: "SelectionFX is a Windows desktop utility exploring customization of the visual appearance of the Windows selection rectangle.",
    github: "https://github.com/YousufProjs-exe/SelectionFX"
  },

  {
    title: "Hakin Pad | Custom Macropad",
    images: [
      "assets/projects/hakinpad-pcb.png",
      "assets/projects/hakinpad-sch.png"
    ],
    desc: "Hakin Pad is a custom macropad designed from scratch in KiCad, featuring a XIAO RP2040 controller, physical buttons, a rotary encoder, a 0.91-inch I2C OLED display, custom PCB, 3D-printed case, and custom firmware.",
    github: "https://github.com/YousufProjs-exe/Hakin-Pad"
  },

  {
    title: "YSH Slack Bot | Slack Developer Tool",
    image: "assets/projects/yshslackbot-neofetch.png",
    desc: "YSH Slack Bot brings Yousuf Shell functionality into Slack through six slash commands, system information, Slack-native utilities, easter eggs, and a live deployment.",
    github: "https://github.com/YousufProjs-exe/YSH-Slack-Bot"
  },

  {
    title: "Stack Node | Interactive Quiz Application",
    image: "assets/projects/stacknode-home.png",
    desc: "Stack Node is an interactive quiz application project focused on programming and knowledge-based challenges.",
    github: "https://github.com/YousufProjs-exe/Stack-Node"
  },

  {
    title: "Horizon Dashboard | Productivity Dashboard",
    image: "assets/projects/horizon.png",
    desc: "Horizon Dashboard is a lightweight personal productivity dashboard built with HTML, Tailwind CSS, and Vanilla JavaScript, featuring weather, quick notes, task management, productivity widgets, search, responsive design, animations, and local storage.",
    github: "https://github.com/YousufProjs-exe/Horizon-Dashboard",
    live: "https://horizon-dash.netlify.app/"
  },

  {
    title: "SkyPulse | Live Weather Web App",
    image: "assets/projects/skypulse-home.png",
    desc: "SkyPulse is a responsive weather web application built with HTML, CSS, and JavaScript using the OpenWeather API, featuring location detection, city search, live temperature, humidity, wind speed, weather conditions, local time, dynamic weather icons, and recent search history.",
    github: "https://github.com/YousufProjs-exe/Sky-Pulse",
    live: "https://visit-skypulse.netlify.app"
  },

  {
    title: "To Do Application | JavaScript Task Manager",
    image: "https://opengraph.githubassets.com/1/YousufProjs-exe/To-do-WebApp",
    desc: "A browser-based task management application built with HTML, CSS, and JavaScript for creating and managing everyday tasks.",
    github: "https://github.com/YousufProjs-exe/To-do-WebApp"
  },

  {
    title: "Creative Portfolio | Responsive Web Design",
    image: "assets/projects/portfolio-home.png",
    desc: "A responsive portfolio website exploring modern frontend layouts, interactive elements, animations, and visual web design.",
    github: "https://github.com/YousufProjs-exe/Demo-Portfolio"
  },

  {
    title: "Guess The Number | Java Console Game",
    image: "assets/projects/guessnum-java.png",
    desc: "A Java console-based number guessing game built around random number generation, user input, and conditional logic.",
    github: "https://github.com/YousufProjs-exe/Guess-The-Number-.java"
  },

  {
    title: "Rock Paper Scissors | Java Console Game",
    image: "assets/projects/rps-java.png",
    desc: "A Java console-based Rock Paper Scissors game created to practice programming logic, user input, and conditional decision-making.",
    github: "https://github.com/YousufProjs-exe/Rock-Paper-Scissors-.java"
  },

  {
    title: "Calculator.c | C Calculator Program",
    image: "assets/projects/calc-c.png",
    desc: "A C calculator program implementing basic arithmetic operations while practicing fundamental C programming concepts.",
    github: "https://github.com/YousufProjs-exe/Calculator.c"
  },

  {
    title: "Calculator.java | Java Calculator Program",
    image: "assets/projects/clac-java.png",
    desc: "A Java calculator program implementing basic arithmetic operations while practicing core Java programming concepts.",
    github: "https://github.com/YousufProjs-exe/Calculator.java"
  }

];

const projectGrid = document.getElementById("projectGrid");

projects.forEach(project => {

  projectGrid.innerHTML += `

    <div class="project-card">

      <div class="project-image">
        ${
          project.images
            ? project.images.map((img, index) => `
                <img
                  src="${img}"
                  alt="${project.title} screenshot ${index + 1}"
                  class="${index === 0 ? 'active' : ''}"
                >
              `).join('')
            : project.image
              ? `<img class="active" src="${project.image}" alt="${project.title}">`
              : `<div class="no-screenshot">Screenshot coming soon</div>`
        }
      </div>
      
      <div class="project-content">

        <h3>${project.title}</h3>

        <p>${project.desc}</p>

        <div class="project-buttons">

          ${project.live ? `
            <a href="${project.live}" target="_blank">
              <button class="live-btn">Live Demo</button>
            </a>
          ` : ''}

          ${project.download ? `
            <a href="${project.download}" target="_blank">
              <button class="download-btn">Download</button>
            </a>
          ` : ''}

          <a href="${project.github}" target="_blank">
            <button>Explore</button>
          </a>

        </div>

      </div>

    </div>

  `;
});


// SCROLL REVEAL

ScrollReveal().reveal('.hero-content', {
  delay: 200,
  distance: '60px',
  origin: 'bottom',
  duration: 1200,
  opacity: 0
});

ScrollReveal().reveal('.project-card', {
  interval: 150,
  distance: '70px',
  origin: 'bottom',
  duration: 1200,
  opacity: 0,
  scale: 0.9
});

ScrollReveal().reveal('.skills-container span', {
  interval: 100,
  scale: 0.8,
  duration: 800
});

document.querySelectorAll('.project-image').forEach(gallery => {
  const images = gallery.querySelectorAll('img');

  if (images.length <= 1) return;

  let current = 0;

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 3000);
});
