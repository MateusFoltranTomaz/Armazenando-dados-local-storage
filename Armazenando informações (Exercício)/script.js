function salvar(){
    let modelo = document.getElementById('modelo-input').value;
    let marca = document.getElementById('marca-input').value;

    let carro = {
        marca: marca,
        modelo: modelo
    };

    localStorage.setItem('carro', JSON.stringify(carro));

    console.log(carro);
}