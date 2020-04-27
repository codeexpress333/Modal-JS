//Get All Classes
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const cross = document.querySelector(".cross");

//Event Listener for Show Modal
btn.addEventListener("click", () => {
    modal.classList.toggle("show");
});

//Now Cross Work
cross.addEventListener("click", (e) => {
    modal.classList.remove("show");
    e.target.body.remove("show");
});

//Now if we click in window means outside of modal then should be remove
window.addEventListener("click", (e) => {
    if(e.target == modal) {
        modal.classList.remove("show");
    }
});

