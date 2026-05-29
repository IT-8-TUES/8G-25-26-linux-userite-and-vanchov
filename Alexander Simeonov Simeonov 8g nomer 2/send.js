function gosmth(){
    window.location.href = "menu.html";}
let t_1=5, t_2=4, t_3=6, t_4=4, t_5=12, t_6=15, t_7=12, t_8=8,deliver=15, time=0;
let t_i1=0, t_i2=0, t_i3=0, t_i4=0, t_i5=0, t_i6=0, t_i7=0, t_i8=0;
function incr_1() {
t_1++;
document.getElementById('out_1').textContent = t_1;
sum();}
function decr_1() {
t_1--;
document.getElementById('out_1').textContent = t_1;
sum();}
function incr_2() {
t_2++;
document.getElementById('out_2').textContent = t_2;
sum();}
function decr_2() {
t_2--;
document.getElementById('out_2').textContent = t_2;
sum();}
function incr_3() {
t_3++;
document.getElementById('out_3').textContent = t_3;
sum();}
function decr_3() {
t_3--;
document.getElementById('out_3').textContent = t_3;
sum();}
function incr_4() {
t_4++;
document.getElementById('out_4').textContent = t_4;
sum();}
function decr_4() {
t_4--;
document.getElementById('out_4').textContent = t_4;
sum();}
function incr_5() {
t_5++;
document.getElementById('out_5').textContent = t_5;
sum();}
function decr_5() {
t_5--;
document.getElementById('out_5').textContent = t_5;
sum();}
function incr_6() {
t_6++;
document.getElementById('out_6').textContent = t_6;
sum();}
function decr_6() {
t_6--;
document.getElementById('out_6').textContent = t_6;
sum();}
function incr_7() {
t_7++;
document.getElementById('out_7').textContent = t_7;
sum();}
function decr_7() {
t_7--;
document.getElementById('out_7').textContent = t_7;
sum();}
function incr_8() {
t_8++;
document.getElementById('out_8').textContent = t_8;
sum();}
function decr_8() {
t_8--;
document.getElementById('out_8').textContent = t_8;
sum();}
function sum() {
time=t_1*t_i1+t_2*t_i2+t_3*t_i3+t_4*t_i4+t_5*t_i5+t_6*t_i6+t_7*t_i7+t_8*t_i8;
document.getElementById('bill').textContent = time;}
function gosmth2(){
window.location.href = "menu.html";
time+=deliver;}
function submit(){
    alert("Order submitted successfully! Estimated dlivery time: "+time+" minutes.");
    window.location.href = "homepage.html";
}