console.log(window.document.readyState);


// if (typeof window == 'undefined' || null) {
//       // do stuffc
//       console.log("fuck me");
// }else if{
// 	console.log("its alive");
// }
window.onload = function() {
	console.log("hey")
	
	var f = "note.txt";
	if (window.localStorage.getItem('notepad') != "" || undefined || null){
		document.getElementById("notepad").value = window.localStorage.getItem('notepad');
	}
	document.getElementById("noteInfo").addEventListener("submit", function(e) {
		// console.log(document.getElementById("notepad").value);
		let data = document.getElementById("notepad").value;
		e.preventDefault();
		window.localStorage.setItem('notepad', data);
		console.log(window.localStorage.getItem('notepad'));
	});

	// Save data on every keypress
	let notepad = document.getElementById("notepad")
	notepad.onkeyup = function(a) {
		let data = notepad.value;
		window.localStorage.setItem('notepad', data);
	}

}

// document.getElementById("notepad").addEventListener("submit", console.log("he"));
// writeToFile(f, document.getElementByName("note"))

function writeToFile(f, output){
	// console.log("hi");
	var file = f;
	file.write(output);
	file.close();
}


/**
 *  * There was an error executing the script.
 *   * Display the popup's error message, and hide the normal UI.
 *    */
function reportExecuteScriptError(error) {
	  document.querySelector("#popup-content").classList.add("hidden");
	  document.querySelector("#error-content").classList.remove("hidden");
	  console.error(`Failed to execute content script: ${error.message}`);
}

/**
 *  * When the popup loads, inject a content script into the active tab
 *    * If we couldn't inject the script, handle the error.
 *     */
browser.tabs.executeScript({file: "/content_scripts/note.js"})
.catch(reportExecuteScriptError);
