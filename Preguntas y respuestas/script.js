
const questions = [
    {
        question: "¿Cuál es la clave para una relación exitosa?",
        options: ["Comunicación", "Regalos costosos", "Ignorar al otro"],
        correctAnswer: "Comunicación"
    },
    {
        question: "¿Qué significa el compromiso en una relación?",
        options: ["Dejar de hablar", "Hacer promesas serias", "Cambiar de pareja a menudo"],
        correctAnswer: "Hacer promesas serias"
    },
    {
        question: "¿Cómo manejar los desacuerdos en una relación?",
        options: ["Gritar y enojarse", "Buscar soluciones juntos", "Ignorar al otro"],
        correctAnswer: "Buscar soluciones juntos"
    },
    {
        question: "¿Cuál es un buen gesto de amor?",
        options: ["Regalar flores", "Ignorar llamadas", "Romper promesas"],
        correctAnswer: "Regalar flores"
    },
    {
        question: "¿Qué es fundamental en una relación a largo plazo?",
        options: ["Confianza", "Misterio", "Competencia"],
        correctAnswer: "Confianza"
    }
];
    let currentQuestionIndex = 0;
    let score = 0;
    let countdown = 10;
    let countdownInterval;

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').innerText = currentQuestion.question;

        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach((option) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerText = option;
            optionsContainer.appendChild(optionElement);
        });

        
        setTimeout(() => {
            optionsContainer.style.opacity = '1';
            optionsContainer.style.transform = 'translateY(0)';
        }, 500);

        
        startCountdown();
    }

    function startCountdown() {
        countdown = 10;
        updateCountdown();
        countdownInterval = setInterval(() => {
            if (countdown > 0) {
                countdown--;
                updateCountdown();
            } else {
                clearInterval(countdownInterval);
                handleTimeout();
            }
        }, 1000);
    }

    function updateCountdown() {
        document.getElementById('score').innerText = `Puntuación: ${score} | Tiempo restante: ${countdown}s`;
    }

    function checkAnswer(event) {
        if (event.target.className === 'option') {
            const selectedAnswer = event.target.innerText;
            const currentQuestion = questions[currentQuestionIndex];

            if (selectedAnswer === currentQuestion.correctAnswer) {
                score++;
                
                launchConfetti();
            }

            clearInterval(countdownInterval);

            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                endGame();
            }

            updateScore();
        }
    }

    function updateScore() {
        document.getElementById('score').innerText = `Puntuación: ${score}`;
    }

    function endGame() {
       
        document.getElementById('confetti-container').innerHTML = '';
        alert(`¡Juego terminado! Tu puntuación final es: ${score}`);
        
    }

    function launchConfetti() {
        const confettiContainer = document.getElementById('confetti-container');
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }

    function handleTimeout() {
        // Si se agota el tiempo
        clearInterval(countdownInterval);
        document.getElementById('options').style.pointerEvents = 'none'; // Deshabilitar clics en opciones
        alert("¡Se acabó el tiempo!");
        setTimeout(() => {
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                endGame();
            }
            updateScore();
            document.getElementById('options').style.pointerEvents = 'auto'; // Habilitar clics en opciones
        }, 2000);
    }

    function endGame() {
       
        document.getElementById('confetti-container').innerHTML = '';
        document.getElementById('end-game').style.display = 'block';
        document.getElementById('final-score').innerText = score;
    }

    function restartGame() {
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
        document.getElementById('end-game').style.display = 'none';
    }
    function endGame() {
        
        document.getElementById('confetti-container').innerHTML = '';
        const endGameMessage = document.getElementById('message');
        const finalScore = document.getElementById('final-score');
        
        if (score <= 2) {
            endGameMessage.innerText = "¡Oh no! Necesitas mejorar. ¡Ánimo!";
        } else {
            endGameMessage.innerText = "¡Excelente trabajo!";
        }

        finalScore.innerText = score;
        document.getElementById('end-game').style.display = 'block';
    }

    function restartGame() {
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
        document.getElementById('end-game').style.display = 'none';
    }
    

    showQuestion();
