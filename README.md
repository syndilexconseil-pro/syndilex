# Site SYNDILEX

Site statique HTML5 / CSS3 / JavaScript léger, sans dépendance, prêt à être
publié gratuitement sur GitHub Pages avec le domaine syndilex.fr.

**Deux guides à lire en priorité :**
- `HOSTING-GUIDE.md` — mise en ligne gratuite, domaine, HTTPS, activation du formulaire.
- `EDITION-GUIDE.md` — comment modifier vous-même textes, coordonnées, images après publication.

## Structure

```
index.html                Accueil
employeurs.html            Rubrique Employeurs
salaries.html               Rubrique Salariés
representants.html          Rubrique Représentants du personnel
particuliers.html           Rubrique Particuliers
a-propos.html                À propos
contact.html                  Formulaire de contact
mentions-legales.html          Mentions légales (informations officielles SYNDILEX)
confidentialite.html            Politique de confidentialité
cookies.html                     Gestion des cookies
css/style.css                     Feuille de style unique
js/config.js                       SOURCE UNIQUE des coordonnées (e-mail, téléphone, domaine)
js/script.js                        Menu mobile, formulaire, anti-spam, bandeau cookies
CNAME                                Domaine personnalisé GitHub Pages (syndilex.fr)
.nojekyll                             Désactive le traitement Jekyll (site 100 % statique)
robots.txt / sitemap.xml              Référencement
config.example.txt                     Récapitulatif des coordonnées (miroir lisible de js/config.js)
```

## Identité de l'entreprise (déjà intégrée)

- Nom commercial : SYNDILEX
- Exploitant : Patrick BERGAMINI, entrepreneur individuel
- SIREN : 940 742 208 — SIRET : 940 742 208 00017
- Adresse : 29 Bis rue de la République, 59269 ARTRES, France
- E-mail : contact@syndilex.fr — Téléphone : 06 83 27 36 95
- Site : https://syndilex.fr

Toutes ces informations figurent dans `mentions-legales.html`. Pour modifier
l'e-mail ou le téléphone partout sur le site en une seule fois, voir
`EDITION-GUIDE.md` (section 2) : tout part de `js/config.js`.

## Formulaire de contact

Relié à [FormSubmit](https://formsubmit.co) : envoie chaque demande à
`contact@syndilex.fr`, sans backend à héberger. Le champ e-mail du
formulaire est nommé `email` pour que FormSubmit configure automatiquement
la réponse directe (`_replyto`) vers l'expéditeur.

**Action à faire une seule fois, une fois le site en ligne :** cliquer sur le
lien reçu par e-mail lors du tout premier envoi réel (voir `HOSTING-GUIDE.md`,
étape 7). En cas d'échec d'envoi, le formulaire affiche automatiquement une
solution de secours (e-mail et téléphone directs).

## Anti-spam

Le formulaire combine un champ « honeypot » invisible et une question de
vérification générée aléatoirement — aucun service tiers payant requis.

## Référencement

Chaque page dispose d'un `<title>`, d'une `meta description`, d'une hiérarchie
de titres H1/H2/H3, d'Open Graph, d'une URL propre et d'une balise canonique.
`sitemap.xml` et `robots.txt` sont prêts à l'emploi pour `https://syndilex.fr`.

## Sécurité

Aucun mot de passe, clé d'API ou information personnelle sensible n'est
présent dans le code. L'administration du site repose uniquement sur votre
compte GitHub personnel (voir `HOSTING-GUIDE.md`).
