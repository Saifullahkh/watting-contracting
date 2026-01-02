$(document).ready(function () {
  $("#prevOurProject").click(function () {
    var currentIndex = $(".slickSliderNavigation").slick("slickCurrentSlide");
    var totalSlides = $(".slickSliderNavigation").slick("getSlick").slideCount;
    var prevIndex = (currentIndex + totalSlides) % totalSlides;

    // Remove active class from all links
    $(".ourProject-slider-link").removeClass("active");

    // Add active class to the previous link
    var prevLink = $(".slickSliderNavigation")
      .find(".slick-slide")
      .eq(prevIndex)
      .find(".ourProject-slider-link");
    prevLink.addClass("active");

    console.log(prevLink);
    var prevTabId = prevLink.attr("href");
    $(".tab-pane").removeClass("show");
    $(".tab-pane").removeClass("active");
    $(prevTabId).addClass("active show");
  });

  $("#nextOurProject").click(function () {
    var currentIndex = $(".slickSliderNavigation").slick("slickCurrentSlide");
    var totalSlides = $(".slickSliderNavigation").slick("getSlick").slideCount;
    var nextIndex = (currentIndex + 2) % totalSlides;

    // Remove active class from all links
    $(".ourProject-slider-link").removeClass("active");

    // Add active class to the next link
    var nextLink = $(".slickSliderNavigation")
      .find(".slick-slide")
      .eq(nextIndex)
      .find(".ourProject-slider-link");
    nextLink.addClass("active");
    if (totalSlides === currentIndex + 1) {
      var currentLink = $(".slickSliderNavigation")
        .find(".slick-slide")
        .eq(currentIndex + 1)
        .find(".ourProject-slider-link");
      currentLink.addClass("active");
    }

    var nextTabId = nextLink.attr("href");
    $(".tab-pane").removeClass("active show");
    $(nextTabId).addClass("active show");
  });
});


function checkScroll() {
  let sticky = $(".header-panel-btm"),
      scroll = $(window).scrollTop();
  if (sticky.hasClass('homepage-header'))
    return;
  if (scroll >= 10)
    sticky.addClass("header-sticky");
  else
    sticky.removeClass("header-sticky");
}

checkScroll();

$(window).scroll(function() {
  checkScroll();
});

$(function (){
  $(".light-logo").hide();
})

$(window).on('load', function (){
   $(function (){
      $("#preloader").fadeOut()
   })
})


function toggleContent(cardId) {
  var card = document.getElementById(cardId);
  var cardContent = card.querySelector(".certificatesOfExcellence__cardContent p");
  var toggleButton = card.querySelector(".toggleButton button");
  var readMoreIcon = card.querySelector(".readmoreBtnImg");

  cardContent.classList.toggle("show");

// Toggle the rotation class for the SVG
  readMoreIcon.classList.toggle('rotate180');

  if (cardContent.classList.contains("show")) {
    toggleButton.innerHTML =
        '<span class="readmoreBtnImg rotate180"><img src="../images/right copy 7.png" /></span>' + read_less_text;
  } else {
    toggleButton.innerHTML =
        '<span class="readmoreBtnImg"><img src="../images/right copy 7.png" /></span>' + read_more_text;
  }
}


function showMaximizedImage(cardId) {
  var imageSrc = document.getElementById(cardId).querySelector('.certificatesOfExcellence__cardImage img').src;
  var imageName = document.getElementById(cardId).querySelector('.certificatesOfExcellence__cardContent h5').innerHTML;
  document.getElementById('maximizedImage').src = imageSrc;
  document.getElementById('certificateName').innerHTML = imageName;
  document.getElementById('certificatesOfExcellence-popup').style.display = 'flex';
}

function hideMaximizedImage() {
  document.getElementById('certificatesOfExcellence-popup').style.display = 'none';
}
