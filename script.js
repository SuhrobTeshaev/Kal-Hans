function openbar(){
    let sidebar=document.getElementById('sidebar');
    sidebar.style.left='0';
}
function closebar(){
    let sidebar=document.getElementById('sidebar');
    sidebar.style.left='-250px';
}

let minus=document.querySelector('#minus');
let plus=document.querySelector('#plus');
let number=document.querySelector('#number');

 function onMinus(){

    number.innerHTML--;
    
 }
 function onPlus(){
    number.innerHTML++;
 }