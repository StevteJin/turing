var footer_name = ['about us', 'Twitter', 'RESOURCES', 'roadmap', 'blog', 'GitHub', 'team', 'telegram', 'Whitepaper', 'partners', 'reddit', 'faQ', 'interest', 'youtube', '  ', 'careers'];
var data = {
    sponsorsData: footer_name
};
var html = template('test', data);
document.getElementById('content').innerHTML = html;

var img_icon = [{ class: 'facebook', src: './images/facebook.png' }, { class: 'bird', src: './images/footer_bird.png' }, { class: 'camera', src: './images/footer_camera.png' }, { class: 'player', src: './images/footer_player.png' }, { class: 'm', src: './images/footer_m.png' }];
var data1 = {
    iconData: img_icon
};
var html = template('test1', data1);
document.getElementById('content1').innerHTML = html;

var last_three_name = ['Contact', 'Forum', 'Reso'];
var data2 = {
    nameData: last_three_name
};
var html = template('test2', data2);
document.getElementById('content2').innerHTML = html;