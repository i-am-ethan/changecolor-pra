const inputElem = document.getElementById("example"); // input要素
const currentValueElem = document.getElementById("current-value"); // 埋め込む先のspan要素
//controllerの背景色をスライダーで変える
const controller = document.getElementById("controller");

// 現在の値をspanに埋め込む関数
const setCurrentValue = (val) => {
  const _val = (currentValueElem.innerText = val);
  console.log(_val);
  const smallVal = _val / 100;
  console.log(smallVal);
  const color = controller.style.backgroundColor;
  const ctrBac = (controller.style.backgroundColor = `rgba(128,128,255,${smallVal})`);
  console.log(ctrBac);
};

// inputイベント時に値をセットする関数
const rangeOnChange = (e) => {
  let set = setCurrentValue(e.target.value);
};

window.onload = () => {
  inputElem.addEventListener("input", rangeOnChange); // スライダー変化時にイベントを発火
  setCurrentValue(inputElem.value); // ページ読み込み時に値をセット
};
