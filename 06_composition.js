/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 tableaux passés en paramètres
 * 
 * ex: [1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]
 * 
 * contrainte: 
 *  - ne pas utiliser la méthode concat, map, merge, push
 *  - for, foreach, while, do while sont interdits
 */
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
let concat = [...arr1,...arr2]
console.log(concat);

/**
 * utiliser l'opérateur de composition ... afin d'ajouter un élément à un tableau
 * 
 * ex: [1, 2, 3], 4 => [1, 2, 3, 4]
 * 
 * contrainte:
 * - ne pas utiliser la méthode push
 */
arr3 = [1, 2, 3];
const1 = 4;
const push = arr3.push(const1);
console.log(arr3);

/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 objets passés en paramètres
 * 
 * ex: {a: 1, b: 2}, {c: 3, d: 4} => {a: 1, b: 2, c: 3, d: 4}
 */
arr4 = {a: 1, b: 2};
arr5 = {c: 3, d: 4};
const merge = {...arr4,...arr5}
console.log(merge);

/**
 * utiliser l'opérateur de composition ... afin de modifier la propriété name de l'objet
 * 
 * ex: {name: 'toto'}, 'titi' => {name: 'titi'}
 * 
 * contrainte:
 *  - interdiction d'utiliser l'opérateur d'affectation "="
 */
arr6 = {name: 'toto'};
const setName = {...arr6,name: 'titi'};
console.log(setName);

// astuce: {...obj} crée une copie de l'objet, c'est un des principes de l'immutabilité et évite les problèmes de référence
module.exports = {concat, push, merge, setName}