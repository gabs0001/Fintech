import { novaCategoria } from "../index.js"

const btnAdicionar = document.querySelector('#btn-adicionar')
let select = document.querySelector("#tipo-recebimento")

let classe = 'recebimento'
let valor = '8'

select.addEventListener('change', () => novaCategoria.exibirCampo(classe, valor))
btnAdicionar.addEventListener('click', () => novaCategoria.inserirNovaOpcao(classe, valor))