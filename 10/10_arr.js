let arr = [1,2, 3, 4, 5];
console.log(arr);

//배열요소접근
console.log('맨처음요소 접근: ', arr[0]);
console.log('두번째: ', arr[1]);

//배열순회
for(let i=0; i < arr.length; i++){
  console.log(`${i+1}번째 : ${arr[i]}`);
}

for(let i in arr) {
  console.log(`${parseInt(i)+1}번째 : ${arr[i]}`);
}

//entires 값을두개줌
for(let [i,item] of arr.entries()) {
  console.log(`${parseInt(i)+1}번째 : ${item} : ${item % 2 == 0 ? "짝" : "홀"}`);
}

console.log('forEach');
arr.forEach((item, i) => {
  console.log(`${parseInt(i)+1}번째 : ${item} : ${item % 2 == 0 ? "짝" : "홀"}`);
});

// arr = [];
// arr.length = 0;
// console.log(arr);

//맨뒤추가
arr.push(6);
console.log(arr);

//맨뒤삭제
arr.pop()
console.log(arr);

//맨처음추가
arr.unshift(6)
console.log(arr);

//맨처음삭제
arr.shift()
console.log(arr);

//삭제
arr.splice(2, 2)
console.log(arr);

//변경
arr.splice(2, 1, 'a')
console.log(arr);


//추가
arr.splice(2, 0, '3')
console.log(arr);

arr = [1,2,3,4,5];
arr2 = [];
for(let item2 of arr) {
  arr2.push(item2);
}
console.log(arr2);


//call back 함수의 인수가 매개변수가 1개이면 () 생략가능
//call back body에 return만 있으면 {}와 return 생략가능
arr2 = arr.map((item, i) => item * 2);
console.log(arr2);

arr2 = arr.filter(item => item % 2 == 0);
console.log(arr2);

arr = [4,5,2,3,1]
console.log(`${arr} => 정렬 ${arr.sort((a,b)=>b-a)}`);
