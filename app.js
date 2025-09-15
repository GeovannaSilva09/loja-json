import produtos from './produtos.json' with { type: 'json' }
const container = document.querySelector(".container-json")

let grupoDiv // variável para armazenar a div atual

produtos.forEach((produto, index) => {
  // A cada 5 produtos cria uma nova div
  if (index % 4 === 0) {
    grupoDiv = document.createElement("div")
    grupoDiv.classList.add("caixa")
    container.appendChild(grupoDiv)
  }

  const card = document.createElement("div")
  card.classList.add("card")


  const img = document.createElement("img")
  img.src = `./img/${produto.imagem}`
  img.alt = produto.nome

  const nome = document.createElement('p')
  nome.textContent = produto.nome
  nome.classList.add("nome")

  const preco = document.createElement('p')
  preco.textContent = produto.preco
  preco.classList.add("preco")

  const descricao = document.createElement('p')
  descricao.textContent = produto.descricao

  const estrelas = document.createElement('div')
  estrelas.classList.add('estrelas')
  estrelas.textContent = '★'.repeat(produto.classificacao) + '☆'.repeat(5 - produto.classificacao)




  card.append(img, nome, preco, descricao, estrelas)
  grupoDiv.appendChild(card)
})