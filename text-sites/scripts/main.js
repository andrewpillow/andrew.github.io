// let myHeading = document.querySelector("h1");
//用 querySelector() 函数获取标题的引用，并把它储存在 myHeading 变量中 
// myHeading.textContent = "Hello world!";
// 把 myHeading 变量的属性 textContent （标题内容）修改为“Hello world!”

// 以上两个函数均通过dom（API）接口操作


// 点击弹窗
let touchnum = 0

document.querySelector("html").addEventListener("click",() => {
    if (touchnum === 0)
        {alert("Ouch!!!  It hurts!!!!。");
        touchnum++;}
    else if(touchnum === 1)
        { alert("Just stop it!!");
          touchnum++
        }
    else if(touchnum ===2){
        location.assign("https://www.m.taobao.com");
    }
  });
// 这里的function是匿名函数，可以用() => 代替 function ()
// alert("hello!");


//点击图标切换
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  touchnum--;
  if (mySrc === "images/glasses.svg") {
    myImage.setAttribute("src", "images/glasses2.svg");
  } else {
    myImage.setAttribute("src", "images/glasses.svg");
  }
};


// 点击更换名称
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    // prompt函数，弹出一个需要输入值的对话框
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = myName + "'s blog";
    }
  }
  
//   if (!localStorage.getItem("name")) {
//     setUserName();
//   } else {
//     let storedName = localStorage.getItem("name");
//     myHeading.textContent = "Welcome，" + storedName;
//   }

  myButton.onclick = function () {
    touchnum--;
    setUserName();
  };
  