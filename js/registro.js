$(document).ready(function () {
    $('button').click(function () {
        const name = $('#registerName').val();
        const username = $('#registerUsername').val();
        const email = $('#registerEmail').val();
        const password = $('#registerPassword').val();
        const repeatPassword = $('#registerRepeatPassword').val();
        const checked = $('#registerCheck').is(':checked');

        if (name === '' || username === '' || email === '' || password === '' || repeatPassword === '') {
            alert('Alls fields are required');
        } else if (password !== repeatPassword) {
            alert('Passwords do not match');
        } else if (!checked) {
            alert('Please agree to the terms');
        } else {

            // Fazer request para criar usuário
            $.ajax({
                url: 'http://api.quackcontador.xyz:3000/register',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ name, email, password }),
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
                    alert("Conta criada com sucesso!");
                    window.location.href = "index.html";
                },
                error: function(xhr, status, error) {
                    alert("Erro inesperado");
                    console.error(status, error);
                }
            });

        }

    })

})

// Check if the user is logged in
function isUserLoggedIn() {
    const sessionToken = localStorage.getItem('sessionToken');
    return sessionToken !== null;
}

// Get the username
function getUsername() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.username;
}