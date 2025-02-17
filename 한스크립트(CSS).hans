(function (글이얌) {
  const 값바꿈들 = {};

  function 값바꿈(이름, 값) {
    값바꿈들[이름] = 값;
  }

  function 보여주기(...값들) {
    console.log("보여주기:", ...값들);
  }

  function 만약(조건, 할일, 그렇지않으면) {
    if (조건) 할일();
    else if (그렇지않으면) 그렇지않으면();
  }

  function 되풀이하기(횟수, 할일) {
    for (let i = 0; i < 횟수; i++) {
      할일(i);
    }
  }

  function 목록(...요소들) {
    return [...요소들];
  }

  function 대상만들기(속성) {
    return { ...속성 };
  }

  function 대응목록() {
    return new Map();
  }

  function 모음() {
    return new Set();
  }

  function 틀설정(대상, 본틀) {
    Object.setPrototypeOf(대상, 본틀);
  }

  function 나중실행함수(할일) {
    return new Promise((풀어줌) => {
      setTimeout(() => {
        할일();
        풀어줌();
      }, 0);
    });
  }

  async function 나중실행하기(할일) {
    await 할일();
  }

  function 한스크립트_CSS_변환(코드) {
    const 변환표 = {
      "몸통": "body",
      "바탕색": "background-color",
      "글자색": "color",
      "글꼴": "font-family",
      "글자크기": "font-size",
      "글자굵기": "font-weight",
      "여백위": "margin-top",
      "여백아래": "margin-bottom",
      "안쪽여백": "padding",
      "둥근모서리": "border-radius",
      "테두리": "border",
      "정렬": "text-align",
      "줄높이": "line-height",
      "가로크기": "width",
      "세로크기": "height"
    };
    
    Object.keys(변환표).forEach(한글 => {
      const 영어 = 변환표[한글];
      const regex = new RegExp(`(${한글})\s*:`, "g");
      코드 = 코드.replace(regex, `${영어}:`);
    });
    
    return 코드;
  }

  글이얌.값바꿈 = 값바꿈;
  글이얌.보여주기 = 보여주기;
  글이얌.만약 = 만약;
  글이얌.되풀이하기 = 되풀이하기;
  글이얌.목록 = 목록;
  글이얌.대상만들기 = 대상만들기;
  글이얌.대응목록 = 대응목록;
  글이얌.모음 = 모음;
  글이얌.틀설정 = 틀설정;
  글이얌.나중실행함수 = 나중실행함수;
  글이얌.나중실행하기 = 나중실행하기;
  글이얌.한스크립트_CSS_변환 = 한스크립트_CSS_변환;
  글이얌.값바꿈들 = 값바꿈들;
})(typeof window !== "undefined" ? window : global);
