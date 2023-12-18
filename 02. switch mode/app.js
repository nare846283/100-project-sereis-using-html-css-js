let swicher = document.querySelector('.switch_button')
let button = document.querySelector('button')
let root = document.documentElement

let flag = 0

swicher.addEventListener('click', function() {
    if(flag == 0){
        button.style.transform = 'translate(350%)';
        root.style.setProperty('--primary', '#ccc')
        root.style.setProperty('--secondary', '#001d7c')
        flag = 1
    }else{
        button.style.transform = 'translate(0%)';
        root.style.setProperty('--primary', '#001d7c')
        root.style.setProperty('--secondary', '#ccc')
        flag = 0
    }
});