
// 0. 전역
let timerId = ``;   // 인터벌을 저장하는 변수
let count = 0;      // 인터벌 실행횟수 저장하는 변수





// 1. 시작함수
function start(){console.log('start()');
//setInterval(함수명 , 밀리초); 500 : 0.5초 마다 함수 실행
    timerId = setInterval( creatImg , 500);

  
}

// 2. 이미지 생성함수
function creatImg(){ console.log('creatImg()');
    // 어디에
    let box = document.querySelector('#box');       console.log(box);

    // +위치 (top : 0~470 , left 0~470) 난수생성
    let top = parseInt(Math.random()*471);  
    //Math.random() : 0~1 실수 생성 ,   Math.random()*471 : 0 ~ 471 난수 생성
    //parseInt (실수)   : 소수점 없애고 정수 반환

    let left = parseInt(Math.random()*471);

    count++;    //실행횟수 1증가

   
    // 무엇을
    let img = `<img id="img${count}" onclick="removeImg(${count})" style = "top:${top}px; left:${left}px" src ="버섯.gif" />`;
    
    // 출력누적
    box.innerHTML += img;

    // querySelectorAll : 여러요소 가져오기
    let imgList = document.querySelectorAll('#box > img');
    // 만약에 imgList의 요소가 30개 이상이면 종료
    if(imgList.length > 30){alert('실패'); clearImg();}
}

// 3. 이미지 제거함수
function removeImg(count){   console.log('removeImg()'+count);
    // 1. 내가 클릭한(count)이미지 요소 가져오기
    let clickImg = document.querySelector(`#img${count}`);
    console.log(clickImg);

    // 2. 요소 제거하는 방법 = [ innerHTML 사용안함 ]
        // 1. 제거할 요소의 부모요소 호출
        let box = document.querySelector('#box');
        // 2. 부모 요소에 부모요소객체.removeChild(자식요소객체)
        box.removeChild(clickImg)           
}

// 4. 인터벌 종료 함수
function clearImg(){
    clearInterval(timerId);
}



