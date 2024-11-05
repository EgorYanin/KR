function checkIfCanCut() {
    const D = parseFloat(document.getElementById("diameter").value);
    const A = parseFloat(document.getElementById("width").value);


    let resultText = `Введённое значение A (ширина бруса) равно ${A}, введённое значение D (диаметр ствола) равно ${D}.`;


    if (D < 0 || A < 0) {
        resultText += " Ошибка: одно из значений отрицательное.";
        document.getElementById("result").innerText = resultText;
        return;
    }


    resultText += "\nДля возможности выпилить квадратный брус из круглого ствола, его ширина A должна быть меньше или равна D / sqrt(2).";


    resultText += `\nПроверяем условие: A ≤ D / sqrt(2)`;
    resultText += `\nПодставляем значения: ${A} ≤ ${D} / sqrt(2)`;


    const maxSquareWidth = D / Math.sqrt(2);
    resultText += `\nРассчитаем правую часть: ${D} / sqrt(2) = ${maxSquareWidth.toFixed(2)}.`;


    if (A <= maxSquareWidth) {
        resultText += `\nПоскольку ${A} ≤ ${maxSquareWidth.toFixed(2)}, можно выпилить квадратный брус шириной ${A}.`;
    } else {
        resultText += `\nПоскольку ${A} > ${maxSquareWidth.toFixed(2)}, невозможно выпилить квадратный брус шириной ${A}.`;
    }


    document.getElementById("result").innerText = resultText;
}
