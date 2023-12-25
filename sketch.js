var face_colors = " 8e9aaf-cbc0d3-efd3d7-feeafa-dee2ff".split("-").map(a=>"#"+a)
var eye_colors = "323031-3d3b3c-7f7979-c1bdb3-5f5b6b".split("-").map(a=>"#"+a)
var pos_x=[]
var pos_y=[]
var sizes=[]
var colors=[]
var v_y=[]
var v_x=[]
var sound1 
function preload(){
sound1 = loadSound("412730763.mp3")
}
var  txts //宣告一個變數，txts
var face_move_var = false
//語音辨識的初始設定
//var lang = navigator.language|| en-US //取得瀏覽器的語系
//var myRec =new p5.SpeechRec(lang)
var face_Rot_var = false
function setup() {
 createCanvas(windowWidth, windowHeight)
 analyzer = new p5.Amplitude();
 analyzer.setInput(sound1)
 //文字框設定
 inputElement = createInput ("412730763陳玟伶") //產生一個文字方塊，""內的文字為預設顯示的文字
 inputElement.position(10,10)  //文字方塊放到(10,10)
 inputElement.size(170,20)  //文字框的寬與高
 //以下的style,可以gogle搜尋html imput css找到相關資料
 inputElement.style("font-size","20px")  //文字框內的文字大小
 inputElement.style("color","#cdb4db")  //文字框內的文字顏色
 inputElement.style("background","#ffcad4")  //文字框內的背景顏色
 //inputElement.style("border","none")   //設定文字框沒有框線

 //按鈕的設定
 btnMoveElement = createButton("移動")
 btnMoveElement.position(200,10) //按鈕的位置
 btnMoveElement.size(80,40)//按鈕的寬與高
 btnMoveElement.style("font-size","20px") //按鈕內的文字大小
 btnMoveElement.style("color","#fff") //按鈕內的文字顏色
 btnMoveElement.style("background","#ffcad4")
 btnMoveElement.mousePressed(face_move)

 btnstopElement = createButton("暫停")
 btnstopElement.position(270,10)//按鈕的位置
 btnstopElement.size(80,40)//按鈕的寬與高
 btnstopElement.style("font-size","20px") //按鈕內的文字大小
 btnstopElement.style("color","#fff") //按鈕內的文字顏色
 btnstopElement.style("background","#ffcad4")//按鈕背景顏色
 btnstopElement.mousePressed(face_stop)//按鈕被按下後會執行face_stop函數
// radio選鈕的設定，多個選項，只能選一個(單選題)
 radioElement=createRadio()
 radioElement.option("暫停")
 radioElement.option("旋轉")
 radioElement.option("移動")
 radioElement.position(370,10)//按鈕的位置
 radioElement.size(200,40)//按鈕的寬與高
 radioElement.style("font-size","20px")//按鈕內的文字大小
 radioElement.style("color","#fff") //按鈕內的文字顏色
 radioElement.style("background","#ffcad4")

//"暫停"按鈕的設定
//btnVoiceElement = createButton("音樂")
//btnVoiceElement.position(600,10)//按鈕的位置
//btnVoiceElement.size(80,40)//按鈕的寬與高
//btnVoiceElement.style("font-size","20px") //按鈕內的文字大小
//btnVoiceElement.style("color","#fff") //按鈕內的文字顏色
//btnVoiceElement.style("background","#ffcad4")//按鈕背景顏色
//btnVoiceElement.mousePressed(playSound)//按鈕被按下後會執行face_stop函數
//checkBox的設定，多個選項，可選多個(複選題)
  //for(var i=0;i<20;i=i+1){
   // drawface(face_colors[int(random(face_colors.length))] ,eye_colors[int(random(eye_colors.length))],random(0.3,1.2))
// }
}
function draw(){
   background("#f5ebe0");  //背景顏色
   mode = radioElement.value()
   for(var i=0;i<pos_x.length;i=i+1)  //依照pos_x內有幾筆資料，產生幾個物件
    {
    push()
    txts = inputElement.value();
    translate(pos_x[i],pos_y[i])
    if(mode=="旋轉"){
      rotate(sin(frameCount/10*v_y [i]))
    }

    // else
    //{
      //if(mode=="移動"){
        //face_move_var =true
      //}
      //else{ //暫停
      //face_move_var = false
    //}
    //}
    drawface(colors[i],0,sizes[i])
    pop()
    if(face_move_var||mode=="移動"){  //在face_move_var為true時，臉物件會移動
    pos_y[i] = pos_y[i] +v_y[i]  //移動
}
if(pos_y[i]>height || pos_y[i]<0) //判斷有沒有碰到上下邊，碰到上下邊時，就要刪除所有陣列的該筆資料

{
pos_x.splice(i,1)  //把碰到邊的陣列元素刪除，把第i筆資料刪除1筆資料
pos_y.splice(i,1)
sizes.splice(i,1)
colors.splice(i,1)
v_y.splice(i,1)

}
   }
}
    function drawface(face_clr=255,eye_clr=0,size=1){   //255與0為預設的值
  push()  //自行設定格式

  //translate(random(width),random(height))  //原點(0,0)移動到(200,200)
  scale(size) //放大縮小
  //文字框的顯示格式
 
      //雪人的身體
      fill(face_clr);
      ellipse(200,450,100,100);
      ellipse(200,400,75,75);
      ellipse(200,350,50,50);
      //臉
      fill(255,150,150);
     ellipse(200,350,10,10);//左眼
      ellipse(215,350,10,10);//右眼
      //鼻子
    //fill(eye_clr);
      //triangle(250,245,200,255,193,245);
      //帽子
      fill("#b8bedd");
           rect(170,300,60,20);
           rect(185,260,30,40);
    //圍巾
    //  stroke(0);
     // strokeWeight(5);
    //  line(200,280,200,330);
     // noStroke();
     // fill("#da2c38");
      //rect(190,280,20,50);
      //雪花
      drawSnowflake(50,500);
      drawSnowflake(150,520);
      drawSnowflake(250,480);
      drawSnowflake(350,510);

  pop()  //把原本設定都消失
}

