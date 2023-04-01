import {Navbar,Table} from "@/Components";
import El from "@/utils/EL";


export const HomeScreen = () =>{
    const main = El({
        element:'main',
        children:[Navbar(),Table()]
        
    });
    return main
}