const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")

document.getElementById('themeSwitcher').addEventListener('change', ()=>{
    if(main.dataset.theme === "dark"){
        root.style.setProperty('--bg-color','#f1f5f9')
        root.style.setProperty('--ball-color','#F8DE22')
        root.style.setProperty('--border-color','#161313')
        root.style.setProperty('--font-color','#161313')
        main.dataset.theme = "light"
    }else {
        root.style.setProperty('--bg-color','#161313')
        root.style.setProperty('--ball-color','#161313')
        root.style.setProperty('--border-color','#f1f5f9')
        root.style.setProperty('--font-color','#f1f5f9')
        main.dataset.theme = "dark"
    }
})

document.querySelectorAll('.charKey').forEach((charKeyBtn)=>{
    charKeyBtn.addEventListener('click',()=>{
        const value = charKeyBtn.dataset.value
        input.value += value 
    })
})

document.getElementById('clear').addEventListener('click',()=>{
    input.value = ""
})

document.getElementById('equal').addEventListener('click',calculate)

function calculate(){
    const result = eval(input.value)
    input.value = result
}



