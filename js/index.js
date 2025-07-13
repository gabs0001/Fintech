export const novaCategoria = {
    exibirCampo(classe, valor) {
        const select = document.querySelector(`#tipo-${classe}`)
        let novaCategoriaDiv = document.querySelector("#novaCategoriaDiv")
        
        if (select.value === valor) novaCategoriaDiv.style.display = "block"
        else novaCategoriaDiv.style.display = "none"
    },

    inserirNovaOpcao(classe, valor) {
        let select = document.querySelector(`#tipo-${classe}`)
        let novaCategoria = document.querySelector("#outros").value.trim()
        
        if (novaCategoria !== "") {
            let opcao = document.createElement("option")
            opcao.value = novaCategoria.toLowerCase()
            opcao.text = novaCategoria
            opcao.classList.add(`option-tipo-${classe}`)
            
            let optionOutros = select.querySelector(`.option-tipo-${classe}[value="${valor}"]`)
            select.insertBefore(opcao, optionOutros)

            document.getElementById("novaCategoriaDiv").style.display = "none"
            document.getElementById("outros").value = ""
        }
    }
}