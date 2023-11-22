// Vulnerable JavaScript snippet
document.getElementById('userInput').innerHTML = location.search.substring(1).split("=")[1];
