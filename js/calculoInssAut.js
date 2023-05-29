function calculaInssAutonomo(salario) {
    const aliquota = 0.2;
    const contribuicaoMinima = 264;
    const contribuicaoMaxima = 1501.50;
    const contribuicao = salario * aliquota;

    if (salario <= 1320.00) {
        return contribuicaoMinima.toFixed(2);
    }

    if(salario >= 1320.01 && salario <= 7507.48) {
        return contribuicao.toFixed(2);
    }

    if (salario >= 7507.49) {
        return contribuicaoMaxima.toFixed(2);
    }
    
}
