import {router} from '@/App';
import {container} from '@/layout';
import El from '@/utils/EL';
import './index.css';
export const Navbar= ()=>{
    const nav= El({
        element:'div',
        className:'shadow-md pt-3 pb-2 menu',
        style:"",
        children:container(El({
        element:'nav',
        className:'flex gap-5 items-center',
        style:'margin-left:100px;',
        children:[
            El({
                element:'img',
                className:'w-10 ',
                style:'border-radius:10px;margin-right:100px',
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpSs5io37TbCAgq441FggYyRYYJUkjoY4IfLscSkaX6onkP_Z-RyCNLzYZIZzItMszG0&usqp=CAU',
            }),
            El({
                element:'ul',
                className:'flex-1 flex gap-8',
                children:[El({
                    element:'li',
                    innerText:"Home"
                }),
                El({
                    element:'li',
                    innerText:"About"
                }),
                El({
                    element:'li',
                    innerText:"Contact"
                })]
            }),
       El({
    element:'button',
    onclick:()=> {
       const main= document.getElementById('main');
       main .innerHTML="";
        history.pushState(null,null,'/login');
       main.appendChild(router()) 
    },
    innerHTML: 'Login',
   
}) 
 ] 
  }) )
     })


    return nav
}
