
let 인사정보 =[
    {인사코드 : 1 , 이름 : '유재석' , 생년월일 : 123456},
    {인사코드 : 2 , 이름 : '강호동' , 생년월일 : 987456},
]


function 인사등록(){                                            console.log('인사등록()');
    let 이름 = document.querySelector('#이름').value;                 console.log(이름);
    let 생년월일 = document.querySelector('#생년월일').value;         console.log(생년월일);

    let 인사코드 = 인사정보.length != 0 ? 인사정보[인사정보.length-1].인사코드 +1 : 1;
    let 인사 = {인사코드 : 인사코드 , 이름 : 이름 , 생년월일 : 생년월일 };         console.log(인사);

    인사정보.push(인사);    alert('등록완료');              console.log(인사정보);
    인사출력();
}


function 인사출력(){                                        console.log('인사출력()');

    let 인사출력 = document.querySelector('#인사출력');

    let html = '' ;
    for(let i = 0 ; i < 인사정보.length; i++ ){
        html += `<tr>
                    <td>${인사정보[i].인사코드}</td>
                    <td>${인사정보[i].이름}</td>
                    <td>${인사정보[i].생년월일}</td>
                </tr>`

    }        
    인사출력.innerHTML = html;
}