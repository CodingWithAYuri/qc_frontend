//Base de Cálculo (R$)    	Alíquota (%)	Parcela a Deduzir do IR (R$)
//De 2.112,01 a 2.826,65	7,5%	        158,40
//De 2.826,66 até 3.751,05	15%	            370,40
//De 3.751,06 até 4.664,68	22,5%	        636,13
//Acima de 4.664,68	       27,5%	        869,36


function calculoIr(salario) {
    const subtotal = salario;

    if (salario <= 2112) {
        const aliquota = 0.00;
        const parcela = 0.00;
        return calculoIrTotal(subtotal, aliquota, parcela);
    }

    if (salario >= 2112.01 && salario <= 2826.65) {
        const aliquota = 0.075;
        const parcela = 158.40;
        return calculoIrTotal(subtotal,aliquota,parcela);
    }

    if (salario >= 2826.66 && salario <= 3751.05) {
        const aliquota = 0.15;
        const parcela = 370.40;
        return calculoIrTotal(subtotal, aliquota, parcela);
    }

    if (salario >= 3751.06 && salario <= 4664.68) {
        const aliquota = 0.225;
        const parcela = 651.73;
        return calculoIrTotal(subtotal, aliquota, parcela);
    }

    if (salario > 4664.68) {
        const aliquota = 0.275;
        const parcela = 884.96;
        return calculoIrTotal(subtotal, aliquota, parcela);
    }

}

function calculoIrTotal(subtotal, aliquota, parcela) {
    //return (subtotal * aliquota) - parcela;
    const valorImposto = (subtotal * aliquota) - parcela;
    const valorFormatado = valorImposto.toFixed(2);
    return parseFloat(valorFormatado);
    
}
