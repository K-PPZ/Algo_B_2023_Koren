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

let str_exo4 = "";
for (let i = 0; i <= 10; i++) {
    str_exo4 += 7*i + " ";
}
console.log("Exo 4: " + str_exo4);


/*
      EXO 5
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir toutes les tables de multiplication
      de 1 a 10
      Avec des espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
 */

let str_exo5 = "";
let num_exo5 = 1;
for (let i = 0; i <= 10 && num_exo5 <= 10; i++) {
    str_exo5 += num_exo5 * i + " ";

    if (i == 10) {
        num_exo5 ++;
        i = 0;
    }
}
console.log("Exo 5: " + str_exo5);


/*
      EXO 6
      Construire un nombre en utilisant une boucle
      ce nombre devra être la somme des nombres de 1 a 10
      La fonction doit retourner le résultat
 */

function Exo6 () {
    let num_exo6 = 0;
    for (let i = 1; i <= 10; i++) {
        num_exo6 += i;
    }

    return num_exo6;
}
console.log("Exo 6: " + Exo6());


/*
      EXO 7
      Construire un nombre en utilisant une boucle
      ce nombre devra être le factoriel du nombre 10
      La fonction doit retourner le résultat
 */

function Exo7 () {
    let num_exo7 = 1;
    for (let i = 1; i <= 10; i++) {
        num_exo7 *= i;
    }

    return num_exo7;
}
console.log("Exo 7: " + Exo7());


/*
      EXO 8
      Construire un nombre en utilisant une boucle
      ce nombre devra être la somme des nombres paires de 10 a 30
      La fonction doit retourner le résultat
 */

function Exo8 () {
    let num_exo8 = 0;
    for (let i = 10; i <= 30; i++) {
        if (i % 2 != 0) {
            num_exo8 += i;
        }
    }

    return num_exo8;
}
console.log("Exo 8: " + Exo8());


/*
      EXO 9
      Écrire une fonction qui convertit une temperature de Celsius a Fahrenheit
      La fonction prend un paramètre temperature (en Celsius)
      La fonction doit retourner la température en Fahrenheit
      ex: (30 °C × 9/5) + 32 = 86 °F
 */

function Exo9 (temp) {
    return (temp * 9/5) + 32 + "°F";
}
console.log("Exo 9: " + Exo9(30));


/*
      EXO 10
      Écrire une fonction qui calcule la somme d'un tableau de nombres
      La fonction prend un paramètre numbers qui est un tableau de taille minimum 1
      La fonction doit retourner le résultat
      Vous devez utiliser une boucle (pas de reduce)
 */

function Exo10 (numbers) {
    let num_exo10 = 0;
    for (let i = 0; i < numbers.length; i++) {
        num_exo10 += numbers[i];
    }

    return num_exo10;
}
console.log("Exo 10: " + Exo10([1, 2, 3]));


/*
      EXO 11
      Écrire une fonction qui calcule la moyenne d'un tableau de nombres
      La fonction prend un paramètre numbers qui est un tableau de taille minimum 1
      La fonction doit retourner le résultat
      Vous devez utiliser une boucle (pas de reduce)
 */

function Exo11 (numbers) {
    let num_exo11 = 0;
    for (let i = 0; i < numbers.length; i++) {
        num_exo11 += numbers[i];
    }

    return num_exo11 / numbers.length;
}
console.log("Exo 11: " + Exo11([1, 2, 3, 4]));


/*
      EXO 12
      Écrire une fonction qui prend un tableau de nombres en paramètre (numbers)
      Et retourne un nouveau tableau contenant uniquement les nombres positifs
      La fonction doit retourner le nouveau tableau
      Vous devez utiliser une boucle (pas de filter)
 */

function Exo12 (numbers) {
    let tab_exo12 = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            tab_exo12.push(numbers[i]);
        }
    }

    return tab_exo12;
}
console.log("Exo 12: " + Exo12([1, -2, 8, -4, -5]));


/*
      EXO 13
      Écrire une fonction qui prend un tableau de nombres en paramètre (numbers)
      Et retourne le nombre maximum dans ce tableau
      La fonction doit retourner le résultat
 */

function Exo13 (numbers) {
    let num_exo13 = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > num_exo13) {
            num_exo13 = numbers[i];
        }
    }

    return num_exo13;
}
console.log("Exo 13: " + Exo13([1, 5, 3, 7, 4, 2]));


/*
      EXO 14
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir les 10 premiers nombres de la suite
      de fibonacci
      Avec des espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
      Tips: Fibonacci => 0 1 1 2 3 (2+1) 5 (3+2)... n (n-2 + n-1)
 */
// Je n'ai pas compris la suite de Fibonacci.


/*
      EXO 15
      Écrire une fonction qui prend un nombre entier positif en paramètre (number)
      Et retourne la somme des chiffres qui composent ce nombre
      La fonction doit retourner le résultat
 */

function Exo15 (number) {
    let num_exo15 = "";
    let somme = 0;
    for (let i = 0; i < number; i++) {
        num_exo15 += i;
        somme += i;

        if (somme == number) {
            return num_exo15;
        }
    }
}
console.log("Exo 15: " + Exo15(6));


/*
      EXO 16
      Écrire une fonction qui prend un tableau de nombres de taille minimum 2 en
      paramètre (numbers)
      Et retourne le même tableau en inversant le premier et le dernier élément
      La fonction doit retourner le tableau
 */



/*
      EXO 17
      Écrire une fonction qui prend une chaîne de caractères en paramètre (text)
      Et retourne le nombre de caractères spéciaux contenus dans ce texte
      § ! @ # $ % * ( ) _ - = + { } [ ] \ | < > ? / . , ; sont les seuls caractères      spéciaux que vous pourrez trouvez dans le texte
      La fonction doit retourner le résultat
 */


/*
      EXO 18
      Écrire une fonction qui prend une chaîne de caractères en paramètre (text)
      text contient des nombres séparés par des virgules
      la fonction doit calculer la moyenne des nombres présents dans cette chaîne de      caractères
      La fonction doit retourner le résultat
 */
