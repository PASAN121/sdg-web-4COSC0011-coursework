// JavaScript gallery file

const selection=document.querySelectorAll(".cell")
 
selection.forEach(element => {
    element.addEventListener("mouseenter", function () {
        this.style.borderLeft = "5px solid #ffffff";
    });

    element.addEventListener("mouseleave", function () {
        this.style.borderLeft = "none";
    });
});

