let amigos = [];


function adicionarAmigo() {

  const nomeAmigo = document.getElementById("amigo").value;


  if (nomeAmigo.trim() === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nomeAmigo);

 
  document.getElementById("amigo").value = "";

  
  atualizarLista();
}


function atualizarLista() {

  const lista = document.getElementById("listaAmigos");


  lista.innerHTML = "";


  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}


function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Não há amigos para sortear.");
    return;
  }


  const indiceAleatorio = Math.floor(Math.random() * amigos.length);


  const amigoSorteado = amigos[indiceAleatorio];

 
  const resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}

