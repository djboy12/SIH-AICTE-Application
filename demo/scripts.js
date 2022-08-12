var hight = $('.header a').hight();
$(windows).scroll(function)(){
    if($(this).scrolltop() > hight){
        $('.navbar').addclass=('fixed');
    }else{
        $('.navbar').removeclass=('fixed');
    }

}