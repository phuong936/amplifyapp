function prompt() {
    var person = window.prompt("Please enter your name");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }
<p id="demo"></p>
export default prompt;
