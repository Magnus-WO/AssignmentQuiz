// selecting and inputing the landing page header
const body = document.querySelector("body");

const headerContainer = document.querySelector(".header-container");
const header = document.createElement("h1");
header.textContent = "";
headerContainer.appendChild(header);

const alternativesContainer = document.querySelector(
  ".alternatives__container"
);
const alternativeCard = document.querySelector(".alternative__card");

// selecting and inputing the landing page paragraph
const paragraphContainer = document.querySelector(".paragraph-container");
const headerParagraph = document.createElement("p");
headerParagraph.classList.add("header__paragraph");
headerParagraph.textContent = "";
paragraphContainer.appendChild(headerParagraph);

// creating and inputing the landing page alternatives

// alternative 1
const alt1Container = document.querySelector(".alternative1__container");
const alt1Input = document.querySelector("#alt1");
const alt1 = document.querySelector("#label1");
alt1Container.append(alt1Input, alt1);

// alternative 2
const alt2Container = document.querySelector(".alternative2__container");
const alt2Input = document.querySelector("#alt2");

const alt2 = document.querySelector("#label2");
alt2Container.append(alt2Input, alt2);

// alternative 3
const alt3Container = document.querySelector(".alternative3__container");
const alt3Input = document.querySelector("#alt3");
const alt3 = document.querySelector("#label3");
alt3Container.append(alt3Input, alt3);

// Creating next button
const buttonContainer = document.querySelector(".button__container");
const nextButton = document.createElement("button");
nextButton.classList.add("button");
nextButton.textContent = "Start";
buttonContainer.appendChild(nextButton);

//Questions counter
const containerCard = document.querySelector(".container-card");
const questionCounter = document.querySelector(".questions__counter");
const navigation = document.querySelector(".navigation");

// creating reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Do over";
resetButton.classList.add("reset-button");

// Creating review button
const reviewButton = document.createElement("button");
reviewButton.textContent = "Review";
reviewButton.classList.add("button");

// Declaring empty arrays
const userCorrectAnswers = [];
const userAnswers = [];

const correctAnswers = [];

let questionIndex = 0;
let isCheckingAnswer = false;

//Starting page array
const startingPage = [
  {
    header: "Welcome to the super awesome Rock and Metal quiz",
    paragraph: "Are you ready to test your rock and metal trivia knowledge?",
    options: [
      "Lets goooo!",
      "Just 5 more minutes",
      "I am eager to test my knowledge 🤓",
    ],
    correctAnswer: 1,
  },
];

// Creating the array that contains the questions and answers
const allQuestions = [
  {
    header: "Welcome to the super awesome Rock and Metal quiz",
    paragraph: "Are you ready to test your rock and metal trivia knowledge?",
    options: [
      "Lets goooo!",
      "Just 5 more minutes",
      "I am eager to test my knowledge 🤓",
    ],
    correctAnswer: 0,
  },
  // question1
  {
    header: "Question 1",
    paragraph: "Which musician famously bit the head off of a live bat?",
    options: ["1: Rob Halford", "2: Ozzy Osborn", "3: Bruce Dickinson"],
    correctAnswer: 2,
  },
  // question2
  {
    header: "Question 2",
    paragraph: "Where is Tons of Rock located?",
    options: ["1: Oslo", "2: Stockholm", "3: Copenhagen"],
    correctAnswer: 1,
  },
  // question3
  {
    header: "Question 3",
    paragraph: "Which music is one of Norways biggest exports?",
    options: ["1: Pop", "2: RnB", "3: Black Metal"],
    correctAnswer: 3,
  },
  // question4
  {
    header: "Question 4",
    paragraph: "Which band has the song Enter Sandman?",
    options: ["1: Megadeth", "2: Iron Maiden", "3: Metallica"],
    correctAnswer: 3,
  },
  {
    header: "Question 5",
    paragraph: "What is the name of the vocalist in Led Zeppeling?",
    options: ["1: Axl Rose", "2: Robert Plant", "3: Freddy Murcery"],
    correctAnswer: 2,
  },
  {
    header: "Question 6",
    paragraph: "Which band has the song Smoke on the Water?",
    options: ["1: Black Sabbath", "2: Dio", "3: Deep Purple"],
    correctAnswer: 3,
  },
  {
    header: "Question 7",
    paragraph: "Which famous guitarist was shot on stage in 2004?",
    options: ["1: Dimebag Darrell", "2: Eddie van Halen", "3: Slash"],
    correctAnswer: 1,
  },
  {
    header: "Question 8",
    paragraph:
      "Which iconic guitar has been wielded by guitarist like Jimmy Page, Slash and Les Paul?",
    options: [
      "1: Fender Stratocaster",
      "2: Gibson Les Paul",
      "3: Rickenbacker",
    ],
    correctAnswer: 2,
  },
];

