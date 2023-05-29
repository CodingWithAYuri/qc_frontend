$(document).ready(function() {
  $('#signup-form').on('submit', function(e) {
    e.preventDefault();
    
    const email = $("#email").val();
    const password = $("#password").val();

    if (email == "" || password == "") {
      alert("Por favor, preencha todos os campos");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de email válido");
      return false;
    }

    // Fazer request para autenticar usuário
    $.ajax({
      url: 'http://api.quackcontador.xyz:3000/auth',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ email, password }),
      success: function(response) {
        if (!response.success) {
          alert(response.message);
          return false;
        }

        // Formatar informacoes do usuario e sessao
        const sessionToken = response.sessionToken || '1234';
        const user = {
          name: response.user.name,
          email: response.user.email
        };

        // Criar registros no localStorage
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('sessionToken', sessionToken);

        // Alerta de sucesso e redirecionamento
        alert("Login realizado com sucesso!");
        window.location.href = "index.html";
      },
      error: function(xhr, status, error) {
        alert("Erro inesperado");
        console.error(status, error);
      }
    });

  });
});

