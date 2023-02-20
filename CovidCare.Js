const NavList = document.querySelector('#NavList');
const Hamburger = document.querySelector('#Hamburger');

Hamburger.addEventListener('click', () => {
    NavList.classList.toggle("active");
});

document.querySelectorAll('.NavItems').forEach() (n=> n.addEventListener('click' ,()=> {
    NavList.classList.remove("active")
}))
