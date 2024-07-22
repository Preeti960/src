document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });
});
setInterval(function() {
        var elem = document.querySelector('.carousel');
        var instance = M.Carousel.getInstance(elem);
        instance.next();
    }, 5000); 


function nextSlide() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.getInstance(elem);
    instance.next();
}

function prevSlide() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.getInstance(elem);
    instance.prev();
}


//best seller carsoul
document.addEventListener("DOMContentLoaded", function() {
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");

    let carouselVp = document.querySelector("#carousel-vp");
    let cCarouselInner = document.querySelector("#cCarousel-inner");
    let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

    let leftValue = 0;

    // Calculate total movement size based on item width and gap
    const totalMovementSize =
        parseFloat(
            document.querySelector(".cCarousel-item").getBoundingClientRect().width,
            10
        ) +
        parseFloat(
            window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
            10
        );

    prev.addEventListener("click", () => {
        if (leftValue < 0) {
            leftValue += totalMovementSize;
            cCarouselInner.style.left = leftValue + "px";
        }
    });

    next.addEventListener("click", () => {
        const carouselVpWidth = carouselVp.getBoundingClientRect().width;
        if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
            leftValue -= totalMovementSize;
            cCarouselInner.style.left = leftValue + "px";
        }
    });

    const mediaQuery510 = window.matchMedia("(max-width: 510px)");
    const mediaQuery770 = window.matchMedia("(max-width: 770px)");

    mediaQuery510.addEventListener("change", mediaManagement);
    mediaQuery770.addEventListener("change", mediaManagement);

    let oldViewportWidth = window.innerWidth;

    function mediaManagement() {
        const newViewportWidth = window.innerWidth;

        if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
            leftValue += totalMovementSize;
            cCarouselInner.style.left = leftValue + "px";
            oldViewportWidth = newViewportWidth;
        } else if (
            leftValue <= -totalMovementSize &&
            oldViewportWidth > newViewportWidth
        ) {
            leftValue -= totalMovementSize;
            cCarouselInner.style.left = leftValue + "px";
            oldViewportWidth = newViewportWidth;
        }
    }
});






