var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
  "%cERROR [0x0VOID]: SYSTEM CRASH - SEGMENTATION F̵̥̖͗̽͜͝A̴͉̤̎̓͠I̶̲̖̍̾L̷̼̲̋̀E̷̗̖͘D̵̡̮̎-___--",
  "color: #ff0033; font-weight: bold; font-size: 22px; text-shadow: 0 0 5px #ff0033;"
);
console.log(
  "%cEntity detected. Password: '" + password + "'",
  "color: #3e3636; font-style: italic;"
);
console.log(
  "%c>>>VOID.CORRUPTION.DETECTED_000000000000̴̯̒!!!—Y̵O̸U̴_W̷E̶R̵E̶_N̸O̴T̶_̴S̵U̴P̴P̵O̵S̷E̵D̸_̴T̷O̵_̸S̶E̴E̷_̸T̶H̵I̵S̶...",
  "color: #d7a823; font-weight: bold;"
);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine(
        "stranger@whoisridze.com:~$ " + command.innerHTML,
        "no-animation",
        0
      );
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whoisridze":
      loopLines(whoisridze, "color2 margin", 80);
      break;
    case "discography":
      loopLines(discography, "color2 margin", 80);
      break;
    case "video":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "sudo":
      let i = 0;
      const spamCount = 40;
      const errorMessage = "ACCESS DENIED";

      const errorInterval = setInterval(() => {
        if (i < spamCount) {
          let glitchText = errorMessage;

          if (i > spamCount / 2) {
            glitchText = glitchText
              .replace(/A/g, "Ⱥ")
              .replace(/C/g, "Ҫ")
              .replace(/E/g, "Ξ")
              .replace(/S/g, "Ƨ")
              .replace(/D/g, "Đ")
              .replace(/N/g, "И")
              .replace(/I/g, "ɪ")
              .replace(/O/g, "Ø");
          }

          if (i > spamCount - 3) {
            glitchText = glitchText.split("").join(" ");
          }

          addLine(glitchText, "error", 0);
          i++;
        } else {
          clearInterval(errorInterval);

          terminal.innerHTML = '<a id="before"></a>';
          before = document.getElementById("before");

          addLine("<br>", "", 0);

          setTimeout(() => {
            addLine(
              "<span class='glitch-text' style='font-size: 20px;'>T̴͚H̴̹E̶ ̴S̵Y̷S̵T̸E̶M̴ ̸R̷E̸C̶O̴G̶N̷I̸Z̶E̸S̸ ̶Y̶O̸U̸</span>",
              "error",
              0
            );
          }, 500);

          setTimeout(() => {
            addLine("<br>", "", 0);
            addLine("T̴͚Thank you for your attention.", "color2", 0);
            addLine("<br>", "", 0);
          }, 1000);

          setTimeout(() => {
            addLine(
              "I have something for you: <a href='https://t.me/+QdFrLjqQUCswYTMy' target='_blank'>telegram/???</a>",
              "color2",
              0
            );
            addLine("<br>", "", 0);
          }, 1500);
        }
      }, 50);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "secret":
      liner.classList.add("password");
      pw = true;
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "contactme":
      loopLines(contactme, "color2 margin", 80);
      break;
    case "password":
      addLine(
        "<span class=\"inherit\"> Lol! You're joking, right? You're gonna have to try harder than that!😂</span>",
        "error",
        100
      );
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "clear":
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials
    case "youtube":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "spotify":
      addLine("Opening Spotify...", "color2", 0);
      newTab(spotify);
      break;
    case "applemusic":
    case "apple music":
      addLine("Opening Apple Music...", "color2", 0);
      newTab(applemusic);
      break;
    case "soundcloud":
      addLine("Opening SoundCloud...", "color2", 0);
      newTab(soundcloud);
      break;
    case "telegram":
      addLine("Opening Telegram Music Channel...", "color2", 0);
      newTab(telegram);
      break;
    case "shitpost":
      addLine("Opening Telegram Shitpost Channel...", "color2", 0);
      newTab(shitpost);
      break;
    case "linktree":
      addLine("Opening Linktree...", "color2", 0);
      newTab(linktree);
      break;
    default:
      addLine(
        '<span class="inherit">Unknown command. The void does not understand you. Perhaps <span class="command">\'help\'</span> will guide you...</span>',
        "error",
        100
      );

      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}
