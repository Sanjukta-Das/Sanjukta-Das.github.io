// the below function changes the appearence of menubar on scrolling down
$(function(){
    $(document).scroll(function(){
        var $nav = $(".sticky-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());  
    });
});