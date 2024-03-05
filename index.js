document.addEventListener('DOMContentLoaded',()=>{
    const form = document.querySelector('form#form')
    const ul = document.querySelector('ul.tasklist')

    form.addEventListener('submit', handleSubmit)

    function handleSubmit(e){
        
        e.preventDefault();
        addTask(e.target.task.value)
        form.reset()
    }

    function addTask(task){
        let li = document.createElement('li')
        li.className = 'task'
        li.innerText = task
        let btn = document.createElement('button')
        btn.innerHTML = 'x'
        btn.addEventListener('click', (e)=>{
            e.target.parentNode.remove()
        })
        li.appendChild(btn)
        ul.appendChild(li)
    }
})