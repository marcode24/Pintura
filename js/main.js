const header = document.getElementById('header').classList;
window.addEventListener('scroll', function() {
    (window.scrollY > 200) ? header.add('header-scrolled') : header.remove('header-scrolled');
});
(window.scrollY > 200) ? header.add('header-scrolled') : header.remove('header-scrolled');
