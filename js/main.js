$(function (){

    $('.about-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1440,
                settings: {


                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.features__list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    variableWidth: true

                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });

    $('.terms__list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    variableWidth: true

                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]



    });

    $('.mobile__menu--open ').on('click',function (){
        $('body').toggleClass('no-scroll');
        $('.menu__block').toggle()
    })
    $( "#slider-area" ).slider({
        range: true,
        min: 33,
        max: 119,
        values: [ 33, 119 ],
        slide: function( event, ui ) {

            $( ".area__end" ).text(ui.values[ 1 ] );
            $( ".area__start" ).text( ui.values[ 0 ]  );
            $('input[name=house_area]').val(ui.values[ 0 ] + '-' + ui.values[ 1 ])

        }
    });
    $( "#slider-price" ).slider({
        range: true,
        min: 100000,
        max: 590944,
        values: [ 100000, 590944 ],
        slide: function( event, ui ) {

            $( ".price__end" ).text(ui.values[ 1 ] );
            $( ".price__start" ).text( ui.values[ 0 ]  );
            $('input[name=house_price]').val(ui.values[ 0 ] + '-' + ui.values[ 1 ])

        }
    });

    $( "#slider-level" ).slider({
        range: true,
        min: 1,
        max: 8,
        values: [ 1, 8 ],
        slide: function( event, ui ) {

            $( ".price__end" ).text(ui.values[ 1 ] );
            $( ".price__start" ).text( ui.values[ 0 ]  );
            $('input[name=parking_level]').val(ui.values[ 0 ] + '-' + ui.values[ 1 ])

        }
    });
    $( "#slider-byn" ).slider({
        range: true,
        min: 13000,
        max: 40000,
        values: [ 13000, 40000 ],
        slide: function( event, ui ) {

            $( ".price__end" ).text(ui.values[ 1 ] );
            $( ".price__start" ).text( ui.values[ 0 ]  );
            $('input[name=parking_price]').val(ui.values[ 0 ] + '-' + ui.values[ 1 ])

        }
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },

        ]
    });

    $('.gallery-list').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.life-list').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.landing .apartments__banner').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true
    });
    $('.apartment__btn').on('click',function (){
        $('.apartment__btn').removeClass('apartment-selected');
        $(this).addClass('apartment-selected');
    })
    $('.floor').on('click',function (){
        $('.floor').removeClass(' floor--selected');
        $(this).addClass(' floor--selected');
        $('input[name=date]').val($(this).text())
        $('.apartment__floor .apartment__select').trigger('click');

    })
    $('.ClickButtonsBig-button').off().on('click',function (e){
        e.preventDefault();
        $('.ClickButtonsBig-button').removeClass('active');
        $(this).addClass('active')
    });
    $('.menu').find('a').click(function(){
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        $('body').removeClass('no-scroll')
        console.log($($href).offset())
        $('.menu__block').hide()
        $("html, body").animate({ scrollTop: $anchor.top }, 1000);

        return false;
    });
    $('.footer__menu').find('a').click(function(){
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        console.log($($href).offset())
        $("html, body").animate({ scrollTop: $anchor.top }, 1000);

        return false;
    });
    $('.apartment__floor--date .floor').off().on('click',function (){
        $('.floor').removeClass(' floor--selected');
        $(this).addClass(' floor--selected');
        $('input[name=date]').val($(this).text())

    })
    $('.room').on('click',function (){
        $('.room').removeClass('room__active');
        $(this).addClass('room__active');
        $('input[name=room]').val($(this).text())

    });

    $('.mobile__menu--close').on('click',function (){
        $('nav').removeClass('opened');
        $('.mobile__menu--open').show();
        $(this).hide()
    })
    $('.btn-play').on('click',function (){
        $(this).hide();
        $('.info__right img').hide();
        $('#video').show();
        $('#video').get(0).play()
    })



    $('.apartment__select').on('click',function (){
        $(this).toggleClass('close')
        $(this).siblings('div').toggleClass('close');
    })
    $('.clear').on('click',function (){
        resetSlider($('#slider-price'));
        resetSlider($('#slider-area'));
        $('.apartment__btn').removeClass('apartment-selected');
        $('.floor').removeClass(' floor--selected');
        $('.room').removeClass('room__active');
        $('.apartment__btn.default').addClass('apartment-selected');
        $('.floor.default').addClass('floor--selected');
        $('.room.default').addClass('room__active');

    })
    function resetSlider(sl) {
            var options = sl.slider( 'option' );
        sl.slider( 'values', [ options.min, options.max ] );
      sl.siblings('p').find('.start').text( options.min);
      sl.siblings('p').find('.end').text( options.max);

    }
    $('.ClickButtonsBig-button').on('click',function (){
        $('.ClickButtonsBig-button').removeClass('active');
        $(this).addClass('active')
    });
    $('.btn-orange, .btn-yellow').on('click',function (){
        $('.CallMe_back_modal').css('display','flex')
    })
    $('.tab__item').on('click',function (){
        $('.tab__item').removeClass('tab__item-selected');
        $(this).addClass('tab__item-selected');
        $('.gallery-list').hide();
        let tab = $(this).index() + 1;
        $('#tab-'+ tab).show();
        $('.gallery-list').slick('unslick');
        $('#tab-'+ tab).slick();


    })
    $('.palns__room-list div').on('click',function (){
        $('.palns__room-list div').removeClass('selected');
        $(this).addClass('selected');

    })

    $('.apartment__list--parking .apartment__btn').on('click', function (){
        $('.apartment__img--parking img').hide();
        $('.apartment__img--parking img').eq($(this).index() ).show();
        $('.apartment__list--parking').parent().find('.apartment__select').trigger('click')
        $('input[name=parking]').val($(this).text())

    })
    $('.apartment__list .apartment__btn').on('click', function (){
        $('.apartment__img img').hide();
        $('.apartment__img  img').eq($(this).index() ).show();
        $('.apartment__list').parent().find('.apartment__select').trigger('click');
        $('input[name=house]').val($(this).text())


    })

})

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    // Создание карты.
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчнию: «широта, долгота».
        center:[52.09223207204043,23.688205499999917],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 18,
        nightModeEnabled: true,
        iconImageHref: 'img/marker.png',

        theme: 'dark',
        // Элементы управления
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
        controls: [

            'zoomControl', // Ползунок масштаба
            'rulerControl', // Линейка
            //'routeButtonControl', // Панель маршрутизации
            //'trafficControl', // Пробки
            //'typeSelector', // Переключатель слоев карты
            'fullscreenControl', // Полноэкранный режим

            // Поисковая строка
            /*new ymaps.control.SearchControl({
                options: {
                    // вид - поисковая строка
                    size: 'large',
                    // Включим возможность искать не только топонимы, но и организации.
                    provider: 'yandex#search'
                }
            })*/

        ]
    });


    // Добавление метки
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
    var myPlacemark = new ymaps.Placemark([52.09223207204043,23.688205499999917], {
        // Хинт показывается при наведении мышкой на иконку метки.
        hintContent: 'Всплывающая подсказка на Yandex карте <a href="https://problesk.com" target="_blank" >Ссылка </a>',
        // Балун откроется при клике по метке.
        balloonContent: 'Содержимое балуна, появляющееся при клике на него <a href="https://problesk.com" target="_blank" >Ссылка </a>'
    });

    // После того как метка была создана, добавляем её на карту.
    myMap.geoObjects.add(myPlacemark);
    setMapLayer();

}
ymaps.ready(init);

function setMapLayer(){
    const DARK_MAP = 'custom#dark';
    ymaps.layer.storage.add(DARK_MAP, function DarkLayer() {
        // Ссылка на темные тайлы Яндекс.Карт
        // От стандартной отличается наличием &theme=dark
        return new ymaps.Layer(
            'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&theme=dark&%c&%l&scale={{ scale }}',
        );
    });

    /* Связываем слой с типом карты */
    ymaps.mapType.storage.add(DARK_MAP, new ymaps.MapType('Dark Map', [DARK_MAP]));
}
function init() {

    var myMap = new ymaps.Map("map", {
        center: [52.081873, 23.761284],
        zoom: 14,
        nightModeEnabled: true,
        theme: 'dark',
        iconImageHref: 'img/marker.png',
    });
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    // Все виды меток
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage-docpage/

    // Метка без содержимого с точкой в центре
    var placemark1 = new ymaps.Placemark([52.081873, 23.761284], {

    }, {
        'preset': 'islands#nightDotIcon',
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/marker.png',
        // Размеры метки.
        iconImageSize: [44, 53],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-11,-53]
    });

    myMap.geoObjects.add(placemark1);


}

