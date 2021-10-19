let net;

function updateImage(){
    let imagemFonte = document.querySelector("#imagemFonte");
    let input = document.querySelector("input[type='file']");
    fileSource.src = window.URL.createObjectURL(input.files[0]);
}

async function classificar(){
    let imagemFonte = document.querySelector("imagemFonte");
    net = await mobilenet.load();
    let resultados = await net.classify(imagemFonte);
    exibirResultado(resultados);
}

function exibirResultado(dados){
    let h3Resultados = document.querySelector("#resultados");
    h3Resultados.textContent = "";
}
