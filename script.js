let joke='https://v2.jokeapi.dev/joke/Any?type=single'
let container=document.querySelector('p')
let button=document.querySelector('button')
let quote='https://api.quotable.io/random'
const getquote=()=>{
    fetch(quote)
    .then((response)=>{return response.json()})
    .then((item)=>{container.textContent=`${item.content}`,console.log(item.content)})
}
getquote()
button.addEventListener('click', getquote)
