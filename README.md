Ce projet est une application web de site de petites annonces créée avec React. Elle comporte trois pages principales :


La page Create : Cette page permet de créer une annonce.

 Vous pouvez remplir les champs demandés et cliquer sur le bouton Enregistrer pour créer une nouvelle annonce.
 

La page Home : Cette page est la page principale qui affiche toutes les annonces situées dans la base de données MongoDB par le biais de votre API REST.


La page Job : Cette page permet d'afficher le descriptif de l'annonce sur laquelle vous avez cliqué.



Problème actuel:

Il y a un problème dans le code de l'application : si vous cliquez sur n'importe quelle annonce, cela affiche toujours la première annonce.

 En conséquence, la fonction Update et la fonction Recherche ne fonctionnent pas car l'ID n'est pas correct.
 
 

Fonctionnalités:

Le bouton Delete permet de supprimer l'annonce sur laquelle vous avez cliqué et de rafraîchir la page une fois la suppression effectuée.

Le bouton Création d'annonces permet de se rendre sur la page Create pour créer une nouvelle annonce. Remplissez les champs. La date est automatiquement indiquée, le logo sera généré .

Une fois le bouton ENREGISTRER cliqué il faut revenir en arrière et actualiser la page principale pour que l'annonce apparaisse.
Le bouton Load More fonctionne correctement et permet d'afficher 12 annonces supplémentaires.


Pour utiliser ce repo :

Clonez ce repo sur votre machine locale

Installez les dépendances en tapant npm install dans votre terminal

Lancez l'application en tapant npm start dans votre terminal

Vous serez automatiquement dirigé sur http://localhost:3000 pour utiliser l'application

Remarques

Lancez en premier mon API REST (job-router-api) pour que cette application fonctionne correctement.


Rappel:N'oubliez pas de rafraîchir la page principale pour voir les nouvelles annonces lorsque vous en créez une.
