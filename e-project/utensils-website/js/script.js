// Smooth Scroll
$(".nav-link").on("click", function(e){
    if(this.hash && $(this.hash).length){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - 70
        }, 800);
    }
});



// Scroll Reveal Animation
$(window).on("scroll", function(){
    $(".fade-section").each(function(){
        if($(window).scrollTop() + $(window).height() - 100 > $(this).offset().top){
            $(this).addClass("active");
        }
    });
});

// Dynamic Productivity Counter
let counter = 0;
setInterval(()=>{
    counter += 5;
    if(counter <= 1000){
        document.title = "KitchenSet - " + counter + "+ Happy Customers";
    }
},200);



//Contact form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); 

    document.getElementById("successMsg").innerText =
    "Your message has been sent successfully!";

    const formData = new FormData(this);
    const params = new URLSearchParams(formData).toString();

    window.history.pushState({}, "", "?" + params);

    this.reset();
});








