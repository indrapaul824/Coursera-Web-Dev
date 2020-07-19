(function (window) {
	var indraGreeter = {};
	indraGreeter.name = "Indra";
	var greeting = "Hello ";
	indraGreeter.sayHello = function () {
		console.log(greeting + indraGreeter.name);
	}

	window.indraGreeter = indraGreeter;
	
})(window);