//전역변수
const testAPI = '82ca741a2844c5c180a208137bb92bd7';


//상세정보 가져오기
const getDetail = (movieCd) => {
  const footer = document.querySelector('#mvinfo')
  alert("movieCd :" + movieCd);
  let url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?';
  url = `${url}key=${testAPI}&movieCd=${movieCd}`;
  
  fetch(url)
  .then(resp=>resp.json())
  .then(data=>{
    let movieInfo = data.movieInfoResult.movieInfo;
    console.log(movieInfo);

    let movieNm = movieInfo.movieNm;
    let genreNm = movieInfo.genres.map(genre => genre.genreNm).join(", ");
    let actors = movieInfo.actors.slice(0,3).map(item => item.peopleNm).join(', ') ;


    footer.innerHTML = `
    <span class="mvifName">제목: ${movieNm}</span>
    <span class="mvif">장르: ${genreNm}</span>
    <span class="mvif">출연진: ${actors}</span>`;
    // tm = tm.join('')
    // console.log(tm)
  })
  .catch(err => console.error(err));
}

//open api
const getData = (selDt, ul, gb) => {
  console.log('gb=', gb);
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  url = `${url}key=${testAPI}&targetDt=${selDt}`;
  if(gb != 'T'){
    url=`${url}&repNationCd=${gb}`;
  }

  console.log(url);

  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(dailyBoxOfficeList);

    let tm = dailyBoxOfficeList.map(item => 
      `<a href="#" onClick="getDetail(${item.movieCd})">
      <li class="mvli">
            <span class="rank">${item.rank}</span>
            <span class="movieNm">${item.movieNm}</span>
            <span class="openDt">${item.openDt}</span>
            <span class="rankInten">
            ${item.rankInten > 0 ? 
              '<span class="spRed">▲</span>' : item.rankInten < 0 ? '<span class="spBlue">▼</span>'
               : '〓'}
            ${item.rankInten != 0 ? Math.abs(item.rankInten) : ''}
            </span>
          </li>`)
    tm = tm.join('')
    ul.innerHTML = tm;
    console.log(tm)
  })
  .catch(err => console.error(err));

}

//어제날짜구하기함수
const getYesterday = ()=>{
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate()-1);

  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, '0');
  const data = String(yesterday.getDate()).padStart(2, '0');
  const maxDate = `${year}-${month}-${data}`;

  //.padStart(2, '0')

  //월2자리
  // month = month < 10 ? '0' + month : month;
  // date = date < 10 ? '0' + date : date;

  // month = `0${month}`.slice(-2);

  return maxDate;
}

//radio
const getGubun=()=>{
  //radio요소 가져오기
  // const r1=document.querySelector('#r1');
  // const r2=document.querySelector('#r2');
  // const r3=document.querySelector('#r3');

  // console.log("r1 =", r1.checked);
  // console.log("r2 =", r2.checked);
  // console.log("r3 =", r3.checked);

  // if(r1.checked) return r1.value;
  // else if(r2.checked) return r2.value;
  // else if(r3.checked) return r3.value;

  // radio버튼의 클릭된 것만 가져오기
  const gubun = document.querySelector('input[name=mvgb]:checked') ;  
  console.log('gubun = ', gubun.value) ;
  return gubun.value 

}

document.addEventListener('DOMContentLoaded', ()=>{
  //요소가져오기
  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec > ul');
  // const fieldset = document.querySelector('fieldset');
  // const radios = document.querySelectorAll('input[type=radio]');
  const radios = document.querySelectorAll('input[name=mvgb]') ;

  //어제날짜구하기
  let yesterday = getYesterday();
  console.log('yesterday:' , yesterday);

  //date요소 최대값 결정
  dt.max = yesterday;


  //date기본값
  dt.value = yesterday;

  //gubun값
  console.log(getGubun());

  //기본 첫 페이지 보이기
  getData(dt.value.replaceAll('-', ''), ul, getGubun());


  //데이터 가져오기
  dt.addEventListener('change',()=>{
    getData(dt.value.replaceAll('-', ''), ul, getGubun());
  });

  // fieldset.addEventListener('click',()=>{
  //   getData(dt.value.replaceAll('-', ''), ul, getGubun());
  // });

  for(let radio of radios) {
    radio.addEventListener('click', ()=>{
      // getData(dt.value.replaceAll('-', ''), ul, getGubun());
      if(radio.checked) getData(dt.value.replaceAll('-', ''), ul, radio.value);
    })
  }

});