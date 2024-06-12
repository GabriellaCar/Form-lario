<script>
const form = document.getElementById("contact-form");
form.addEventListener("submit", function(event) 
    event.preventDefault();
    const nome = form.elements.nome.value;
    const email = form.elements.email.value;
    const mensagem = form.elements.mensagem.value;

    // Aqui você pode processar os dados como desejar (enviar para o servidor, etc.)
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Mensagem:", mensagem);
);

</script>