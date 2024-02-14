
        const storyElement = document.getElementById('story');
        const optionsContainer = document.getElementById('options-container');

        function chooseOption(option) {
            if (option === 1) {
                storyElement.innerHTML = "Mientras estaban en el banco, comenzaron a hablar sobre sus pasatiempos y descubrieron que tenían mucho en común.";
                optionsContainer.innerHTML = `
                    <button class="option-button" onclick="chooseOption(3)">Compartir experiencias divertidas</button>
                    <button class="option-button" onclick="chooseOption(4)">Confesar un secreto personal</button>
                `;
            } else if (option === 2) {
                storyElement.innerHTML = "Durante el paseo, se encontraron con un pequeño puente que llevaba a un jardín secreto. Optaron por explorarlo juntos.";
                optionsContainer.innerHTML = `
                    <button class="option-button" onclick="chooseOption(5)">Hablar sobre sus sueños y aspiraciones</button>
                    <button class="option-button" onclick="chooseOption(6)">Compartir anécdotas de la infancia</button>
                `;
            } else if (option === 3) {
                storyElement.innerHTML = "Riéndose juntos, compartieron experiencias divertidas que crearon un vínculo instantáneo.";
                optionsContainer.innerHTML = `
                    <button class="option-button" onclick="chooseOption(7)">Sentir la conexión y dar un abrazo</button>
                    <button class="option-button" onclick="chooseOption(8)">Mirarse profundamente a los ojos</button>
                `;
            } else if (option === 4) {
                storyElement.innerHTML = "Confesar un secreto personal generó confianza y apertura entre ellos, fortaleciendo su conexión.";
                optionsContainer.innerHTML = `
                    <button class="option-button" onclick="chooseOption(9)">Tomarse de la mano</button>
                    <button class="option-button" onclick="chooseOption(10)">Compartir metas para el futuro</button>
                `;
            } else if (option === 5) {
                storyElement.innerHTML = "Hablando sobre sus sueños y aspiraciones, descubrieron que tenían metas similares en la vida.";
                optionsContainer.innerHTML = `
                    <button class="option-button" onclick="chooseOption(11)">Compartir un primer beso</button>
                    <button class="option-button" onclick="chooseOption(12)">Hablar sobre el significado del amor</button>
                `;
            } else if (option === 6) {
                storyElement.innerHTML = "Compartiendo anécdotas de la infancia, se dieron cuenta de lo mucho que podían aprender y apoyarse mutuamente.";
                optionsContainer.innerHTML = `
                    <button class="option-button" onclick="chooseOption(13)">Planeando una cita especial</button>
                    <button class="option-button" onclick="chooseOption(14)">Decidir ser solo amigos</button>
                `;
            } else if (option === 7) {
                storyElement.innerHTML = "Al sentir la conexión, decidieron darse un abrazo, sintiendo la calidez del inicio de un nuevo capítulo.";
                optionsContainer.innerHTML = '';
                showFinalMessage("Su historia de amor ha comenzado. ¡Que este abrazo sea el primero de muchos momentos especiales!❤️");
            } else if (option === 8) {
                storyElement.innerHTML = "Mirándose profundamente a los ojos, se dieron cuenta de la intensidad de la conexión que estaba surgiendo entre ellos.";
                optionsContainer.innerHTML = '';
                showFinalMessage("Han iniciado una historia llena de miradas profundas, símbolo de la conexión única que comparten.");
            } else if (option === 9) {
                storyElement.innerHTML = "Tomarse de la mano simbolizó el inicio de una hermosa historia juntos, llena de amor y complicidad.";
                optionsContainer.innerHTML = '';
                showFinalMessage("Con sus manos entrelazadas, comienzan un camino lleno de amor y aventuras.");
            } else if (option === 10) {
                storyElement.innerHTML = "Compartir metas para el futuro les ayudó a alinear sus visiones, construyendo un camino conjunto.";
                optionsContainer.innerHTML = '';
                showFinalMessage("Juntos, han establecido metas para el futuro, creando una base sólida para su historia de amor.");
            } else if (option === 11) {
                storyElement.innerHTML = "El primer beso marcó el comienzo de una historia de amor, llena de emociones y mariposas en el estómago.";
                optionsContainer.innerHTML = '';
                showFinalMessage("Ese primer beso quedará grabado en sus corazones, iniciando una emocionante historia de amor.❤️");
            } else if (option === 12) {
                storyElement.innerHTML = "Hablar sobre el significado del amor les permitió explorar sus sentimientos y comprender la magia que estaban creando.";
                optionsContainer.innerHTML = '';
                showFinalMessage("Al comprender el significado del amor, han empezado a escribir una historia llena de momentos mágicos.");
            } else if (option === 13) {
                storyElement.innerHTML = "Planeando una cita especial, anticiparon momentos emocionantes que les esperaban en el futuro.";
                optionsContainer.innerHTML = '';
                showFinalMessage("La anticipación de momentos emocionantes en su cita especial marca el inicio de una historia llena de sorpresas y amor.");
            } else if (option === 14) {
                storyElement.innerHTML = "Decidir ser solo amigos les permitió construir una amistad sólida, con la posibilidad de explorar algo más en el futuro.";
                optionsContainer.innerHTML = '';
                showFinalMessage("Aunque decidieron ser amigos, la sólida amistad que construyeron es la base de una conexión especial.");
            }
        }


        function showFinalMessage(message) {
            const finalMessage = document.createElement('p');
            finalMessage.innerHTML = message;
            finalMessage.className = 'final-message';
            storyElement.appendChild(finalMessage);

            // Agregar el botón para reiniciar la historia
            const restartButton = document.createElement('button');
            restartButton.id = 'restart-button';
            restartButton.innerHTML = 'Reiniciar la historia';
            restartButton.onclick = function () {
                restartStory();
            };

            storyElement.appendChild(restartButton);
        }

        function restartStory() {
            // Restablecer el contenido y opciones a su estado inicial
            storyElement.innerHTML = "Era una tarde soleada en el parque, y dos almas destinadas a encontrarse comenzaron su historia...";
            optionsContainer.innerHTML = `
                <button class="option-button" onclick="chooseOption(1)">Decidieron sentarse en el banco del parque</button>
                <button class="option-button" onclick="chooseOption(2)">Optaron por dar un paseo por el lago</button>
            `;
        }
    