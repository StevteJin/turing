var option = {
    color: 'deepskyblue',
    width: '570px',
    progress: 0.3,
    handleSrc: './images/slider_handle.png',
    isCustomText: false
};


$(function () {
    console.log('我是花花', $('.huahua').length);
    var bigWidth = $('.huahua').width() * $('.huahua').length;
    $(".big-hua-box #content6").css("width", bigWidth + 'px');

    $('#sliderParent')
        .jackWeiSlider(option)
        // .setText('2018-4-5 02:39:00')
        .setProgress(0.0)
        .setOnStartDragCallback(function () {
            //console.log('start');
        })
        .setOnDragCallback(function (p) {
            $(".big-hua-box #content6").css("marginLeft", -p * (bigWidth - 1000) + 'px')
        })
        .setOnStopDragCallback(function () {
            //console.log('stop');
        });

    //国际化
    let witchLanguage='en';
    function loadProperties(language) {
        jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
            name: 'strings', //资源文件名称
            path: '/i18n/', //资源文件路径
            mode: 'map', //用Map的方式使用资源文件中的值
            language: language,
            callback: function () {//加载成功后设置显示内容
                $('.a1').html($.i18n.prop('a1'));
                $('.a2').html($.i18n.prop('a2'));
                $('.a3').html($.i18n.prop('a3'));
                $('.a4').html($.i18n.prop('a4'));
                $('.a5').html($.i18n.prop('a5'));
                $('.a6').html($.i18n.prop('a6'));
                $('.a7').html($.i18n.prop('a7'));
                $('.a8').html($.i18n.prop('a8'));
                $('.a9').html($.i18n.prop('a9'));
                $('.a10').html($.i18n.prop('a10'));
                $('.a11').html($.i18n.prop('a11'));
                $('.a12').html($.i18n.prop('a12'));
                $('.a13').html($.i18n.prop('a13'));
                $('.a14').html($.i18n.prop('a14'));
                $('.a15').html($.i18n.prop('a15'));
                $('.a16').html($.i18n.prop('a16'));
                $('.a17').html($.i18n.prop('a17'));
                $('.a18').html($.i18n.prop('a18'));
                $('.a19').html($.i18n.prop('a19'));
                $('.a20').html($.i18n.prop('a20'));
            }
        });
    }
    $('.fanyi').on('click',function() {
        if(witchLanguage=='en'){
            witchLanguage='zh'
        }else if(witchLanguage=='zh'){
            witchLanguage='en'
        }
        loadProperties(witchLanguage);
    })
})