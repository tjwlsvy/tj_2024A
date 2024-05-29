
let 회원목록 =[{ id : 'qwe' , pw : 123 ,    이름 : '유재석'}, {id : 'asd' , pw : 456 , 이름 : '강호동'}];

function signup(){
    
    // 아이디 입력받기
    let id = document.querySelector('#signupId').value;   console.log(id);

    // 비밀번호 입력받기
    let pw = document.querySelector('#signupPw').value;   console.log(pw);

    
    // ????
    let m = {id : id , pw : pw};
    회원목록.push(m)

    console.log(회원목록);
alert('회원가입성공')
}



function login(){

    // 아이디 입력받기
    let id = document.querySelector('#loginId').value; console.log(loginId);   console.log(id);
    // 비밀번호 입력받기
    let pw = document.querySelector('#loginPw').value; console.log(loginPw);   console.log(pw);

    

    //  0번 인덱스부터 회원목록 끝까지 반복.
    for( i=0 ; i < 회원목록.length; i++){

        // 회원목록에 있는 i번째 id , pw가 입력받은 id.pw와 일치하면 로그인 성공
        if(회원목록[i].id == id && 회원목록[i].pw == pw){  
            alert('로그인성공');return; // 로그인 성공시 반복x 
        }
        
    }
    alert('로그인실패')
}












