document.querySelectorAll('.ver-mais').forEach(span => {
    span.addEventListener('click', () => {
        const td = span.closest('.descricao');
        const titulo = td.getAttribute('data-titulo');
        const descricao = td.getAttribute('data-completo');

        document.getElementById('tituloDrawer').innerText = titulo;
        document.getElementById('descricaoDrawer').innerText = descricao;
        document.getElementById('drawer').classList.add('ativo');
    });
});

document.getElementById('btnFechar').addEventListener('click', () => {
    document.getElementById('drawer').classList.remove('ativo');
});

document.querySelector('.fechar-icon').addEventListener('click', () => {
    document.getElementById('drawer').classList.remove('ativo');
});