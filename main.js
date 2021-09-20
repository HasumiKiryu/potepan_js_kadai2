  var result = document.getElementById("result");
  
  //押されたボタンに対応した文字を追加する関数
  function edit(elem) {
    if(result.value==="0"){
    return;//値が０の場合はそのまま返す
    }else{
    result.value = result.value + elem.value;
    }
  }
    
  //calc関数でFunctionを使用し、数式を計算する
  function calc() {
    result.value = new Function("return " + result.value)();
  }
  
  function clr() {
    result.value ="";
  }