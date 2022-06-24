// Defining vars

const screenArea = document.querySelector('#interface');
const keypadBtns = document.querySelector('body');
const checkBalanceBtn = document.getElementById('checkBalance');
const accessAccountBtn = document.getElementById('accessAccount');
const depositBtn = document.getElementById('deposit');
const withdrawBtn = document.getElementById('withdraw');
const allButtons = document.querySelectorAll('.btn');

let atmStatus = '';
let hiddenNip = '';
let actualNip = '';

/*-------------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', ()=>{
    welcome(); //calling welcome function
})
/*-------------------------------------------------------------------------------------------------*/
function welcome(){ //displaying welcome screen
    localStorage.setItem('atmStatus', 'welcome');
    atmStatus = localStorage.getItem('atmStatus');

    allButtons.forEach(button => {
        button.disabled=true;
    })
    //disabling non required buttons
    document.getElementById('one').disabled=false;
    document.getElementById('two').disabled=false;
    document.getElementById('three').disabled=false;

    const welcome = document.createElement('div');
    welcome.id = 'welcome';
    welcome.innerHTML = `
        <p class="text-center text-white fs-5">Choose an account <br>1.- ${accounts[0].name} <br>2.- ${accounts[1].name}<br>3- ${accounts[2].name}</p>
    `
    screenArea.appendChild(welcome);

}

/*-------------------------------------------------------------------------------------------------*/
function clearScreen(){ //clear screen to avoid appending elements
    screenArea.innerHTML = '';
    while(screenArea.firstChild){screenArea.firstChild.remove()}
    
}

/*-------------------------------------------------------------------------------------------------*/
function login(){ 

    allButtons.forEach(button => {
        //disabling operations buttons
        if(button.id != 'deposit' && button.id != 'checkBalance' && button.id != 'withdraw')
        {button.disabled=false;}
    })

    let nip = document.getElementById('nip'); //returning nip id to draw '*' symbol
    return nip;
}

/*-------------------------------------------------------------------------------------------------*/
function displayAccount(validAccount){
    //asking the user to choose an operation
    const currentAccount = document.createElement('div');
    currentAccount.id = 'loggedAccount';
    currentAccount.classList.add('d-flex', 'justify-content-center', 'flex-column', 'align-items-center');
    currentAccount.innerHTML = `
        <h1 class="text-white">Welcome</h1>
        <p class="text-center text-white fs-4">${validAccount.name}, choose an operation</p>
        `
    screenArea.appendChild(currentAccount);

    document.getElementById('checkBalance').disabled = false;
    document.getElementById('withdraw').disabled = false;
    document.getElementById('deposit').disabled = false;
}

/*-------------------------------------------------------------------------------------------------*/
function enableOperations(){ //once user is logged, operations buttons are enabled
    document.getElementById('deposit').disabled=false;
    document.getElementById('checkBalance').disabled=false;
    document.getElementById('withdraw').disabled=false;
}

/*-------------------------------------------------------------------------------------------------*/

function checkBalance(loggedAccount){ //checking user's balance
    const checkBalance = document.createElement('div');
    checkBalance.classList.add('d-flex', 'justify-content-center', 'flex-column', 'align-items-center');
    checkBalance.innerHTML = `
        <p class="text-center text-white fs-3"> Your balance is ${JSON.parse(localStorage.getItem(localStorage.getItem('nameAccount'))).balance}
        `
    screenArea.appendChild(checkBalance);
}
/*-------------------------------------------------------------------------------------------------*/

