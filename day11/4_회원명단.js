
console.log( 'js실행' );

// 1. 함수 선언 
// function 등록( ){ }

// 2. (클릭) 이벤트가 함수 호출 하는데 확인 작업 
// function 등록( ){  console.log( '등록()' ); }

// 3. 로직(함수안에서 처리할 코드) 작성
const nameList = [ ]

function 등록( ){    console.log( '등록()' ); 
  //[입력] 1. HTML INPUT 에 입력된 값을 가져온다.
  let input = document.querySelector('#name');  console.log( input );
    //  html <input /> 을 JS의 객체(코드) 로 반환한다. 
  let name = input.value;                       console.log( name );
    // .value 속성의 일력된 값을 반환한다. 
  // -- let name = document.querySelector('#name').value;
  //[처리] 2. 입력받은 값을 배열에 저장한다.  * 배열내 데이터는 전역

  //=============== 유효성 검사 : 중복체크 ====================
  if( nameList.indexOf( name ) != -1){alert('이미등록된 이름 입니다.');}
  else if(name.length !=3){alert ('회원명은 3글자만 입력 가능합니다.');}
  else if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])){ 
    alert('회원명에 숫자를 포함할수 없습니다');}

  else{nameList.push( name ); 출력();}                        console.log( nameList );
  //[출력] 3. 배열내 데이터를 HTML table에 출력한다.
  출력( );
  // +  input 초기화
  input.value = ''
} // f end 
//
function 삭제(){  console.log( '삭제()');
  // 1. [입력] 
  let name = document.querySelector('#name').value;  console.log( name );
  // 2. [처리]
  let deleteIndex = nameList.indexOf( name );   console.log( deleteIndex );
  if(deleteIndex !=-1){nameList.splice( deleteIndex , 1 );} 
  else{alert('없는회원입니다.');}          console.log( nameList );
  // nameList = [ 'aa' , 'bb' , 'cc' ]; // const 불가능 
  // 3. [출력]
  출력( );
}

function 출력( ){
   //[출력] 3. 배열내 데이터를 HTML table에 출력한다.
    // [ 3-1 어디에 ]
    let nameTable = document.querySelector('#nameTable');
    // [ 3-2 무엇을 ]
    let html = `<tr> <th> 번호 </th> <th> 이름 </th>  </tr>` // 제목
    // - 0부터 마지막 인덱스 까지 1씩증가 반복 
    for( let i = 0 ; i < nameList.length ; i++ ){
      // - 배열내 i번째 회원명을 문자열템플릿 ${ } 을 이용한 HTML 문자열에 대입
      html += `<tr> 
                <td> ${ i+1 } </td> 
                <td> ${ nameList[i] } </td> 
              </tr>`
    }; console.log( html );
    // [ 3-3 출력 ]
    nameTable.innerHTML = html;
}




/*
  과제 조건  
    [ 등록시 ]
     1. 중복 제외               : 배열내 데이터가 중복되지 않도록 배열에 넣기전에 검사. - indexOf( )
     if( nameList.indexOf( name ) != -1){alert('이미등록된 이름 입니다.');}

     2. 회원명은 3글자만 가능 ]\
        else if(name,length !=3){alert ('회원명은 3글자만 입력 가능합니다.');}

     3. 회원명 숫자 제외
     else if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])  ){ 
     alert('회원명에 숫자를 포함할수 없습니다');}

    [ 삭제시 ] 
    
    4.동일한 회원명이 있을때만 삭제 하고 없으면 삭제 안함.
    let deleteIndex = nameList.indexOf( name );   console.log( deleteIndex );
    if(deleteIndex !=-1){nameList.splice( deleteIndex , 1 );} 
    else{alert('없는회원입니다.');}

    ===================vs==========================

        if( nameList.indexOf( name ) != -1){alert('이미등록된 이름 입니다.'); return0;}
        if(name,length !=3){alert ('회원명은 3글자만 입력 가능합니다.');return0;}
        if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])  ){ 
        alert('회원명에 숫자를 포함할수 없습니다');return0;}

*/