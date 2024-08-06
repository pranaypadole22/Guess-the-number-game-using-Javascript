let random=Math.random();
let int=Math.floor(random*101);
console.log(int);
document.getElementById('guess').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        guessnumber();
    }
});
function guessnumber(){
    let userinput=parseInt(document.getElementById('guess').value);
    let result=document.getElementById('result');
    if(userinput==int){
        result.innerHTML="<h3>Congratulations!You guessed the number</h3>";
    
    }else if(userinput<int){
        result.innerHTML="<h3>Too Low! Try again</h3>";
        
    }else{
        result.innerHTML="<h3>Too High! Try again</h3>";
        
    }
}























