const fs = require('fs/promises')

fs.readFile('./archivo1b.txt')
  .then(datos => {
    console.log(datos.toString())
  })
  .catch(error => {
    console.log(error)
  })

  fs.readdir('./')
  .then(archivos => {
    for (let archivo of archivos) {
      console.log(archivo)
    }
  })
  .catch(error => {
    console.log(error)
  })

console.log('última línea del programa')