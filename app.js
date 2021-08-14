// https://api.jquery.com/
// https://getbootstrap.com/docs/5.1/getting-started/introduction/

//Declaring variables of the objects we have in the HTML file
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
//Declaring variable for the load, so it's default is 0
let load = 0;
//Declaring variable int, the interval of the blurring function is 30ms
let int = setInterval(blurring, 30);
//function blurring is the load getting added +1 on itself, but only if the load is smaller than 99, so it'll stop counting in 100 with the clear interval.
function blurring() {
	load++;
	if (load > 99) {
		clearInterval(int);
	}
	//load text 'load' with is 0%, and style the opacity and the filter blur according with the constant scale
	loadText.innerText = `${load}%`;
	loadText.style.opacity = scale(load, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
//constant scale, a litle code extracted from Stackoverflow, that maps the number.
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
