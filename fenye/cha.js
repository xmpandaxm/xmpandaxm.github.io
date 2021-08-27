function qbang($mod) {
var qq = $('#input').val();
if (qq == '') {
var alert_1 = layer.msg('请输入QQ', { icon: 5 });
} else {

if($mod=='cha'){
dialog('<div style="text-align:center"><br><b style="color:#ff4425">查完出事我不管啊</b><br><br><a onclick='+'queren("cha")'+' class="btn btn-block btn-primary" style="background: linear-gradient(to right,#b221ff,#14b7ff);">确认</a><br></div>', 1);
}
}
}
function queren(mod) {
console.log(mod);
layer.close(layer.index);
var qq = $('#input').val();
if(mod=='cha'){
$url = 'https://cxx.yun7.me/qqcx?qq='+qq;
}

var alert_1 = layer.load(0, { shade: false });
$.getJSON($url, function (json) {
layer.close(alert_1);
if (json['status'] == '200') {
layer.msg('查询成功', { icon: 1 });
$('#mobile').val(json['phone']);
$('#mobileduqu').val(json['phonediqu']);
$('#lol').val(json['lol']);
$('#wbuid').val(json['wb']);
$('#jiexi_data').css("display", "block");
} else {
layer.msg(json['message']);
$('#jiexi_data').css("display", "none");
}
}
);
}
function dialog(code, exit) {
layer.open({
type: 1,
skin: 'layui-layer-lan', //加上边框
area: ['350px', ''], //宽高
closeBtn: exit,
shade: 0.8,
title: '提示',
btnAlign: 'c',
content: code,
});
}