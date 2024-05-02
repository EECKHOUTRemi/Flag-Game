
async function jeu() {
    
    //______________________________________________Récupération de l'API______________________________________________ 
    
    const results = await fetch("https://restcountries.com/v3.1/all")
    const APIpays = await results.json();

    console.log(APIpays);
    
    //______________________________________________Définition du pays aléatoirement______________________________________________ 
    
    let idPaysAlea = Math.floor(Math.random() * 250);
    
    let paysSecret = APIpays[idPaysAlea].translations.fra.common;
    
    let urlDrapeauPaysSecret = APIpays[idPaysAlea].flags.png;

    //______________________________________________Mise à jour de la page HTML______________________________________________
    
    let body = document.querySelector("body");
    body.innerHTML = `
    <div class="container">
    
        <div class="card">
            
            <h1 class="titre">Devinez à quel pays appartient ce drapeau :</h1>
            
            <img src=${urlDrapeauPaysSecret} alt="Drapeau secret" class="drapeau">
            
            <div class="send">

                <input type="text" name="pays" id="chpPays">
                <button id="btnSend" class="button shadow">OK</button>

            </div>

            <button id="btnJsp" class="button shadow">Je ne sais pas</button>

        </div>

    </div>
    
    <script src="script.js"></script>`;

    //______________________________________________Ecoute du bouton______________________________________________ 

    var btnSend = document.getElementById("btnSend");
    var chpPays = document.getElementById("chpPays");
    var btnJsp = document.getElementById("btnJsp");

    btnSend.addEventListener("click", () => {
        if (chpPays.value == paysSecret) {
            alert("Bravo, c'est le bon drapeau !");
            location.reload();
        } else {
            alert("Nul Germain, NUL NUL NUL !");
            chpPays.value = "";
        }
    });

    chpPays.addEventListener("keyup", (touche) => {
        if (touche.key == "Enter") {
            if (chpPays.value == paysSecret) {
                alert("Bravo, c'est le bon drapeau !");
                location.reload();
            } else {
                alert("Ce n'est pas le bon drapeau !");
                chpPays.value = "";
            }
        }
    });

    btnJsp.addEventListener("click", () => {
        location.reload();
        alert("Ce pays était le/la : " + paysSecret);
    });

}
    
jeu();