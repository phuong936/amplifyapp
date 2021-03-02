    var person = window.prompt("Please enter your name");
    if (person != null) {
      document.getElementById("viewsource").innerHTML =
      "Hello " + person + "! How are you today?";
    }


export default prompt;
