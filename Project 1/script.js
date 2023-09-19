const throttleFunction=(func, delay)=>{ 
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
      if(now - prev> delay){
        prev = now;
        return func(...args); 
      }
    }
};
document.querySelector(".center").addEventListener("mousemove",throttleFunction((dets) => {
    let div = document.createElement("div");
    div.classList.add('imagediv');
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';

    let img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1694807865565-70252084fa27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80")

    div.appendChild(img);
    document.body.appendChild(div);
    setTimeout(function(){
      div.remove();
    },2000)
}, 400)
);
