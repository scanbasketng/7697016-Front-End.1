// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {

    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // On crée l’élément img.
    const imageElement = document.createElement("img");
    // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
    imageElement.src = pieces[i].image;
    numeroElement.src = pieces[i].numéro;
    ppgElement.src = pieces[i].ppg;
    posteElement.src = pieces[i].poste;
    joueuseElement.src = pieces[i].joueuse;
    // Idem pour le nom, le prix et la catégorie...
    
    // On rattache la balise article à la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)

    pieceElement.appendChild(numeroElement);
    // Idem pour le nom, le prix et la catégorie...
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(ppgElement);
    pieceElement.appendChild(joueuseElement);
    pieceElement.appendChild(posteElement);
    

    }