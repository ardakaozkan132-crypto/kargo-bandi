<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>Kargo Bandı: Antika Atölyesi</title>
<link rel="manifest" href="manifest.json">
<style>
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{width:100%;height:100%;overflow:hidden;font-family:sans-serif;color:#f7e7ce;background:repeating-linear-gradient(180deg,#3d2514 0,#3d2514 46px,#2a180c 46px,#2a180c 49px)}
.scr{position:fixed;inset:0;display:none;flex-direction:column;align-items:center;padding:16px;overflow-y:auto;z-index:10}
.scr.on{display:flex}
.top{width:100%;max-width:420px;display:flex;justify-content:flex-end;margin-bottom:6px}
.pill{background:#1f1208;border:2px solid #d4a338;border-radius:20px;padding:5px 14px;display:flex;align-items:center;gap:8px;font-weight:bold;color:#ffe699}
.dot{width:15px;height:15px;border-radius:50%;background:#f5c842;border:2px solid #8c6208}
h1{font-family:Georgia,serif;font-size:34px;letter-spacing:2px;color:#f5deb3;text-shadow:0 3px 0 #1f1106;margin-top:6px}
.sub{font-family:Georgia,serif;font-size:19px;color:#e6cfa8;margin-bottom:10px}
.btn{display:block;width:100%;max-width:350px;padding:14px;border-radius:14px;border:2px solid #f5e6c8;font-size:17px;font-weight:bold;cursor:pointer;text-align:center;box-shadow:0 4px 0 rgba(0,0,0,.45);margin-bottom:10px}
.btn:active{transform:translateY(2px)}
.bg{background:#4d9444;color:#fff}
.bt{background:#b89258;color:#241407}
.by{background:#e8b931;color:#241407}
.bb{background:#2563eb;color:#fff;font-size:15px;max-width:250px;padding:10px}
.br{background:#c93232;color:#fff}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;max-width:350px}
.g2 .btn{margin:0;font-size:15px}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;width:100%;max-width:390px;margin:12px 0}
.card{background:rgba(36,20,8,.85);border:2px solid #5c3c22;border-radius:12px;padding:9px 5px;text-align:center;opacity:.55}
.card.op{opacity:1;border-color:#d4a338;background:rgba(68,41,18,.9);cursor:pointer}
.sitem{width:100%;max-width:380px;background:rgba(66,40,18,.9);border:2px solid #a8844c;border-radius:13px;padding:11px 14px;display:flex;justify-content:space-between;align-items:center;margin-bottom:9px;position:relative}
.bdg{position:absolute;top:-9px;right:14px;background:#c93838;color:#fff;font-size:10px;font-weight:bold;padding:2px 7px;border-radius:7px}
.box{background:#3b2312;border:2px solid #c9a66b;border-radius:16px;padding:20px;width:100%;max-width:350px;margin:auto}
.row{display:flex;justify-content:space-between;align-items:center;padding:11px 0;font-weight:600}
.tg{width:50px;height:26px;background:#241407;border:2px solid #c9a66b;border-radius:20px;position:relative;cursor:pointer}
.tg::after{content:'';position:absolute;top:2px;left:3px;width:18px;height:18px;border-radius:50%;background:#f5e6c8}
.tg.on{background:#4d9444}.tg.on::after{left:25px}
#toast{position:fixed;bottom:22px;left:50%;transform:translateX(-50%);background:#241407;border:2px solid #d4a338;color:#f5deb3;padding:9px 16px;border-radius:12px;font-weight:bold;font-size:13px;z-index:99;display:none;white-space:nowrap}
#s-game{justify-content:space-between;padding:12px}
.hud{width:100%;max-width:420px;display:flex;justify-content:space-between;align-items:center;font-weight:bold}
.wbox{width:100%;max-width:390px;background:rgba(36,20,8,.65);border:2px solid #a8844c;border-radius:15px;padding:10px;display:flex;flex-direction:column;align-items:center}
.pbar{width:88%;height:13px;background:#1f1208;border:2px solid #c9a66b;border-radius:9px;overflow:hidden;margin-top:6px}
.pfill{height:100%;background:#f5c842;width:0%}
.belt{width:100%;max-width:420px;height:88px;background:#2b2b2b;border-top:4px solid #a8844c;border-bottom:4px solid #a8844c;position:relative;display:flex;align-items:center;justify-content:center}
.tz{width:72px;height:72px;border:3px solid #d4b886;background:rgba(255,255,255,.12);border-radius:10px;z-index:2;pointer-events:none}
.cbtns{width:100%;max-width:400px;display:grid;grid-template-columns:repeat(3,1fr);gap:9px}
.cb{border-radius:13px;border:2px solid #fff4;padding:10px 4px;color:#fff;font-weight:bold;font-size:15px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:5px}
.cr{background:#c93232}.cbl{background:#2563eb}.cy{background:#ca8a04}
.dots{display:flex;gap:4px;background:rgba(0,0,0,.35);padding:8px 14px;border-radius:7px}
.dots i{width:12px;height:12px;border-radius:50%;border:2px solid #fff;display:block}
</style>
</head>
<body>
<div id="toast"></div>
<div id="s-menu" class="scr on">
  <div class="top"><div class="pill"><div class="dot"></div><span class="cv">0</span></div></div>
  <h1>KARGO BANDI</h1><div class="sub">Antika Atölyesi</div>
  <svg width="76" height="84" viewBox="0 0 100 110"><circle cx="50" cy="14" r="10" fill="none" stroke="#c9a66b" stroke-width="4"/><circle cx="50" cy="62" r="38" fill="#d4b475" stroke="#8c6830" stroke-width="5"/><circle cx="50" cy="62" r="30" fill="#f5ebd6"/><path d="M50 62V40M50 62l15 8" stroke="#241407" stroke-width="4" stroke-linecap="round"/></svg>
  <div style="color:#ffd54f;font-weight:bold;margin:8px 0 12px">⭐ <span id="tst">0</span> / 36</div>
  <button type="button" class="btn bg" id="b-daily">Günlük hediyeni al!</button>
  <button type="button" class="btn bg" style="padding:17px;font-size:21px" id="b-play">Oyna</button>
  <div class="g2">
    <button type="button" class="btn bt" id="b-lvl">Bölümler</button>
    <button type="button" class="btn by" id="b-shop">Mağaza</button>
    <button type="button" class="btn bt" id="b-how">Nasıl Oynanır?</button>
    <button type="button" class="btn bt" id="b-set">Ayarlar</button>
  </div>
</div>
<div id="s-lvl" class="scr">
  <div style="width:100%;max-width:390px;display:flex;justify-content:space-between;align-items:center"><h2>Bölümler</h2><div class="pill"><div class="dot"></div><span class="cv">0</span></div></div>
  <div class="g3" id="lgrid"></div>
  <button type="button" class="btn by b-home">Ana Menü</button>
</div>
<div id="s-shop" class="scr">
  <h2 style="margin-bottom:8px">Mağaza</h2>
  <div class="pill" style="margin-bottom:12px"><div class="dot"></div><span class="cv">0</span></div>
  <div id="slist" style="width:100%;display:flex;flex-direction:column;align-items:center"></div>
  <button type="button" class="btn by b-home">Ana Menü</button>
</div>
<div id="s-how" class="scr"><div class="box"><h2 style="text-align:center;margin-bottom:12px">Nasıl Oynanır?</h2><p style="font-size:14px;line-height:1.5;margin-bottom:16px">1. Üstteki antikayı tamir etmek için ekranda yazan renkleri bekle.<br><br>2. Kargo bandındaki parça ortadaki hedef kareye girdiğinde alttaki doğru renk butonuna bas!<br><br>3. Yanlış renge basar veya parçayı kaçırırsan canın azalır.</p><button type="button" class="btn by b-home">Anladım</button></div></div>
<div id="s-set" class="scr"><div class="box"><h2 style="text-align:center;margin-bottom:12px">Ayarlar</h2><div id="setrows"></div><button type="button" class="btn br" style="margin-top:14px" id="b-rst">İlerlemeyi Sıfırla</button><button type="button" class="btn by b-home">Geri</button></div></div>
<div id="s-game" class="scr">
  <div class="hud"><span id="glvl">Bölüm 1</span><button type="button" class="bt" style="padding:5px 10px;border-radius:8px;border:1px solid #fff;font-weight:bold;cursor:pointer" id="b-exit">☰ Menü</button><span style="color:#ffe699">🪙 <span class="cv">0</span></span><span id="gliv">❤️❤️❤️</span></div>
  <div class="wbox"><canvas id="ac" width="140" height="115"></canvas><div class="pbar"><div class="pfill" id="pf"></div></div><b style="margin-top:5px">Tamir %<span id="gpct">0</span></b><small id="gnm" style="color:#d6bc94"></small><small id="ghnt" style="color:#ffd54f;margin-top:2px"></small></div>
  <div class="belt"><canvas id="bc" style="position:absolute;inset:0;width:100%;height:100%"></canvas><div class="tz"></div></div>
  <button type="button" class="btn bb" id="b-slow">Bandı yavaşlat · 40 altın</button>
  <div class="cbtns">
    <button type="button" class="cb cr" id="c-red"><div class="dots"><i style="background:#ff6b6b"></i><i style="background:#ff6b6b"></i></div>Kırmızı</button>
    <button type="button" class="cb cbl" id="c-blue"><div class="dots"><i style="background:#60a5fa"></i><i style="background:#60a5fa"></i></div>Mavi</button>
    <button type="button" class="cb cy" id="c-yellow"><div class="dots"><i style="background:#facc15"></i><i style="background:#facc15"></i></div>Sarı</button>
  </div>
</div>
<div id="s-end" class="scr" style="background:rgba(15,8,3,.88)"><div class="box" style="text-align:center"><h2 id="et" style="color:#ffd54f">Tamir Tamamlandı!</h2><div id="es" style="font-size:30px;margin:10px 0">⭐⭐⭐</div><p id="ed" style="margin-bottom:16px"></p><button type="button" class="btn bg" id="enx">Sonraki Bölüm</button><button type="button" class="btn by b-home">Ana Menü</button></div></div>
<script>
if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(rs){for(var i=0;i<rs.length;i++)rs[i].unregister();});}
var LV=[
  {n:'Cep Saati',t:'w',r:['red','blue'],h:'Kırmızı ve mavi parçalarla onar.',g:4,s:115},
  {n:'Cep Saati',t:'w',r:['red','yellow'],h:'Kırmızı ve sarı parçaları yakala.',g:5,s:126},
  {n:'Retro Radyo',t:'r',r:['blue','yellow'],h:'Mavi ve sarı parçalarla onar.',g:5,s:134},
  {n:'Retro Radyo',t:'r',r:['red','blue','yellow'],h:'Üç rengi de yakala!',g:6,s:142},
  {n:'Müzik Kutusu',t:'r',r:['yellow','blue'],h:'Sarı ve mavi parçaları tak.',g:6,s:150},
  {n:'Müzik Kutusu',t:'r',r:['red','yellow'],h:'Kırmızı ve sarı parçalar gerekli.',g:7,s:158},
  {n:'Pusula',t:'w',r:['red','blue'],h:'Kırmızı ve mavi ibreleri tak.',g:7,s:165},
  {n:'Pusula',t:'w',r:['red','blue','yellow'],h:'Tüm renklerden parça lazım!',g:8,s:172},
{n:'Eski Telefon',t:'l',r:['yellow','red'],h:'Sarı ve kırmızı kabloları bağla.',g:8,s:180},
{n:'Eski Telefon',t:'l',r:['blue','yellow'],h:'Mavi ve sarı parçalarla onar.',g:9,s:188},
{n:'Gaz Feneri',t:'l',r:['red','blue','yellow'],h:'Bant hızlandı, dikkat!',g:9,s:196},
{n:'Gaz Feneri',t:'l',r:['red','blue','yellow'],h:'Ustalık sınavı: Tamir et!',g:10,s:205}
];
var SHOP=[
{t:'Altın Kesesi',d:'600 altın',p:'$0.99',a:600,b:''},
{t:'Altın Sandığı',d:'1800 altın',p:'$2.99',a:1800,b:'POPÜLER'},
{t:'Altın Kasası',d:'5000 altın',p:'$6.99',a:5000,b:'EN AVANTAJLI'},
{t:'Başlangıç Paketi',d:'1500 altın',p:'$1.49',a:1500,b:''},
{t:'Usta Kalfa',d:'+1 can · 2x altın',p:'$3.99',k:1,b:''}
];
var st={c:0,u:1,st:[0,0,0,0,0,0,0,0,0,0,0,0],k:0,sr:0,ld:'',sfx:1,bgm:1,vib:1};
try{var svd=JSON.parse(localStorage.getItem('kb5'));if(svd&&svd.st)st=svd;}catch(e){}
function sv(){try{localStorage.setItem('kb5',JSON.stringify(st));}catch(e){}ui();}
var acx=null;
function snd(f,tp,du){if(!st.sfx)return;try{acx=acx||new(window.AudioContext||window.webkitAudioContext)();if(acx.state==='suspended')acx.resume();var o=acx.createOscillator(),g=acx.createGain();o.type=tp;o.frequency.value=f;g.gain.setValueAtTime(.15,acx.currentTime);g.gain.exponentialRampToValueAtTime(.001,acx.currentTime+du);o.connect(g);g.connect(acx.destination);o.start();o.stop(acx.currentTime+du);}catch(e){}}
function msg(m){var e=document.getElementById('toast');e.textContent=m;e.style.display='block';clearTimeout(e._t);e._t=setTimeout(function(){e.style.display='none';},2500);}
function go(id){var sc=document.querySelectorAll('.scr');for(var i=0;i<sc.length;i++)sc[i].classList.remove('on');document.getElementById(id).classList.add('on');ui();}
function ui(){
var cvs=document.querySelectorAll('.cv');for(var i=0;i<cvs.length;i++)cvs[i].textContent=st.c;
var sum=0;for(var i=0;i<st.st.length;i++)sum+=st.st[i];
document.getElementById('tst').textContent=sum;
var lg=document.getElementById('lgrid');lg.innerHTML='';
for(var i=0;i<LV.length;i++){
(function(idx){
var op=(idx+1)<=st.u,s=st.st[idx];
var d=document.createElement('div');d.className='card'+(op?' op':'');
d.innerHTML=''+(idx+1)+''+LV[idx].n+''+(op?'⭐'.repeat(s)+'☆'.repeat(3-s):'🔒')+'';
if(op)d.onclick=function(){start(idx);};
lg.appendChild(d);
})(i);
}
var sl=document.getElementById('slist');sl.innerHTML='';
for(var i=0;i<SHOP.length;i++){
(function(idx){
var x=SHOP[idx];
var d=document.createElement('div');d.className='sitem';
d.innerHTML=(x.b?''+x.b+'':'')+''+x.t+'
'+x.d+'';
var b=document.createElement('button');b.type='button';b.className='by';b.style.cssText='width:auto;padding:8px 14px;margin:0;border-radius:10px';b.textContent=x.p;
b.onclick=function(){
if(x.k){if(st.k)return msg('Zaten aktif!');st.k=1;msg('Usta Kalfa aktif!');}
else{st.c+=x.a;msg('+'+x.a+' altın eklendi!');}
snd(700,'triangle',.2);sv();
};
d.appendChild(b);sl.appendChild(d);
})(i);
}
document.getElementById('setrows').innerHTML=
'Ses efektleri'+
'Müzik'+
'Ekran titremesi';
document.getElementById('t-sfx').onclick=function(){st.sfx=st.sfx?0:1;sv();};
document.getElementById('t-bgm').onclick=function(){st.bgm=st.bgm?0:1;sv();};
document.getElementById('t-vib').onclick=function(){st.vib=st.vib?0:1;sv();};
}
var ci=0,liv=3,ht=0,play=0,pts=[],bx=0,spt=0,slt=0,lt=0;
var bc=document.getElementById('bc'),bx2=bc.getContext('2d'),ac=document.getElementById('ac'),ax=ac.getContext('2d');
var CL={red:'#e04848',blue:'#3b82f6',yellow:'#eab308'};
function start(i){ci=i;var l=LV[i];liv=st.k?4:3;ht=0;pts=[];spt=.5;slt=0;play=1;document.getElementById('glvl').textContent='Bölüm '+(i+1);document.getElementById('gnm').textContent=l.n;document.getElementById('ghnt').textContent=l.h;hud();go('s-game');}
function hud(){var l=LV[ci],p=Math.min(100,Math.round(ht/l.g100));document.getElementById('gliv').textContent='❤️'.repeat(Math.max(0,liv));document.getElementById('gpct').textContent=p;document.getElementById('pf').style.width=p+'%';art(p/100);}
function art(p){ax.clearRect(0,0,140,115);ax.save();ax.translate(70,60);ax.fillStyle='#c9a66b';ax.strokeStyle='#785522';ax.lineWidth=4;var t=LV[ci].t;if(t==='w'){ax.beginPath();ax.arc(0,0,40,0,6.28);ax.fill();ax.stroke();ax.fillStyle='#e8dec8';ax.beginPath();ax.arc(0,0,32,0,6.28);ax.fill();ax.strokeStyle='#241407';ax.beginPath();ax.moveTo(0,0);ax.lineTo(0,-20);ax.moveTo(0,0);ax.lineTo(14,7);ax.stroke();}else if(t==='r'){ax.beginPath();ax.roundRect(-46,-30,92,60,9);ax.fill();ax.stroke();ax.fillStyle='#3b2312';ax.fillRect(-36,-18,38,36);}else{ax.beginPath();ax.arc(0,4,34,0,6.28);ax.fill();ax.stroke();ax.fillStyle='#ffd54f';ax.fillRect(-14,-38,28,12);}if(p<1){ax.strokeStyle='#1f1208';ax.lineWidth=3;ax.globalAlpha=1-p;ax.beginPath();ax.moveTo(-10,-20);ax.lineTo(4,-3);ax.lineTo(-7,12);ax.lineTo(12,22);ax.stroke();}ax.restore();}
function hit(c){if(!play)return;var m=bc.width/2,tg=null,bd=999;for(var i=0;i<pts.length;i++){var d=Math.abs(pts[i].x-m);if(d<50&&d<bd){bd=d;tg=pts[i];}}var l=LV[ci];if(tg&&tg.c===c&&l.r.indexOf(c)>-1){pts.splice(pts.indexOf(tg),1);ht++;snd(520+ht25,'triangle',.15);hud();if(ht>=l.g)win();}else fail();}
function fail(){liv--;snd(140,'sawtooth',.25);hud();if(liv<=0){play=0;document.getElementById('et').textContent='Antika Kırıldı!';document.getElementById('es').textContent='💔';document.getElementById('ed').textContent='Tekrar dene!';document.getElementById('enx').style.display='none';go('s-end');}}
function win(){play=0;snd(660,'triangle',.3);var s=liv>=3?3:liv===2?2:1;if(s>st.st[ci])st.st[ci]=s;if(ci+1>=st.u&&st.u<12)st.u=ci+2;var r=(80+ci20)(st.k?2:1);st.c+=r;sv();document.getElementById('et').textContent='Tamir Tamamlandı!';document.getElementById('es').textContent='⭐'.repeat(s)+'☆'.repeat(3-s);document.getElementById('ed').textContent='+'+r+' Altın Kazandın!';document.getElementById('enx').style.display=ci<11?'block':'none';go('s-end');}
document.getElementById('b-daily').onclick=function(){var td=new Date().toDateString();if(st.ld===td)return msg('Bugünün hediyesini zaten aldın!');st.ld=td;st.sr++;var r=100+st.sr25;st.c+=r;sv();snd(600,'triangle',.2);msg('Günlük hediye alındı · seri: '+st.sr+' gün (+'+r+' altın)');};
document.getElementById('b-play').onclick=function(){start(Math.min(st.u-1,11));};
document.getElementById('b-lvl').onclick=function(){go('s-lvl');};
document.getElementById('b-shop').onclick=function(){go('s-shop');};
document.getElementById('b-how').onclick=function(){go('s-how');};
document.getElementById('b-set').onclick=function(){go('s-set');};
document.getElementById('b-rst').onclick=function(){localStorage.removeItem('kb5');location.reload();};
document.getElementById('b-exit').onclick=function(){play=0;go('s-menu');};
document.getElementById('b-slow').onclick=function(){if(!play)return;if(st.c<40)return msg('Yetersiz altın!');st.c-=40;sv();slt=5;snd(350,'sine',.2);msg('Bant 5 sn yavaşlatıldı!');};
document.getElementById('c-red').onclick=function(){hit('red');};
document.getElementById('c-blue').onclick=function(){hit('blue');};
document.getElementById('c-yellow').onclick=function(){hit('yellow');};
document.getElementById('enx').onclick=function(){start(ci+1);};
var hm=document.querySelectorAll('.b-home');for(var i=0;i<hm.length;i++)hm[i].onclick=function(){go('s-menu');};
function loop(ts){var dt=Math.min(.05,(ts-lt)/1000||0);lt=ts;if(bc.width!==bc.clientWidth){bc.width=bc.clientWidth;bc.height=bc.clientHeight;}var W=bc.width,H=bc.height;bx2.clearRect(0,0,W,H);if(play){if(slt>0)slt-=dt;var l=LV[ci],sp=l.s(slt>0?.45:1);bx=(bx+spdt)%28;spt-=dt;if(spt<=0){var pl=['red','blue','yellow'],c=Math.random()<.72?l.r[Math.floor(Math.random()l.r.length)]:pl[Math.floor(Math.random()3)];pts.push({x:-25,c:c});spt=Math.max(.85,1.6-ci.06)(slt>0?1.5:1);}for(var i=pts.length-1;i>=0;i--){pts[i].x+=spdt;if(pts[i].x>W+25){var m=pts.splice(i,1)[0];if(l.r.indexOf(m.c)>-1)fail();}}}bx2.strokeStyle='#1a1a1a';bx2.lineWidth=3;for(var x=-28+bx;x<W+28;x+=28){bx2.beginPath();bx2.moveTo(x,0);bx2.lineTo(x,H);bx2.stroke();}for(var i=0;i<pts.length;i++){var p=pts[i];bx2.fillStyle=CL[p.c];bx2.strokeStyle='#fff';bx2.lineWidth=3;bx2.beginPath();bx2.roundRect(p.x-20,H/2-20,40,40,9);bx2.fill();bx2.stroke();}requestAnimationFrame(loop);}
ui();requestAnimationFrame(loop);
