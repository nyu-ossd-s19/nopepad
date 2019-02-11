var f = "note.txt"

writeToFile(f, document.getElementByName("note"))

function writeToFile(f, output){
	var file = f;
	txtFile.write(output);
	txtFile.close();
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