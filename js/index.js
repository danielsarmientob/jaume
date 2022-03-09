const enlace = document.getElementById('rootSaludo');
const goTop = (e)=>{
    e.preventDefault();
    window.scroll({
        top:0,
        behavior: "smooth"
    })
}