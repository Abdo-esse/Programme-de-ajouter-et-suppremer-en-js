/*---------------------definition des variables--------------------- */
let input = document.querySelector('.input')
let ajouter = document.querySelector('.ajout')
let delet = document.querySelector('.delet')
let affiche = document.querySelector('.p')
let span = document.querySelector('.span')
let suppr = document.querySelector('.suppr')
let tableau = []
/*---------------------definition du fonction d'ajout--------------------- */
ajouter.onclick= function(e){
    tableau.push(input.value)
     affiche.innerHTML=tableau
    input.value = ""
    }
    /*---------------------definition du fonction de suprumer--------------------- */
    delet.onclick= function(ev){
         if (tableau.includes(input.value)) {
          let recherch = tableau.indexOf(input.value)
          tableau.splice(recherch,1)
          affiche.innerHTML=tableau
          input.value = ""
        }else{
           span.innerHTML='makaynax'
        }
     }