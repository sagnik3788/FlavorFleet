function showContentR(el) {
    let para = document.getElementById("rpara" + el.id.slice(-1));
    let selector = document.getElementById("rselector" + el.id.slice(-1));
    if (para.style.display === "block") {
      selector.style.transform = "rotate(0deg)";
      para.style.display = "none";
      el.style.fontWeight = "normal";
    } else {
      // SELECTED
      selector.style.transform = "rotate(180deg)";
      para.style.display = "block";
      el.style.fontWeight = "bolder";
    }
  }
  
  function showContentC(el) {
    let para = document.getElementById("cpara" + el.id.slice(-1));
    let selector = document.getElementById("cselector" + el.id.slice(-1));
    if (para.style.display === "block") {
      selector.style.transform = "rotate(0deg)";
      para.style.display = "none";
      el.style.fontWeight = "normal";
    } else {
      // SELECTED
      selector.style.transform = "rotate(180deg)";
      para.style.display = "block";
      el.style.fontWeight = "bolder";
    }
  }
  
  function helpShowRestaurents() {
    document.getElementById("help-for-restaurents").style.display = "block";
    document.getElementById("help-for-customer").style.display = "none";
    document.getElementById("list-item1").style.backgroundColor =
      "var(--background)";
    document.getElementById("list-item2").style.backgroundColor =
      "white";
    document.getElementById("button1").style.backgroundColor =
      "var(--background)";
    document.getElementById("button2").style.backgroundColor =
      "white";
  }
  function helpShowCustomers(){
    document.getElementById("help-for-restaurents").style.display = "none";
    document.getElementById("help-for-customer").style.display = "block";
    document.getElementById("list-item2").style.backgroundColor =
      "var(--background)";
    document.getElementById("list-item1").style.backgroundColor =
      "white";
      document.getElementById("button2").style.backgroundColor =
      "var(--background)";
    document.getElementById("button1").style.backgroundColor =
      "white";
  }
  
  helpShowCustomers();