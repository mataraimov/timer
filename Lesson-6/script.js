const days=document.querySelector('.days')
const hours=document.querySelector('.hours')
const minutes=document.querySelector('.minutes')
const seconds=document.querySelector('.seconds')
const inp=document.querySelector('input')
const button=document.querySelector('button')
button.onclick=function(){
  setInterval(()=>{
    const date=new Date()
    const newdate=new Date(inp.value);
    const difference=newdate.getTime()-date.getTime()
    days.textContent=Math.floor(difference/(1000*60*60*24))
    hours.textContent=Math.floor((difference%(1000*60*60*24))/(1000*60*60))
    minutes.textContent=Math.floor((difference%(1000*60*60))/(1000*60))
    seconds.textContent=Math.floor((difference%(1000*60))/(1000))
    // let h1= Math.floor(s1/60/60)
    // minutes.textContent=Math.abs(h1*60-Math.floor(s1/60))
    // let m1=Math.abs(h1*60-Math.floor(s1/60))
    // seconds.textContent=Math.abs((h1*60*60)+(m1*60)-s1)
  },1000)
}
//let interval=