var darkMode = false;
document.getElementById("theme-toggle").addEventListener("click", function() {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
    document.body.header().style.backgroundColor = "#FF9F2B65"
  }
  else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    document.body.header().style.backgroundColor = "#FFFF69B4"

  }

});
