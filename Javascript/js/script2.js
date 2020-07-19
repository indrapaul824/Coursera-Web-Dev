(function (window) {
	var nithinGreeter = {};
	nithinGreeter.name = "Nithin";
	var greeting = "Hi ";
	nithinGreeter.sayHi = function () {
		console.log(greeting + nithinGreeter.name);
	}

	window.nithinGreeter = nithinGreeter;

})(window);




