//appel Ajax API JC Decaux, Real Time Data, Nantes dans l'appel --> Fetch ?

GET https://api.jcdecaux.com/vls/v1/stations?contract={contract_name}&apiKey={api_key}

// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

function afficher(reponse) {
    console.log(reponse);
}

//fonction AJAX générique
ajaxGet(" https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey={api_key}", afficher);

//retrouver clé d'API associée à mon compte et l'insérer dans api_key