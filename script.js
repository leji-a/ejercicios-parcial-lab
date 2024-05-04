function MathChallenge(number) {
  let suma = 0;
  for (let i = 1; i <= number; i++) {
    suma += i;
  }
  return suma;
}

function StringChallenge(str) {
  let cantidadConsonantes = 0
  str = str.toLowerCase()
  let consonantes = "bcdfghjklmnpqrstvwxyz"
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (consonantes.includes(char)) {
      cantidadConsonantes++
    }
  }
  return cantidadConsonantes
}

function PasswordChallenge(str) {
  // Verifica que sea menor a 8 y mayor a 30
  if (str.length < 8 && str.length > 30) {
    return false
  }
  // Verifica que tenga mayuscula
  let mayuscula = false
  let mayusculas = "ABCDEFGHIJKLMNOPQRSTVWXYZ"
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(mayusculas)) {
      mayuscula = true
      break
    }
  }
  // Verifica que tenga un numero
  let numero = false
  let numeros = "0123456789"
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(numeros)) {
      numero = true
      break
    }
  }
  // Verifica que tenga un caracter especial
  let caracterEspecial = false
  let caracteresEspeciales = "@#$%^&*()_-+={}[]|:;'\?><.,"
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(caracteresEspeciales)) {
      caracterEspecial = true
      break
    }
  }
  // Verifica que todo siga siendo falso
  if (!mayuscula) { return false }
  if (!numero) { return false }
  if (!caracterEspecial) { return false }

  // Verifica que el input no sea "password"
  if (str.toLowerCase().includes("password")) { return false }
  return true
}

function ArrayChallenge(arr) {
  // Encontrando el mayor, sumando los demás numeros y luego restando el mayor
  let mayor = -1
  let suma = 0
  for (let numero of arr) {
    if (numero > mayor) { mayor = numero }
    suma += numero
  }
  suma -= mayor
  // Verificacion si el array está vacío o son todos los numeros iguales
  if (arr.length === 0 || new Set(arr).size === 1) {
    return false;
  }
  // Verifica que los demás numeros pueden formar una suma para el mayor
  let demasNumeros = new Set(arr)
  demasNumeros.delete(mayor)
  for (let num of demasNumeros) {
    if (demasNumeros.has(suma - num)) {
      return true
    }
  }
  return false
}
