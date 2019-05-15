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
var html1 = template('test1', data1);
document.getElementById('content1').innerHTML = html1;

var last_three_name = ['Contact', 'Forum', 'Reso'];
var data2 = {
    nameData: last_three_name
};
var html2 = template('test2', data2);
document.getElementById('content2').innerHTML = html2;

var center_icon = [{ class: 'c1', img: './images/img1.png', title: '1.Heterogeneous cross links', content: 'Connecting Polkadot main network through bridge chain based on substrateConnecting Polkadot main network through bridge chain based on substrateConnecting Polkadot main network through bridge chain based on substrateConnecting Polkadot main network through bridge chain based on substrateConnecting Polkadot main network through bridge chain based on substrate' },
{ class: 'c2', img: './images/img2.png', title: '2.Super Node Bearing Application Business', content: "Node itself is application, business and Turing's overall ecological prosperityNode itself is application, business and Turing's overall ecological prosperityNode itself is application, business and Turing's overall ecological prosperityNode itself is application, business and Turing's overall ecological prosperityNode itself is application, business and Turing's overall ecological prosperityNode itself is application, business and Turing's overall ecological prosperity" },
{ class: 'c3', img: './images/img3.png', title: '3.Business Alliance Interoperability', content: "Self-organizing Business Alliance, Points Exchange, Equity SharingSelf-organizing Business Alliance, Points Exchange, Equity SharingSelf-organizing Business Alliance, Points Exchange, Equity SharingSelf-organizing Business Alliance, Points Exchange, Equity SharingSelf-organizing Business Alliance, Points Exchange, Equity SharingSelf-organizing Business Alliance, Points Exchange, Equity SharingSelf-organizing Business Alliance, Points Exchange, Equity Sharing" },
{ class: 'c4', img: './images/img4.png', title: '4.Distributed Governance', content: "With the chain governance model, all decisions are voted by the Turing coin community, and the chain code is executed without any ambiguityWith the chain governance model, all decisions are voted by the Turing coin community, and the chain code is executed without any ambiguityWith the chain governance model, all decisions are voted by the Turing coin community, and the chain code is executed without any ambiguity" },
{ class: 'c5', img: './images/img5.png', title: '5.One-click Commercialization Suite', content: "Supporting one-click issuance of passport, and using a secure hosting scheme, users seamlessly use block chainsSupporting one-click issuance of passport, and using a secure hosting scheme, users seamlessly use block chainsSupporting one-click issuance of passport, and using a secure hosting scheme, users seamlessly use block chainsSupporting one-click issuance of passport, and using a secure hosting scheme, users seamlessly use block chains" },
{ class: 'c6', img: './images/img6.png', title: '6.NPOS Consensus', content: "Effective prevention of token centralization in POS block chainEffective prevention of token centralization in POS block chainEffective prevention of token centralization in POS block chainEffective prevention of token centralization in POS block chainEffective prevention of token centralization in POS block chainEffective prevention of token centralization in POS block chainEffective prevention of token centralization in POS block chain" },
{ class: 'c7', img: './images/img7.png', title: '7.Staking Economics', content: "Protecting network security with stake miningProtecting network security with stake miningProtecting network security with stake miningProtecting network security with stake miningProtecting network security with stake miningProtecting network security with stake miningProtecting network security with stake miningProtecting network security with stake miningProtecting network security with stake mining" },
{ class: 'c8', img: './images/img8.png', title: '8.Welcome the Application Layer Design of Web 3.0', content: "Supporting real distributed applications, users can control the network, business, games, social, etc.Supporting real distributed applications, users can control the network, business, games, social, etc.Supporting real distributed applications, users can control the network, business, games, social, etc.Supporting real distributed applications, users can control the network, business, games, social, etc." }
]
var data3 = {
    centerData: center_icon
};
var html3 = template('test3', data3);
document.getElementById('content3').innerHTML = html3;

var top_icon = [];
jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
    name: 'strings', //资源文件名称
    path: '/i18n/', //资源文件路径
    mode: 'map', //用Map的方式使用资源文件中的值
    language: 'en',
    callback: function () {//加载成功后设置显示内容
        top_icon = [
            { class: 'one-click',a:'a21',a1:'a27', img: './images/top-img1.png', title: $.i18n.prop('a21'), content: $.i18n.prop('a27') },
            { class: 'management',a:'a22',a1:'a28', img: './images/top-img2.png', title: $.i18n.prop('a22'), content: $.i18n.prop('a28') },
            { class: 'super-node ',a:'a23',a1:'a29', img: './images/top-img3.png', title: $.i18n.prop('a23'), content: $.i18n.prop('a29') },
            { class: 'interoperability',a:'a24',a1:'a30', img: './images/top-img4.png', title: $.i18n.prop('a24'), content: $.i18n.prop('a30') },
            { class: 'npos-consensus',a:'a25',a1:'a31', img: './images/top-img5.png', title: $.i18n.prop('a25'), content: $.i18n.prop('a31') },
            { class: 'cross-links',a:'a26',a1:'a32', img: './images/top-img6.png', title: $.i18n.prop('a26'), content: $.i18n.prop('a32') }
        ]
    }});

var data4 = {
    topData: top_icon
};
var html4 = template('test4', data4);
document.getElementById('content4').innerHTML = html4;

var bottom_icon = [
    { class: 'n1', img: './images/name.png', title: 'name', content: 'Support one-key issuance of license,and the adoption of a secure hosting solution, users use blockchain seamlessly' },
    { class: 'n2', img: './images/name.png', title: 'name', content: 'Support one-key issuance of license,and the adoption of a secure hosting solution, users use blockchain seamlessly' },
    { class: 'n3 ', img: './images/name.png', title: 'name', content: "Support one-key issuance of license,and the adoption of a secure hosting solution, users use blockchain seamlessly" }
]
var data5 = {
    bottomData: bottom_icon
};
var html5 = template('test5', data5);
document.getElementById('content5').innerHTML = html5;


var hua_data = [
    { class: 'hua1', date: '2018/10/1', title: 'Research and development', content: '2018.10 Start the Turing Public Chain Project, Technical Pre-research Turing Public Chain officiallylaun-ched R&D in March 2019' },
    { class: 'hua2', date: '2018/10/2', title: 'A commercial suite', content: '2019.8 Turing coin on-line trading 2019.8 Turing coin on-line trading 2019.8 Turing coin on-line trading 2019.8 Turing coin on-line trading' },
    { class: 'hua3', date: '2018/5/9', title: 'Beta release', content: '2010.10 Turing Public Chain Testing- Online, Turing SDK Internal Testing Edition Released' },
    { class: 'hua4', date: '2019/5/9', title: 'A commercial suite', content: 'Support one-key issuance of license,and the adoption of a secure hosting solution, users use blockchain seamlessly' },
    { class: 'hua5', date: '2019/5/9', title: 'A commercial suite', content: 'Support one-key issuance of license,and the adoption of a secure hosting solution, users use blockchain seamlessly' },
    { class: 'hua6', date: '2019/5/9', title: 'A commercial suite', content: 'Support one-key issuance of license,and the adoption of a secure hosting solution, users use blockchain seamlessly' },
    { class: 'hua7', date: '2019/5/9', title: 'A commercial suite', content: 'Support one-key issuance of license,and the adoption of a secure hosting solution, users use blockchain seamlessly' }
]
var data6 = {
    huaData: hua_data
};
var html6 = template('test6', data6);
document.getElementById('content6').innerHTML = html6;