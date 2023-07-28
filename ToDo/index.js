const inputBox = document.getElementById('inputBox')
const list = document.getElementById('list')

function addBtn(){
    if (inputBox.value === ''){
        alert("please write something to add as your work")
    }else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        list.appendChild(li)
        // del
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
inputBox.value = ''
saveData()
}

list.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data",list.innerHTML)
}

function showData(){
    list.innerHTML = localStorage.getItem("data")
}
showData()
