var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".portfolio-item img").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});

$(".portfolio-item img").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});


$(".portfolio-item img").on("mouseenter", function() {
  console.log("Mouse entered");
  cursor.addClass("active");
  follower.addClass("active");
});

$(".portfolio-item img").on("mouseleave", function() {
  console.log("Mouse left");
  cursor.removeClass("active");
  follower.removeClass("active");
});

const overlayText = document.getElementById("text-overlay");

overlayText.addEventListener("mouseenter", function() {
    overlayText.classList.add('fade-out'); // Анимация исчезновения
    setTimeout(() => {
        overlayText.innerHTML = "NEW TEXT<br>MORE NEW TEXT";
        overlayText.classList.remove('fade-out');
        overlayText.classList.add('fade-in'); // Анимация появления
    }, 500); // Время должно совпадать с продолжительностью transition
});

overlayText.addEventListener("mouseleave", function() {
    overlayText.classList.add('fade-out'); // Анимация исчезновения
    setTimeout(() => {
        overlayText.innerHTML = "LET'S CREATE<br>SOMETHING<br>SPECIAL<br>TOGETHER";
        overlayText.classList.remove('fade-out');
        overlayText.classList.add('fade-in'); // Анимация появления
    }, 500); // Время должно совпадать с продолжительностью transition
});






// Получаем модальное окно
var modal = document.getElementById("imageModal");

// Получаем изображение и элемент модального изображения
var modalImg = document.getElementById("img01");

// Находим все изображения с классом 'zoomable'
var images = document.querySelectorAll('.zoomable');

// Добавляем обработчик клика для каждого изображения
images.forEach(function(img) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Получаем элемент для закрытия модального окна
var closeBtn = document.querySelector(".close-image-modal");

// Закрываем модальное окно при нажатии на кнопку закрытия
closeBtn.onclick = function() {
    modal.style.display = "none";
}
 

