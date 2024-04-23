document.getElementById("lamp_ap").addEventListener("click", function() {
    let img = document.getElementById("lamp_ap");

    if (img.src.match("lamp_ap.png")) {
        img.src = "lamp_lg.png";
    } else {
        img.src = "lamp_ap.png"
    }
});

// document representa todo html