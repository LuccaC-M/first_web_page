document.getElementById("nameButton").onclick = function() {
    var username = document.getElementById("name").value;
    var new_text = document.getElementById("text").value;
    const username_display = document.getElementById("username");
    const usertext_display = document.getElementById("usertext");
    console.log("Hello,", username);
    username_display.textContent = username;
    usertext_display.textContent = new_text;
}
