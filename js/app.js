const paramResult = document.querySelector(".paramResult");

function myCheck() {

  paramResult.innerHTML = ""

  var flag = false;
  // elements にはボタンの要素も含まれてしまうため -1 しています
  for (var i = 0; i < document.formEx.elements.length - 1; i++) {
    if (document.formEx.elements[i].checked) {
      flag = true;

      console.log(document.formEx.elements[i].value + "が選択されました。");

      var add = document.createElement('div');
      add.className = 'sample';
      paramResult.appendChild(add);

      add.innerHTML = document.formEx.elements[i].value + "が選択されました。"
    }
  }
  if (!flag) {
    console.log("項目が選択されていません。");
  }
}

// const url = location.href;
// document.querySelector('.result').innerHTML = url + paramResult;

// document.querySelector("paramURL").value = url;
