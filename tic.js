var box = document.querySelectorAll("#main div")
var sp = document.querySelector("span")
var player = "x"
var bo = document.querySelector(".ult")
var count = 0
var hel = document.querySelector(".hel")
var st = document.querySelector(".st")
var art = document.querySelector("article")

st.addEventListener("click",()=>{
    art.style.display = "block"
    st.remove()
})
box.forEach(or=>
    or.addEventListener("click",(e)=>{
        count++
        if(or.childElementCount == 0){
            or.innerHTML = '<i class="fa-solid fa-xmark"></i>'
            var go =  '<i class="fa-solid fa-xmark"></i>'
            console.log(go);
        }

        

        for(var i = 1;i<=100;i++){
            var rndm = Math.floor(Math.random()*9)
            var yo = box[rndm]
            if(yo.childElementCount == 0){
                break;
            }
            if(yo.childElementCount == 1){
                
                continue;
            }
            
        
        }

        

        if(count<5){
            yo.innerHTML = '<i class="fa-solid fa-o"></i>'
            
        }
        
        var co = '<i class="fa-solid fa-o"></i>'

        

        if(box[0].innerHTML==go&&box[3].innerHTML==go&&box[6].innerHTML==go){
            box[0].style.backgroundColor = "#117A65 "
            box[3].style.backgroundColor = "#117A65 "
            box[6].style.backgroundColor = "#117A65 "
            sp.innerHTML = go
            bo.textContent = "YOU WON"
            bo.classList.add("gi")
        }

        else if(box[6].innerHTML==go&&box[7].innerHTML==go&&box[8].innerHTML==go){
            box[6].style.backgroundColor = "#117A65 "
            box[7].style.backgroundColor = "#117A65 "
            box[8].style.backgroundColor = "#117A65 "
            sp.innerHTML = go
            
            bo.textContent = "YOU WON"
            bo.classList.add("gi")
        }

        else if(box[2].innerHTML==go&&box[5].innerHTML==go&&box[8].innerHTML==go){
            box[2].style.backgroundColor = "#117A65 "
            box[5].style.backgroundColor = "#117A65 "
            box[8].style.backgroundColor = "#117A65 "
            sp.innerHTML = go
            
            bo.textContent = "YOU WON"
            bo.classList.add("gi")
        }
        else if(box[2].innerHTML==go&&box[4].innerHTML==go&&box[6].innerHTML==go){
            box[2].style.backgroundColor = "#117A65 "
            box[4].style.backgroundColor = "#117A65 "
            box[6].style.backgroundColor = "#117A65 "
            sp.innerHTML = go
            
            bo.textContent = "YOU WON"
            bo.classList.add("gi")
        }
        else if(box[0].innerHTML==go&&box[1].innerHTML==go&&box[2].innerHTML==go){
            box[0].style.backgroundColor = "#117A65 "
            box[1].style.backgroundColor = "#117A65 "
            box[2].style.backgroundColor = "#117A65 "
            sp.innerHTML = go
            bo.textContent = "YOU WON"
            bo.classList.add("gi")
        }
        else if(box[0].innerHTML==go&&box[4].innerHTML==go&&box[8].innerHTML==go){
            box[0].style.backgroundColor = "#117A65 "
            box[4].style.backgroundColor = "#117A65 "
            box[8].style.backgroundColor = "#117A65 "
            sp.innerHTML = go
            
            bo.textContent = "YOU WON"
            bo.classList.add("gi")
        }
        else if(box[1].innerHTML==go&&box[4].innerHTML==go&&box[7].innerHTML==go){
            box[1].style.backgroundColor = "#117A65 "
            box[4].style.backgroundColor = "#117A65 "
            box[7].style.backgroundColor = "#117A65 "
            sp.innerHTML = go
           
            bo.textContent = "YOU WON"
            bo.classList.add("gi")
        }
        else if(box[3].innerHTML==go&&box[4].innerHTML==go&&box[5].innerHTML==go){
            box[3].style.backgroundColor = "#117A65 "
            box[4].style.backgroundColor = "#117A65 "
            box[5].style.backgroundColor = "#117A65 "
            sp.innerHTML = go
         
            bo.textContent = "YOU WON"
            bo.classList.add("gi")
        }

        

        else if(box[0].innerHTML==co&&box[3].innerHTML==co&&box[6].innerHTML==co){
            box[0].style.backgroundColor = "#117A65 "
            box[3].style.backgroundColor = "#117A65 "
            box[6].style.backgroundColor = "#117A65 "
            sp.innerHTML = co
       
            bo.textContent = "YOU LOST"
            bo.classList.add("gi")
        }

        else if(box[6].innerHTML==co&&box[7].innerHTML==co&&box[8].innerHTML==co){
            box[6].style.backgroundColor = "#117A65 "
            box[7].style.backgroundColor = "#117A65 "
            box[8].style.backgroundColor = "#117A65 "
            sp.innerHTML = co
            
            bo.textContent = "YOU LOST"
            bo.classList.add("gi")
        }

        else if(box[2].innerHTML==co&&box[5].innerHTML==co&&box[8].innerHTML==co){
            box[2].style.backgroundColor = "#117A65 "
            box[5].style.backgroundColor = "#117A65 "
            box[8].style.backgroundColor = "#117A65 "
            sp.innerHTML = co;
            
            bo.textContent = "YOU LOST"
            bo.classList.add("gi")
        }
        else if(box[2].innerHTML==co&&box[4].innerHTML==co&&box[6].innerHTML==co){
            box[2].style.backgroundColor = "#117A65 "
            box[4].style.backgroundColor = "#117A65 "
            box[6].style.backgroundColor = "#117A65 "
            sp.innerHTML = co;
         
            bo.textContent = "YOU LOST"
            bo.classList.add("gi")
        }
        else if(box[0].innerHTML==co&&box[1].innerHTML==co&&box[2].innerHTML==co){
            box[0].style.backgroundColor = "#117A65 "
            box[1].style.backgroundColor = "#117A65 "
            box[2].style.backgroundColor = "#117A65 "
            sp.innerHTML = co;
        
            bo.textContent = "YOU LOST"
            bo.classList.add("gi")
        }
        else if(box[0].innerHTML==co&&box[4].innerHTML==co&&box[8].innerHTML==co){
            box[0].style.backgroundColor = "#117A65 "
            box[4].style.backgroundColor = "#117A65 "
            box[8].style.backgroundColor = "#117A65 "
            sp.innerHTML = co;
           
            bo.textContent = "YOU LOST"
            bo.classList.add("gi")
        }
        else if(box[1].innerHTML==go&&box[4].innerHTML==go&&box[7].innerHTML==go){
            box[1].style.backgroundColor = "#117A65 "
            box[4].style.backgroundColor = "#117A65 "
            box[7].style.backgroundColor = "#117A65 "
            sp.innerHTML = go
     
            bo.textContent = "YOU LOST"
            bo.classList.add("gi")
        }
        else if(box[3].innerHTML==go&&box[4].innerHTML==go&&box[5].innerHTML==go){
            box[3].style.backgroundColor = "#117A65 "
            box[4].style.backgroundColor = "#117A65 "
            box[5].style.backgroundColor = "#117A65 "
            sp.innerHTML = go
           
            bo.textContent = "YOU LOST"
            bo.classList.add("gi")
        }
        else if(box[1].innerHTML==co&&box[4].innerHTML==co&&box[7].innerHTML==co){
            box[1].style.backgroundColor = "#117A65 "
            box[4].style.backgroundColor = "#117A65 "
            box[7].style.backgroundColor = "#117A65 "
            sp.innerHTML = go
       
            bo.textContent = "YOU LOST"
            bo.classList.add("gi")
        }
        else if(box[3].innerHTML==co&&box[4].innerHTML==co&&box[5].innerHTML==co){
            box[3].style.backgroundColor = "#117A65 "
            box[4].style.backgroundColor = "#117A65 "
            box[5].style.backgroundColor = "#117A65 "
            sp.innerHTML = go
      
            bo.textContent = "YOU LOST"
            bo.classList.add("gi")
        }

        else if(count == 5){
            hel.textContent = "DRAW"
           
            bo.textContent = "DRAW"
            bo.classList.add("gi")
        }

        

        
        
    })    
)