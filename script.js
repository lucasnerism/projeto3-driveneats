function selecionarPrato(prato) {
  const selecionadoantes = document.querySelector('.prato .selecionado')

  if (selecionadoantes !== null) {
    selecionadoantes.classList.remove('selecionado')
  }

  prato.classList.add('selecionado')

  ativarBotao()
}

function selecionarBebida(bebida) {
  const selecionadoantes = document.querySelector('.bebida .selecionado')

  if (selecionadoantes !== null) {
    selecionadoantes.classList.remove('selecionado')
  }

  bebida.classList.add('selecionado')

  ativarBotao()
}

function selecionarSobremesa(sobremesa) {
  const selecionadoantes = document.querySelector('.sobremesa .selecionado')

  if (selecionadoantes !== null) {
    selecionadoantes.classList.remove('selecionado')
  }

  sobremesa.classList.add('selecionado')

  ativarBotao()
}

function ativarBotao() {
  let quantidade = document.getElementsByClassName('selecionado').length

  if (quantidade == 3) {
    document.querySelector('footer button').classList.add('verde')
    document.querySelector('footer button div').classList.add('fecharpedido')
    document.querySelector('footer button div').innerHTML = 'Fechar Pedido'
    document.querySelector('footer button').removeAttribute('disabled')
  }
}

function confirmarPedido() {
  document.querySelector('.overlay').style.display = 'initial'
  const prato = document.querySelector('.prato .selecionado h2').innerHTML
  const bebida = document.querySelector('.bebida .selecionado h2').innerHTML
  const sobremesa = document.querySelector(
    '.sobremesa .selecionado h2'
  ).innerHTML
  const preco1 = document.querySelector('.prato .selecionado .preco').innerHTML

  const preco2 = document.querySelector('.bebida .selecionado .preco').innerHTML

  const preco3 = document.querySelector(
    '.sobremesa .selecionado .preco'
  ).innerHTML

  document.querySelector('#item1 p:first-child').innerHTML = prato
  document.querySelector('#item1 p:last-child').innerHTML = preco1
  document.querySelector('#item2 p:first-child').innerHTML = bebida
  document.querySelector('#item2 p:last-child').innerHTML = preco2
  document.querySelector('#item3 p:first-child').innerHTML = sobremesa
  document.querySelector('#item3 p:last-child').innerHTML = preco3

  valor1 = valores(preco1)
  valor2 = valores(preco2)
  valor3 = valores(preco3)
  valortotal = valor1 + valor2 + valor3

  preco = valortotal.toFixed(2)
  preco = preco.replace('.', ',')

  document.querySelector('#total').innerHTML = 'R$ ' + preco

  const mensagem =
    'Olá, gostaria de fazer o pedido:\n- Prato: ' +
    prato +
    '\n- Bebida: ' +
    bebida +
    '\n- Sobremesa: ' +
    sobremesa +
    '\nTotal: R$ ' +
    preco

  return mensagem
}

function valores(string) {
  let numero = string.replace(/[^0-9]/g, '')
  return parseInt(numero) / 100
}

function enviarPedido(mensagem) {
  const nome = prompt('Qual o seu nome?')
  const endereco = prompt('Qual o seu endereço?')
  mensagem = mensagem + '\n\nNome: ' + nome + '\nEndereço: ' + endereco

  const wapp = 'https://wa.me/5531992432456?text=' + encodeURI(mensagem)
  window.open(wapp)
  //já vou deixar o console.log aqui pra facilitar a checagem da mensagem
  //console.log(mensagem)
}

function cancelar() {
  document.querySelector('.overlay').style.display = 'none'
}
