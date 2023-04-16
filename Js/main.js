const encryptContent = () => {
    processedTextOnChange();
    const decryptVar = document.querySelector(`.btn-decrypt`);
    const encryptVar = document.querySelector(`.btn-encrypt`);
    data = 1;
    encryptVar.style.backgroundColor = colorblue;
    encryptVar.style.color = colorwhite;
    encryptVar.value = "Encriptando..."


    decryptVar.style.backgroundColor = colorwhite;
    decryptVar.style.color = colorblue;
    decryptVar.value = "Desencriptar"

    const comprobation = document.querySelector(`.textToProcessed`);
    if (comprobation.value.length > 0) {
        encrypt(comprobation.value);
    }


}

const decryptContent = () => {
    processedTextOnChange();
    const decryptVar = document.querySelector(`.btn-decrypt`);
    const encryptVar = document.querySelector(`.btn-encrypt`);

    data = 2;


    encryptVar.style.backgroundColor = colorwhite;
    encryptVar.style.color = colorblue;
    encryptVar.value = "Encriptar"

    decryptVar.style.backgroundColor = colorblue;
    decryptVar.style.color = colorwhite;
    decryptVar.value = "Desencriptando..."


    const comprobation = document.querySelector(`.textToProcessed`);
    if (comprobation.value.length > 0) {
        decrypt(comprobation.value);
    }

}