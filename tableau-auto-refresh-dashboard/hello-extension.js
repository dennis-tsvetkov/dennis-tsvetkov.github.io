var url = ""

var idInterval = 0;
var v = null;
var options = {
  width: '200em',
  height: '200em',
  hideToolbar: true,
  hideTabs: true
  };

$(document).ready(function() {
  
  setInterval(function() {
    var newUrl = $("#view-url").val();
    if (url != newUrl){
      console.log(newUrl);
      url = newUrl;
      initViz();
    }
  }, 1000);
  
  $("#periods").change(function(){
    setUpdatePeriod(v);
  });

  // $("#btn1").click(function() {
  //   // console.log("btn click");
  //   try {
  //     url = $("#view-url").val();
  //     console.log(url);
  //     initViz(url);
  //   } catch(error){
  //     console.log(error.message);
  //   }
  // });
  
});




function initViz(){
  try{
    if (v) { v.dispose() }
  }catch(error){
    console.log(error.message);
  }
  try {
    var divViz = document.getElementById("viz");
    var _url = url.replace("/#", "");
    v = new tableau.Viz(divViz, _url, options);
  }catch(error){
    console.log(error.message);
  }
}

function setUpdatePeriod(v){
  var period = $("#periods").val()
  if (idInterval > 0){
    clearInterval(idInterval);
  }
  if (period > 0){
    idInterval = setInterval(function(){
      v.refreshDataAsync()
    }, period * 1000);
  }
}

