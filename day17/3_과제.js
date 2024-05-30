/*

    배열 : 여러개의 데이터/자료 들을 하나의 데이터/자료 형태로 만들기 , 데이터를 식별할때 인덱스/저장순서 으로 
    [ ]
    객체 : 데이터 마다의 속성명/별칭/식별자 을 부여해서 여러개의 데이터/자료 들을 하나의 데이터/자료 형태로 만들기 , 데이터를 식별할때 속성명 으로  
    { }
    

    ToDo : 할일 
        - 할일내용      -할일상태
        밥먹기             true
        집가기              false
        공부하기            false 

    객체 1개당 할일 1개
    { 할일내용:밥먹기 , 할일상태 : true }
    { 할일내용:집가기 , 할일상태 : false }
    { 할일내용:공부하기 , 할일상태 : false }

    여러 객체를 하나로 묶기
    [
        { 할일내용:밥먹기 , 할일상태 : true },
        { 할일내용:집가기 , 할일상태 : false },
        { 할일내용:공부하기 , 할일상태 : false },
    ]


        삼항연산자 
            조건 ? 참 : 거짓 

    */

            let 할일목록 =     [    
            { 할일내용:'밥먹기' , 할일상태 : true },
            { 할일내용:'집가기' , 할일상태 : false },
            { 할일내용:'공부하기' , 할일상태 : false },       ];
        
        
            // 1. 등록함수 : 실행조건 : 1.등록버튼을 클릭했을때.
            function 등록함수(){    
                console.log()
        
              let 할일내용 = document.querySelector('#할일내용').value
              console.log(할일내용)
              let 할일상태 = false
        
              let 할일 = {할일내용 : 할일내용, 할일상태 : 할일상태}

              //. localStorage에 있는 todolist 가져오기
              let 할일목록 = JSON.parse(localStorage.getItem('할일목록'));

              // 가져온 할일목록(localStorage) 없으면 빈배열 대입
              if(할일목록 == null){
                할일목록 =  [ ]
              }

              할일목록.push(할일)

              // 다시 localStorage에 할일목록을 저장
              localStorage.setItem('할일목록', JSON.stringify(할일목록))
              
              console.log( 할일)
                
              출력함수();
            }
        
            // 2. 출력함수 : 실행조건 : 1.js가 열렸을때 2.할일목록에 변화가 있을때[등록,수정,삭제]
            출력함수(); // js가 열렸을때 함수 실행 
            function 출력함수(){
                console.log( '출력함수()');
                
                let 할일목록 = JSON.parse(localStorage.getItem('할일목록'));
           
                if(할일목록 == null)return;

             
                //  어디에
                let 어디에 = document.querySelector('#출력구역')
                //  무엇을 
                let 무엇을 = '';
        
                for( let i = 0 ; i<할일목록.length ; i++ ){
                    무엇을 += `<div class=${ 할일목록[i].할일상태==true ? 'red' : 'black' }> 
                                ${ 할일목록[i].할일내용 }
                                <button onclick="삭제함수( ${ i } )"> 삭제 </button>
                                <button onclick="수정함수( ${ i })"> 수정 </button>
                                </div>`;           
                    console.log(무엇을);
               
                }
                어디에.innerHTML = 무엇을;
            }

            // 3. 삭제 : 삭제버튼 클릭시  
            function 삭제함수( 삭제할인덱스 ){ console.log( '삭제함수()'+삭제할인덱스);
                
                할일목록.splice( 삭제할인덱스 , 1 );
                
                localStorage.setItem('할일목록', JSON.stringify(할일목록))
                출력함수();

            }
            // 4. 수정  : 수정버튼 클릭시
            function 수정함수( 수정할인덱스 ){ console.log( '수정함수()'+수정할인덱스);
        
            
                if( 할일목록[수정할인덱스].할일상태 == true){
                    할일목록[수정할인덱스].할일상태 = false;
                }else{할일목록[수정할인덱스].할일상태 = true}   console.log('할일목록()'+수정할인덱스)
                 
                localStorage.setItem('할일목록', JSON.stringify(할일목록))
                출력함수();
            }
        
        
        
        