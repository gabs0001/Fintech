import { novaCategoria } from "../index.js"

const btnAdicionar = document.querySelector('#btn-adicionar')
let select = document.querySelector("#tipo-gasto")

let classe = 'gasto'
let valor = '9'

select.addEventListener('change', () => novaCategoria.exibirCampo(classe, valor))
btnAdicionar.addEventListener('click', () => novaCategoria.inserirNovaOpcao(classe, valor))