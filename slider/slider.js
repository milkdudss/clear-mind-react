
let btn = document.querySelector("button");
let start = null;
var dragValue;

function move(id){
  var element = document.getElementById("button");
  element.style.position ="absolute";
  element.onmousedown = function() {
    dragValue = element;
  }
}
document.onmouseup = function(e) {
  dragValue = null;
}
document.onmousemove = function(e) {

  var y = e.pageY;
  
  dragValue.style.top = y + "px";
  

}

move("button");

const sliderNum = document.getElementById('slider-number')


function applySliderConfigs(color, range, btnSize, pos) {
  //set button color
  document.getElementById("button").style.backgroundColor = color;
  //set slider range 
  sliderRange(range);
  //set size
  buttonSize(btnSize);
  //set default slider position
  sliderPosition(pos);
}

function changeColor() {
   let color = document.getElementById("colorInputText").value;
   console.log(color)
   document.getElementById("button").style.backgroundColor = color;
}


function sliderRange() {
  let scale = document.querySelector("#sliderScale").value;
console.log(scale)
  scale.map((num) => {
    var tr = document.createElement("tr");
    var text = document.createTextNode(`${num}`)
    const th1 = document.createElement("th");
th1.appendChild(text);
    var th2 = document.createElement("th");
 
  th2.classList.add("line");
  tr.style.display = 'flex';
tr.appendChild(th1);
tr.appendChild(th2);
sliderNum.appendChild(tr);
})
}

function buttonSize() {
  let btnSize = document.getElementById("buttonSize").value;
  document.getElementById("button").style.width = `${btnSize}px`;
  const heightSize = btnSize * 1.5
   document.getElementById("button").style.height = `${heightSize}px`;
}


// applySliderConfigs('purple', [9,8,7,6,5,4,3,2], 100, 300) ;

function sliderPosition(position) {
 
  if (position > 555) {
    document.getElementById("button").style.top = '555px'
  } else if ( position < 6.5) {
    document.getElementById("button").style.top = `6.5px` 
  } else {
document.getElementById("button").style.top = `${position}px`  
}
}





