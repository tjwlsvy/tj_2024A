

let memberList = [];

function longin(){

memberList = JSON.parse(localStorage.getItem('memberList'));
if(memberList == null){memberList = [];}

  // html에서 입력받은 데이터 가져오기
  let id = document.querySelector('#id').value;
  let pw = document.querySelector('#pw').value;

  // 기존 회원 목록에 있는 회원정보와 일치여부
  for(let i = 0; i < memberList.length; i++){
    if(memberList[i].id == id && memberList[i].pw == pw){
      alert('로그인성공');

      sessionStorage.setItem('loginNo' , menubar.no);

      location.href = '';
      return;
    }
  }

  alert('로그인실패');
}