let Count=function(selector){
    $(selector).each(function(){
        $(this).animate(
            {
                Counter:$(this).text()
            },{
                duration:4000,
                easing:"swing",
                step:function(value){
                    $(this).text(Math.ceil(value))
                }
            }
        );
    });
};

let a=0;
$(window).scroll(function(){
    let Top=$(".count-section").offset().top-window.innerHeight;
    if(a=0&&$(window).scrollTop()>=Top){
        a++;
        Count(".count-box>h1")
    }
})