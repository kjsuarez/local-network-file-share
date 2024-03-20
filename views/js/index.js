var hover_keys = document.getElementsByClassName("desc_key");

for (var i = 0; i < hover_keys.length; i++) {
    let effectTarget = document.getElementById(hover_keys[i].dataset.valueId);
    hover_keys[i].addEventListener("mouseenter", (e) => { 
        effectTarget.style.display = "block";
        console.log("works");
    });

    hover_keys[i].addEventListener("mouseleave", (e) => {
        effectTarget.style.display = "none";
       });
}
