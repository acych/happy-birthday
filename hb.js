const number = document.querySelector(".number");
const valueNumber = Number(number.getAttribute("data-value"));

let counter = 0;
const myTimeout = setTimeout(myGreeting, 10000);

function myGreeting() {
    console.log("came")
    var hiddenElements = document.querySelectorAll(".visually-hidden");
    hiddenElements.forEach(element => {
        element.classList.remove("visually-hidden");
    });
  clearTimeout(myTimeout);
}

const time = () => {
	setInterval(() => {
		if (counter !== valueNumber) {
			counter++;
			number.innerHTML = `${counter}%`;
		}
	}, 50);
};

time();
