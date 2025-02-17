(function (글이얌) {
  const 값바꿈들 = {};

  function 값바꿈(이름, 값) {
    값바꿈들[이름] = 값;
  }

  function 보여주기(...값들) {
    const 다듬은값들 = 값들.map(값 =>
      typeof 값 === "symbol" ? 값.toString() : 값
    );
    console.log("보여주기:", ...다듬은값들);
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

  function 표식(뜻) {
    return Symbol(뜻);
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

  function 가져오기(모듈) {
    if (typeof require !== "undefined") {
      return require(모듈);
    } else {
      throw new Error("모듈 가져오기는 이 곳에서 쓸 수 없습니다.");
    }
  }

  function 내보내기(대상) {
    if (typeof module !== "undefined" && module.exports) {
      module.exports = 대상;
    } else {
      console.warn("내보내기는 이 곳에서 쓸 수 없습니다.");
    }
  }

  글이얌.값바꿈 = 값바꿈;
  글이얌.보여주기 = 보여주기;
  글이얌.만약 = 만약;
  글이얌.되풀이하기 = 되풀이하기;
  글이얌.목록 = 목록;
  글이얌.대상만들기 = 대상만들기;
  글이얌.표식 = 표식;
  글이얌.대응목록 = 대응목록;
  글이얌.모음 = 모음;
  글이얌.틀설정 = 틀설정;
  글이얌.나중실행함수 = 나중실행함수;
  글이얌.나중실행하기 = 나중실행하기;
  글이얌.가져오기 = 가져오기;
  글이얌.내보내기 = 내보내기;
  글이얌.값바꿈들 = 값바꿈들;
})(typeof window !== "undefined" ? window : global);
