const config = {
  delays: {
    titleChange: { min: 300, max: 1500 },
    titleReset: 150,
    titleReverse: 2000,
  },

  probability: {
    corruption: 0.05,
    reverse: 0.05,
    faviconSeizure: 0.2,
    randomCorruption: 0.3,
  },

  glitchChars: "█▓▒░█▀▄▌▐░▒▓■□●○%$#@!&*()_+-=",
};

const assets = {
  titles: [
    "ridze@void:~$",
    "ERRRO--------------/",
    "ACCESS_DENIED",
    "T̵̘̙͒́͑̆͒̓̈̔̉͌͝h̵̹̣͙͇͚͚̊̽̃̊͊̍͛̓̀̄̀̚ͅê̵̛̥̖̮̟̥̯̜̆̍̊̑́͒̔̌̀͘͘͜͠T̵̘̙͒́͑̆͒̓̈̔̉͌͝h̵̹̣͙͇͚͚̊̽̃̊͊̍͛̓̀̄̀̚ͅê̵̛̥̖̮̟̥̯̜̆̍̊̑́͒̔̌̀͘͘͜͠T̵̘̙͒́͑̆͒̓̈̔̉͌͝h̵̹̣͙͇͚͚̊̽̃̊͊̍͛̓̀̄̀̚ͅê̵̛̥̖̮̟̥̯̜̆̍̊̑́͒̔̌̀͘͘͜͠T̵̘̙͒́͑̆͒̓̈̔̉͌͝h̵̹̣͙͇͚͚̊̽̃̊͊̍͛̓̀̄̀̚ͅê̵̛̥̖̮̟̥̯̜̆̍̊̑́͒̔̌̀͘͘͜͠T̵̘̙͒́͑̆͒̓̈̔̉͌͝h̵̹̣͙͇͚͚̊̽̃̊͊̍͛̓̀̄̀̚ͅê̵̛̥̖̮̟̥̯̜̆̍̊̑́͒̔̌̀͘͘͜͠T̵̘̙͒́͑̆͒̓̈̔̉͌͝h̵̹̣͙͇͚͚̊̽̃̊͊̍͛̓̀̄̀̚ͅê̵̛̥̖̮̟̥̯̜̆̍̊̑́͒̔̌̀͘͘͜͠T̵̘̙͒́͑̆͒̓̈̔̉͌͝h̵̹̣͙͇͚͚̊̽̃̊͊̍͛̓̀̄̀̚ͅê̵̛̥̖̮̟̥̯̜̆̍̊̑́͒̔̌̀͘͘͜͠",
    "███████████████",
    "01100110 01100001 01101001 01101100",
    ">>> SYSTEM FAILURE <<<",
    ".....initializing.....",
    "CONNECTION_LOST",
    "root@ridze:~$ sudo rm -rf /",
    "help_me.exe not responding",
    "RIDZE_WAS_HERE",
    "c̸̢̤̘̣͎̹̞̖̾͜o̸̮͑̓͋̑̃̌͂̄͝r̴̡͔̘̣̮̳̔̽̄̋̿͗͂͊͠ŗ̸͈̰͂͋͗̑̉̑̃͝ų̴̪̳̫̺̠͚̤̯̌̐͋̈͗͜p̷̭̠̩̦̦̰͎͈͔͗̓͝t̴̻̱͕̟̻̉̄̍e̶̢̡̧̼͓̯̳̥̟̱̎͗̓̎ď̵̼̹͚̥̭̑̊͜",
    "T̵̘̙͒́͑̆͒̓̈̔̉͌͝h̵̹̣͙͇͚͚̊̽̃̊͊̍͛̓̀̄̀̚ͅê̵̛̥̖̮̟̥̯̜̆̍̊̑́͒̔̌̀͘͘͜͠ ̵̪͙̝̮͕̖̦̙̔̄̑͆̅̇̄̾̾͝v̸̧̨̬͈̜͔̻̗͖̰͂̉̈́̓͘ǫ̴̢̫̹͇̘͖͕̰͚̻̩̆̈́̇͂̏͊̋̄̽͊̔͘͠i̸̧̘̹͚̠̻͖̼̝̓̆̊̈́̓̀̐̒͘̕͜d̵̪̊̀͒̃̊̈́͛̽̈́̄̚͝",
    "SYS_COMPROMISED",
    "k̴̢̛      ",
  ],

  favicons: ["assets/img/favicon.png", "assets/img/alt-favicon.png"],
};

const state = {
  titleIndex: 0,
  faviconIndex: 0,
  titleInterval: null,
};

const titleEffects = {
  change() {
    document.title = assets.titles[state.titleIndex];
    state.titleIndex = (state.titleIndex + 1) % assets.titles.length;
  },

  corrupt() {
    const currentTitle = document.title;
    const corruptCount = Math.floor(Math.random() * 3) + 1;

    let corruptedTitle = currentTitle;
    for (let i = 0; i < corruptCount; i++) {
      const position = Math.floor(Math.random() * currentTitle.length);
      const glitchChar =
        config.glitchChars[
          Math.floor(Math.random() * config.glitchChars.length)
        ];

      corruptedTitle =
        corruptedTitle.slice(0, position) +
        glitchChar +
        corruptedTitle.slice(position + 1);
    }

    document.title = corruptedTitle;

    setTimeout(() => {
      document.title = assets.titles[state.titleIndex];
    }, config.delays.titleReset);
  },

  reverse() {
    const currentTitle = document.title;
    document.title = [...currentTitle].reverse().join("");

    setTimeout(() => {
      document.title = assets.titles[state.titleIndex];
    }, config.delays.titleReverse);
  },
};

const faviconEffects = {
  change() {
    const faviconElement = document.querySelector("link[rel='icon']");
    if (!faviconElement) return;

    faviconElement.href = assets.favicons[state.faviconIndex];
    state.faviconIndex = (state.faviconIndex + 1) % assets.favicons.length;

    if (Math.random() < config.probability.faviconSeizure) {
      setTimeout(faviconEffects.seizure, 1000);
    }
  },

  seizure() {
    let count = 0;
    const rapidInterval = setInterval(() => {
      state.faviconIndex = (state.faviconIndex + 1) % assets.favicons.length;

      const faviconElement = document.querySelector("link[rel='icon']");
      if (!faviconElement) {
        clearInterval(rapidInterval);
        return;
      }

      faviconElement.href = assets.favicons[state.faviconIndex];

      count++;
      if (count > 5) clearInterval(rapidInterval);
    }, 100);
  },
};

function scheduleRandomTitleChange() {
  clearInterval(state.titleInterval);

  const randomDelay =
    config.delays.titleChange.min +
    Math.floor(
      Math.random() *
        (config.delays.titleChange.max - config.delays.titleChange.min)
    );

  state.titleInterval = setInterval(() => {
    const rand = Math.random();

    if (rand < config.probability.corruption) {
      titleEffects.corrupt();
    } else if (
      rand <
      config.probability.corruption + config.probability.reverse
    ) {
      titleEffects.reverse();
    } else {
      titleEffects.change();
    }

    scheduleRandomTitleChange();
  }, randomDelay);
}

function initGlitchEffects() {
  scheduleRandomTitleChange();

  setInterval(faviconEffects.change, 5000);

  setInterval(() => {
    if (Math.random() < config.probability.randomCorruption) {
      titleEffects.corrupt();
    }
  }, 8000);
}

initGlitchEffects();
