function generateRandomNumber(){

    alert('Vamos a generar números aleatorios entre el rango que vos quieras');
    const firstNumber = parseInt(prompt('Por favor ingrese el primer número'));
    const secondNumber = parseInt(prompt('Por favor ingrese el segundo número'));

    
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Por favor ingrese valores numéricos válidos');
        return;
    } else if (secondNumber < firstNumber) {
        alert('El primer número debe ser mayor que el segundo')
        return
    }

    randomNumber = Math.floor(Math.random() * (secondNumber - firstNumber) + firstNumber);
    alert('El número generado es ' + randomNumber);

    for (let i = firstNumber; i <= secondNumber; i++) {
        console.log(i);
    }

}

generateRandomNumber();