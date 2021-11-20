searchForm = document.querySelector('.search-form');
document.querySelector('#search-form').onclick = () => {
    searchForm.classList.toggle('ative');
}
window.onscroll = () => {
    searchForm.classList.remove('ative');

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () => {

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}