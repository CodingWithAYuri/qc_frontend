$(document).ready(function() {
    console.log( "ready!" );
    

    $( "#form" ).submit(function( event ) {
        event.preventDefault();
        const salario = parseFloat($("#salario").val());

        if(!isNaN(salario)) {
          const inssAutonomo = calculaInssAutonomo(salario);
          $("#inssAutonomo").text(inssAutonomo);
  
          const inssClt = calculaInss(salario);
          $("#inssClt").text(inssClt);
  
          const irpf = calculoIr(salario);
          $(".irpf").text(irpf);
  
          showTable();
         
        } else {
          hideTable();
          
        }
      });

      function showTable () {
        // Exibe a tabela e o resultado
        $("#resultTable").show();
      }

      function hideTable () {
        // Esconde a tabela e o resultado
        $("#resultTable").hide();

      }


});

