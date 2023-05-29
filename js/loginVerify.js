$(document).ready(function() {
  // Recupera o nome do usuário e o token de sessão do LocalStorage
  const token = localStorage.getItem('sessionToken');
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  
  // Verifica se o usuário está logado usando o token de sessão armazenado no LocalStorage
  if (token && user) {
    // o usuário está logado, exibe a mensagem de saudação com o nome do usuário
    $('#greeting').text('Olá ' + user.name + '!');
    
    // Exibe o link de logout
    $('#logout-link').show();
    
    // Adiciona um evento de clique para o link de logout
    $('#logout-link').click(function() {
      // Remove o token de sessão do LocalStorage
      localStorage.removeItem('sessionToken');
      
      // Redireciona o usuário para a página de login
      window.location.href = 'login.html';
    });
  } else {
    // o usuário não está logado, redirecione-o para a página de login
    window.location.href = 'login.html';
  }
});
