const menuBtn = document.getElementById('menu-btn');
const opcoesMenu = document.getElementById('opcoes-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    opcoesMenu.classList.toggle('active');
});
