//open api
const getData = (selDt, ul) => {
  console.log(selDt);
  const testAPI = '82ca741a2844c5c180a208137bb92bd7';
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  url = `${url}key=${testAPI}&targetDt=${selDt}`;

  console.log(url);

  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(dailyBoxOfficeList);

    let tm = dailyBoxOfficeList.map(item => 
      `<li class="mvli">
            <span class="rank">${item.rank}</span>
            <span class="movieNm">${item.movieNm}</span>
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

document.addEventListener('DOMContentLoaded', ()=>{
  //요소가져오기
  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec > ul')

  //어제날짜구하기
  let yesterday = getYesterday();
  console.log('yesterday:' , yesterday);

  //date요소 최대값 결정
  dt.max = yesterday;

  //데이터 가져오기
  dt.addEventListener('change',()=>{
    getData(dt.value.replaceAll('-', ''), ul);
  });
});