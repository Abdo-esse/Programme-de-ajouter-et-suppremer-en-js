/*---------------------definition des variables--------------------- */
let input = document.querySelector('.input')
let ajouter = document.querySelector('.ajout')
let delet = document.querySelector('.delet')
let affiche = document.querySelector('.p')
let span = document.querySelector('.span')
let suppr = document.querySelector('.suppr')
let tableau = []
/*---------------------definition du variables--------------------- */
ajouter.onclick= function(e){
    tableau.push(input.value)
    
    affiche.innerHTML=tableau
    
    }