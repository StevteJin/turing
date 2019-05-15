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
            $(".big-hua-box #content6").css("marginLeft",-p*(bigWidth-1000)+'px')
        })
        .setOnStopDragCallback(function () {
            //console.log('stop');
        });
})