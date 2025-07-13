import { novaCategoria } from "../index.js"

const btnAdicionar = document.querySelector('#btn-adicionar')
const select = document.querySelector("#tipo-investimento")

let classe = 'investimento'
let valor = '6'

select.addEventListener('change', () => novaCategoria.exibirCampo(classe, valor))
btnAdicionar.addEventListener('click', () => novaCategoria.inserirNovaOpcao(classe, valor))