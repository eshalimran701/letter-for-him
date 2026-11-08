// 1. Hidden Message

const surpriseBtn = document.getElementById("surprise-btn");
const hiddenMessage = document.getElementById("hidden-message");

surpriseBtn.addEventListener("click", function() {

    if (hiddenMessage.style.display === "block") {
        hiddenMessage.style.display = "none";
        surpriseBtn.textContent = "Reveal my secret ♡";
    } 
    else {
        hiddenMessage.style.display = "block";
        surpriseBtn.textContent = "Hide my secret ♡";
    }

});


// 2. Letter Popup

const letterButtons = document.querySelectorAll(".letter-card button");

const popup = document.getElementById("letter-popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const closePopup = document.getElementById("close-popup");

const letters = [

    {
        title: "When I miss you ♡",
        message: "Sometimes I wish I could pause time during our conversations, just so I could stay in those moments a little longer. Even when we're doing nothing particularly special, I find myself enjoying every little second. I hope you know that you're missed more often than I actually say."
    },

    {
        title: "When you need a smile ♡",
        message: "In case you forget, I think you're pretty wonderful. I hope life treats you kindly, that you find reasons to smile even on difficult days, and that you never feel like you have to be someone other than yourself around me."
    },

    {
        title: "Just because ♡",
        message: `Among all the people I could have met, you're the one whose presence makes ordinary hours feel worth keeping.

I don't know how to explain it perfectly, but I'm genuinely glad our paths crossed. And if there's one thing I hope you never doubt, it's that having you in my life means something to me.`
    }

];

letterButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        popupTitle.textContent = letters[index].title;
        popupText.textContent = letters[index].message;

        popup.style.display = "flex";

    });

});


// 3. Close Popup

closePopup.addEventListener("click", function() {

    popup.style.display = "none";

});


// 4. Close when clicking outside

popup.addEventListener("click", function(event) {

    if (event.target === popup) {
        popup.style.display = "none";
    }

});


// 5. Welcome Button

const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", function() {

    console.log("Welcome to my little world ♡");

});