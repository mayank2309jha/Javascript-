const buttons = document.querySelectorAll("button");
let sayMyName;

buttons[0].addEventListener(
  "click",
  () => {
    console.log("Interval Stopped");
    clearInterval(sayMyName);
  },
  false
);

buttons[1].addEventListener(
  "click",
  () => {
    sayMyName = setInterval(() => {
      console.log("Interval Started");
      const h2 = document.createElement("h2");
      h2.innerHTML = "Mayank Jha";
      h2.style.color = "White";
      document.body.appendChild(h2);
    }, 500);
  },
  false
);

//This function will generate random hex color codes.
const generateRandomHexColor = () => {
  const hexCodes = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    color += hexCodes[randomIndex];
  }
  console.log(color);
  return color;
};
//This will allow me to change the background color with a click.
buttons[2].addEventListener(
  "click",
  () => {
    let color = generateRandomHexColor();
    document.body.style.backgroundColor = color;
  },
  false
);

//This will start a loop that will allow me to change the background color every second.
let colorChanger;
buttons[3].addEventListener(
  "click",
  () => {
    if (colorChanger == null) {
      colorChanger = setInterval(() => {
        document.body.style.backgroundColor = generateRandomHexColor();
      }, 1000);
    }
  },
  false
);

//This button will stop this
buttons[4].addEventListener(
  "click",
  () => {
    console.log("Changing no More");
    clearInterval(colorChanger);
    colorChanger = null; //To free up memory when not in use.
  },
  false
);
