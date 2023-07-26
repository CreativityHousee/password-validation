let passInput = document.getElementById('passInput')



function showStrengthBar(strength){
    let strengthClasess = ['veryweak','weak','normal','good','verygood'];
    let strengthBar = document.getElementById('strengthBar')
    let strengthStatus = document.getElementById('strengthStatus')
    strengthBar.className = "";
    strengthBar.classList.add(strengthClasess[strength])
    strengthStatus.innerText = strengthClasess[strength]
   
    
}
passInput.addEventListener('keyup',(e) => {
    let strength = 0;
    let specialCharactersPattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
    let capitalLettersPattern = /[A-Z]/
    let lowercaseLettersPattern = /[a-z]/
    if (specialCharactersPattern.test(e.target.value)){
        strength++
    }
    if(capitalLettersPattern.test(e.target.value)){
        strength++;
    }
   
    if(lowercaseLettersPattern.test(e.target.value)){
        strength++;
    }
    if(e.target.value.length >= 8){
        strength++
    }
    if(e.target.value.length <= 0){
        strength = 0;
    }

    showStrengthBar(strength)
   
})