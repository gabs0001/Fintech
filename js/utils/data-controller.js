export const dataController = {
    editarDados() {
        const btnSalvarEdicao = document.getElementById('btn-salvar-edicao')
        const btnCancelarEdicao = document.getElementById('btn-cancelar-edicao')
        const btnFecharPopUp = document.getElementById('fechar-popup')

        let linha = null

        let janelaPopUp = document.getElementById('janela__popup')
        let overlay = document.getElementById('overlay')

        document.querySelectorAll('span img[data-edit]').forEach(img => {
            img.addEventListener('click', () => {
                const editarCategoria = document.getElementById('editar-categoria')
                const editarDescricao = document.getElementById('editar-descricao')
                const editarValor = document.getElementById('editar-valor')
                const editarData = document.getElementById('editar-data')

                linha = img.closest('tr')

                const spanDescricao = linha.querySelector('.preview')
                const campoCategoria = linha.children[0]

                editarCategoria.value = campoCategoria.textContent
                editarDescricao.value = spanDescricao.textContent.trim()
            
                const valorFormatado = linha.children[2].textContent.replace('R$', '').trim().replace('.', '').replace(',', '.')
                editarValor.value = parseFloat(valorFormatado).toFixed(2)

                const dataTexto = linha.children[3].textContent
                const partes = dataTexto.split('/')
                const dataFormatada = `${partes[2]}-${partes[1]}-${partes[0]}`
                editarData.value = dataFormatada

                janelaPopUp.classList.add('ativo')
                overlay.classList.add('ativo')
            })
        })

        btnSalvarEdicao.addEventListener('click', (evt) => {
            evt.preventDefault()
            if(!linha) return

            const editarCategoria = document.getElementById('editar-categoria')
            const editarDescricao = document.getElementById('editar-descricao')
            const editarValor = document.getElementById('editar-valor')
            
            const spanDescricao = linha.querySelector('.preview')
            const campoCategoria = linha.children[0]

            if(editarCategoria.value === '') editarCategoria.value = campoCategoria.textContent
            
            if(editarDescricao.value === '') editarDescricao.value = spanDescricao.textContent.trim()
            
            if(editarValor.value === '') editarValor.value = parseFloat(valorFormatado).toFixed(2)
            
            if(editarCategoria.value !== campoCategoria.textContent) campoCategoria.textContent = editarCategoria.value
            
            if(editarDescricao.value !== spanDescricao.textContent.trim()) {
                spanDescricao.textContent = editarDescricao.value
                linha.children[1].dataset.completo = editarDescricao.value
            }
            
            if(editarValor.value !== linha.children[2].textContent) linha.children[2].textContent = `R$ ${editarValor.value.replace('.', ',')}`
            
            janelaPopUp.classList.remove('ativo')
            overlay.classList.remove('ativo')
            linha = null
        })

        btnFecharPopUp.addEventListener('click', () => {
            janelaPopUp.classList.remove('ativo')
            overlay.classList.remove('ativo')
        })

        btnCancelarEdicao.addEventListener('click', (evt) => {
            evt.preventDefault()
            janelaPopUp.classList.remove('ativo')
            overlay.classList.remove('ativo')
        })

    },

    excluirDados() {
        document.querySelectorAll('span img[data-delete]').forEach(img => {
            img.addEventListener('click', () => {
                const linha = img.closest('tr')
                linha.remove()
            })
        })
    }
}