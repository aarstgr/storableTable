import { defineConfig } from "vite";
import jsconfigPaths from 'vite-jsconfig-paths';
export default defineConfig({
    server:{
       port:3001 
        
    },
    plugins:[jsconfigPaths()],
})