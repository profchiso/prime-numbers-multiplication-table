function generateNPrimeNumbers(length) {
    nPrimeNumbers = [];
    for (let i = 2; nPrimeNumbers.length < length; i++) {
        let divisorFound = false;
        for (let count = 2; count < i; count++) {
            if (i % count === 0) {
                divisorFound = true;
                break;
            }
        }
        if (divisorFound == false) {
            nPrimeNumbers.push(i);
        }
    }
    return nPrimeNumbers;
}

function displayPrimeNumbersMultiplicationTable() {
    let length = document.querySelector(".prime-number-length").value;
    if (typeof length !== "number") {
        alert("Length of prime number must be a number");
        return;
    }

    let generatedPrimeNumbers = generateNPrimeNumbers(length);

    document.write("<center><table border='1px'>");

    document.write("<tr style='height:40px'>");

    document.write(
        "<td style='width:40px'><center><font size='4'>" + "</center></font></td>"
    );
    for (let n = 0; n < generatedPrimeNumbers.length; n++) {
        document.write(
            "<td style='width:40px'><center><font size='4'>" +
            generatedPrimeNumbers[n] +
            "</center></font></td>"
        );
    }

    document.write("</tr><tr style='height:40px'>");
    for (let i = 0; i < generatedPrimeNumbers.length; i++) {
        document.write(
            "<td style='width:40px'><center><font size='4'>" +
            generatedPrimeNumbers[i] +
            "</center></font></td>"
        );

        for (let j = 0; j < generatedPrimeNumbers.length; j++) {
            document.write(
                "<td style='width:40px'><center><font size='4'>" +
                generatedPrimeNumbers[i] * generatedPrimeNumbers[j] +
                "</center></font></td>"
            );
        }

        document.write("</tr>");
    }

    document.write("</table></center>");
}
document
    .querySelector(".generate-multiplication-table")
    .addEventListener("click", (e) => {
        e.preventDefault();
        displayPrimeNumbersMultiplicationTable();
    });