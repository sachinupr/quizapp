
let quizapp = 
[
   {
     question:"which lang supports interpreter only",
     answer:
     [
        {opt :"C" , v:"0"},
        {opt: "C++" , v:"0"},
        {opt:"python" , v:"1"},
        {opt:"java" , v:"0"}
     ]
    } ,

    {
        question:"Which is non OOP language ?",
        answer:
        [
           {opt :"Java" , v:"0"},
           {opt: "C++" , v:"0"},
           {opt:"Assembly" , v:"1"},
           {opt:"python" , v:"0"}
        ]
    },
    {
        question:"which is the National Animal Of India ?",
        answer:
        [
           {opt :"Tiger" , v:"1"},
           {opt: "Peacock" , v:"0"},
           {opt:"Cow" , v:"0"},
           {opt:"Shark" , v:"0"}
        ]
    },
     
    {
        question:"which one is used for devleoping IOS apps? ",
        answer:
        [
           {opt :"Swift" , v:"1"},
           {opt: "Java" , v:"0"},
           {opt:"C++" , v:"0"},
           {opt:"Ruby" , v:"0"}
        ]
    },
    {
        question:"which one is used for devleoping web apps? ",
        answer:
        [
           {opt :"Ruby" , v:"0"},
           {opt: "Php" , v:"0"},
           {opt:"Python" , v:"1"},
           {opt:"All of the Above" , v:"0"}
        ]
    }

]
// this is array of objects of array of objects; 


let fetchques=document.querySelector("#question");
fetchques.addEventListener("click",ques);

let ans1=document.querySelector('#opt1');
let ans2=document.querySelector('#opt2');
let ans3=document.querySelector('#opt3');
let ans4=document.querySelector('#opt4');

let move=document.querySelector('#next');

let ans=0; 
let scr=document.querySelector('#score');

function moveon()
{
    if(val == 4)
    {
        move.innerHTML="Finish & Restart";
        fetchques.addEventListener("click",ques);
        val=-1;
        temp=0;
        ans=0;
        scr.innerHTML=0;
    }
    else 
    {
       resetstyle();
       move.innerHTML="Next";
       ques();
    }
}


let val=-1;
let temp=0;
function ques()
{
    val++;
     fetchques.innerHTML=`${quizapp[val].question}`;
    for(j=0;j<quizapp[val].answer.length;j++)
    {
      if(j == 0)
       ans1.innerHTML = `${quizapp[val].answer[j].opt}`;
       
       if(j == 1)
       ans2.innerHTML = `${quizapp[val].answer[j].opt}`;
       
       if(j == 2)
       ans3.innerHTML = `${quizapp[val].answer[j].opt}`;
       
       if(j == 3)
       ans4.innerHTML = `${quizapp[val].answer[j].opt}`;
       
    }
    
    temp=0;
    ans1.addEventListener('click',checka);
    ans2.addEventListener('click',checkb);
    ans3.addEventListener('click',checkc);
    ans4.addEventListener('click',checkd);

    move.addEventListener('click',moveon);

}

function checka()
{
     let ok=`${quizapp[val].answer[0].v}`;
     if(ok == "1")
     {
        ans1.style.backgroundColor='green';
        if(temp == 0)
        {
          ans+=1;
          scr.innerHTML=ans; 
          temp=1;
        }
     }
     else
     {
        ans1.style.backgroundColor='red';
        temp=1;
     }
}

function checkb()
{
     let ok=`${quizapp[val].answer[1].v}`;
     if(ok == "1")
     {
        ans2.style.backgroundColor='green';
        if(temp == 0)
        {
          ans+=1;
          scr.innerHTML=ans; 
          temp=1;
        }
     }
     else
     {
        ans2.style.backgroundColor='red';
        temp=1;
     }
}

function checkc()
{
     let ok=`${quizapp[val].answer[2].v}`;
     if(ok == "1")
     {
        ans3.style.backgroundColor='green';
        if(temp == 0)
        {
          ans+=1;
          scr.innerHTML=ans; 
          temp=1;
        }
     }
     else
     {
        ans3.style.backgroundColor='red';
        temp=1;
     }
}

function checkd()
{
     let ok=`${quizapp[val].answer[3].v}`;
     if(ok == "1")
     {
        ans4.style.backgroundColor='green';
        if(temp == 0)
        {
          ans+=1;
          scr.innerHTML=ans; 
          temp=1;
        }
     }
     else
     {
        ans4.style.backgroundColor='red';
        temp=1;
     }
}

function resetstyle()
{
    ans1.style.backgroundColor='white';
    ans2.style.backgroundColor='white';
    ans3.style.backgroundColor='white';
    ans4.style.backgroundColor='white';
}












