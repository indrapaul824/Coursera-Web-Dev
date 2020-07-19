// Event handling
document.addEventListener("DOMContentLoaded",
	function (event) {
		
		// Unobstrusive event binding
		document.querySelector("button")
			.addEventListener("click", function () {

				// Call Server to get the name
				$ajaxUtils
					.sendGetRequest("/data/name.json",
						function (res) {
							var message = 
								res.firstname + " " + res.lastname
							if (res.likesChineseFood) {
								message += " likes Chinese Food";
							}
							else {
								message += " doesn't like Chinese Food";
							}
							message += " and uses ";
							message += res.numberOfDisplays + 1;
							message += " displays for coding."

							document.querySelector("#content")
									.innerHTML = "<h2>Hello " + message + "</h2>";
						});
				
			});
	}
);




