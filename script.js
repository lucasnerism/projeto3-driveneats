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
