var click = document.getElementById("button");
click.addEventListener("click",register);
function register() {
   var text4 = document.getElementById("text4");
   var button = document.getElementById("button");
//    text4.remove();
   button.remove();
   var con = document.getElementById("con1");
   var  paragraph = document.getElementById("text3");
   var newpara = document.createElement("p");
   newpara.style.fontSize="40px";
   newpara.innerHTML= "กรุณากรอกข้อมูล";

   var detail1 =document.createElement("input");
   detail1.type ="text"
   detail1.placeholder="ชือของคุณ"
   detail1.style.marginBottom="10px"
   detail1.style.fontFamily="Prompt"
   detail1.style.fontSize="30px"
   detail1.style.display="inline"
   detail1.style.width="50%"
   detail1.style.justifyContent="center"

   var detail2 =document.createElement("input");
   detail2.type ="tel"
   detail2.placeholder="เบอร์ติดต่อ"
   detail2.style.marginBottom="10px"
   detail2.style.fontFamily="Prompt"
   detail2.style.fontSize="30px"
   detail2.style.display="block"
   detail2.style.width="50%"

   var submit =document.createElement("button");
   submit.addEventListener("click",accept);
   submit.style.display="block";
   submit.innerHTML="สนใจเข้าร่วม";
   submit.style.fontFamily= "Prompt";
   submit.style.fontSize="30px"

   submit.style.width="50%"
 
  con.appendChild(detail2);
  con.appendChild(submit);
  con.replaceChild(newpara,paragraph);
  con.replaceChild(detail1,text4);
}
function accept() {
    alert("ขอบคุณที่ใช้บริการ");
}