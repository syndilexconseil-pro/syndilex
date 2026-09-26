# Modifier le site vous-même — Guide simple (EDITION-GUIDE)

Vous êtes le seul administrateur du site. Il n'y a ni mot de passe caché dans
le code, ni compte tiers à payer : la seule « clé » est votre propre compte
GitHub (gratuit), protégé par votre propre mot de passe et, idéalement, une
double authentification que vous activez vous-même.

Le site est un ensemble de fichiers texte (HTML/CSS/JS) très lisibles. Vous
n'avez rien à installer sur votre ordinateur : toute l'édition se fait dans
votre navigateur, directement sur github.com.

## 1. Modifier un texte, un titre, une prestation…

1. Allez sur la page de votre dépôt (repository) sur github.com.
2. Cliquez sur le fichier à modifier — par exemple `employeurs.html` pour la
   page Employeurs, `index.html` pour l'accueil, `contact.html` pour la page
   Contact, etc. Chaque page du site correspond à un seul fichier du même nom.
3. Cliquez sur l'icône crayon (« Edit this file ») en haut à droite du fichier.
4. Repérez le texte à changer — le contenu visible du site est écrit en clair
   entre des balises comme `<h2>...</h2>` (un titre) ou `<p>...</p>` (un
   paragraphe). Modifiez uniquement le texte ; ne touchez pas aux mots entre
   `< >`.
5. En bas de page, ajoutez une courte description (ex. « Mise à jour du texte
   Employeurs ») et cliquez sur **Commit changes**.
6. Le site se met à jour automatiquement en 1 à 2 minutes, sans aucune autre
   action de votre part.

Vous pouvez modifier de cette façon : les textes, titres, sous-titres,
listes de prestations, boutons, liens, mentions légales
(`mentions-legales.html`), politique de confidentialité
(`confidentialite.html`) et pied de page (bloc `<footer>`, présent en bas de
chaque fichier `.html`).

### Ajouter un tarif

Aucun tarif n'est actuellement affiché sur le site (conformément au cahier
des charges initial). Pour en ajouter un, insérez simplement une phrase ou un
`<p>` à l'endroit voulu, par exemple dans une carte de prestation :
`<p>À partir de 90 € HT</p>`.

## 2. Modifier l'e-mail (un seul endroit) / réactiver le téléphone

Toutes les coordonnées affichées sur le site (pied de page, page Contact,
mentions légales, adresse de réception du formulaire) proviennent d'un seul
fichier : **`js/config.js`**.

1. Ouvrez `js/config.js` sur github.com et cliquez sur le crayon.
2. Modifiez les valeurs entre guillemets :
   ```js
   window.SYNDILEX_CONTACT = {
     email: "contact@syndilex.fr",
     phoneDisplay: "06 83 27 36 95",
     phoneHref: "+33683273695",
     phoneEnabled: false,
     site: "https://syndilex.fr"
   };
   ```
3. Commit changes. Toutes les pages affichent désormais la nouvelle valeur,
   y compris l'adresse de réception du formulaire de contact.

Le téléphone est masqué par défaut sur tout le site (SYNDILEX se présente
avec l'e-mail comme contact principal). Pour le réafficher sur la page
Contact, passez simplement `phoneEnabled` à `true` — aucune autre
modification n'est nécessaire.

Exception : le champ `action` du formulaire, tout en haut de `contact.html`
(`action="https://formsubmit.co/..."`), garde l'ancienne adresse en secours
si jamais JavaScript ne s'exécute pas chez un visiteur. Si vous changez
l'e-mail, il est recommandé de mettre aussi à jour cette ligne dans
`contact.html` pour une cohérence totale (facultatif mais conseillé).

## 3. Modifier une image ou le logo

Le logo officiel SYNDILEX (avec la mention « Conseil • Accompagnement •
Assistance ») est intégré au site dans `images/logo-syndilex.png` et
s'affiche dans l'en-tête et le pied de page de chaque page.

Pour le remplacer par une nouvelle version plus tard :
1. Dans le dépôt, ouvrez le dossier `images/`, cliquez sur `logo-syndilex.png`.
2. Cliquez sur l'icône crayon, puis en général il faudra plutôt utiliser
   **Add file → Upload files** et déposer le nouveau fichier avec **le même
   nom** (`logo-syndilex.png`) pour qu'il remplace automatiquement l'ancien
   partout sur le site, sans toucher au code.
3. Si le nouveau fichier a un nom différent, dites-le-moi ou modifiez vous-
   même la ligne `<img src="images/logo-syndilex.png" ...>` dans l'en-tête
   (`<header>`) et le pied de page (`<footer>`) de chaque fichier `.html`.

Pour ajouter une photo ailleurs sur le site, la méthode est la même : déposer
le fichier dans `images/`, puis ajouter une balise `<img src="images/mon-
fichier.jpg" alt="description de l'image">` à l'endroit voulu.

## 4. Sauvegarde et récupération complète

Vous n'avez rien à faire de particulier : chaque modification (« commit »)
est automatiquement enregistrée avec :
- la date et l'heure ;
- le contenu exact avant/après ;
- la possibilité de revenir en arrière à tout moment (onglet **History** de
  chaque fichier, ou **Commits** du dépôt).

Pour obtenir une copie complète du site sur votre ordinateur à tout moment :
sur la page du dépôt, bouton vert **Code → Download ZIP**.

Si vous souhaitez un jour quitter GitHub Pages, cette copie ZIP fonctionne
telle quelle sur n'importe quel hébergeur capable de servir des fichiers
HTML/CSS/JS statiques (il suffit d'y déposer les fichiers). Le seul fichier
propre à GitHub Pages est `CNAME` (qui indique le domaine personnalisé) ; les
autres hébergeurs ont leur propre méthode, généralement plus simple, pour
associer un nom de domaine.

## 5. Aller plus loin : une interface graphique (facultatif)

Ce qui précède est la solution la plus simple et 100 % gratuite : éditer le
texte directement dans l'éditeur de GitHub. Si un jour vous préférez une
véritable interface graphique façon « formulaire », avec des champs à
remplir plutôt que du texte HTML, il existe une solution gratuite et open
source appelée **Decap CMS**, qui se connecte à votre dépôt GitHub. Sa mise
en place demande une petite passerelle technique supplémentaire (encore
gratuite, mais à configurer une fois). Ce n'est pas fait à ce stade pour
éviter d'ajouter de la complexité sans que vous en ayez besoin — dites-le moi
si vous voulez que je la mette en place.
