/*
OK 1 - Capturar input weight
OK 2 - Capturar input height
OK 3 - Capturar form
OK 4 - Capturar botão calcular IMC
OK 5 - Criar função que vai calcular o IMC
OK 6 - Capturar o popup
OK 7 - Capturar o X que vai fechar o popup
OK 8 - Criar o event listener que vai receber o resultado do cálculo
9 - Criar o evento listener que vai fechar o popup quando clicar no x
OK 10 - Capturar a mensagem de error.
11 - Criar o event listener que vai mostrar a mensagem de erro se o usuário digitar algo que não seja número.

Desafio extra - Verificar como tratar o dado para que o input possa receber um número float

*/

const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')
const form = document.querySelector('form')
const calculateBMIButton = document.querySelector('.calculate-button')
const popup = document.querySelector('.popup-wrapper')
const BMIResultMessage = document.querySelector('.popup-result')
const closePopupButton = document.querySelector('.popup-content button')
const errorAlert = document.querySelector('.error-alert')

// when you have a form, you always add the event listener to the form tag, not the button
form.addEventListener('submit', e => {
  // Prevent loading
  e.preventDefault()

  // Capture height and weight values
  const height = inputHeight.value
  const weight = inputWeight.value

  // Validate values - if not a number, show alert error and stop
  const showAlertError =
    notANumber(height) === true || notANumber(weight) === true

  if (showAlertError) {
    errorAlert.classList.add('open')
    return
  }

  // If values are numbers, calculate BMI
  const result = calculateBMI(height, weight)

  // After calculating BMI, show results
  showBMI(result)
})

// Calculating BMI
function calculateBMI(height, weight) {
  BMI = (weight / ((height / 100) * (height / 100))).toFixed(1)
  return BMI
}

// Validating input data
function notANumber(value) {
  return isNaN(value) || value === ''
}

// Showing popup screen with BMI result
function showBMI(value) {
  const BMI = value

  popup.classList.add('open')
  BMIResultMessage.textContent = `Seu IMC é ${BMI}.`
}

// Closing popup when clicking on X
closePopupButton.addEventListener('click', closePopup)

function closePopup() {
  popup.classList.remove('open')
}

// Clossing error alert message quem starting to type again on input
inputHeight.addEventListener('input', closeErrorAlert)
inputWeight.addEventListener('input', closeErrorAlert)

function closeErrorAlert() {
  errorAlert.classList.remove('open')
}

// Closing popup with Esc
window.addEventListener('keydown', closePopupWithEsc)

function closePopupWithEsc(event) {
  if (event.key === 'Escape') {
    closePopup()
  }
}

/* Calculating BMI when pressing button with Enter key */
window.addEventListener('keydown', calculateBMIWithEnter)

function calculateBMIWithEnter(e) {
  if (e.key === 'Enter') {
    // Prevent loading
    e.preventDefault()

    // Capture height and weight values
    const height = inputHeight.value
    const weight = inputWeight.value

    // Validate values - if not a number, show alert error and stop
    const showAlertError =
      notANumber(height) === true || notANumber(weight) === true

    if (showAlertError) {
      errorAlert.classList.add('open')
      return
    }

    // If values are numbers, calculate BMI
    const result = calculateBMI(height, weight)

    // After calculating BMI, show results
    showBMI(result)
  }
}