function deposit(){ //displaying deposit information
    const loggedAccount = accounts[localStorage.getItem('desiredAccount')];
    const currentBalance = JSON.parse(localStorage.getItem(loggedAccount.name)).balance

    if(currentBalance < 990){
        //display instructions when deposit is valid
        const validDeposit = document.createElement('div');
        validDeposit.classList.add('d-flex', 'justify-content-center', 'flex-column', 'align-items-center');
        validDeposit.innerHTML = `
            <p class="text-center fs-3 text-white">The maximum amount you can deposit is</p>
            <p class="text-center fs-3 text-white">${990-currentBalance}</p>
            <div class = "deposit text-center fs-4"></div> 
        `
        screenArea.appendChild(validDeposit);
    }
    else{//display instructions when deposit is invalid
        const invalidDeposit = document.createElement('div');
        invalidDeposit.classList.add('d-flex', 'justify-content-center', 'flex-column', 'align-items-center');
        invalidDeposit.innerHTML = `
            <p class="text-center fs-3 text-white">You cannot exceed 990 in your balance</p>
        `
        screenArea.appendChild(invalidDeposit);
    }
    
}
/*-------------------------------------------------------------------------------------------------*/
function withdraw(){
    const loggedAccount = accounts[localStorage.getItem('desiredAccount')];
    const currentBalance = JSON.parse(localStorage.getItem(loggedAccount.name)).balance
    
    if(currentBalance > 10){ //display instructions when withdrawal is valid
        const validWithdraw = document.createElement('div');
        validWithdraw.classList.add('d-flex', 'justify-content-center', 'flex-column', 'align-items-center');
        validWithdraw.innerHTML = `
            <p class="text-center text-white fs-3">The maximum amount you can withdraw is</p>
            <p class="text-center text-white fs-3">${currentBalance - 10}</p>
            <div class = "withdraw text-center fs-4"></div> 
        `
        screenArea.appendChild(validWithdraw);
    }
    else{//display instructions when withdrawal is invalid
        const invalidWithdraw = document.createElement('div');
        invalidWithdraw.classList.add('d-flex', 'justify-content-center', 'flex-column', 'align-items-center');
        invalidWithdraw.innerHTML = `
            <p class="text-center fs-3 text-white">Your account's minimum balace must be 10</p>
        `
        screenArea.appendChild(invalidWithdraw);
    }
}

