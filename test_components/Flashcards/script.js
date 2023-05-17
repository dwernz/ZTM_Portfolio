// Function to create cards for each question-answer pair
function createCards() {
const cardsContainer = document.getElementById("cards-container");

qaObject.forEach((qa) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
    <div class="card_inner">
        <div class="card_side card_side-front">
        <div class="card_body">
            <p>${qa.question}</p>
        </div>
        </div>
        <div class="card_side card_side-back">
        <div class="card_body">
            <p>${qa.answer}</p>
        </div>
        </div>
    </div>
    `;

    // Add click event listener to toggle the 'is-flipped' class
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });

    cardsContainer.appendChild(card);
});
}

// Call the function to create the cards
createCards();