//繪製雪花函數
 function drawSnowflake (x,y){
   fill(255);
   noStroke();
   ellipse(x,y,10,10);
   ellipse(x-5,y-5,10,10);
   ellipse(x+5,y-5,10,10);
   ellipse(x,y+5,10,10);
   ellipse(x,y-5,10,10);
  
 }

function mousePressed(){
  if(mouseY>60){ //設定y軸為0~60間的座標值都不產生新的物件
    //產生新的物件
pos_x.push(mouseX)//放一筆新的資料到pos_x陣列內，資料為按下滑鼠的x軸
pos_y.push(mouseY)//放一筆新的資料到pos_y陣列內，資料為按下滑鼠的y軸
sizes.push(random(0.3,1))//放一筆新的資料到sizes陣列內，資料為產生一個亂數，為物件的大小
colors.push(face_colors[int(random(face_colors.length))])
v_y.push(random(-1,1))//放一筆新的資料到v_y陣列內，資料為物件移動的y軸速度，速度值為亂數曲-1到1之間，負值為往上，正號為

}
if(sound1.isPlaying()){
  sound1.stop();


}else{
  sound1.play();
}
}


function face_move(){
face_move_var =true



}


function face_stop(){
  face_move_var = false

}

//function voice_go(){
 // myRec.onResult = showResult //取得語音辨識後去執行function showResult
//myRec.start()//開始辯識
//}
//function showResult(){
 // if(myRec.resultValue == true)
  //{
   // print(myRec.resultString)
//英文文字轉換須注意，轉換成小寫放入lowStr變數中，mostrecentword取得最後一個字
    //let lowStr =myRec.resulString.toLowerCase();//把英文文字轉為小寫
    //let mostrecentword = lowStr.split(' ').pop();//pop為刪除最後一個字串，放入到mostrecentword內
    //
   // if(myRec.resultString.indexOf("走")!== -1){
     // face_move_var =true
   // }
  //  if(myRec.resultString.indexOf("停")!== -1){
    //  face_move_var = false
      //face_Rot_var =false
    //}

    //if(myRec.resulString.indexOf("轉")!== -1){
      //face_move_var = true
    //}
   // }
  // }
   
   
