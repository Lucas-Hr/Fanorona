var places = document.getElementsByClassName("places");
var pieces = document.getElementsByClassName("pieces");
var piecesP1 = document.getElementById("pieces1");
var piecesP2 = document.getElementById("pieces2");
var piece11 = document.getElementById("piece1-1");
var piece12 = document.getElementById("piece1-2");
var piece13 = document.getElementById("piece1-3");
var piece21 = document.getElementById("piece2-1");
var piece22 = document.getElementById("piece2-2");
var piece23 = document.getElementById("piece2-3");
//pick a piece
var lastClickedPiece = null;
var cliquer = function (e) {
    if (lastClickedPiece) {
        lastClickedPiece.setAttribute("clique", "0");
        lastClickedPiece.style.boxShadow = "";
    }
    this.setAttribute("clique", "1");
    this.style.boxShadow = "black 0px 0px 10px 1px";
    lastClickedPiece = this;
};
for (var i = 0; i < pieces.length; i++) {
    pieces[i].addEventListener("click", cliquer);
}
//get the left position 
var positionLeft = function (e) {
    var positionLeft = this.getBoundingClientRect().left;
    positionLeft -= 100;
    // console.log(positionLeft);
    return positionLeft;
};
//get the top position
var positionTop = function (e) {
    var positionTop = this.getBoundingClientRect().top;
    positionTop -= 100;
    // console.log(positionTop);
    return positionTop;
};
// const placeLibre = function(){
// }
//move the pieces
var deplacer = function (e) {
    for (var i = 0; i < pieces.length; i++) {
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
        var clique = pieces[i].getAttribute("clique");
        if (clique == "1") {
            pieces[i].style.left = positionLeft.call(this, e).toString() + "px";
            pieces[i].style.top = positionTop.call(this, e).toString() + "px";
            pieces[i].setAttribute("clique", "0");
            pieces[i].style.boxShadow = "";
            var pos11 = piece11.getBoundingClientRect();
            var pos12 = piece12.getBoundingClientRect();
            var pos13 = piece13.getBoundingClientRect();
            var pos21 = piece21.getBoundingClientRect();
            var pos22 = piece22.getBoundingClientRect();
            var pos23 = piece23.getBoundingClientRect();
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
            var isAlignedP1 = ((pos11.left === pos12.left &&
                pos12.left === pos13.left)
                || (pos11.top === pos12.top &&
                    pos12.top === pos13.top)) && (pos11.left > 200 && pos12.left > 200 && pos13.left > 200);
            var isAlignedP2 = ((pos22.left === pos22.left &&
                pos22.left === pos23.left)
                || (pos21.top === pos22.top &&
                    pos22.top === pos23.top)) && (pos21.left > 200 && pos22.left > 200 && pos23.left > 200);
            if (isAlignedP1) {
                alert("P1 wins");
                window.location.reload();
            }
            else if (isAlignedP2) {
                alert("P2 wins");
                window.location.reload();
            }
        }
    }
};
for (var i = 0; i < places.length; i++) {
    places[i].addEventListener("click", positionTop);
    places[i].addEventListener("click", positionLeft);
    for (var j = 0; j < places.length; j++) {
        if (places[j].getAttribute('libre') == '1') {
            places[j].addEventListener("click", deplacer);
        }
    }
}
