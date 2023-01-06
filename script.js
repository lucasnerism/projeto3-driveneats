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
    document.querySelector('button').classList.add('verde')
    document.querySelector('button div').classList.add('fecharpedido')
    document.querySelector('button div').innerHTML = 'Fechar Pedido'
    document.querySelector('button').removeAttribute('disabled')
  }
}

function enviarpedido() {
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
  valor1 = valores(preco1)
  valor2 = valores(preco2)
  valor3 = valores(preco3)
  valortotal = valor1 + valor2 + valor3

  const mensagem =
    'Olá, gostaria de fazer o pedido:\n- Prato: ' +
    prato +
    '\n- Bebida: ' +
    bebida +
    '\n- Sobremesa: ' +
    sobremesa +
    '\nTotal: R$ ' +
    valortotal.toFixed(2)

  const wapp = 'https://wa.me/5531992432456?text=' + encodeURI(mensagem)
  window.open(wapp)
}

function valores(string) {
  let numero = string.replace(/[^0-9]/g, '')
  return parseInt(numero) / 100
}
