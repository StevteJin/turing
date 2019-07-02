var top_icon = [];
var center_icon = [];
var hua_data = [];
var bottom_icon = [];
jQuery.i18n.properties({ //加载资浏览器语言对应的资源文件
    name: 'strings', //资源文件名称
    path: '/i18n/', //资源文件路径
    mode: 'map', //用Map的方式使用资源文件中的值
    language: 'zh',
    callback: function () { //加载成功后设置显示内容
        top_icon = [{
                class: 'one-click',
                a: 'a21',
                a1: 'a27',
                img: './images/top-img1.png',
                title: $.i18n.prop('a21'),
                content: $.i18n.prop('a27')
            },
            {
                class: 'management',
                a: 'a22',
                a1: 'a28',
                img: './images/top-img4.png',
                title: $.i18n.prop('a22'),
                content: $.i18n.prop('a28')
            },
            {
                class: 'super-node ',
                a: 'a23',
                a1: 'a29',
                img: './images/top-img3.png',
                title: $.i18n.prop('a23'),
                content: $.i18n.prop('a29')
            },
            {
                class: 'interoperability',
                a: 'a24',
                a1: 'a30',
                img: './images/top-img5.png',
                title: $.i18n.prop('a24'),
                content: $.i18n.prop('a30')
            },
            {
                class: 'npos-consensus',
                a: 'a25',
                a1: 'a31',
                img: './images/top-img6.png',
                title: $.i18n.prop('a25'),
                content: $.i18n.prop('a31')
            },
            {
                class: 'cross-links',
                a: 'a26',
                a1: 'a32',
                img: './images/top-img2.png',
                title: $.i18n.prop('a26'),
                content: $.i18n.prop('a32')
            }
        ];
        center_icon = [{
                class: 'c1',
                a: 'a33',
                a1: 'a41',
                img: './images/img8.png',
                title: $.i18n.prop('a33'),
                content: $.i18n.prop('a41')
            },
            {
                class: 'c2',
                a: 'a34',
                a1: 'a42',
                img: './images/img7.png',
                title: $.i18n.prop('a34'),
                content: $.i18n.prop('a42')
            },
            {
                class: 'c3',
                a: 'a35',
                a1: 'a43',
                img: './images/img5.png',
                title: $.i18n.prop('a35'),
                content: $.i18n.prop('a43')
            },
            {
                class: 'c4',
                a: 'a36',
                a1: 'a44',
                img: './images/img3.png',
                title: $.i18n.prop('a36'),
                content: $.i18n.prop('a44')
            },
            {
                class: 'c5',
                a: 'a37',
                a1: 'a45',
                img: './images/img2.png',
                title: $.i18n.prop('a37'),
                content: $.i18n.prop('a45')
            },
            {
                class: 'c6',
                a: 'a38',
                a1: 'a46',
                img: './images/img6.png',
                title: $.i18n.prop('a38'),
                content: $.i18n.prop('a46')
            },
            {
                class: 'c7',
                a: 'a39',
                a1: 'a47',
                img: './images/img1.png',
                title: $.i18n.prop('a39'),
                content: $.i18n.prop('a47')
            },
            {
                class: 'c8',
                a: 'a40',
                a1: 'a48',
                img: './images/img4.png',
                title: $.i18n.prop('a40'),
                content: $.i18n.prop('a48')
            }
        ];
        hua_data = [{
                class: 'hua1',
                date: '2018/10',
                a: 'a49',
                a1: 'a56',
                title: $.i18n.prop('a49'),
                content: $.i18n.prop('a56')
            },
            {
                class: 'hua2',
                date: '2019/8',
                a: 'a50',
                a1: 'a57',
                title: $.i18n.prop('a50'),
                content: $.i18n.prop('a57')
            },
            {
                class: 'hua3',
                date: '2019/10',
                a: 'a51',
                a1: 'a58',
                title: $.i18n.prop('a51'),
                content: $.i18n.prop('a58')
            },
            {
                class: 'hua4',
                date: '2019/12',
                a: 'a52',
                a1: 'a59',
                title: $.i18n.prop('a52'),
                content: $.i18n.prop('a59')
            },
            {
                class: 'hua5',
                date: '2020/3',
                a: 'a53',
                a1: 'a60',
                title: $.i18n.prop('a53'),
                content: $.i18n.prop('a60')
            },
            {
                class: 'hua6',
                date: '2020/5',
                a: 'a54',
                a1: 'a61',
                title: $.i18n.prop('a54'),
                content: $.i18n.prop('a61')
            },
            {
                class: 'hua7',
                date: '2020/6',
                a: 'a55',
                a1: 'a62',
                title: $.i18n.prop('a55'),
                content: $.i18n.prop('a62')
            }
        ];
        bottom_icon = [{
                class: 'n1',
                img: './images/name.jpg',
                a:'a68',
                a1:'a71',
                title: $.i18n.prop('a68'),
                content: $.i18n.prop('a71')
            },
            {
                class: 'n2',
                img: './images/name.jpg',
                a:'a68',
                a1:'a71',
                title: $.i18n.prop('a69'),
                content: $.i18n.prop('a72')
            },
            {
                class: 'n3 ',
                img: './images/name.jpg',
                a:'a68',
                a1:'a71',
                title: $.i18n.prop('a70'),
                content: $.i18n.prop('a73')
            }
        ]
    }
});

var data4 = {
    topData: top_icon
};
var html4 = template('test4', data4);
document.getElementById('content4').innerHTML = html4;

var data3 = {
    centerData: center_icon
};
var html3 = template('test3', data3);
document.getElementById('content3').innerHTML = html3;

var html66 = template('test66', data3);
document.getElementById('content66').innerHTML = html66;
var data6 = {
    huaData: hua_data
};
var html6 = template('test6', data6);
document.getElementById('content6').innerHTML = html6;

var data7 = {
    huaData: hua_data
};
var html7 = template('test7', data7);
document.getElementById('content7').innerHTML = html7;

var data5 = {
    bottomData: bottom_icon
};
var html5 = template('test5', data5);
document.getElementById('content5').innerHTML = html5;