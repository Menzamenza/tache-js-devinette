

// generer un nombre aléatoire
const min = 10;
const max = 100;
const random = Math.floor(Math.random() * (max - min)) + min;
console.log(random);
let essaiMax = 10;

document.getElementById('nbreEssai').innerText =essaiMax
function decremente() {
    essaiMax -= 1;
}

// ecouteur d'events sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let nbreMis = document.getElementById('nbreEntre').value;
    console.log(nbreMis);

    for (let essai = 1; essai <= essaiMax; essai++) { // Utiliser essaiMax comme condition de la boucle
        if (nbreMis == random) {
            document.getElementById('result').innerText = "BRAVOOOOOOOO! Vous avez bien deviné ❤️ ";
            break;
        } else if (nbreMis < random) {
            document.getElementById('result').innerText = "Non wsh, le nombre est plus grand 🔼";
            console.log(essaiMax);
        } else if (nbreMis > random) {
            document.getElementById('result').innerText = "Masta, le nombre est plus petit mdrr!🔽 ";
        } else {
            document.getElementById('result').innerText = "Veuillez entrer un nombre valide";
        }
    }
    decremente();
    document.getElementById('nbreEssai').innerText =essaiMax
});

