document.addEventListener('DOMContentLoaded', function(event) {
  const modal = document.querySelector('.modal')
  const modalBtn = document.querySelector('.business__icon')
  const closeBtn = document.querySelector('.modal__button')


  modalBtn.addEventListener('click', () => {
    modal.classList.remove('modal');
    modal.classList.add('modal__active');
  })

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal__active');
    modal.classList.add('modal');
  })

})