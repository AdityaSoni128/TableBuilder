const button =document.getElementById("btn");
const tableInput=document.getElementById("number")
const tableContainor=document.getElementsByClassName("table")[0];
const headingParagraph=document.getElementById("para");
tableInput.addEventListener("input",function(){
    const tableNumber=parseInt(tableInput.value);
   if(tableNumber){
    headingParagraph.innerHTML=`Table of ${tableNumber}`
    tableContainor.innerHTML="";
  for(let i=1;i<=10;i++){
   const tableElement=createTableElement(tableNumber,i);
   tableContainor.appendChild(tableElement);
  }
   }
})
function createTableElement(num,i){
    const tableElement=document.createElement("h3");
    const content=`${num} x ${i} = ${num*i}`;
    tableElement.innerHTML=content;
    return tableElement;
}