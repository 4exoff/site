$('document').ready(function(){
	//слайдер
	//-----------------------------------------------------web-разработка
	$('#web').on('click', function () {
	    $('.web-development').css({ "opacity": "1","z-index":"110"});
	    $('.seo-promotion').css({ "opacity": "0","z-index":"100"});
	    $('.contextual-advertising').css({ "opacity": "0","z-index":"100"});
	    $('.c-configuring').css({ "opacity": "0","z-index":"100"});
    });
    //
	//таймеру
    setInterval(function(){
		$('#web0 img').attr('src', $('#web1 img').attr('src'));
		$('#web0 .webLogoTitle').text($('#web1 .webLogoTitle').text());	
		$('#web1 img').attr('src', $('#web2 img').attr('src'));
		$('#web1 .webLogoTitle').text($('#web2 .webLogoTitle').text());
		$('#web2 img').attr('src', $('#web3 img').attr('src'));
		$('#web2 .webLogoTitle').text($('#web3 .webLogoTitle').text());
		$('#web3 img').attr('src', $('#web4 img').attr('src'));
		$('#web3 .webLogoTitle').text($('#web4 .webLogoTitle').text());
		$('#web4 img').attr('src', $('#web5 img').attr('src'));
		$('#web4 .webLogoTitle').text($('#web5 .webLogoTitle').text());
		$('#web5 img').attr('src', $('#web0 img').attr('src'));
	    $('#web5 .webLogoTitle').text($('#web0 .webLogoTitle').text());
	},3000);
    //
    //по нажатию 
    //лево
    $('.navSliderStepsWorkLeft').on('click', function () {
	    $('#web0 img').attr('src', $('#web1 img').attr('src'));
		$('#web0 .webLogoTitle').text($('#web1 .webLogoTitle').text());	
		$('#web1 img').attr('src', $('#web2 img').attr('src'));
		$('#web1 .webLogoTitle').text($('#web2 .webLogoTitle').text());
		$('#web2 img').attr('src', $('#web3 img').attr('src'));
		$('#web2 .webLogoTitle').text($('#web3 .webLogoTitle').text());
		$('#web3 img').attr('src', $('#web4 img').attr('src'));
		$('#web3 .webLogoTitle').text($('#web4 .webLogoTitle').text());
		$('#web4 img').attr('src', $('#web5 img').attr('src'));
		$('#web4 .webLogoTitle').text($('#web5 .webLogoTitle').text());
		$('#web5 img').attr('src', $('#web0 img').attr('src'));
	    $('#web5 .webLogoTitle').text($('#web0 .webLogoTitle').text());
    });
    //право
    $('.navSliderStepsWorkRight').on('click', function () {
    	$('#web0 img').attr('src', $('#web5 img').attr('src'));
	    $('#web0 .webLogoTitle').text($('#web5 .webLogoTitle').text());
	    $('#web5 img').attr('src', $('#web4 img').attr('src'));
		$('#web5 .webLogoTitle').text($('#web4 .webLogoTitle').text());	
		$('#web4 img').attr('src', $('#web3 img').attr('src'));
		$('#web4 .webLogoTitle').text($('#web3 .webLogoTitle').text());
		$('#web3 img').attr('src', $('#web2 img').attr('src'));
		$('#web3 .webLogoTitle').text($('#web2 .webLogoTitle').text());
		$('#web2 img').attr('src', $('#web1 img').attr('src'));
		$('#web2 .webLogoTitle').text($('#web1 .webLogoTitle').text());
		$('#web1 img').attr('src', $('#web0 img').attr('src'));
		$('#web1 .webLogoTitle').text($('#web0 .webLogoTitle').text());
    });
    //-----------------------------------------------------!web-разработка

    //-----------------------------------------------------seo-продвижение
   	$('#seo').on('click', function () {
	    $('.web-development').css({ "opacity": "0","z-index":"100"});
	    $('.seo-promotion').css({ "opacity": "1","z-index":"110"});
	    $('.contextual-advertising').css({ "opacity": "0","z-index":"100"});
	    $('.c-configuring').css({ "opacity": "0","z-index":"100"});
    });
   	//
   	//таймеру
    setInterval(function(){
		$('#seo0 img').attr('src', $('#seo1 img').attr('src'));
		$('#seo0 .seoLogoTitle').text($('#seo1 .seoLogoTitle').text());	
		$('#seo1 img').attr('src', $('#seo2 img').attr('src'));
		$('#seo1 .seoLogoTitle').text($('#seo2 .seoLogoTitle').text());
		$('#seo2 img').attr('src', $('#seo3 img').attr('src'));
		$('#seo2 .seoLogoTitle').text($('#seo3 .seoLogoTitle').text());
		$('#seo3 img').attr('src', $('#seo4 img').attr('src'));
		$('#seo3 .seoLogoTitle').text($('#seo4 .seoLogoTitle').text());
		$('#seo4 img').attr('src', $('#seo5 img').attr('src'));
		$('#seo4 .seoLogoTitle').text($('#seo5 .seoLogoTitle').text());
		$('#seo5 img').attr('src', $('#seo6 img').attr('src'));
		$('#seo5 .seoLogoTitle').text($('#seo6 .seoLogoTitle').text());
		$('#seo6 img').attr('src', $('#seo0 img').attr('src'));
	    $('#seo6 .seoLogoTitle').text($('#seo0 .seoLogoTitle').text());
	},3000);
    //
    //по нажатию 
    //лево
    $('.navSliderStepsWorkLeft').on('click', function () {
	    $('#seo0 img').attr('src', $('#seo1 img').attr('src'));
		$('#seo0 .seoLogoTitle').text($('#seo1 .seoLogoTitle').text());	
		$('#seo1 img').attr('src', $('#seo2 img').attr('src'));
		$('#seo1 .seoLogoTitle').text($('#seo2 .seoLogoTitle').text());
		$('#seo2 img').attr('src', $('#seo3 img').attr('src'));
		$('#seo2 .seoLogoTitle').text($('#seo3 .seoLogoTitle').text());
		$('#seo3 img').attr('src', $('#seo4 img').attr('src'));
		$('#seo3 .seoLogoTitle').text($('#seo4 .seoLogoTitle').text());
		$('#seo4 img').attr('src', $('#seo5 img').attr('src'));
		$('#seo4 .seoLogoTitle').text($('#seo5 .seoLogoTitle').text());
		$('#seo5 img').attr('src', $('#seo6 img').attr('src'));
		$('#seo5 .seoLogoTitle').text($('#seo6 .seoLogoTitle').text());
		$('#seo6 img').attr('src', $('#seo0 img').attr('src'));
	    $('#seo6 .seoLogoTitle').text($('#seo0 .seoLogoTitle').text());
    });
    //право
    $('.navSliderStepsWorkRight').on('click', function () {
    	$('#seo0 img').attr('src', $('#seo6 img').attr('src'));
	    $('#seo0 .seoLogoTitle').text($('#seo6 .seoLogoTitle').text());
	    $('#seo6 img').attr('src', $('#seo5 img').attr('src'));
	    $('#seo6 .seoLogoTitle').text($('#seo5 .seoLogoTitle').text());
	    $('#seo5 img').attr('src', $('#seo4 img').attr('src'));
	    $('#seo5 .seoLogoTitle').text($('#seo4 .seoLogoTitle').text());
	    $('#seo4 img').attr('src', $('#seo3 img').attr('src'));
	    $('#seo4 .seoLogoTitle').text($('#seo3 .seoLogoTitle').text());
	    $('#seo3 img').attr('src', $('#seo2 img').attr('src'));
	    $('#seo3 .seoLogoTitle').text($('#seo2 .seoLogoTitle').text());
	    $('#seo2 img').attr('src', $('#seo1 img').attr('src'));
	    $('#seo2 .seoLogoTitle').text($('#seo1 .seoLogoTitle').text());
	    $('#seo1 img').attr('src', $('#seo0 img').attr('src'));
	    $('#seo1 .seoLogoTitle').text($('#seo0 .seoLogoTitle').text());
    });
    //-----------------------------------------------------!seo-продвижение

    //-----------------------------------------------------контекстная-реклама
    $('#contextual').on('click', function () {
	    $('.web-development').css({ "opacity": "0","z-index":"100"});
	    $('.seo-promotion').css({ "opacity": "0","z-index":"100"});
	    $('.contextual-advertising').css({ "opacity": "1","z-index":"110"});
	    $('.c-configuring').css({ "opacity": "0","z-index":"100"});
    });
    //
	//таймеру
    setInterval(function(){
		$('#context0 img').attr('src', $('#context1 img').attr('src'));
		$('#context0 .contextLogoTitle').text($('#context1 .contextLogoTitle').text());	
		$('#context1 img').attr('src', $('#context2 img').attr('src'));
		$('#context1 .contextLogoTitle').text($('#context2 .contextLogoTitle').text());
		$('#context2 img').attr('src', $('#context3 img').attr('src'));
		$('#context2 .contextLogoTitle').text($('#context3 .contextLogoTitle').text());
		$('#context3 img').attr('src', $('#context4 img').attr('src'));
		$('#context3 .contextLogoTitle').text($('#context4 .contextLogoTitle').text());
		$('#context4 img').attr('src', $('#context0 img').attr('src'));
		$('#context4 .contextLogoTitle').text($('#context0 .contextLogoTitle').text());
	},3000);
    //
    //по нажатию 
    //лево
    $('.navSliderStepsWorkLeft').on('click', function () {
	    $('#context0 img').attr('src', $('#context1 img').attr('src'));
		$('#context0 .contextLogoTitle').text($('#context1 .contextLogoTitle').text());	
		$('#context1 img').attr('src', $('#context2 img').attr('src'));
		$('#context1 .contextLogoTitle').text($('#context2 .contextLogoTitle').text());
		$('#context2 img').attr('src', $('#context3 img').attr('src'));
		$('#context2 .contextLogoTitle').text($('#context3 .contextLogoTitle').text());
		$('#context3 img').attr('src', $('#context4 img').attr('src'));
		$('#context3 .contextLogoTitle').text($('#context4 .contextLogoTitle').text());
		$('#context4 img').attr('src', $('#context0 img').attr('src'));
		$('#context4 .contextLogoTitle').text($('#context0 .contextLogoTitle').text());
    });
    //право
    $('.navSliderStepsWorkRight').on('click', function () {
    	$('#context0 img').attr('src', $('#context4 img').attr('src'));
	    $('#context0 .contextLogoTitle').text($('#context4 .contextLogoTitle').text());
    	$('#context4 img').attr('src', $('#context3 img').attr('src'));
	    $('#context4 .contextLogoTitle').text($('#context3 .contextLogoTitle').text());
	    $('#context3 img').attr('src', $('#context2 img').attr('src'));
	    $('#context3 .contextLogoTitle').text($('#context2 .contextLogoTitle').text());
	    $('#context2 img').attr('src', $('#context1 img').attr('src'));
	    $('#context2 .contextLogoTitle').text($('#context1 .contextLogoTitle').text());
	    $('#context1 img').attr('src', $('#context0 img').attr('src'));
	    $('#context1 .contextLogoTitle').text($('#context0 .contextLogoTitle').text());
    });
    //-----------------------------------------------------!контекстная-реклама

    //------------------------------------------------------1С-конфигурирование
    $('#configuring').on('click', function () {
	    $('.web-development').css({ "opacity": "0","z-index":"100"});
	    $('.seo-promotion').css({ "opacity": "0","z-index":"100"});
	    $('.contextual-advertising').css({ "opacity": "0","z-index":"100"});
	    $('.c-configuring').css({ "opacity": "1","z-index":"110"});
    });	
	//
	//таймеру
    setInterval(function(){
		$('#config0 img').attr('src', $('#config1 img').attr('src'));
		$('#config0 .cLogoTitle').text($('#config1 .cLogoTitle').text());	
		$('#config1 img').attr('src', $('#config2 img').attr('src'));
		$('#config1 .cLogoTitle').text($('#config2 .cLogoTitle').text());
		$('#config2 img').attr('src', $('#config3 img').attr('src'));
		$('#config2 .cLogoTitle').text($('#config3 .cLogoTitle').text());
		$('#config3 img').attr('src', $('#config4 img').attr('src'));
		$('#config3 .cLogoTitle').text($('#config4 .cLogoTitle').text());
		$('#config4 img').attr('src', $('#config0 img').attr('src'));
		$('#config4 .cLogoTitle').text($('#config0 .cLogoTitle').text());
	},3000);
    //
    //по нажатию 
    //лево
    $('.navSliderStepsWorkLeft').on('click', function () {
	    $('#config0 img').attr('src', $('#config1 img').attr('src'));
		$('#config0 .cLogoTitle').text($('#config1 .cLogoTitle').text());	
		$('#config1 img').attr('src', $('#config2 img').attr('src'));
		$('#config1 .cLogoTitle').text($('#config2 .cLogoTitle').text());
		$('#config2 img').attr('src', $('#config3 img').attr('src'));
		$('#config2 .cLogoTitle').text($('#config3 .cLogoTitle').text());
		$('#config3 img').attr('src', $('#config4 img').attr('src'));
		$('#config3 .cLogoTitle').text($('#config4 .cLogoTitle').text());
		$('#config4 img').attr('src', $('#config0 img').attr('src'));
		$('#config4 .cLogoTitle').text($('#config0 .cLogoTitle').text());
    });
    //право
    $('.navSliderStepsWorkRight').on('click', function () {
    	$('#config0 img').attr('src', $('#config4 img').attr('src'));
	    $('#config0 .cLogoTitle').text($('#config4 .cLogoTitle').text());
    	$('#config4 img').attr('src', $('#config3 img').attr('src'));
	    $('#config4 .cLogoTitle').text($('#config3 .cLogoTitle').text());
	    $('#config3 img').attr('src', $('#config2 img').attr('src'));
	    $('#config3 .cLogoTitle').text($('#config2 .cLogoTitle').text());
	    $('#config2 img').attr('src', $('#config1 img').attr('src'));
	    $('#config2 .cLogoTitle').text($('#config1 .cLogoTitle').text());
	    $('#config1 img').attr('src', $('#config0 img').attr('src'));
	    $('#config1 .cLogoTitle').text($('#config0 .cLogoTitle').text());
    });
    //-----------------------------------------------------!1С-конфигурирование


    //--------------------------------------анимированные преходы по ссылкам
    $(".headerDownButton").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".headerMenuList").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top-115}, 1500);
    });
    //!!!!!



    $(".OrderModalWindows").on("click",function(){
    	$(".modal").css({"visibility":"visible"});
    	$(".contentModalWindowTitle").css({"border":"2px solid black","padding":"25px 0px 20px 20px","height":"65px","background-color":"rgba(240,240, 240, 1)"});
    	$(".contentModalWindowTitle").text("обратный звонок");
    	$(".contentModalWindowText").css({"opacity":"1","width":"510px"});
    	$(".contentModalWindowInput").css({"opacity":"1","width":"260px"});
    	$(".footerModalWindow").css({"opacity":"1","width":"100%"});
    	$("#Name").val("Ваше имя");
    	$("#Phone").val("Ваш телефон");
    	$("#Email").val("Ваше email");
    });
    
    $(".ClodeModalWindows").on("click",function(){
    	$(".modal").css({"visibility":"hidden"});
    });

	$(".OrderFinish").on("click",function(){
    	$(".contentModalWindowTitle").css({"border":"none","padding-right":"200px","height":"90px","background-color":"green"});
    	$(".contentModalWindowTitle").text("сообщение успешно отправлено");
    	$(".contentModalWindowText").css({"opacity":"0","width":"0px"});
    	$(".contentModalWindowInput").css({"opacity":"0","width":"0px"});
    	$(".footerModalWindow").css({"opacity":"0","width":"0px"});
    	$(".modalInputText").val("");
    });

});


