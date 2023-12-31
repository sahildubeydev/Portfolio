const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const programming = document.querySelector("#programming");
const resume = document.querySelector("#resume");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const programmingContent = document.querySelector("#programming-content");
const resumeContent = document.querySelector("#resume-content");
const contactAudio = document.getElementById("contactAudio");
const contactPlayPauseBtn = document.getElementById("contactPlayPauseBtn");
const aboutAudio = document.getElementById("aboutAudio");
const aboutPlayPauseBtn = document.getElementById("aboutPlayPauseBtn");

// contact audio
let contactPlaying = false;
function contactToggleAudio() {
  if (contactPlaying) {
    contactAudio.pause();
    contactPlaying = false;
    contactPlayPauseBtn.src = "./assets/cute.gif"; // Change to the play icon
  } else {
    contactAudio.play();
    contactPlaying = true;
    contactPlayPauseBtn.src = "./assets/cd.gif"; // Change to the pause icon
  }
}
// Add a click event listener to the GIF to trigger the toggleAudio function
contactPlayPauseBtn.addEventListener("click", contactToggleAudio);

// about audio
let aboutPlaying = false;
function aboutToggleAudio() {
  if (aboutPlaying) {
    aboutAudio.pause();
    aboutPlaying = false;
    aboutPlayPauseBtn.src = "./assets/feather.gif"; // Change to the play icon
  } else {
    aboutAudio.play();
    aboutPlaying = true;
    aboutPlayPauseBtn.src = "./assets/flute.gif"; // Change to the pause icon
  }
}
// Add a click event listener to the GIF to trigger the toggleAudio function
aboutPlayPauseBtn.addEventListener("click", aboutToggleAudio);

// Linear gradient property
const gradientDirection = "to right";
const colorStops = "#FA5, #F80";
const linearGradient = `linear-gradient(${gradientDirection}, ${colorStops})`;
const blurColor = "#777";

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    icon: "assets/about-me.gif",
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground(linearGradient);
    },
    onblur: function () {
      this.setBackground(blurColor);
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    icon: "./assets/contact.gif",
    width: "400px",
    height: "400px",
    top: 100,
    right: 100,
    bottom: 50,
    left: 100,
    mount: contactContent,
    onfocus: function () {
      this.setBackground(linearGradient);
    },
    onblur: function () {
      this.setBackground(blurColor);
    },
  });
});

programming.addEventListener("click", () => {
  const programmingBox = new WinBox({
    title: "My Skills",
    icon: "./assets/tech-stack.gif",
    width: "400px",
    height: "400px",
    top: 150,
    right: 150,
    bottom: 50,
    left: 150,
    mount: programmingContent,
    onfocus: function () {
      this.setBackground(linearGradient);
    },
    onblur: function () {
      this.setBackground(blurColor);
    },
  });
});

resume.addEventListener("click", () => {
  const resumeBox = new WinBox({
    title: "My Resume",
    icon: "./assets/cv.gif",
    width: "525px",
    height: "750px",
    mount: resumeContent,
    onfocus: function () {
      this.setBackground(linearGradient);
    },
    onblur: function () {
      this.setBackground(blurColor);
    },
  });
});

// Typewriter.js
// https://github.com/ronv/Typewriter.js

$.fn.typewriter = function () {
  this.each(function () {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
    c.html("");
    var e = function () {
      if ("<" == b.substring(a, a + 1)) {
        var f = new RegExp(/<span class="instant"/),
          g = new RegExp(/<span class="clear"/);
        if (b.substring(a, b.length).match(f))
          a += b.substring(a, b.length).indexOf("</span>") + 7;
        else if (b.substring(a, b.length).match(g))
          (d = a), (a += b.substring(a, b.length).indexOf("</span>") + 7);
        else for (; ">" != b.substring(a, a + 1); ) a++;
      }
      c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
      a >= b.length || setTimeout(e, 45 + 5 * Math.random());
    };
    e();
  });
  return this;
};
$(".terminal").typewriter();
