var switchButton = document.querySelector("#switch-button-tog");
//eventHandler

switchButton.addEventListener("click",function(){
    var root = document.querySelector(":root");
    var rootStyle = getComputedStyle(root);
    var isWhite = rootStyle.getPropertyValue("--theme-bg");
    //console.log(isWhite);
    

    if(isWhite === "#e0e0e0"){
        root.style.setProperty("--theme-bg","#1A1A1A");

    }
    else{
        root.style.setProperty("--theme-bg","#e0e0e0");
    }
   
}
);
var generateOtpCode = document.querySelector("#generate-otp-code");

function displayOtp(){
    generateOtpCode.innerHTML = `<div>Our Otp Code is 1234</div>
                                <button id="btn">Reset</button>
                                 <div>Expires in 0s</div>`

};
setTimeout(displayOtp,2000);

var otpInputList = document.querySelector("#otp-input-list");

const checkOtp  = (event)=> {
  var currentElement = event.target;
  var currentValue = currentElement.value;
  var nextChild = currentElement.nextElementSibling;
  if(nextChild){
    nextChild.focus();
  }
  console.log(nextChild);
  
  
  
};

otpInputList.addEventListener("input",checkOtp);


