import { FOFScreen,HomeScreen,LoginScreen } from "./screens";
import El from "./utils/EL";



 
export function router(){
    switch(location.pathname){
        case '/': return HomeScreen();
        case '/login': return LoginScreen()
        default:return FOFScreen();
    }
   }
  
const App = () => {
    return El({
        element:'div',
        id:"main",
        children:router(),
    });
}
export default App;