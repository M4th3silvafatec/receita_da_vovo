let btn = document.querySelector('.fa-eye');

// Adicionando um evento de interatividade com o olho
btn.addEventListener('click', () => {
    let inputsenha = document.querySelector('#senha');
    
    if (inputsenha.getAttribute('type') === 'password') {
        inputsenha.setAttribute('type', 'text');
    } else {
        inputsenha.setAttribute('type', 'password');
    }
});
    



function entrar() {
    let usuario = document.querySelector('#usuario');
    let userLabel = document.querySelector('#userLabel');

    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senhaLabel');

    let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

    let userValide = listaUser.find(item => 
        usuario.value === item.userCadastrado && senha.value === item.senhaCadastada
    );

    if (!usuario.value || !senha.value) {
        if (!usuario.value) userLabel.style.color = 'red';
        if (!senha.value) senhaLabel.style.color = 'red';
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (userValide) {
        // Salvar o usuário logado
        localStorage.setItem('usuarioLogado', JSON.stringify({
            nome: userValide.nomeCadastrado,
            usuario: userValide.userCadastrado
        }));

        // Redirecionar para a tela principal
        window.location.href = 'menu.html';
    } else {
        userLabel.style.color = 'red';
        senhaLabel.style.color = 'red';
        alert('Usuário ou senha errados');
    }
}
