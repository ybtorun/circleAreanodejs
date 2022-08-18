
// const pi = 3.14
const pi = Math.PI //Pi sayısı tanımladık

let radius = process.argv.slice(2)[0]*1 //console ekranınından girilen değeri number a çevirdik ve yarıçapa atadık

// const area = pi * radius * radius
const area = pi * Math.pow(radius,2) 

// console.log(area)
console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(1)}`); //alan bilgisini yazdırırken virgülden sonra tek rakam kullanarak yazdırdık

