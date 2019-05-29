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
    //移动端点击左右滑
    var mobileBigWidth = $('.mobile-history-box').width() *($('.mobile-history-box').length+1);
    $("#content7").css("width", mobileBigWidth + 'px');
    for(let i=0;i<$('.mobile-history-box').length;i++){
        $(".mobile-history-num").append('<span></span>');
    }
    let mobileNumWidth= $(".mobile-history-num").width() / $(".mobile-history-num span").length;
    $(".mobile-history-num span").css("width",mobileNumWidth+'px');
    let index=0;
    $(".mobile-history-num span").eq(index).css('backgroundColor','#FF2C7A');
    $("#mobile_history_arror_left").on('click',function(){
        if(index>0){
            index--
        }else{
            index=$('.mobile-history-box').length-1
        }
        $(".mobile-history-num span").css('backgroundColor','#EDEDED');
        $(".mobile-history-num span").eq(index).css('backgroundColor','#FF2C7A');
        let mobileMoveWidth=$(".mobile-history-box").width()*index;
        $("#content7").css('marginLeft',-mobileMoveWidth+'px');
    })
    $("#mobile_history_arror_right").on('click',function(){
        if(index<$('.mobile-history-box').length-1){
            index++;
        }else{
            index=0;
        }
        $(".mobile-history-num span").css('backgroundColor','#EDEDED');
        $(".mobile-history-num span").eq(index).css('backgroundColor','#FF2C7A');
        let mobileMoveWidth=$(".mobile-history-box").width()*index;
        $("#content7").css('marginLeft',-mobileMoveWidth+'px');
    })
    //国际化
    let witchLanguage='en';
    function loadProperties(language) {
        jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
            name: 'strings', //资源文件名称
            path: '/i18n/', //资源文件路径
            mode: 'map', //用Map的方式使用资源文件中的值
            language: language,
            callback: function () {//加载成功后设置显示内容
                for(var i=1;i<90;i++){
                    $('.a'+i).html($.i18n.prop('a'+i))
                }   
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
    //这里移动端页脚
    let mobileArr1=['about us','roadmap','team','partners','interest','careers'];
    for(var i=0;i<mobileArr1.length;i++){
        mobileArr1[i]= mobileArr1[i].toUpperCase();
        $(".mobile-footer-box1").append('<div>'+mobileArr1[i]+'</div>');
    }
    let mobileArr2=['Twitter','blog','telegram','reddit','youtube'];
    for(var i=0;i<mobileArr2.length;i++){
        mobileArr2[i]= mobileArr2[i].toUpperCase();
        $(".mobile-footer-box2").append('<div>'+mobileArr2[i]+'</div>');
    }
    let mobileArr3=['RESOURCES','GitHub','Whitepaper','faQ'];
    for(var i=0;i<mobileArr3.length;i++){
        mobileArr3[i]= mobileArr3[i].toUpperCase();
        $(".mobile-footer-box3").append('<div>'+mobileArr3[i]+'</div>');
    }
})