function createGrid(elementContainer , x ){
    console.log(x );
    elementContainer.innerHTML = "";
    const width = elementContainer.offsetWidth;
    const height = elementContainer.offsetHeight;
    console.log(width);
 
    for (let i = 0; i < x; i++) {
      
        const elementDivP = document.createElement("div");
        elementDivP.className = "pre";
        for (let index = 0; index < x; index++) {
            const elementDiv = document.createElement("div");
            elementDiv.className = "item";
            elementDiv.onmousemove = (e)=>{
                elementDiv.style.backgroundColor = "#3333";
            }
            elementDiv.onmouseleave= (e)=>{
                elementDiv.style.backgroundColor = "black";
            }
            elementDivP.append(elementDiv);
        }
        elementContainer.append(elementDivP);
    }
   
}
function getXY(elementContainer){

     var x =  prompt("enter number of row and column") ; 
  
     createGrid(elementContainer , x  );
}

function main(){
    
    const elementContainer = document.getElementById("container") ; 
    document.getElementById("import").onclick =(e) =>{
        getXY(elementContainer);
    }
   
    
}
main();