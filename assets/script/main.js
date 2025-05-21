// QandAのToggle menu===========================
$('.qa__item_question').on('click', function () {
    const $item = $(this).closest('.qa__item');
    const $answer = $item.find('.qa__item_answer');
    if ($item.hasClass('open')) {
        $answer.slideUp(200, function () {
        $item.removeClass('open');
        });
    //開いた後にopenクラスをつける
    } else {
        $answer.slideDown(200, function () {
        $item.addClass('open');
        });
    }
});
//slickスライダーの指定==========================
$(document).ready(function(){
    $('.voices__slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
    });
});
//トップへ戻るボタン===========================
const backToTopButton = document.getElementById("toTopButton");
//ボタンが表示される条件
window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});
//ボタンをクリックしたときの動作
backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});