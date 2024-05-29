// generer un nombre aléatoire
const min = 10;
const max = 100;
const random = Math.floor(Math.random() * (max - min)) + min;
console.log(random);
let essaiMax = 10;

document.getElementById('nbreEssai').innerText = essaiMax;

function decremente() {
    essaiMax -= 1;
    document.getElementById('nbreEssai').innerText = essaiMax;
    if (essaiMax === 0) {
        document.getElementById('envoyer').disabled = true;
        document.getElementById('result').innerText = "Le nombre d'essai est épuisé MDR 😂";
        
    }
}

// ecouteur d'events sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let nbreMis = parseInt(document.getElementById('nbreEntre').value);
    console.log(nbreMis);
    
    for (let essai = 1; essai <= essaiMax; essai++) { // Utiliser essaiMax comme condition de la boucle
        if (nbreMis === random) {
            document.getElementById('result').innerText = "BRAVOOOOOOOO! Vous avez bien deviné ❤️ ";
            document.getElementById('envoyer').disabled = true;
            break;
        } else if (nbreMis < random) {
            document.getElementById('result').innerText = "Non wsh, le nombre est plus grand 🔼";
            console.log(essaiMax);
        } else if (nbreMis > random) {
            document.getElementById('result').innerText = "Masta, le nombre est plus petit mdrr!🔽 ";
        }else {
            document.getElementById('result').innerText = "Veuillez entrer un nombre valide";
        }
    }
    decremente();
});
