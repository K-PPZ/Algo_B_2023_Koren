/*
      EXO 1
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir les nombres de 1 a 10 inclus
      Sans espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
 */

let str_exo1 = "";
for (let i = 1; i <= 10; i++) {
    str_exo1 += i;
}
console.log("Exo 1: " + str_exo1);


/*
      EXO 2
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir les nombres de 1 a 10 inclus
      Avec des espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
 */

let str_exo2 = "";
for (let i = 1; i <= 10; i++) {
    str_exo2 += i + " ";
}
console.log("Exo 2: " + str_exo2);


/*
      EXO 3
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir les nombres impaires inférieurs a 100
      Avec des espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
 */

let str_exo3 = "";
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        str_exo3 += i + " ";
    }
}
console.log("Exo 3: " + str_exo3);


/*
      EXO 4
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir la table de multiplication de 7
      Avec des espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
 */


/*
      EXO 5
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir toutes les tables de multiplication
      de 1 a 10
      Avec des espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
 */


/*
      EXO 6
      Construire un nombre en utilisant une boucle
      ce nombre devra être la somme des nombres de 1 a 10
      La fonction doit retourner le résultat
 */


/*
      EXO 7
      Construire un nombre en utilisant une boucle
      ce nombre devra être le factoriel du nombre 10
      La fonction doit retourner le résultat
 */


/*
      EXO 8
      Construire un nombre en utilisant une boucle
      ce nombre devra être la somme des nombres paires de 10 a 30
      La fonction doit retourner le résultat
 */


/*
      EXO 9
      Écrire une fonction qui convertit une temperature de Celsius a Fahrenheit
      La fonction prend un paramètre temperature (en Celsius)
      La fonction doit retourner la température en Fahrenheit
      ex: (30 °C × 9/5) + 32 = 86 °F
 */