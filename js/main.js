$(window).on("load",function(){
    $(".loader ,inner").fadeOut(500, function() {
        //$(".loader").fadeOut(350);

    });

})



$(document).ready(function(){


    var typed = new Typed(".typed",{
        strings: ["Web Developer.", "Software Developer.","Web Developer."],
        typeSpeed:70,
        loop: true,
        startDelay: 1000,
        showCursor:false


    });

    $('.contactForm').on('submit', function(e) {
        e.preventDefault();
        var data = $(this).serializeArray();

        var action = $(this).attr('action');


        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: '/php/contact-form.php',
            complete: (response) => {
                response = JSON.parse(response.responseText);

                var alert = $(this).children('.alert');
                if(response.status == 'success') {
                    alert.addClass('alert-success').html('Great success!').show();
                } else {
                    alert.addClass('alert-danger').html('Wrong').show();
                }
            }
        });




    });
    // function contactForm() {
    //     $('#contactform').submit(function () {
    //         var action = '/Portfolio/php/contact-form.php';
    //         $("#message-info").slideUp(250, function () {
    //             $('#message-info').hide();
    //             $('#submit')
    //                 .after('<div class="loader"><div></div></div>')
    //                 .attr('disabled', 'disabled');
    //             $.post(action, {
    //                 name: $('#name').val(),
    //                 email: $('#email').val(),
    //                 subject: $('#subjectl').val(),
    //                 message: $('#message').val()
    //             },
    //                 function (data) {
	// 					data = JSON.parse(data);
	// 					var userMsg = document.getElementById('message-info');
    //                     userMsg.innerHTML = data.message;
	// 					userMsg.classList.add('alert', 'alert-success');
    //                     $('#message-info').slideDown(250);
    //                     $('#contactform .loader div').fadeOut('slow', function() {
    //                         $(this).remove();
    //                     });
    //                     $('#submit').removeAttr('disabled');
    //                     if (data.status.match('success') !== null) {
	// 						goog_report_conversion ();
    //                         $('#contactform').slideUp(850, 'easeInOutExpo');
    //                     }
    //                 });
    //         });
    //         return false;
    //     });
    // }





    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,

        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:5
            }
        }
    });


    var skillsTopOffset = $(".skillSection").offset().top;
    $(window).scroll(function(){

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                // easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor:false,
                lineWidth: 4 ,
                size: 152 ,
                onStep: function(from,to,percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });


        }
    });
    var typed = new Typed(".write",{
        strings: ["Web Developer.","From the Moment I produced  Hello World in  the console of my first application , I knew I was hooked into the world of web Development .but software development has never been just a job for me ,it is offered an engaging challenge to continually learn and improve my skills in creating high-quality websites."],
        typeSpeed:20,
        loop: false,
        startDelay: 1000,
        showCursor:false


    });
    AOS.init({
        easing: 'ease',
        duration:1800
    });

    // $('#up').on('click',function () {
    //     $('html, body').animate(keyframes:{
    //         scrollTop: 0
    //     }, options:2000);
    //
    //
    // });
    //
    // });








});

$('button').click(function(){
  $('button').toggleClass('active');
  $('.title').toggleClass('active');
  $('nav').toggleClass('active');
});
