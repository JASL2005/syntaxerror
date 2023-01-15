function change(id){
    var x=document.getElementById(id);
    console.log(x.innerHTML)
    if(x.innerHTML=="UNOCCUPIED"){
        console.log("reached")
        x.innerHTML="OCCUPIED";
        setTimeout(()=>{
            x.innerHTML="UNOCCUPIED";
        }, 5000)
    }
}
