function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let hourStr = hours + ":" + minutes + " " + ampm;
  let dateStr = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  document.getElementById("hour").innerHTML = hourStr;
  document.getElementById("date").innerHTML = dateStr;
}

updateTime();
setInterval(updateTime, 1000);

const input = document.getElementById("terminal-input");
const consoleOutput = document.getElementById("consoleOutput");
const logo = document.getElementById("logo");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const command = input.value.trim().toLowerCase();
    input.value = "";
    consoleOutput.innerHTML += `<p><span class="prompt">$</span> ${command}</p>`;
    if (logo.style.display === "block" && command !== "logo") {
      logo.style.display = "none";
    }
    switch (command) {
      case "":
        break;
      case "help":
        consoleOutput.innerHTML += `<p>Available commands:</p>
                                      <ul>
                                        <li>about</li>
                                        <li>projects</li>
                                        <li>contact</li>
                                        <li>logo</li>
                                        <li>Credits</li>
                                      </ul>`;
        break;
        case "about":
          consoleOutput.innerHTML += `<p>Information about me</p>
                                        <ul>
                                            <li>I'm Simon, a young and experienced developer.</li>
                                            <li>Currently all of my projects are made for my personal satisfaction.</li>
                                            <li>See you soon. . . </li>
                                        </ul>
          
          `;
          break;
          case "projects":
            consoleOutput.innerHTML += `<p>Check out my projects:</p>
                                         <ul>
                                           <li><a href="https://github.com/LowOnGravity/FriendScraper">Discord Friend Scraper</a></li>
                                           <li><a href="https://github.com/LowOnGravity/TempCleaner">TempCleaner</a></li>
                                           <li><a href="https://github.com/LowOnGravity/KoGaMa">KoGaMa Addons & Themes</a></li>
                                           <li><a href="https://github.com/LowOnGravity/DiscordProfileDecorations">Discord Profile Decorations</a></li>
                                         </ul>`;
            break;
        case "contact":
          consoleOutput.innerHTML += `<p>You can find me here:</p>
          <ul>
            <li><a href="https://www.youtube.com/channel/UCOUn4CwHJIWhYOjQ8c2wxzA">Youtube</a></li>
            <li><a href="https://github.com/LowOnGravity">Github</a></li>
          </ul>`;
         
        break;
        case "credits":
          consoleOutput.innerHTML += `<p>These people deserve recognition:</p>
          <ul>
            <li>Visuals: Corydon </li>
            <li>Hosting: NotAbby </li>
            <li>Coding: Simon </li>
        </ul>`



        break;
      case "logo":
        if (logo.style.display === "none") {
          logo.style.display = "block";
        } else {
          logo.style.display = "none";
        }
        break;
      default:
        consoleOutput.innerHTML += `<p>${command}: command not found</p>`;
        break;
    }
    if (consoleOutput.scrollHeight > consoleOutput.clientHeight) {
      consoleOutput.innerHTML = `<p><span class="prompt">$</span></p>`;
    }
    window.scrollTo(0, document.body.scrollHeight);
  }
});
