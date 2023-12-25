let userScore=0;
let compScore=0;
const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score")


const genCompChoice = ()=>
{
   const options =["rock","paper","scissors"];
   const randIdx=Math.floor(Math.random()*3);
   return options[randIdx];
};
const Drawgame = ()=>

{
 console.log("Game was Draw!");
 msg.innerText ="GAME WAS DRAW";
 msg.style.backgroundColor="yellow";
 msg.style.color="black";
 



};
const showWinner =(userWin,userchoice,compchoice) =>
{
  if(userWin)
  {

    userScore++;
    userScorePara.innerText=userScore;
    console.log("YOU WIN!");
    msg.innerText =`You Win  Your ${userchoice} beats ${ compchoice}`;
    msg.style.backgroundColor="green";
  }
  else
  {
    
    compScore++;
    compScorePara.innerText=compScore;
    console.log("YOU LOSE");
    msg.innerText =`YouLose ${compchoice} beats your${ userchoice}`;
    msg.style.backgroundColor="red";


  }
   
};
const playGame =(userchoice) =>
{
  console.log("user choice=",userchoice);
  const compchoice=genCompChoice();
  console.log("computer choice=",compchoice);


  if(userchoice === compchoice)
  {
    Drawgame();
  }
  else{
    let userWin =true;

    if(userchoice ==="rock")
    {
      userWin=compchoice ==="paper" ? false : true;
    }
    else if(userchoice === "paper") {
      userWin=compchoice==="scissors" ? false : true;
    }
    else{
      userWin=compchoice==="rock" ?false : true;
    }
    showWinner(userWin,userchoice,compchoice);
  }
 

};

choices.forEach((choice) => 
{
    console.log(choice);
    choice.addEventListener("click", () =>
    {
      const userchoice=choice.getAttribute("id");
      console.log("choice was clicked",userchoice);
      playGame(userchoice);
    });
});