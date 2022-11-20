for(var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function()
{   this.style.color = "red";
    makeSound(this.innerHTML);
    makeAnimation(this.innerHTML);
    setTimeout(() => {
        this.style.color= "#DA0463";
    }, 100);
});
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    makeAnimation(event.key);
})

function makeSound(letter)
{
    if(letter=='w'){
        var  audio =new Audio("tom-1.mp3");
       
    }
    else if(letter=='a'){
        var audio=new Audio("tom-2.mp3");
        
    }
    else if(letter=='s'){
        var audio=new Audio("tom-3.mp3");
        
    }
    else if(letter=='d'){
        var audio =new Audio("tom-4.mp3");
        
    }
    else if(letter=='j'){
        var audio=new Audio("snare.mp3");
    }
    else if(letter=='k'){
        var audio=new Audio("crash.mp3");
    }
    else{
        var audio =new Audio("kick-bass.mp3");
    }
    audio.play();

}

function makeAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout( function(){
        document.querySelector("."+currentKey).classList.remove("pressed")
    },100);

}
