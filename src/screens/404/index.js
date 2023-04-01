import El from "@/utils/EL";


export const FOFScreen =()=>{
    const main =El({
        element:'div',
        className:'flex h-screen gap-3 items-center justify-center',
        children:[El({
            element:'h1',
            className:'font-bold text-3xl',
          children: "404 | Page Not Found!"
    }),El({
        element:'a',
        href:'/',
      children: "Back to home"
})]
    })
    return main
}
