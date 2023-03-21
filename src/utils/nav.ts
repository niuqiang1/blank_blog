import { nav } from "@data/nav";


function getNextNav(title:string):string|boolean {
    const index =  nav.findIndex(i=>i.title === title)
    if(index>-1 && !(index+1>nav.length-1)){
        return nav[index+1].slug
    }
    return false
}


function getPrevNav(title:string):string|boolean {
    const index =  nav.findIndex(i=>i.title === title)
    if(index>-1 && index-1>-1){
        return nav[index-1].slug
    }
    return false
}

export { getNextNav, getPrevNav }