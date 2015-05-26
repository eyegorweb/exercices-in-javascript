var chunk = function (arr, len) {

  var chunks = [],
    i = 0,
    n = arr.length;

  while (i < n) {
    console.log(i); // i prend la valeur définie dans le 2nd paramètre de la méthode slice déclarée ci-dessous
    console.log(arr); // array ne sera jamais vide.
    // La méthode slice n'affecte pas le tableau d'origine, contrairement à la méthode splice.
    // Elle retourne un tableau avec des valeurs contenues dans le tableau originel.
    chunks.push(arr.slice(i, i += len)); // incrémentation de i = i + len. La m
  }

  return chunks;
}

var array1 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

var res1 = chunk(array1, 3);
console.log(array1);
console.log(res1);

document.getElementById("insert1").innerHTML = res1 + "\n";

var chunks = function(array, size) {
  
  var results = [];
  
  while (array.length) {
    // La méthode splice affecte le tableau d'origine. Ici, sa longueur va diminuer de size éléments.
    // Elle retourne un tableau avec des valeurs extraites du tableau originel.
    console.log(array); // array sera vide!!!
    results.push(array.splice(0, size)); // Décrémentation de la longueur de tableau de size éléments.
  }
  
  return results;
};

var array2 = [101, 201, 301, 401, 501, 601, 701, 801, 901, 1001];

var res2 = chunks(array2, 3);

console.log(array2);
console.log(res2);

document.getElementById("insert2").innerHTML = res2 + "\n";