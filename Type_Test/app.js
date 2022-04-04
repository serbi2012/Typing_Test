if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
var 명언 = [
  "삶이 있는 한 희망은 있다.",
  "산다는 것 그것은 치열한 전투이다.",
  "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
  "언제나 현재에 집중할 수 있다면 행복할 것이다.",
  "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 해.",
  "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
  "신은 용기 있는 자를 결코 버리지 않는다.",
  "내일은 내일의 태양이 뜬다.",
  "피할 수 없으면 즐겨라.",
  "행복은 습관이다, 그것을 몸에 지니라.",
  "최고에 도달하려면 최저에서 시작하라.",
  "내 비장의 무기는 아직 손안에 있다. 그것은 희망이다.",
  "문제는 목적지에 얼마나 빨리 가는 내가 아니라 그 목적지가 어디냐는 것이다.",
  "한 번 실패와 영원한 실패를 혼동하지 마라.",
  "인간의 삶 전체는 단지 한순간에 불과하다. 인생을 즐기자.",
  "겨울이 오면 봄이 멀지 않으리.",
  "일하여 얻으라. 그러면 운명의 바퀴를 붙들어 잡은 것이다.",
  "당신의 행복은 무엇이 당신의 영혼을 노래하게 하는가에 따라 결정된다.",
  "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
];

var 타이핑예제 = document.querySelector(".타이핑-예제");
var 타이핑답안 = document.querySelector(".타이핑-답안");
var 타이핑다음예제 = document.querySelector(".타이핑-다음예제");
진행도 = 0;
성공 = 0;
실패 = 0;
총문제수 = 5;
function ready() {
  shuffle(명언);
  타이핑예제.textContent = 명언[0];
  타이핑다음예제.textContent = 명언[1];
  타이핑제출함수();
  결과창모달생성();
  문제개수함수(총문제수);
}

// 타이핑제출함수
function 타이핑제출함수() {
  document.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
      진행도++;
      if (타이핑예제.textContent == 타이핑답안.value) {
        성공++;
        다음예제로();
      } else if (타이핑예제.textContent != 타이핑답안.value) {
        실패++;
        다음예제로();
      }
    }
    if (진행도 == 총문제수) {
      결과창모달();
      새로시작();
    }
    for (let i = 0; i < 타이핑답안.value.length - 1; i++) {
      if (
        타이핑예제.textContent[i] != 타이핑답안.value[i] &&
        타이핑예제.textContent[i] !== " "
      ) {
        const element = document.querySelector(".타이핑-예제");
        element.innerHTML = element.innerHTML.replace(
          `${타이핑예제.textContent[i]}`,
          `<span style="color: rgb(248, 87, 87);">${타이핑예제.textContent[i]}</span>`
        );
      } else if (
        타이핑예제.textContent[i] == 타이핑답안.value[i] &&
        타이핑예제.textContent[i] !== " "
      ) {
        const element = document.querySelector(".타이핑-예제");
        element.innerHTML = element.innerHTML.replace(
          `${타이핑예제.textContent[i]}`,
          `<span style="color: aliceblue;">${타이핑예제.textContent[i]}</span>`
        );
      }
    }
  });
}

// 결과창모달생성
function 결과창모달생성() {
  var 결과창 = `<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
          TypingTest Result
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body result-modal"></div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>`;
  document
    .querySelector(".메인-컨테이너")
    .insertAdjacentHTML("beforeend", 결과창);
}

// 문제개수함수
function 문제개수함수(개수) {
  const 문제개수 = document.querySelector(".문제개수");
  const 이전버튼 = document.querySelector(".이전버튼");
  const 다음버튼 = document.querySelector(".다음버튼");
  이전버튼.addEventListener("click", function () {
    if (총문제수 != 5) {
      총문제수 -= 5;
      문제개수.textContent = `총 ${총문제수}문제`;
      새로시작();
    }
  });
  다음버튼.addEventListener("click", function () {
    if (총문제수 != 20) {
      총문제수 += 5;
      문제개수.textContent = `총 ${총문제수}문제`;
      새로시작();
    }
  });
}

// 결과창모달
function 결과창모달() {
  var 결과 = document.querySelector(".result-modal");
  var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
    keyboard: false,
  });
  const 모달내용 = `<div>총 ${진행도}개중</div>
  <div>${성공}개 성공</div>
  <div>${실패}개 실패하였습니다!</div>
  <div>결과창을 닫으려면 백스페이스버튼을 누르세요!</div>`;
  결과.innerHTML = 모달내용;
  myModal.show();
  document.addEventListener("keydown", function (e) {
    if (e.keyCode == 8) {
      myModal.hide();
    }
  });
}

// 다음예제로
function 다음예제로() {
  타이핑예제.textContent = 명언[진행도];
  타이핑다음예제.textContent = 명언[진행도 + 1];
  타이핑답안.value = "";
  점수판갱신();
}

// 새로시작
function 새로시작() {
  진행도 = 0;
  성공 = 0;
  실패 = 0;
  점수판갱신();
  shuffle(명언);
  타이핑예제.textContent = 명언[0];
  타이핑다음예제.textContent = 명언[1];
}

// 점수판갱신함수
function 점수판갱신() {
  let 진행도내용 = document.querySelector(".진행도");
  let 성공내용 = document.querySelector(".성공");
  let 실패내용 = document.querySelector(".실패");
  진행도내용.textContent = `진행도 : ${진행도}개`;
  성공내용.textContent = `성공 : ${성공}개`;
  실패내용.textContent = `실패 : ${실패}개`;
}

// 랜덤함수
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const element = document.querySelector("#lettersList");
element.innerHTML = element.innerHTML.replace(
  "o",
  '<span style="color: red;">o</span>'
);
