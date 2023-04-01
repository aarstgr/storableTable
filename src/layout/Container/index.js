import El from "@/utils/EL";

export const container = (children) =>{
    return (El({
        element:'div',
        className:'max-w-5xl  mx-auto',
        children,
        
    }));

}

