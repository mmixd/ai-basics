function checkAnswers() {
    // Get selected answers
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked'),
        question2: document.querySelector('input[name="question2"]:checked'),
        question3: document.querySelector('input[name="question3"]:checked'),
        question4: document.querySelector('input[name="question4"]:checked')
    };

    // Result element
    const resultElement = document.getElementById('quiz-result');
    let score = 0;
    const totalQuestions = 4;
    let explanations = "";

    // Check if all questions are answered
    if (Object.values(answers).includes(null)) {
        resultElement.innerHTML = "<p>Please answer all questions before submitting.</p>";
        return;
    }

    // Correct answers
    const correctAnswers = {
        question1: 'B',
        question2: 'A',
        question3: 'B',
        question4: 'B'
    };

    // Iterate through each question to check answers
    for (let [question, userAnswer] of Object.entries(answers)) {
        const questionElement = document.querySelector(`input[name="${question}"][value="${userAnswer.value}"]`).parentElement;
        if (userAnswer.value === correctAnswers[question]) {
            score++;
            questionElement.classList.add('correct-answer');
        } else {
            questionElement.classList.add('incorrect-answer');
            explanations += getExplanation(question);
        }
    }

    // Display result and explanations
    resultElement.innerHTML = `<p>You've completed the quiz! You got <strong>${score} out of ${totalQuestions}</strong> correct.</p>` + explanations;

    // Disable further changes
    document.getElementById('quiz-form').classList.add('quiz-submitted');

    // Show the "Next" button
    document.getElementById('next-button').style.display = 'inline-block';
}

// Function to return explanations for incorrect answers
function getExplanation(question) {
    const explanations = {
        question1: "<p><strong>Question 1 Explanation:</strong> The correct answer is B. AI is a way for computers to think and learn like humans, not a type of human intelligence or a programming language.</p>",
        question2: "<p><strong>Question 2 Explanation:</strong> The correct answer is A. AI needs both data and instructions to learn effectively.</p>",
        question3: "<p><strong>Question 3 Explanation:</strong> The correct answer is B. A weather app that shows the current temperature is not using AI, while virtual assistants and movie recommendations do use AI.</p>",
        question4: "<p><strong>Question 4 Explanation:</strong> The correct answer is B. AI improves by processing more data and learning from it, not by repeating the same action or deleting data.</p>"
    };
    return explanations[question];
}
