
  /* パラメータを渡す側 */
  function send() {
    var name = "";
    var sex = "";
    var favorite = "";
    /* 名前(コード変換) */
    if (document.form1.name.value != "") {
      name = escape(document.form1.name.value);
    }
    /* 性別 */
    if (document.form1.sex[0].checked) {
      sex = escape(document.form1.sex[0].value);
    } else if (document.form1.sex[1].checked) {
      sex = escape(document.form1.sex[1].value);
    }
    /* 興味 */
    for (i = 1; i <= 4; i++) {
      if (document.form1.elements["favorite" + i].checked) {
        favorite += document.form1.elements["favorite" + i].value + " ";
      }
    }
    favorite = escape(favorite);
    /* 取得した値をパラメータにセット(アンパサンド'&'で連結) */
    var pram = "name=" + name + "&sex=" + sex + "&favorite=" + favorite;
    /* アドレスにパラメータを付加 */
    location.href = "/jspostForm_dev/pullTest.html?" + pram;
    return false;
  }
