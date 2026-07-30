
    const projects = [

    
      {
        title: "YSH - Yousuf Shell(Terminal)",
        image: "https://opengraph.githubassets.com/1/YousufProjs-exe/YSH",
        desc: "Custom command-line interface built in Java with GUI and LAN Networking.",
        github: "https://github.com/YousufProjs-exe/YSH",
        download: "https://github.com/YousufProjs-exe/YSH/releases/tag/v1.0"
      },
 
      {
        title: "Horizon Dashboard",
        image: "https://opengraph.githubassets.com/1/YousufProjs-exe/Horizon-Dashboard",
        desc: "Productive Dashboard. Better Try atleast Once",
        github: "https://github.com/YousufProjs-exe/Horizon-Dashboard",
        live: "https://horizon-dash.netlify.app/"
      },

      {
        title: "Sky Pulse",
        image: "https://opengraph.githubassets.com/1/YousufProjs-exe/Sky-Pulse",
        desc: "Modern weather app with live API data.",
        github: "https://github.com/YousufProjs-exe/Sky-Pulse",
        live: "https://visit-skypulse.netlify.app"
      },

      {
        title: "To Do Application",
        image: "https://opengraph.githubassets.com/1/YousufProjs-exe/To-do-WebApp",
        desc: "Task manager web application using HTML, CSS and JavaScript.",
        github: "https://github.com/YousufProjs-exe/To-do-WebApp"
      },

      {
        title: "Guess The Number",
        image: "https://opengraph.githubassets.com/1/YousufProjs-exe/Guess-The-Number-.java",
        desc: "A console based guessing game against the computer built in Java.",
        github: "https://github.com/YousufProjs-exe/Guess-The-Number-.java"
      },

      {
        title: "Creative Portfolio",
        image: "https://opengraph.githubassets.com/1/YousufProjs-exe/Demo-Portfolio",
        desc: "Interactive modern portfolio experience with animations and responsive design.",
        github: "https://github.com/YousufProjs-exe/Demo-Portfolio"
      },

      {
        title: "Rock Paper Scissors",
        image: "https://opengraph.githubassets.com/1/YousufProjs-exe/Rock-Paper-Scissors-.java",
        desc: "A GUI-less Rock Paper Scissors game built in Java.",
        github: "https://github.com/YousufProjs-exe/Rock-Paper-Scissors-.java"
      },

      {
        title: "Calculator.c",
        image: "https://opengraph.githubassets.com/1/YousufProjs-exe/Calculator.c",
        desc: "A simple calculator built in C for programming practice.",
        github: "https://github.com/YousufProjs-exe/Calculator.c"
      },

      {
        title: "Calculator.java",
        image: "https://opengraph.githubassets.com/1/YousufProjs-exe/Calculator.java",
        desc: "A simple calculator built in Java for programming practice.",
        github: "https://github.com/YousufProjs-exe/Calculator.java"
      }

    ];

    const projectGrid = document.getElementById("projectGrid");

    projects.forEach(project => {

      projectGrid.innerHTML += `

      <div class="project-card">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
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
