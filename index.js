const form = document.getElementById('form')
const nif = document.getElementById('nif')
const error = document.getElementById('error')

form.addEventListener('submit', handleSubmit)
form.addEventListener('reset', e => { error.textContent = '' })

/**
 * Handles the form submit event and run the different validations.
 * @param {SubmitEvent} e
 */
function handleSubmit (e) {
  e.preventDefault()

  error.textContent = ''
  const nifValue = nif.value

  if (isBlank(nifValue)) {
    error.textContent = 'El NIF no puede estar vacío.'
    return
  }

  if (!isValidDNIFormat(nifValue)) {
    error.textContent = 'El NIF debe tener 8 dígitos seguidos de una letra mayúscula.'
    return
  }

  if (!isValidDNI(nifValue)) {
    error.textContent = 'La letra del NIF no se corresponde con los dígitos anteriores.'
    return
  }

  form.submit()
}

function isBlank (s) {
  const pattern = /^\W*$/
  return pattern.test(s)
}

function isValidDNIFormat (dni) {
  const pattern = /^\d{8}[A-Z]$/
  return pattern.test(dni)
}

function isValidDNI (dni) {
  const array = 'TRWAGMYFPDXBNJZSQVHLCKE'

  const numbers = dni.substring(0, 8)
  const letter = dni.substring(8).toUpperCase()
  const calculatedNumber = Math.floor(Number(numbers) % 23)

  if (calculatedNumber > 23) {
    return false
  }

  const calculatedLetter = array[calculatedNumber]

  return calculatedLetter === letter
}
