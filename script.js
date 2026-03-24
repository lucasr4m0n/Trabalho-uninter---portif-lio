/* Comentário Explicativo: Este script gerencia a validação do formulário de contato 
   e simula o envio conforme os requisitos da atividade prática.
*/
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const status = document.getElementById('statusEnvio');

    // Validação de campos obrigatórios [cite: 59]
    if (nome === '' || email === '' || mensagem === '') {
        alert('Erro: Todos os campos do formulário devem ser preenchidos.');
        return;
    }

    // Validação de formato de e-mail usando Regex [cite: 60]
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Erro: O formato do e-mail inserido é inválido.');
        return;
    }

    // Simulação de envio com sucesso e limpeza de campos [cite: 61]
    status.innerText = "Mensagem enviada com sucesso!";
    this.reset();

    // Remove o alerta visual após 4 segundos
    setTimeout(() => {
        status.innerText = "";
    }, 4000);
});
