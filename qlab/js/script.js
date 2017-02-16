$('document').ready(function(){

var arr=["#web1","#web2","#web3","#web4","#web5"];

	//слайдер
	//--web-разработка
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
    //--!web-разработка




   	$('#seo').on('click', function () {
	    $('.web-development').css({ "opacity": "0","z-index":"100"});
	    $('.seo-promotion').css({ "opacity": "1","z-index":"110"});
	    $('.contextual-advertising').css({ "opacity": "0","z-index":"100"});
	    $('.c-configuring').css({ "opacity": "0","z-index":"100"});
    });

    $('#contextual').on('click', function () {
	    $('.web-development').css({ "opacity": "0","z-index":"100"});
	    $('.seo-promotion').css({ "opacity": "0","z-index":"100"});
	    $('.contextual-advertising').css({ "opacity": "1","z-index":"110"});
	    $('.c-configuring').css({ "opacity": "0","z-index":"100"});
    });

    $('#configuring').on('click', function () {
	    $('.web-development').css({ "opacity": "0","z-index":"100"});
	    $('.seo-promotion').css({ "opacity": "0","z-index":"100"});
	    $('.contextual-advertising').css({ "opacity": "0","z-index":"100"});
	    $('.c-configuring').css({ "opacity": "1","z-index":"110"});
    });	
});


