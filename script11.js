console.log('lets write Javascript');

async function getSongs(){
let a = await fetch("http://yourdomain.com/files/song2.mp3")
let response = await a.text();
console.log(response)
let div = document.createElement("div")
div.innerHTML = response;
let as = div.getElementsByTagName("a")
let songs = []
for (let index =  0; index < as.length; i++) {
    const element = as[index];b   
    if(element.href.endsWith(".mp3")){
        songs.push(element.href)
    }

}
  return songs
}
 async function main(){
 let songs =await getSongs()
 console.log(songs)
}
main()

