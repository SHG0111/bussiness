$(document).ready(function () {
  // bg white for nav on scroll
  if (window.isScroll) {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() >= 10) {
        $('body').addClass('notTop');
      } else {
        $('body').removeClass('notTop');
      }
    });
  }

  var $gallery = $('.gallery-1');
  var $testmoninal = $('.testmoninal-slider');
  var options = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    draggable: false,
    swipe: false,
    touchMove: false,
    useTransform: false,
    edgeFriction: 0,
    arrows: false,
    accessibility: false,
    infinite: true,
    cssEase: 'linear',
    rtl: false,
    rows: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }
  $gallery.slick(options);
  $testmoninal.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    speed: 1000,
    focusOnSelect: true,
    rtl: false,
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  var slickRtl = function ($slickinstance) {
    $($slickinstance).slick('slickSetOption', 'rtl', true)
    $($slickinstance).attr('dir', 'rtl');
    $($slickinstance).slick('setPosition');
  }
  var slickltr = function ($slickinstance) {
    $($slickinstance).slick('slickSetOption', 'rtl', false)
    $($slickinstance).attr('dir', 'ltr');
    $($slickinstance).slick('setPosition');
  }

  var makeArabicBtn = function () {
    $('.lang-btn a').addClass('hidden');
    $('.lang-btn .ar').removeClass('hidden');
  }
  var makeEnglishBtn = function () {
    $('.lang-btn a').addClass('hidden');
    $('.lang-btn .en').removeClass('hidden');
  }

  // directions of document
  if ($('html').attr('dir') === 'rtl') {
    makeEnglishBtn();
    $('link[href="css/rtl.css"]').prop('disabled', false);
    $('body .toLeft').addClass('toRight').removeClass('toLeft');

    slickRtl($gallery);
    slickRtl($testmoninal);


    $("[data-localize]").localize("language/lang" , {
      language: "ar"
    });

  } else if ($('html').attr('dir') === 'ltr') {
    makeArabicBtn();
    $('link[href="css/rtl.css"]').prop('disabled', true);

    slickltr($gallery);
    slickltr($testmoninal);


    $("[data-localize]").localize("language/lang", {
      language: "en"
    });
  };

  $('.lang-btn').click(function (e) {
    e.preventDefault();
    if ($('html').attr('dir') === 'ltr') {
      makeEnglishBtn();
      $('.toLeft').addClass('toRight');
      $('html').removeClass('sidebarShown ');
      $('link[href="css/rtl.css"]').prop('disabled', false);
      $('html').attr('dir', 'rtl');

      slickRtl($gallery);
      slickRtl($testmoninal);

      $("[data-localize]").localize("language/lang", {
        language: "ar"
      });
    } else if ($('html').attr('dir') === 'rtl') {
      makeArabicBtn();
      $('html').removeClass('sidebarShown ');
      $('html').attr('dir', 'ltr');
      $('.toRight').removeClass('toRight').addClass('toLeft');
      $('link[href="css/rtl.css"]').prop('disabled', true);
      slickltr($gallery);
      slickltr($testmoninal);
      $("[data-localize]").localize("language/lang", {
        language: "en"
      });
    }
  });
  // ////////////////////////////
});
$(window).resize(function () {
  $('html').removeClass('sidebarShown ');
});