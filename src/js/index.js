class Calculator{
    constructor(display){
        this.display = display;
        this.clear()
    }

    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;

    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currentOperand === "") return
        if(this.previousOperand !== ""){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ""
    }
    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if(isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case '+':
                computation = prev + current
                break;
            case "-":
                computation = prev - current
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current
                break;
            default:
                return;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';

    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]) 
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay;
        if(isNaN(integerDigits)){
            integerDisplay = ""
        } else{
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits:0})
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else{
            return integerDisplay
        }

  
    }

    updateDisplay(){
        this.display.textContent = this.getDisplayNumber(this.currentOperand)

    }
}

const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const deleteBtn = document.querySelector('.delete')
const resetBtn = document.querySelector('.reset')
const equalBtn = document.querySelector('#equal');
const display = document.querySelector('#display')

const calculator = new Calculator(display);

numbers.forEach(btn =>{
    btn.addEventListener('click',()=>{
        calculator.appendNumber(btn.textContent)
        calculator.updateDisplay();
    })
})

operators.forEach(btn =>{
    btn.addEventListener('click',()=>{
        calculator.chooseOperation(btn.textContent)
        calculator.updateDisplay();
    })
})

equalBtn.addEventListener('click',()=>{
    calculator.compute();
    calculator.updateDisplay();
})

resetBtn.addEventListener('click',()=>{
    calculator.clear();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click',()=>{
    calculator.delete();
    calculator.updateDisplay();
})