(() => {
  const config = {
    frequency: {
      textGlitch: 8000,
      terminalFlicker: 12000,
      textReversal: 15000,
      characterLeak: 9000,
      randomLineNoise: 7000,
      colorInversion: 45000,
      textScramble: 12000,
      textDuplication: 14000,
      voidConsumption: 11000,
      textRedaction: 10000,
      demonicText: 18000,
      staticBurst: 17000,
    },

    duration: {
      textGlitch: 800,
      terminalFlicker: 200,
      textReversal: 1200,
      characterLeak: 1500,
      randomLineNoise: 2000,
      colorInversion: 600,
      textScramble: 1200,
      textDuplication: 1800,
      voidConsumption: 2500,
      textRedaction: 2000,
      demonicText: 2000,
      staticBurst: 800,
    },

    glitchChars: "█▓▒░█▀▄▌▐░▒▓■□●○%$#@!&*()_+-=[]{}|;:<>,./?\\~`",
    voidChars: "█▓▒░",
    redactionChar: "█",
  };

  const createStyle = () => {
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes terminal-flicker {
          0% { opacity: 1; }
          10% { opacity: 0.3; }
          20% { opacity: 0.8; }
          30% { opacity: 0.2; }
          40% { opacity: 0.7; }
          50% { opacity: 0.3; }
          60% { opacity: 0.8; }
          100% { opacity: 1; }
        }
        
        .terminal-flicker {
          animation: terminal-flicker 0.2s ease-in-out;
        }
        
        .nightmare-inversion {
          filter: invert(90%) hue-rotate(180deg);
          background: #300606 !important;
          box-shadow: 0 0 20px 5px rgba(215, 35, 35, 0.5) inset;
          animation: pulse-shadow 0.6s ease-in-out infinite;
        }
        
        @keyframes pulse-shadow {
          0%, 100% { box-shadow: 0 0 20px 5px rgba(215, 35, 35, 0.5) inset; }
          50% { box-shadow: 0 0 30px 8px rgba(215, 35, 35, 0.7) inset; }
        }
        
        .character-leak {
          position: relative;
        }
        
        .character-leak::after {
          content: attr(data-leak);
          position: absolute;
          left: 0;
          color: rgba(215, 35, 35, 0.5);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
          transform: translateX(2px) translateY(2px);
        }
        
        .noise-line::before {
          content: attr(data-noise);
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0.3;
          color: #D72323;
          z-index: -1;
        }
        
        .fragment {
          display: inline-block;
          animation: fragment-jitter 0.5s infinite;
        }
        
        @keyframes fragment-jitter {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-2px); }
          50% { transform: translateY(1px); }
          75% { transform: translateY(-1px); }
        }
        
        .glitch-text {
          text-shadow: 
            1px 0 0 rgba(215, 35, 35, 0.5),
            -1px 0 0 rgba(95, 95, 95, 0.3);
        }
        
        .void-char {
          color: #D72323;
          text-shadow: 0 0 4px #D72323;
          opacity: 0.9;
        }
        
        .redacted {
          color: #D72323;
          background-color: rgba(30, 30, 30, 0.4);
          text-shadow: 0 0 5px #D72323;
        }
        
        .demonic-char {
          display: inline-block;
          animation: demonic-shift 0.1s infinite;
          transform-origin: center center;
        }
        
        @keyframes demonic-shift {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-1px) rotate(1deg); }
          75% { transform: translateY(1px) rotate(-1deg); }
        }
        
        .static-burst {
          position: relative;
          overflow: hidden;
        }
        
        .static-burst::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18h1v1h-1zm9 13h1v1h-1zm-9 9h1v1h-1zm-9 9h1v1H2zm9 9h1v1h-1zm9 9h1v1h-1zm9-45h1v1h-1zm9 0h1v1h-1zm9 0h1v1h-1zm0 9h1v1h-1zm0 9h1v1h-1zm0 9h1v1h-1zm0 9h1v1h-1zm0 9h1v1h-1zm-27 9h1v1h-1zm9 0h1v1h-1zm9 0h1v1h-1zm9 0h1v1h-1zm0-36h1v1h-1zm9 0h1v1h-1zm9 0h1v1h-1zm0 9h1v1h-1zm0 9h1v1h-1zm0 9h1v1h-1zm0 9h1v1h-1zm0 9h1v1h-1z' fill='%23d72323' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E");
          opacity: 0.8;
          mix-blend-mode: overlay;
          pointer-events: none;
          animation: static-flicker 0.8s steps(4) forwards;
        }
        
        @keyframes static-flicker {
          0% { opacity: 0.8; background-position: 0 0; }
          25% { opacity: 0.5; background-position: -10px 5px; }
          50% { opacity: 0.7; background-position: 5px -10px; }
          75% { opacity: 0.6; background-position: -5px -5px; }
          100% { opacity: 0; }
        }
      `;
    document.head.appendChild(style);
  };

  const glitchTerminalText = () => {
    const paragraphs = document.querySelectorAll("#terminal p");
    if (paragraphs.length === 0) return;

    const count = Math.floor(Math.random() * 3) + 1;
    const glitchParagraphs = new Set();

    while (
      glitchParagraphs.size < count &&
      glitchParagraphs.size < paragraphs.length
    ) {
      glitchParagraphs.add(
        paragraphs[Math.floor(Math.random() * paragraphs.length)]
      );
    }

    const originals = new Map();

    glitchParagraphs.forEach((p) => {
      originals.set(p, p.innerHTML);
      const text = p.innerText;
      let glitched = "";

      for (let i = 0; i < text.length; i++) {
        if (Math.random() < 0.2) {
          glitched += config.glitchChars.charAt(
            Math.floor(Math.random() * config.glitchChars.length)
          );
        } else {
          glitched += text.charAt(i);
        }
      }

      p.innerText = glitched;
      p.classList.add("glitch-text");
    });

    setTimeout(() => {
      glitchParagraphs.forEach((p) => {
        p.innerHTML = originals.get(p);
        p.classList.remove("glitch-text");
      });
    }, config.duration.textGlitch);
  };

  const flickerTerminal = () => {
    const terminal = document.getElementById("terminal");
    if (!terminal) return;

    terminal.classList.add("terminal-flicker");
    setTimeout(() => {
      terminal.classList.remove("terminal-flicker");
    }, config.duration.terminalFlicker);
  };

  const reverseTextSegments = () => {
    const paragraphs = document.querySelectorAll("#terminal p");
    if (paragraphs.length === 0) return;

    const count = Math.floor(Math.random() * 2) + 1;
    const targetParagraphs = new Set();

    while (
      targetParagraphs.size < count &&
      targetParagraphs.size < paragraphs.length
    ) {
      targetParagraphs.add(
        paragraphs[Math.floor(Math.random() * paragraphs.length)]
      );
    }

    const originals = new Map();

    targetParagraphs.forEach((p) => {
      originals.set(p, p.innerHTML);
      const text = p.innerText;

      const words = text.split(" ");

      for (let i = 0; i < words.length; i++) {
        if (Math.random() < 0.4 && words[i].length > 2) {
          words[i] = [...words[i]].reverse().join("");
        }
      }

      p.innerText = words.join(" ");
    });

    setTimeout(() => {
      targetParagraphs.forEach((p) => {
        p.innerHTML = originals.get(p);
      });
    }, config.duration.textReversal);
  };

  const leakCharacters = () => {
    const paragraphs = document.querySelectorAll("#terminal p");
    if (paragraphs.length === 0) return;

    const count = Math.floor(Math.random() * 2) + 1;
    const targetParagraphs = new Set();

    while (
      targetParagraphs.size < count &&
      targetParagraphs.size < paragraphs.length
    ) {
      targetParagraphs.add(
        paragraphs[Math.floor(Math.random() * paragraphs.length)]
      );
    }

    targetParagraphs.forEach((p) => {
      const text = p.innerText;
      p.setAttribute("data-leak", text);
      p.classList.add("character-leak");
    });

    setTimeout(() => {
      targetParagraphs.forEach((p) => {
        p.classList.remove("character-leak");
        p.removeAttribute("data-leak");
      });
    }, config.duration.characterLeak);
  };

  const addLineNoise = () => {
    const paragraphs = document.querySelectorAll("#terminal p");
    if (paragraphs.length === 0) return;

    const count = Math.floor(Math.random() * 2) + 1;
    const targetParagraphs = new Set();

    while (
      targetParagraphs.size < count &&
      targetParagraphs.size < paragraphs.length
    ) {
      targetParagraphs.add(
        paragraphs[Math.floor(Math.random() * paragraphs.length)]
      );
    }

    targetParagraphs.forEach((p) => {
      const text = p.innerText;
      let noise = "";

      for (let i = 0; i < text.length; i++) {
        if (Math.random() < 0.4) {
          noise += config.glitchChars.charAt(
            Math.floor(Math.random() * config.glitchChars.length)
          );
        } else {
          noise += " ";
        }
      }

      p.setAttribute("data-noise", noise);
      p.classList.add("noise-line");
      p.style.position = "relative";
    });

    setTimeout(() => {
      targetParagraphs.forEach((p) => {
        p.classList.remove("noise-line");
        p.removeAttribute("data-noise");
      });
    }, config.duration.randomLineNoise);
  };

  const nightmareInversion = () => {
    const terminal = document.getElementById("terminal");
    if (!terminal) return;

    document.body.classList.add("nightmare-inversion");

    setTimeout(() => {
      document.body.classList.remove("nightmare-inversion");
    }, config.duration.colorInversion);
  };

  const scrambleText = () => {
    const paragraphs = document.querySelectorAll("#terminal p");
    if (paragraphs.length === 0) return;

    const count = Math.floor(Math.random() * 2) + 1;
    const targetParagraphs = new Set();

    while (
      targetParagraphs.size < count &&
      targetParagraphs.size < paragraphs.length
    ) {
      targetParagraphs.add(
        paragraphs[Math.floor(Math.random() * paragraphs.length)]
      );
    }

    const originals = new Map();

    targetParagraphs.forEach((p) => {
      originals.set(p, p.innerHTML);
      const words = p.innerText.split(" ").filter((word) => word.trim() !== "");

      for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
      }

      p.innerText = words.join(" ");
    });

    setTimeout(() => {
      targetParagraphs.forEach((p) => {
        p.innerHTML = originals.get(p);
      });
    }, config.duration.textScramble);
  };

  const duplicateText = () => {
    const paragraphs = document.querySelectorAll("#terminal p");
    if (paragraphs.length === 0) return;

    const targetParagraph =
      paragraphs[Math.floor(Math.random() * paragraphs.length)];
    const original = targetParagraph.innerHTML;

    const text = targetParagraph.innerText;
    const words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      if (Math.random() < 0.2 && words[i].length > 1) {
        const repetitions = Math.floor(Math.random() * 3) + 2;
        const stutter = words[i].substring(0, Math.min(3, words[i].length));
        const stutterText = Array(repetitions).fill(stutter).join("-");
        words[i] = stutterText + words[i];
      }
    }

    targetParagraph.innerText = words.join(" ");

    setTimeout(() => {
      targetParagraph.innerHTML = original;
    }, config.duration.textDuplication);
  };

  const voidConsumption = () => {
    const paragraphs = document.querySelectorAll("#terminal p");
    if (paragraphs.length === 0) return;

    const paragraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    const originalHTML = paragraph.innerHTML;

    const text = paragraph.innerText;
    const chars = [...text];

    let newHTML = "";
    const consumeChance = 0.15;

    for (let i = 0; i < chars.length; i++) {
      if (Math.random() < consumeChance && chars[i] !== " ") {
        const voidChar =
          config.voidChars[Math.floor(Math.random() * config.voidChars.length)];
        newHTML += `<span class="void-char">${voidChar}</span>`;
      } else {
        newHTML += chars[i];
      }
    }

    paragraph.innerHTML = newHTML;

    setTimeout(() => {
      paragraph.innerHTML = originalHTML;
    }, config.duration.voidConsumption);
  };

  const redactText = () => {
    const paragraphs = document.querySelectorAll("#terminal p");
    if (paragraphs.length === 0) return;

    const count = Math.floor(Math.random() * 2) + 1;
    const targetParagraphs = new Set();

    while (
      targetParagraphs.size < count &&
      targetParagraphs.size < paragraphs.length
    ) {
      targetParagraphs.add(
        paragraphs[Math.floor(Math.random() * paragraphs.length)]
      );
    }

    const originals = new Map();

    targetParagraphs.forEach((p) => {
      originals.set(p, p.innerHTML);
      const words = p.innerText.split(" ");

      let newHTML = "";
      for (let i = 0; i < words.length; i++) {
        if (words[i].length > 3 && Math.random() < 0.3) {
          const redactionLength = words[i].length;
          const redaction = config.redactionChar.repeat(redactionLength);
          newHTML += `<span class="redacted">${redaction}</span> `;
        } else {
          newHTML += words[i] + " ";
        }
      }

      p.innerHTML = newHTML;
    });

    setTimeout(() => {
      targetParagraphs.forEach((p) => {
        p.innerHTML = originals.get(p);
      });
    }, config.duration.textRedaction);
  };

  const demonicText = () => {
    const paragraphs = document.querySelectorAll("#terminal p");
    if (paragraphs.length === 0) return;

    const paragraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    const originalHTML = paragraph.innerHTML;

    const text = paragraph.innerText;
    const chars = [...text];

    let newHTML = "";
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] !== " " && Math.random() < 0.5) {
        newHTML += `<span class="demonic-char">${chars[i]}</span>`;
      } else {
        newHTML += chars[i];
      }
    }

    paragraph.innerHTML = newHTML;

    setTimeout(() => {
      paragraph.innerHTML = originalHTML;
    }, config.duration.demonicText);
  };

  const createStaticBurst = () => {
    const terminal = document.getElementById("terminal");
    if (!terminal) return;

    terminal.classList.add("static-burst");

    const paragraphs = document.querySelectorAll("#terminal p");
    const originalContents = new Map();
    const affectedParagraphs = [];

    for (let i = 0; i < Math.min(3, paragraphs.length); i++) {
      if (paragraphs.length === 0) break;

      const idx = Math.floor(Math.random() * paragraphs.length);
      const p = paragraphs[idx];

      if (!originalContents.has(p)) {
        originalContents.set(p, p.innerHTML);
        affectedParagraphs.push(p);

        const text = p.innerText;
        let corrupted = "";
        for (let j = 0; j < text.length; j++) {
          if (Math.random() < 0.3) {
            corrupted += config.glitchChars.charAt(
              Math.floor(Math.random() * 5)
            );
          } else {
            corrupted += text.charAt(j);
          }
        }
        p.innerText = corrupted;
      }
    }

    setTimeout(() => {
      terminal.classList.remove("static-burst");
      affectedParagraphs.forEach((p) => {
        p.innerHTML = originalContents.get(p);
      });
    }, config.duration.staticBurst);
  };

  const addHiddenMessages = () => {
    const messages = [
      "<!-- THE VOID GAZES BACK -->",
      "<!-- REALITY BREACH DETECTED -->",
      "<!-- SYSTEM MALFUNCTION -->",
    ];

    for (let i = 0; i < 3; i++) {
      const comment = document.createComment(
        messages[Math.floor(Math.random() * messages.length)]
      );
      document.body.appendChild(comment);
    }
  };

  const initialize = () => {
    createStyle();
    addHiddenMessages();

    Object.keys(config.frequency).forEach((effect) => {
      const randomDelay = Math.random() * 3000;

      setTimeout(() => {
        setInterval(() => {
          if (Math.random() < 0.7) {
            switch (effect) {
              case "textGlitch":
                glitchTerminalText();
                break;
              case "terminalFlicker":
                flickerTerminal();
                break;
              case "textReversal":
                reverseTextSegments();
                break;
              case "characterLeak":
                leakCharacters();
                break;
              case "randomLineNoise":
                addLineNoise();
                break;
              case "colorInversion":
                nightmareInversion();
                break;
              case "textScramble":
                scrambleText();
                break;
              case "textDuplication":
                duplicateText();
                break;
              case "voidConsumption":
                voidConsumption();
                break;
              case "textRedaction":
                redactText();
                break;
              case "demonicText":
                demonicText();
                break;
              case "staticBurst":
                createStaticBurst();
                break;
            }
          }
        }, config.frequency[effect]);
      }, randomDelay);
    });
  };

  window.addEventListener("load", initialize);
})();
