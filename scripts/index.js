const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")


$startGameButton.addEventListener("click", startGame)

let currentQuestionIndex = 0


function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}


function displayNextQuestion() {
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)

    });

}


function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct")
    } else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true
    });

}









































const questions = [
    {
        question: "How do you say in Portuguese pencil ?",
        answers: [
            { text: "Casa", correct: false },
            { text: "Lapis", correct: true },
            { text: "Tesoura", correct: false },
            { text: "Borracha", correct: false }
        ]
    },
    {
        question: "Which is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "What is the name of the famous painting by Vincent van Gogh?",
        answers: [
            { text: "Starry Night", correct: true },
            { text: "Mona Lisa", correct: false },
            { text: "The Persistence of Memory", correct: false },
            { text: "The Last Supper", correct: false }
        ]
    },
    {
        question: "What is the name of the famous rock band formed in London in 1960?",
        answers: [
            { text: "Queen", correct: false },
            { text: "The Beatles", correct: true },
            { text: "The Rolling Stones", correct: false },
            { text: "The Who", correct: false }
        ]
    },
    {
        question: "How do you say table in portuguese",
        answers: [
            { text: "Mesa", correct: true },
            { text: "Escada", correct: false },
            { text: "Janela", correct: false },
            { text: "Cadeira", correct: false }
        ]
    },
    {
        question: "How do you say orange in portuguese",
        answers: [
            { text: "Laranja", correct: true },
            { text: "Maçã", correct: false },
            { text: "Morango", correct: false },
            { text: "Uva", correct: false }
        ]
    },
    {
        question: "What is the name of the famous painting by Leonardo da Vinci?",
        answers: [
            { text: "Mona Lisa", correct: true },
            { text: "The Last Supper", correct: false },
            { text: "Starry Night", correct: false },
            { text: "The Persistence of Memory", correct: false }
        ]
    },
    {
        question: "How do you say red in portuguese",
        answers: [
            { text: "Vermelho", correct: true },
            { text: "Azul", correct: false },
            { text: "Amarelo", correct: false },
            { text: "Preto", correct: false }
        ]
    },
    {
        question: "How do you say star in portuguese",
        answers: [
            { text: "Estrela", correct: true },
            { text: "Casa", correct: false },
            { text: "Laser", correct: false },
            { text: "Câmera", correct: false }
        ]
    },
    {
        question: "How do you say tree in portuguese",
        answers: [
            { text: "Árvore", correct: true },
            { text: "Casa", correct: false },
            { text: "Câmera", correct: false },
            { text: "Cadeira", correct: false }
        ]
    }

]