// Function for loading the starting page
function loadStart(e) {
  for (let i = questionIndex; i <= questionIndex; i++) {
    const question = startingPage[i];
    header.textContent = question.header;
    headerParagraph.textContent = question.paragraph;

    question.options.forEach((option, i) => {
      const label = document.getElementById(`label${i + 1}`);
      const input = document.getElementById(`alt${i + 1}`);
      label.textContent = option;
      input.checked = false;
    });
  }
}

// function for looping through the questions
function loadQuestions(e) {
  nextButton.textContent = "Next ->";

  for (let i = 0; i <= questionIndex; i++) {
    const question = allQuestions[i];
    header.textContent = question.header;
    headerParagraph.textContent = question.paragraph;

    question.options.forEach((option, i) => {
      const label = document.getElementById(`label${i + 1}`);
      const input = document.getElementById(`alt${i + 1}`);
      label.textContent = option;
      input.checked = false;
    });
  }

  questionCounter.textContent = `${questionIndex} / ${allQuestions.length - 1}`;
  navigation.appendChild(questionCounter);

  if (questionIndex === allQuestions.length - 1) {
    nextButton.textContent = "Submit";
    nextButton.classList.add("submit");
  }
}

// Function for validating answers
function checkAnswer() {
  const selectedOption = Array.from(
    document.getElementsByName("alternative")
  ).find((input) => input.checked);

  if (!selectedOption) {
    alert("You shall not pass");
  }
  console.log(typeof selectedOption);
  console.log(selectedOption);

  const selectedValue = parseInt(selectedOption.value, 10);
  const correctAnswer = allQuestions[questionIndex].correctAnswer;

  //For this^ part of the code I got help from ChatGPT

  if (selectedValue === correctAnswer) {
    console.log("correct");
    userAnswers.push(selectedValue);
    userCorrectAnswers.push(selectedOption);
  } else if (selectedOption) {
    console.log("incorrect");
    userAnswers.push(selectedValue);
  }

  return true;
}

// Function for rendering the review page

function reviewRender() {
  allQuestions.shift();

  containerCard.textContent = " ";
  containerCard.style.backgroundImage = "none";
  containerCard.style.backgroundColor = "transparent";
  containerCard.style.boxShadow = "none";
  containerCard.style.gap = "1rem";

  header.textContent = `Score: ${userCorrectAnswers.length}/${allQuestions.length}`;
  header.style.color = "white";
  containerCard.appendChild(headerContainer);
  headerContainer.appendChild(header);

  allQuestions.forEach((question, index) => {
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("answer-cards");

    const alternativeReviewCard = document.createElement("div");
    alternativeReviewCard.classList.add("alternative__card--review");

    const alternativeHeader = document.createElement("p");
    alternativeHeader.classList.add("review-header");
    alternativeHeader.textContent = question.header;

    const questionParagraph = document.createElement("p");
    questionParagraph.classList.add("review-paragraph");
    questionParagraph.textContent = question.paragraph;

    question.options.forEach((element) => {
      const alternative = document.createElement("p");
      alternative.textContent = element;
      alternative.classList.add("answer-alternatives");
      questionParagraph.append(alternative);
    });

    const userAnswer = document.createElement("p");
    userAnswer.textContent = `Your answer ${userAnswers[index]}`;
    userAnswer.classList.add("answer-alternatives");
    alternativeReviewCard.append(userAnswer);

    const correctAnswer = document.createElement("p");
    correctAnswer.textContent = `Correct answer: ${question.correctAnswer}`;
    correctAnswer.style.color = "white";
    alternativeReviewCard.append(correctAnswer);

    reviewCard.append(
      alternativeHeader,
      questionParagraph,
      alternativeReviewCard
    );

    containerCard.style.minHeight = "100vh";
    containerCard.append(reviewCard);
  });
  containerCard.append(resetButton);
}

// Executing functions
window.addEventListener("load", loadStart);

nextButton.addEventListener("mousedown", () => {
  nextButton.style.backgroundColor = "lightgray";
});
nextButton.addEventListener("mouseup", () => {
  nextButton.style.backgroundColor = "transparent";
});

nextButton.addEventListener("click", (e) => {
  e.preventDefault();

  const isValid = checkAnswer();
  if (!isValid) return;

  questionIndex++;

  if (questionIndex < allQuestions.length) {
    loadQuestions();
  } else {
    containerCard.textContent = " ";

    header.textContent = `Score: ${userCorrectAnswers.length}/${
      allQuestions.length - 1
    }`;
    header.style.color = "white";
    containerCard.appendChild(headerContainer);
    headerContainer.appendChild(header);

    containerCard.appendChild(reviewButton);
  }

  navigation.appendChild(resetButton);
});

reviewButton.addEventListener("click", (e) => {
  e.preventDefault();

  reviewRender();
});

resetButton.addEventListener("submit", () => {});
