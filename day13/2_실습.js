let 주차장 = ['','','4857,16:54','3619,9:54','3719,9:54','1234,15:23','','','','','','','','','','','','','',''];
print();

function add(i){
    let carNum = document.querySelector('#carNuminput').value;

    let date = new Date();

    let currentHour = date.getHours();
    let currentMinutes = date.getMinutes();

    let time = `${currentHour}:${currentMinutes}`;
    if( 주차장[i] !== '' ){
        alert('주차 불가');
        return;
    }

    주차장[i] = carNum +','+time ;
    
    alert('입차성공');

    console.log(주차장);

    print();

}

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

function out(){
    let 차량번호 =document.querySelector('#carNuminput').value;

    for(let i=0; i<20; i++){

        let carNumber= 주차장[i].split(','); console.log(carNumber[0]);
        if(차량번호 == carNumber[0]){
            alert(`내 차량 위치는 ${i}`);
            주차장[i]='';

            let date = new Date();

            let currentHour = date.getHours();
            let currentMinutes = date.getMinutes();
        
            let currentimemin = currentHour*60+currentMinutes
            
            console.log(currentimemin)
        
        
            let carHour = carNumber[1].split(':')[0]*1;
            let carMinutes = carNumber[1].split(':')[1]*1;

            let cartimemin = carHour*60+carMinutes;
            
        
            console.log(cartimemin)
            console.log((currentimemin-cartimemin)*100)

            let html = `<h3> 주차 시간</h3> <br/>
                    <div> ${(currentimemin-cartimemin)}분</div>
                    <h3> 주차 비용</h3> <br/>
                    <div> ${(currentimemin-cartimemin)*100}원 </div>`
        
            document.querySelector('#출차').innerHTML = html;
        
            print();
            return;
        }
    }
    alert('차량없음');
}