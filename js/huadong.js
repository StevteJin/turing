var option = {
    color: 'deepskyblue',
    width: '570px',
    progress: 0.3,
    handleSrc: './images/slider_handle.png',
    isCustomText: false
};
$('#sliderParent')
    .jackWeiSlider(option)
    // .setText('2018-4-5 02:39:00')
    .setProgress(0.0)
    .setOnStartDragCallback(function () {
        console.log('start');
    })
    .setOnDragCallback(function (p) {
        console.log(p);
    })
    .setOnStopDragCallback(function () {
        console.log('stop');
    });