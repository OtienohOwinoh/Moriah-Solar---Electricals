(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


let services = [
    {name:"Solar Panels", img: "", description:"Moriah Solar and Electricals stands at the forefront of solar innovation, offering comprehensive installation services designed to power homes and businesses with clean, renewable energy. With a steadfast commitment to sustainability and excellence, we deliver top-tier solutions tailored to meet the diverse needs of our clientele. Our team of seasoned professionals brings a wealth of expertise to every project, ensuring seamless integration and optimal performance of solar systems. From residential rooftops to sprawling commercial complexes, we specialize in the design, installation, and maintenance of cutting-edge solar arrays that harness the power of the sun to reduce carbon footprints and lower energy costs. At Moriah Solar and Electricals, we're not just installing solar panels – we're empowering communities to embrace a greener, more sustainable future."},
    {name:"CCTV Solutions", img: "", description:"Step into a world of enhanced security and peace of mind with Moriah Solar and Electricals' comprehensive CCTV installation services. As a trusted leader in the field of surveillance technology, we specialize in providing cutting-edge CCTV solutions tailored to meet the diverse security needs of residential, commercial, and industrial clients. With a focus on innovation and reliability, our skilled technicians deploy state-of-the-art CCTV systems designed to deter intruders, monitor activities, and safeguard your property round the clock. From strategic camera placement to seamless integration with existing security infrastructure, we offer end-to-end solutions that prioritize safety and security above all else."},
    {name:"Electric Fencing", img: "", description:"Introducing Moriah Solar and Electricals, your premier destination for cutting-edge electric fencing solutions. At Moriah Solar and Electricals, we pride ourselves on being the forefront of innovation in the realm of security and protection. With a keen focus on quality craftsmanship and state-of-the-art technology, we deliver bespoke electric fencing installations tailored to safeguard your property with unparalleled efficiency and reliability. Our team of skilled professionals combines years of industry expertise with a commitment to excellence, ensuring that every project is executed with precision and care. Whether you're looking to fortify your residential estate or secure your commercial premises, trust Moriah Solar and Electricals to provide comprehensive electric fencing services that exceed expectations. With us, your safety is our top priority, and we're dedicated to delivering peace of mind through superior security solutions."},
    {name:"Wiring",  img: "", description:"Welcome to Moriah Solar and Electricals, where expertise meets efficiency in the realm of electrical wiring solutions. With a steadfast commitment to safety and reliability, we specialize in providing top-tier wiring services tailored to meet the unique needs of residential and commercial properties alike. Our team of skilled technicians brings years of experience to every project, ensuring precision and quality in every installation. From new construction projects to renovation endeavors, we offer comprehensive wiring solutions that adhere to the highest industry standards and regulations. At Moriah Solar and Electricals, we understand the importance of a robust electrical infrastructure in powering modern living and business operations."},
]
const serviceItems = document.querySelectorAll(".service-items");
// serviceItems.style.background = "red";
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");
const popupTitle = popup.querySelector("h1");
const popupImage = popup.querySelector("img");
const popupDescription = popup.querySelector("p");
console.log("services", serviceItems.length);

serviceItems.forEach(service => {

    service.addEventListener("click", function(event) {
    
        popupBox(event);
    
    
    
    })
    
})
popupCloseBtn.addEventListener("click", function(event) {
   
    popupBox(event);



})


popupCloseIcon.addEventListener("click", function(event) {
   
    popupBox(event);



})


function popupBox(event) {

    console.log("target", event.target.closest(".service-items"))
    if (event.target.closest(".service-items")) {

        // setup dialog box

        let serviceDetails = services[[...serviceItems].indexOf(event.target.closest(".service-items"))];
        console.log("serviceDetails", serviceDetails)
        popupTitle.textContent = serviceDetails.name
        
        popupDescription.textContent = serviceDetails.description
    }
    popup.classList.toggle("open");

   

}