! function (e, t) {
    var i = t.documentElement;
    t.body;

    function n() {
        var t = i.clientWidth,
            n = t >= 1226 ? t / 10 : 122.6;
        i.style.fontSize = n + "px", e.rootFontSize = n, e.oriRootFontSize = 256
    }
    if (e.addEventListener("resize", (function () {
            n()
        }), !1), e.addEventListener("pageshow", (function (e) {
            e.persisted && n()
        }), !1), n(), e.devicePixelRatio && e.devicePixelRatio >= 2) {
        var o = t.createElement("div"),
            d = t.createElement("body");
        o.style.border = "0.5px solid transparent", d.appendChild(o), i.appendChild(d), 1 === o.offsetHeight && i
            .classList.add("hairlines"), i.removeChild(d)
    }
}(window, document)


$(function(){
    $(".galeria").slick({
     dots: true,
     infinite: true,
     autoplay:true,
     slidesToShow:1,
     slidesToScroll: 1,
     autoplaySpeed: 5000,
     responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          autoplay:true,
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 5000,
        }
      },
     ]
  });
});