import El from '@/utils/EL';
import './index.css'

export const Table = () => {   

const table = El ({
  element:'div',
    className:'flex items-center ',
    style:'flex-direction:column ; margin-top:50px;',
         children:El({
          element:'table',
          style:"background-color:white;opacity:70%;color:white;border-radius:10px;border:solid 4px black",
          id:'myTable',
          children:[El({
            element:'tr',
            className:'bg-gray-800 ',
            children:[
            El({
             element:'th',
             innerText:'Name',
             tabindex:'1',
             className:''
          }),El({
             element:'th',
             innerText:'Age',
             tabindex:'2',
            }),El({
             element:'th',
             innerText:'Country', 
             tabindex:'3',
            }),
            ]}),
            El({
              element:'tbody',
              id:'tbody',
              style:''
          })
        ]}),
      })

return table;

}
