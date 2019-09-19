const menu = document.querySelector('.navbar-nav');
// создал переменную menu и добавил в нее элемент с классом navbar-nav

getRandomColor = () => {
// функция которая выдает рандомный цвет:
  const letters = '0123456789ABCDEF';
// переменная с цифрами и буквами, которые используются в цветах (пример: #f14cd5)
// конст - означает что переменную нельзя поменять
  let colorHash = '#';
// переменная с хешем (решеточка)
// лэт - означает что переменную можно поменять
  for (var i = 0; i < 6; i++) {
    colorHash += letters[Math.floor(Math.random() * 16)];
  }
// цикл, который который рандомно выбирает 6 символов из первого массива и добавляет их ко второй переменной
  return colorHash;
// возвращаем уже переделанную циклом переменную с каким-то цветом
}

document.addEventListener('scroll', ()=> menu.style.color = `${getRandomColor()}`)
// добавляем на страницу Эвент Листенер, в нем мы указали, 
// что будем отслеживать скролл и если поскроллить - 
// то он выполнит прописанное условие: меню -> style -> цвет = результат функции с цветами
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:4,
  nav:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  navSpeed:500,/* 
  navContainer:'.arrow_box', */
})