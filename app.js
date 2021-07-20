const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const model = document.querySelector('#model');
openBtn.addEventListener('click', () => {
    model.classList.toggle('hide');
    openBtn.classList.toggle('hide');
})

closeBtn.addEventListener('click', () => {
    model.classList.toggle('hide');
    openBtn.classList.toggle('hide');

})