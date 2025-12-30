function customRender(reactele,container){
    /*
    const domele=document.createElement(reactele.type)
    domele.innerHTML=reactele.children
    domele.setAttribute('href',reactele.prop.href)
    domele.setAttribute('target',reactele.prop.target)
    container.appendChild(domele)
    */
    const domele =document.createElement(reactele.type)
    domele.innerHTML=reactele.children
    for(const prop in reactele.prop){
        if(prop=='children')continue
        domele.setAttribute(prop,reactele.prop[prop])
    }
    container.appendChild(domele)
}
const reactele={
    type:'a',
    prop:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
const maincont=document.querySelector('#root')
customRender(reactele,maincont)