/*-------------------------------------------------------------------------------------------------*/
keypadBtns.addEventListener('click', (e)=>{ //main event handler
    
    atmStatus = localStorage.getItem('atmStatus'); //save current account
    const value = e.target.value;  //read current button press
    
    if(atmStatus == 'welcome' && value != undefined){ //screen when user enters NIP
        
        const account = accounts[value-1];
        localStorage.setItem('desiredAccount', value-1);
        localStorage.setItem('nameAccount', account.name)
        
        if(localStorage.getItem(account.name) == null) {
            localStorage.setItem(account.name, JSON.stringify(account));
        }

        const currentAccount = document.createElement('div');
        currentAccount.id = 'currentAccount';
        currentAccount.classList.add('d-flex', 'justify-content-center', 'flex-column', 'align-items-center');
        currentAccount.innerHTML = `
            <p class="text-center text-white fs-5">${accounts[value-1].name} enter your NIP</p>
            <div id="nip" class="text-center fs-3"></div> 
        `

        localStorage.setItem('atmStatus', 'login');
        //atmStatus = localStorage.getItem('atmStatus');

        clearScreen();
        screenArea.appendChild(currentAccount);
        hiddenNip = login();
    }
/////////////////////////////////////////////////////////////////////////////////////////
    else if(atmStatus == 'login'){ // validates NIP input to log user

        if(value != 'cancel' && value != 'clear' && value != 'enter' && hiddenNip.textContent != '****' && e.target.classList.value.includes('nmbr')){
            hiddenNip.textContent += '*';
            actualNip += value;
        }        
        else if(value == 'clear'){ //clears input
            hiddenNip.textContent = '';
            actualNip = '';
        }
        else if(value == 'cancel'){ //cancels operation and goes to main screen
            hiddenNip.textContent = '';
            actualNip = '';
            clearScreen();
            welcome();
        }
        else if(hiddenNip.textContent == '****' && value == 'enter'){
           
            const desiredAccount = accounts[localStorage.getItem('desiredAccount')];

            if(desiredAccount.NIP == actualNip){ //user enters valid NIP
                localStorage.setItem('atmStatus', 'logged'); //updating ATM STATE
                //atmStatus = localStorage.getItem('atmStatus')
                hiddenNip.textContent = '';
                actualNip = '';
                clearScreen();
                displayAccount(desiredAccount);
                enableOperations();
            }
            else{ //user enters invalid NIP
                swal("Enter the right NIP",'','error');
                hiddenNip.textContent = '';
                actualNip = '';

            }
        }
    }
//////////////////////////////////////////////////////////////////////////////////////////////
    else if(atmStatus == 'logged'){ //once user is logged, it can perform operations
        if(value == 'checkBalance'){ //checking balance
            const loggedAccount = accounts[localStorage.getItem('desiredAccount')];
            
            clearScreen();
            checkBalance(loggedAccount);
        }

        else if(value == 'deposit'){ //depositing
            
            document.getElementById('checkBalance').disabled = true;
            document.getElementById('withdraw').disabled = true;
            localStorage.setItem('atmStatus', 'deposit'); //updating ATM STATE

            clearScreen();
            deposit();
            
        }

        else if(value == 'withdraw'){

            document.getElementById('checkBalance').disabled = true;
            document.getElementById('deposit').disabled = true;
            localStorage.setItem('atmStatus', 'withdraw'); //updating ATM STATE

            clearScreen();
            withdraw();
        }

        else if(value == 'cancel'){
            localStorage.setItem('atmStatus', 'login');
            clearScreen();
            welcome();
            
        }
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    else if(atmStatus == 'deposit'){
        let amountToDeposit = document.querySelector('.deposit');

        if(e.target.classList.value.includes('nmbr')){ //amout field updated if a number is received
            if(amountToDeposit.textContent.length < 3){
                amountToDeposit.textContent += value
            }
        }

        else if(value == 'clear'){
            amountToDeposit.textContent = ''
        }

        else if (value == 'cancel'){ //cancel triggers previous STATE
            localStorage.setItem('atmStatus', 'logged');
            clearScreen();
            displayAccount( accounts[localStorage.getItem('desiredAccount')]);
        }

        else if(value == 'enter'){// when user hits enter button
            //getting current account data
            const loggedAccount = accounts[localStorage.getItem('desiredAccount')];
            const currentBalance = JSON.parse(localStorage.getItem(loggedAccount.name)).balance
    
            //validating if deposit does not exceeds allowed amount
            if(amountToDeposit.textContent != '' && Number(amountToDeposit.textContent) <= (990 - currentBalance)){
                
                //validating if user enters or not 0 as amount to deposit
                if(amountToDeposit.textContent != '0' && amountToDeposit.textContent != '00' && amountToDeposit.textContent != '000'){
                    
                    accountToUpdate = accounts[localStorage.getItem('desiredAccount')];
                    accountToUpdate.balance += Number(amountToDeposit.textContent);
                    localStorage.setItem(accountToUpdate.name, JSON.stringify(accountToUpdate));
                    swal(`Deposit of ${Number(amountToDeposit.textContent)} was made`,'','success');
    
                    localStorage.setItem('atmStatus', 'logged');
                    clearScreen();
                    displayAccount( accounts[localStorage.getItem('desiredAccount')]);
                }
                else{
                    swal('Amount to deposit is 0, no deposit will be made','','info');
                    amountToDeposit.textContent = ''
                }
            }
            else{
                swal('Enter a valid amount','','error');
                amountToDeposit.textContent = ''
            }
        }
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
else if(atmStatus == 'withdraw'){
    let amountToWithdraw = document.querySelector('.withdraw');

    if(e.target.classList.value.includes('nmbr')){
        if(amountToWithdraw.textContent.length < 3){
            amountToWithdraw.textContent += value
        }
    }

    else if(value == 'clear'){
        amountToWithdraw.textContent = ''
    }

    else if (value == 'cancel'){
        localStorage.setItem('atmStatus', 'logged');
        clearScreen();
        displayAccount( accounts[localStorage.getItem('desiredAccount')]);
    }

    else if(value == 'enter'){
        
        const loggedAccount = accounts[localStorage.getItem('desiredAccount')];
        const currentBalance = JSON.parse(localStorage.getItem(loggedAccount.name)).balance
        
        if(amountToWithdraw.textContent != '' && (currentBalance - Number(amountToWithdraw.textContent) >= 10)){
            
            if(amountToWithdraw.textContent != '0' && amountToWithdraw.textContent != '00' && amountToWithdraw.textContent != '000'){
                
                accountToUpdate = accounts[localStorage.getItem('desiredAccount')];
                accountToUpdate.balance -= Number(amountToWithdraw.textContent);
                localStorage.setItem(accountToUpdate.name, JSON.stringify(accountToUpdate));
                swal(`Withdrawal of ${Number(amountToWithdraw.textContent)} was made`, '','success');

                localStorage.setItem('atmStatus', 'logged');
                clearScreen();
                displayAccount( accounts[localStorage.getItem('desiredAccount')]);
            }
            else{
                swal('Withdrawal will be 0','','info');
                amountToWithdraw.textContent = ''
            }
        }
        else{
            swal('Enter a valid amount','','error');
            amountToWithdraw.textContent = ''
        }
    }
}

})

/*-------------------------------------------------------------------------------------------------*/
