const disp = (divNum, divplus,divBonus, dsp) => {
  divNum.style.display = dsp;
  divplus.style.display = dsp;
  divBonus.style.display = dsp;

}

document.addEventListener('DOMContentLoaded', ()=>{
  const divNum = document.querySelector('#divNum');
  const divplus = document.querySelector('.divplus');
  const divBonus = document.querySelector('#divBonus');
  const bt = document.querySelector('.sec > button');
  
// divNum.style.display = 'none';
// divplus.style.display = 'none';
// divBonus.style.display = 'none';
disp(divNum, divplus, divBonus, 'none');

  bt.addEventListener('click', (e)=>{
    e.preventDefault();
    let arr = [];

    while(arr.length < 7) {
      let n= Math.floor(Math.random() * 45) + 1;
      if(!arr.includes(n)) arr.push(n); 
    }

    let arrBonus = arr.splice(6,1);
    arr.sort((a,b)=>a-b);
    console.log(arr);
    console.log(arrBonus);

    arr = arr.map(item => `<span class='sp${Math.floor(item/10)}'>${item}</span>`);
    arr = arr.join('');
    divNum.innerHTML = arr;
    console.log(arr);

    arrBonus = arrBonus.map(item => `<span class='sp${Math.floor(item/10)}'>${item}</span>`);
    arrBonus = arrBonus.join('');
    divBonus.innerHTML = arrBonus;

    // divNum.style.display = 'block';
    // divplus.style.display = 'block';
    // divBonus.style.display = 'block';
    disp(divNum, divplus, divBonus, 'block');

  });

});