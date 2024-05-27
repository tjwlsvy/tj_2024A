/*

비회원제 게시판 day13 1_실습

let boardList=["제목입니다, 내용입니다, 1234-2024-05-24,3", 
               "두번째 제목이야, 또내용입니다, 4567,2024-05-25,0"];


- day14
  게시물 정보 : 제목, 내용, 비밀번호, 날짜 , 조회수
  게시물 객체 = {제목 : , 내용: , 비밀번호, 날짜:, 조회수:}
     -만일 게시물객체가 여러개이면 배열을 사용하자
  게시물목록= [ 게시물객체, 게시물객체, 게시물객체 ]
        -여러 객체들을 식별할 때 인덱스는 문제점이 있다. 인덱스는 절대인 식별자 역할 못함
        -게시물번호 만들어보자. = 삭제/수정되도 고정으로 사용하자.
    


  */

        let boardList=[

            {번호: 1, 제목: '제목입니다',내용: '내용입니다', 비밀번호 : '1234', 작성일: '2024-05-24', 조회수: 3},
            {번호: 2,  제목: '두번째제목이야',내용: '또내용입니다', 비밀번호 : '4567', 작성일: '2024-05-25', 조회수: 0},
        
        ];// 배열선언끝
        
        //0. 식별번호 자동생성
        let autoNum = 2;
        
        //2.
        _allRead(); //JS에서 해당 함수 1번 실행
        function _allRead(){
            //어디에
            let tableBody=document.querySelector('#tableBody');
            //무엇을
            let html=``; //여기까지 적어두고 꼭 테스트라고 적어서 '테스트'가 나오는지 확인하기
        
            for(let i=0; i<boardList.length; i++){
                let board= boardList[i];
                html+= `<tr>
                            <td>${board.번호} </td>
                            <td onclick="_read(${board.번호})">${board.제목}</td>
                            <td>${board.작성일}</td>
                            <td>${board.조회수}</td>
                       </tr>`
            }
        
            //3.출력
            tableBody.innerHTML=html;
        
                
            }
        
            function _create(){
                let title=document.querySelector('#titleInput').value;
                let content= document.querySelector('#contentInput').value;
                let password= document.querySelector('#passwordInput').value;
        
                let date= new Date();
               
                let currentYear = date.getFullYear();
                //날짜 5월 앞에 0을 붙이는 방법
                let currentMonth= date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
                let currentDay= date.getDate() <10 ? "0"+date.getDate() : date.getDate();
            date = `${ currentYear }-${ currentMonth }-${ currentDay }`
                let view =0; // 처음 등록시 조회수는 0으로 시작
        
                
        
                //3. ,쉼표 구분해서 하나의 문자열로 만들자
        
                //게시물번호 1증가 =수정
                autoNum= autoNum + 1;  //autoNum+=1;
                let board= {번호: autoNum, 제목: title, 내용: content, 작성일: date, 조회수:view, 비밀번호:password};
                
                //4. 배열 등록
                boardList.push(board);
                //5.등록 성공
                alert('등록성공')
                _allRead();
                
            }
        
            function _read(번호) { //실행조건 : 제목 클릭했을 때
                console.log(`내가 클릭한 게시물번호: ${번호}`)
                    //어디에
                let viewPage= document.querySelector('#viewPage');
        
                let findIndex=findBoardIndex(번호);
                if(findIndex==-1) return;
                let board =boardList[findIndex];
        
                
        
                
                //-내가 클릭한 게시물번호의 객체를 배열에서 찾자.
               
                    //무엇을
                    let html =`<h3>상세 페이지</h3>
                    <div>${ boardList[findIndex].제목}</div>
                    <div>
                        <span>조회수 :${ boardList[findIndex].조회수 }</span>
                        <span>작성일 : ${ board.작성일}</span>
                    </div>
        
                    <div>${ board.내용 }</div>
                    <button onclick="_update(${board.번호 })">수정</button>
                    <button onclick="_delete(${board.번호 })">삭제</button>`;
        //출력/대입
        viewPage.innerHTML =html;
            
            }
            //삭제함수 실행조건: (누구를)1. 삭제버튼 클릭할때
            function _delete(번호) {
                let findIndex=findBoardIndex(번호);
                if(findIndex==-1) return;
        
          
                if(_pwConfirm(findIndex)==false) return;
                //배열내 특정 인덱스 삭제
                boardList.splice(findIndex, 1);
                _allRead();
                document.querySelector('#viewpage').innerHTML=``;
        
        
        
            }
        
            //게시물 번호를 이용한 특정 하나의 게시물객체 인덱스를 찾아주는 함수
            function findBoardIndex(번호){
                let findIndex=-1; //못찾았다(인덱스가없다는뜻 -1)를 기본값
        
                for(let i=0; i<boardList.length; i++){
                    //만약에 배열내 i번째 게시물의 번호와 내가 클릭한 번호와 같으면 findIndex에 대입하고 함수 종료
                    if(boardList[i].번호 ==번호){ findIndex=i; return findIndex; }
        
        
                }
                //만약에 못찾았다 -1
               return findIndex;
        
            }
        
            function _update(번호){
            //클릭한 게시물번호의 객체 인덱스번호 찾기
                let findIndex=findBoardIndex(번호); //내가 선택한 게시물번호를 findBoardIndex 함수에 매개변수로 전달하면 찾은인덱스 반환, 없으면나감
                if(findIndex==-1){return;}
        
        
                //패스워드 검증
                if(_pwConfirm(findIndex)==false) return;
                  
        
                //입력
                   let utitle=prompt('수정할제목');
                   let ucontent=prompt('수정할내용');
                    //수정된 정보로 구성
                   
               
                  //수정
                boardList[findIndex].제목 =utitle;
                boardList[findIndex].내용 =ucontent;
               
                    
                    _allRead();
                    _read(번호);
               }
               
        
               function _pwConfirm(Index){
        
               let confirmPw= prompt('비밀번호');
                //해당 인덱스의 비밀번호와 입력받은 비밀번호가 일치한지 체크
                if( confirmPw!=boardList[Index].비밀번호){
                  alert('패스워드가 다릅니다');
                      return false; 
                }
                
                return true;
          
          }
               
           
            
            
            
            