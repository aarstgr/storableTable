
import El from "@/utils/EL";
import App from "./src/App"; 
import "./style.css";

const save = document.getElementById('submit');
const root=  document.getElementById('app'); 
root.appendChild (App());


export function addRow() {
    let table = document.getElementById("myTable");
    let x = table.rows.length;
    table.insertRow(-1).innerHTML= '<tr>' +
    '<td> <input type="text"  id="name'+x+'" /></td>'+
    '<td> <input type="number" id="age'+x+'" /></td>'+
    '<td> <input type="text" class="country" id="country'+x+'" /></td></tr>';
     
  let input=document.querySelectorAll('input,select')
  for (var i = 0; i<input.length; i++){
    input[i].addEventListener('keypress',function(e){
      if ((e).which==13){
        e.preventDefault();
        if (document.activeElement.className=='country' ) {
    addRow();
        }
        
      }
    })
  }
  
}


 save.addEventListener('click',(e) =>{
  e.preventDefault();
  let table = document.getElementById('myTable');
  let tableRows = table.rows.length;
  let data =[];
   for (let i=1; i<= tableRows-1; i++){
     let name = document.getElementById('name'+i).value;
     let age = document.getElementById('age'+i).value;
     let country = document.getElementById('country'+i).value;
     let temp = {name: name, age: age, country: country};
     data.push(temp);
   }

window.localStorage.setItem('Table1',JSON.stringify(data));

  })
  

   addRow();

  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
            event.preventDefault()
            const inputs =
                Array.prototype.slice.call(document.querySelectorAll("input"))
            const index =
                (inputs.indexOf(document.activeElement) + 1) % inputs.length
            const input = inputs[index]
            input.focus()
            input.select()

              
            } 
      let table=document.querySelector('table');
      table.contentEditable="true";
     }  
  );
