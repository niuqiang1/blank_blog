import { nav, type NavItem } from "@data/nav";

function setSlug(nav:NavItem):string {
    if(nav.isPage){
        return `${nav.slug}/1`
    }
    return nav.slug

}

function getNextNav(title:string):string|boolean {
    const index =  nav.findIndex(i=>i.title === title)
    if(index>-1 && !(index+1>nav.length-1)){

        return setSlug(nav[index+1])
    }
    return false
}


function getPrevNav(title:string):string|boolean {
    const index =  nav.findIndex(i=>i.title === title)
    if(index>-1 && index-1>-1){
        return setSlug( nav[index-1])
    }
    return false
}

export { getNextNav, getPrevNav, setSlug}