// custom select///
$(function() {
	jcf.replaceAll();
});
$(document).ready(function(){
    $(".btn_toogle_menu_js").click(function(){
        $(".sidebar_holder_js_toogle").toggleClass("opened");
        $(".sidebar").toggleClass("active");  // for fix ie 11 (z-index + position:relative)
    });
    $(".js_close_menu").click(function(){
        $(".sidebar_holder_js_toogle").removeClass("opened");
        $(".sidebar").removeClass("active");
    });
    $('.custom-file-input').on('change',function(){
	  $(this).next('.custom-file-label').addClass("selected").html($(this).val());
	})
});