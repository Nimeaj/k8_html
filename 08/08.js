document.addEventListener('DOMContentLoaded', ()=>{
  const img = document.querySelector('.sec img')
  const txt = document.querySelector('#txt');
  const bt = document.querySelector('#bt');

 let n;
 let flag = false;

 bt.addEventListener('click', (e)=>{
  e.preventDefault();

  // if(flag == false) {

  if (!flag) {
    n = Math.floor(Math.random() * 100) + 1 ; //1 ~ 100
    console.log('n=', n);
    flag = true;

    if (txt.style.display == 'none') {
      img.setAttribute('src', '../img/what.png')
      txt.style.display = 'inline';
      txt.value = '';
      txt.focus();
      bt.innerHTML = '확인';
      return;
    }
  }

  if (n === parseInt(txt.value)) {
    img.setAttribute('src', '../img/good.png') ;
    txt.style.display = 'none';
    bt.innerHTML = '번호를 다시 생성하세요.'
    flag = false;
  }
  else if ( n > parseInt(txt.value)) {
    img.setAttribute('src', '../img/up.png') ;
  }
  else {
    img.setAttribute('src', '../img/down.png') ;
  }

 });
});