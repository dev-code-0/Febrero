function calculateCompatibility() {
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;

    if (name1 === "" || name2 === "") {
        showAlert("¡Error!", "Ingresa los dos nombres, ¿o no tienes pareja? XD");
        return;
    }

    document.getElementById('calculateButton').style.display = 'none';
    document.getElementById('resetButton').style.display = 'inline';

    var compatibilityPercentage = Math.floor(Math.random() * 101);

    var resultMessage = `¡La compatibilidad entre ${name1} y ${name2} es del ${compatibilityPercentage}%!`;

    document.getElementById('compatibility').innerText = resultMessage;
}

function resetCalculator() {
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('calculateButton').style.display = 'inline';
    document.getElementById('resetButton').style.display = 'none';

    document.getElementById('compatibility').innerText = '';
}

function showAlert(title, message) {
    alert(`${title}\n\n${message}`);
    Swal.fire({
        icon: 'error',
        title: title,
        
        text: message,
        confirmButtonColor: '#ff3366',
    });
    
}
