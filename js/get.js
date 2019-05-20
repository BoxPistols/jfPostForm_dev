
  /* パラメータを受取る側 */
  function pramWrite() {
    /* アドレスの「?」以降の引数(パラメータ)を取得 */
    var pram = location.search;
    /* 引数がない時は処理しない */
    if (!pram) return false;
    /* 先頭の?をカット */
    pram = pram.substring(1);
    /* 「&」で引数を分割して配列に */
    var pair = pram.split("&");
    var i = temp = "";
    var key = new Array();
    for (i = 0; i < pair.length; i++) {
      /* 配列の値を「=」で分割 */
      temp = pair[i].split("=");
      keyName = temp[0];
      keyValue = temp[1];
      /* キーと値の連想配列を生成 */
      key[keyName] = keyValue;
    }
    var name = sex = favorite = "";
    /* 名前 */
    if (!key["name"] || key["name"] == "") {
      name = "匿名希望";
    } else {
      /* コード変換 */
      name = unescape(key["name"]);
    }
    /* 性別 */

    if (key["sex"] != "") {
      sex = unescape(key["sex"]);
    } else {
      sex = "性別不明";
    }
    /* 興味 */
    if (key["favorite"]) {
      favorite = key["favorite"];
    } else {
      favorite += "無趣味";
    }
    document.form1.pram.value = "名前：" + name + "\n" + "性別：" + sex + "\n" + "趣味：" + unescape(favorite) + "\n";
  }
