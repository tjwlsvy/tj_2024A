
console.log(1234);


let 제품목록 = [ { 제품명 : '환타' , 가격 : '1,000'},
            { 제품명 : '라떼' , 가격 : '2,000'},
            { 제품명 : '커피' , 가격 : '3,000'} ]   
/*
let list = [
    {주문번호 : '1' , 제품명 : '코카콜라' , 가격 : '1,000' , 주문일 : '2024-05-30 17:00'  },
    {주문번호 : '2' , 제품명 : '사이다' , 가격 : '2,000' , 주문일 : '2024-05-30 17:00'  },
    {주문번호 : '3' , 제품명 : '아메리카노' , 가격 : '3,000' , 주문일 : '2024-05-30 17:00'  },
]
*/


function list(){
  console.log('list')
    let list = document.querySelector('#list').value;    
   let won = document.querySelector('#won').value;

   let L = { 제품명 : list , 가격 : won};
    제품목록.push(L);
  
    console.log(제품목록)
    alert('제품등록성공')

}





