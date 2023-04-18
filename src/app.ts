const places = document.getElementsByClassName("places") as HTMLCollectionOf<HTMLElement>;
const pieces = document.getElementsByClassName("pieces") as HTMLCollectionOf<HTMLElement>;
const piecesP1 = document.getElementById("pieces1") as HTMLElement;
const piecesP2 = document.getElementById("pieces2") as HTMLElement;
const piece11 = document.getElementById("piece1-1") as HTMLElement;
const piece12 = document.getElementById("piece1-2") as HTMLElement;
const piece13 = document.getElementById("piece1-3") as HTMLElement;
const piece21 = document.getElementById("piece2-1") as HTMLElement;
const piece22 = document.getElementById("piece2-2") as HTMLElement;
const piece23 = document.getElementById("piece2-3") as HTMLElement;



//pick a piece
let lastClickedPiece: HTMLElement | null = null;

const cliquer = function(this: HTMLElement, e:Event){
    if (lastClickedPiece) {
        lastClickedPiece.setAttribute("clique","0");
        lastClickedPiece.style.boxShadow = "";
    }
    this.setAttribute("clique","1");
    this.style.boxShadow = "black 0px 0px 10px 1px";
    lastClickedPiece = this;
}

for (let i = 0; i<pieces.length; i++){
    pieces[i].addEventListener("click", cliquer);
}

//get the left position 
const positionLeft = function (this: HTMLElement, e: Event): number{
    let positionLeft = this.getBoundingClientRect().left;
    positionLeft -= 100;
    // console.log(positionLeft);
    return positionLeft;
}


//get the top position
const positionTop = function (this: HTMLElement, e: Event): number{
    let positionTop  = this.getBoundingClientRect().top;
    positionTop -= 100;
    // console.log(positionTop);
    return positionTop;
}

// const placeLibre = function(){

// }

//move the pieces
const deplacer = function(this: HTMLElement ,e: Event){

    for (let i = 0 ; i<pieces.length; i++){
       
        
        // const id = this.getAttribute('id');
        // if (pieces[i].style.left == positionLeft.call(this,e).toString() && pieces[i].style.top == positionTop.call(this,e).toString() ){
        //     switch(id) {
        //         case "circle1":
        //           this.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling?.setAttribute("libre","0");
        //           console.log(id);
        //           break;
        //         case "circle2":
        //           // code block
        //           break;
        //           case "circle3":
        //           // code block
        //           break;
        //         case "circle4":
        //           // code block
        //           break;
        //           case "circle5":
        //           // code block
        //           break;
        //         case "circle6":
        //           // code block
        //           break;
        //           case "circle7":
        //           // code block
        //           break;
        //         case "circle8":
        //           // code block
        //           break;
        //           case "circle9":
        //           // code block
        //           break;
        //         default:
        //           // code block
        //     }
        // }

        const clique = pieces[i].getAttribute("clique");
        if(clique == "1"){
            pieces[i].style.left = positionLeft.call(this, e).toString()+ "px";
            pieces[i].style.top = positionTop.call(this, e).toString()+ "px";
            pieces[i].setAttribute("clique","0");
            pieces[i].style.boxShadow ="";
            const pos11 = piece11.getBoundingClientRect();
            const pos12 = piece12.getBoundingClientRect();
            const pos13 = piece13.getBoundingClientRect();

            const pos21 = piece21.getBoundingClientRect();
            const pos22 = piece22.getBoundingClientRect();
            const pos23 = piece23.getBoundingClientRect();
            

            //test par tour
            // const zanaka1 = pieces[i].parentElement?.children as HTMLCollection;
            // const zanaka2 = pieces[i].parentElement?.nextElementSibling?.children as HTMLCollection;
            // const zanaka3 = pieces[i].parentElement?.previousElementSibling?.children as HTMLCollection;

            // for (let j = 0 ; j<zanaka1.length;j++){
            //     zanaka1[j].setAttribute("mandeha","1");
            //     if (zanaka2[j]){
            //         zanaka3[j].setAttribute("mandeha","0");
            //     }

            //     else if(zanaka2[j]){
            //         zanaka3[j].setAttribute("mandeha","0");
            //     }
                
            // }
            
            const isAlignedP1 = ((pos11.left === pos12.left &&
            pos12.left === pos13.left)
            || (pos11.top === pos12.top &&
            pos12.top === pos13.top)) && (pos11.left > 200 && pos12.left > 200 && pos13.left > 200);

            const isAlignedP2 = ((pos22.left === pos22.left &&
            pos22.left === pos23.left)
            || (pos21.top === pos22.top &&
            pos22.top === pos23.top)) && (pos21.left > 200 && pos22.left > 200 && pos23.left > 200);

            if(isAlignedP1) {
                alert("P1 wins");
                window.location.reload();
            }

            else if(isAlignedP2){
                alert("P2 wins");
                window.location.reload();
            }
        }
    }
}

for (let i = 0 ; i<places.length; i++){
    places[i].addEventListener("click", positionTop);
    places[i].addEventListener("click", positionLeft);
    for (let j = 0; j<places.length; j++){
        if (places[j].getAttribute('libre') == '1'){
            places[j].addEventListener("click", deplacer);
        }
    }
    
}


