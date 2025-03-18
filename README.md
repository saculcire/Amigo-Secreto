PROJETO AMIGO SECRETO

Este é um projeto de aplicação web para realizar sorteios de amigo secreto, onde o usuário pode adicionar os nomes dos amigos, realizar o sorteio aleatório e visualizar o resultado.

FUNCIONALIDADES

Adicionar Amigos: O usuário pode digitar o nome de seus amigos e adicioná-los à lista.

Sortear Amigo Secreto: A cada sorteio, o nome de um amigo é escolhido aleatoriamente.

Evitar Repetição: Após um sorteio, o nome sorteado é removido da lista para garantir que não se repita em sorteios subsequentes.

DIFICULDADES ENFRENTADAS

Durante o desenvolvimento deste projeto, encontrei algumas dificuldades que foram superadas ao longo do processo. Abaixo, estão os pontos principais:

1. Sortear Amigo Aleatoriamente
Desafio: Uma das maiores dificuldades foi a criação da função de sorteio. Eu precisava gerar um índice aleatório e exibir o nome sorteado.
Solução: Usei Math.random() para gerar um valor aleatório e Math.floor() para arredondá-lo para um número inteiro válido como índice do array. Além disso, eu aprendi que é importante validar se há amigos na lista antes de sortear.

2. Evitar Repetição no Sorteio
Desafio: Durante os testes, percebi que o nome sorteado estava se repetindo em sorteios subsequentes.
Solução: Para resolver isso, utilizei o método splice() para remover o nome sorteado do array, garantindo que o mesmo amigo não fosse sorteado novamente.
   
TECNOLOGIAS UTILIZADAS

  *HTML: Para a estruturação da página.

  *CSS: Para o estilo visual da página.

  *JavaScript: Para a lógica de funcionamento do sorteio e interação com o DOM.

COMO RODAR O PROJETO

  *Clone este repositório em seu computador.

  *Abra o arquivo index.html em seu navegador para visualizar o projeto em funcionamento.

  *Utilize a funcionalidade de adicionar amigos e realizar sorteios.
