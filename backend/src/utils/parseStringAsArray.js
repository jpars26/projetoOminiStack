 //Corta a string toda vez que chegar na virgula
module.exports = function parseStringAsArray(arrayAsString){

    return arrayAsString.split(',').map(tech => tech.trim()) 
}