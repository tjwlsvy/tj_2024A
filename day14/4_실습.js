let 주차장 = [
    '',
    '',
    {차량번호: '4857', 시: '16' , 분 : '54'},
    {차량번호: '3619', 시: '9' , 분 : '54'},
    {차량번호: '1234', 시 : '15' , 분 : '23'},
    '','','','','',
    '','','','','',
    '','','','',''
]
print();

function print(){
    let parkingArea = document.querySelector('#parkingArea');

    let html = ``;

    for( let i = 0 ; i<20 ; i++ ){
        if(주차장[i]==''){
            html  = html + `<div class="whiteBox" onclick="add(${i})"></div>` // vs html+=`<div></div>`
        
        }else{  html  = html + `<div class="redBox" onclick="add(${i})"></div>` // vs html+=`<div></div>`
        

        }
        
    }
    parkingArea.innerHTML = html;
    console.log(주차장);   
}

function add(i){
    let carNum = document.querySelector('#carNuminput').value;

    let date = new Date();

    let currentHour = date.getHours();
    let currentMinutes = date.getMinutes();

    let time = currentHour
    let minutes = currentMinutes
    if( 주차장[i] !== '' ){
        alert('주차 불가');
        return;
    }

    주차장[i] = { 차량번호 : carNum , 시 : time , 분 : minutes } ;
    
    alert('입차성공');

    console.log(주차장);

    print();
}
    
function out(){
    // 출차할 차량을 입력 받는다.
    let 차량번호 =document.querySelector('#carNuminput').value;
    // 주차장 배열의 0번 인덱스부터 마지막 인덱스부터 순회
    for(let i=0; i<20; i++){
    // i번째 차량 가져오기 
        let carNumber= 주차장[i].차량번호; 
    // 만약에 입력한 차량번호랑 i번째 차량번호만
        if(차량번호 == carNumber){
            alert(`내 차량 위치는 ${i}`);
            
          

            let date = new Date();

            let currentHour = date.getHours();

            let currentMinutes = date.getMinutes();

            let currentimemin = currentHour*60+currentMinutes   

            let carHour = 주차장[i].시*1;

            let carMinutes = 주차장[i].분*1;

            let cartimemin = carHour*60+carMinutes;        
             
            let html = `<h3> 주차 시간</h3> <br/>
                    <div> ${(currentimemin-cartimemin)}분</div>
                    <h3> 주차 비용</h3> <br/>
                    <div> ${(currentimemin-cartimemin)*100}원 </div>`
        
            document.querySelector('#출차').innerHTML = html;
          
            // i번째 차량의 객체 제거
            주차장[i]='';
            print();
            return;
        }
    }
    alert('차량없음');
}