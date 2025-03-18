let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    exibirListaAmigos(); // Atualiza a exibição da lista de amigos
    inputNome.value = "";
}

// Função para exibir a lista de amigos na página
function exibirListaAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista existente
    lista.innerHTML = "";

    // Usa forEach para percorrer o array de amigos e adicionar cada nome à lista
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se há amigos disponíveis no array
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    // Gera um índice aleatório entre 0 e o tamanho do array menos 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome sorteado no elemento de resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;

     // Remove o amigo sorteado do array para evitar repetições
     amigos.splice(indiceAleatorio, 1);
}


