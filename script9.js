function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewstr
    if (views<100000){
     viewStr = views/1000 + "K"
    }
    else if(views>1000000){
         viewStr = views/1000000 + "M";
    }
    else{
        viewStr = views/1000 + "K";
    }
let html = ` <div class="card">
          <div class="image">
            <img src="${thumbnail}"  alt="">
            <div class ="capsule">${duration}</div>

          </div>
          <div class="text">
            <h1>${title}</h1>
            <p>${cName}. ${viewNumber}. ${monthsOld} Months ago</p>
          </div>
     </div>`

     document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to Backend | Sigma Web dev #2","CodewithHarry", 560000,7,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ)" )