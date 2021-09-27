let newBtn= document.getElementById("new-btn");
let hitBtn= document.getElementById("hit-btn");
let standBtn= document.getElementById("stand-btn");
let dealerA=0;
let playerA=0;
let sum=0;
let dealerSum=0;
let won=function(){
    document.getElementById("win").textContent="PLAYER WINS🎊";
    document.getElementById("win").style.display="block";
}
let lost=function(){
    document.getElementById("win").textContent="DEALER WINS😭";
    document.getElementById("win").style.display="block";
}
let tie=function(){
    document.getElementById("win").textContent="TIE";
    document.getElementById("win").style.display="block";
}
newBtn.onclick=function(){
    let topCard=document.getElementById("top-card");
    topCard.innerHTML="";
    topCard.innerHTML+='<img src="./poker-qr/2B.svg" alt="card">';
    dealerA=0;
    playerA=0;
    dealerSum=0;
    document.getElementById("win").style.display="none";
    let firstCard=Math.floor(Math.random()*13) + 1;
    let secondCard=Math.floor(Math.random()*13) + 1;
    let dealerCard=Math.floor(Math.random()*13) + 1;
    if(firstCard===1)playerA++;
    if(secondCard===1)playerA++;
    if(dealerCard===1)dealerA++;
    let val1=firstCard;
    let val2=secondCard;
    let val3=dealerCard;
    if(firstCard >=12)val1=10; 
    if(secondCard >=12)val2=10;
    if(dealerCard>=12)val3=10;
    dealerSum+=val3;
    let arr=['C','D','H','S'];
    let rnd1=Math.floor(Math.random()*4);
    let rnd2=Math.floor(Math.random()*4);
    let rnd3=Math.floor(Math.random()*4);
    let s1=firstCard+arr[rnd1];
    let s2=secondCard+arr[rnd2];
    let s3=dealerCard+arr[rnd3];
    let playerDeck=document.getElementById("player-deck");
    let dealerDeck=document.getElementById("dealer-deck");
    dealerDeck.innerHTML="";
    playerDeck.innerHTML="";
    dealerDeck.innerHTML+='<img src="./poker-qr/'+s3+'.svg" alt="card">';
    let change='<img src="./poker-qr/'+s1+'.svg" alt="card">'+'<img src="./poker-qr/'+s2+'.svg" alt="card">';
    playerDeck.innerHTML=change;
    sum=val2+val1; 
    if(sum === 11 && playerA >0){
        won(); 
    }
}

hitBtn.onclick=function(){
    let topCard=document.getElementById("top-card");
    let firstCard=Math.floor(Math.random()*13) + 1;
    if(firstCard===1)playerA++;
    let val=firstCard;
    if(firstCard >=12)val=10; 
    let arr=['C','D','H','S'];
    let rnd=Math.floor(Math.random()*4);
    let s=firstCard+arr[rnd];
    let playerDeck=document.getElementById("player-deck");
    topCard.innerHTML="";
    topCard.innerHTML+='<img src="./poker-qr/'+s+'.svg" alt="card">';
    setTimeout(() => {
        playerDeck.innerHTML+='<img src="./poker-qr/'+s+'.svg" alt="card">';
    }, 100);
    sum+=val;
    if(sum===21){
        won();
    }
    else if(sum > 21){
        lost();
    }
    else{
        if(playerA>0){
            if(sum+10==21){
                won();
            }
        }
    }
}

standBtn.onclick=function(){
    if(playerA>0){
        if(sum+10 < 21){
            sum=sum+10;
        }
    }
    while(dealerSum <= 16){
        let topCard=document.getElementById("top-card");
        let Card=Math.floor(Math.random()*13) + 1;
        if(Card===1)dealerA++;
        let val=Card;
        if(Card >=12)val=10; 
        let arr=['C','D','H','S'];
        let rnd=Math.floor(Math.random()*4);
        let s=Card+arr[rnd];
        let dealerDeck=document.getElementById("dealer-deck");
        dealerSum+=val;
        setTimeout(() => {
            topCard.innerHTML="";
            topCard.innerHTML+='<img src="./poker-qr/'+s+'.svg" alt="card">';
            dealerDeck.innerHTML+='<img src="./poker-qr/'+s+'.svg" alt="card">';
        }, 50);
        if(dealerA>0){
            if(dealerSum+10 ==21){
                lost();
            }
            else if(dealerSum+10 > sum){
                lost();
            }
        }
    }
    if(dealerSum==21){
        lost();
    }
    else if(dealerSum>21){
        won();
    }
    else{
       if(dealerSum > sum){
           lost();
       }
       else if(dealerSum===sum){
           tie();
       }
       else{
           won();
       }
    }
}
