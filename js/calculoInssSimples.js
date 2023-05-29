function calculaInssSimples(salario) {
    const aliquota = 0.11;
    const faturamento = 0.28;
    const contribuicao = (salario * faturamento)*aliquota

    if (salario >= 0.01) {
        return contribuicao
        
    }
    
}