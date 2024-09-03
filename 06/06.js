document.addEventListener('DOMContentLoaded', ()=>{
  //이미지
  const imgs = document.querySelectorAll('.dice > img');
  //버튼
  const bts = document.querySelectorAll('.bt > button');
  //결과
  const msg = document.querySelector('#msg');

  //버튼클릭
  for(let bt of bts) {
    // console.log(bt);
    bt.addEventListener('click', ()=>{
      //컴퓨터 랜덤수
      let comN = Math.floor(Math.random()*6) + 1 ;
      imgs[0].setAttribute('src', `../img/${comN}.png`);
      imgs[0].setAttribute('alt', `${comN}.png`);

      //사용자 선택수
      console.log(bt.textContent.charAt(0));
      let userN = parseInt(bt.textContent.charAt(0));
      imgs[1].setAttribute('src', `../img/${userN}.png`);
      imgs[1].setAttribute('alt', `${comN}.png`);

      //결과비교출력
      if(comN === userN) {
        msg.textContent = '맞음';
      } else {0
        msg.textContent = '틀림';
      }

    });
  }

});