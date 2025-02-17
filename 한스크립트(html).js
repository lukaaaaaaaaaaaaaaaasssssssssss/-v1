function 보여줘(...값들) {
  const 나타날곳 = document.getElementById("나타날곳");
  let 메시지 = 값들.join(" ");
  console.log(메시지);
  let p = document.createElement("p");
  p.textContent = 메시지;
  나타날곳.appendChild(p);
}

document.getElementById("실행단추").addEventListener("click", () => {
  const 코드 = document.getElementById("코드입력").value;
  const 나타날곳 = document.getElementById("나타날곳");
  나타날곳.innerHTML = "";
  try {
    new Function("보여줘", 코드)(보여줘);
  } catch (e) {
    const 오류메시지 = document.createElement("p");
    오류메시지.style.color = "red";
    오류메시지.textContent = "오류: " + e.message;
    나타날곳.appendChild(오류메시지);
  }
});
