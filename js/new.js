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

var top_icon = [
    {class:'one-click',img:'./images/top-img1.png',title:'ONE-CLICK',content:'Supporting one-click issuance of passport,and using a secure hosting scheme...'},
    {class:'management',img:'./images/top-img2.png',title:'management',content:'With the chain gover-nance model, all dec-isions are voted by the Turing coin ...'},
    {class:'super-node ',img:'./images/top-img3.png',title:'Super Node ',content:"Node itself is applica-tion, business and Tu-ring's overall ecolo-gical prosperity"},
    {class:'interoperability',img:'./images/top-img4.png',title:'Interoperability',content:'Self-organizing Busi-ness Alliance, Points Exchange,Equity Sharing'},
    {class:'npos-consensus',img:'./images/top-img5.png',title:'NPOS Consensus',content:'Effective prevention of token centraliza-tion in POS block chain'},
    {class:'cross-links',img:'./images/top-img6.png',title:'cross links',content:'Connecting Polkadot main network throu-gh bridge chain based on substrate'},
]
var data4 = {
    topData: top_icon
};
var html4 = template('test4', data4);
document.getElementById('content4').innerHTML = html4;

var bottom_icon = [
    {class:'n1',img:'./images/name.png',title:'name',content:'Support one-key issuance of license,and the adoption of a secure hosting solution, users use blockchain seamlessly'},
    {class:'n2',img:'./images/name.png',title:'name',content:'Support one-key issuance of license,and the adoption of a secure hosting solution, users use blockchain seamlessly'},
    {class:'n3 ',img:'./images/name.png',title:'name',content:"Support one-key issuance of license,and the adoption of a secure hosting solution, users use blockchain seamlessly"}
]
var data5 = {
    bottomData:bottom_icon
};
var html5 = template('test5', data5);
document.getElementById('content5').innerHTML = html5;