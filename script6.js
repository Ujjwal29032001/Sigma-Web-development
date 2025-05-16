let button = document.getElementById("btn")
https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
//  button.addEventListener("click", ()=>{
//     alert("I was clicked. Yayy!!")
//     })                                         
 button.addEventListener("dblclick", ()=>{
     document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b>Enjoy your click!"
 })

 button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
 })

 button.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
 })