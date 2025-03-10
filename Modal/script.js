const openModalBtn = document.getElementById('open-modal');
const closeModalBtn1 = document.getElementById('close-modal-top');
const closeModalBtn2 = document.getElementById('close-modal');

const container = document.getElementById('root-container');

openModalBtn.addEventListener('click', () => {
  document.getElementById('modal').style.display = 'block';
  container.classList.add('container-opacity');
  openModalBtn.style.display = 'none';
});

closeModalBtn1.addEventListener('click', () => {
    closeButtonListener();
});

closeModalBtn2.addEventListener('click', () => {
    closeButtonListener();
});

const closeButtonListener = ()=>{
    document.getElementById('modal').style.display = 'none';
    container.classList.remove('container-opacity');
    openModalBtn.style.display = 'block';
}