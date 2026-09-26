# Mise en ligne gratuite — GitHub Pages + syndilex.fr (HOSTING-GUIDE)

Aucun paiement n'est nécessaire à aucune étape. GitHub Pages est gratuit pour
ce type de site (dépôt public), sans limite de durée, sans carte bancaire à
enregistrer.

## Étape 1 — Créer votre compte GitHub

1. Allez sur https://github.com/signup et créez un compte à votre nom (ou au
   nom de SYNDILEX). C'est vous, et vous seul, qui détenez ce compte et ses
   identifiants : vous êtes l'administrateur principal.
2. Activez la double authentification dans les paramètres de sécurité du
   compte (recommandé, gratuit).

## Étape 2 — Créer le dépôt (repository)

1. Cliquez sur **New repository**.
2. Nom suggéré : `syndilex-site` (ou ce que vous préférez).
3. Visibilité : **Public** (nécessaire pour la version gratuite de GitHub
   Pages avec domaine personnalisé). Le code d'un site vitrine public n'a
   rien de confidentiel ; aucune donnée personnelle de vos clients n'y
   figure.
4. Cliquez sur **Create repository**.

## Étape 3 — Mettre les fichiers du site en ligne

Pas besoin de logiciel : sur la page du dépôt fraîchement créé, cliquez sur
**uploading an existing file**, puis glissez-déposez **tout le contenu** du
dossier `syndilex/` fourni (fichiers `.html`, dossiers `css/` et `js/`,
`CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`, etc.) — pas le dossier lui
même, son contenu. Validez avec **Commit changes**.

## Étape 4 — Activer GitHub Pages

1. Dans le dépôt : **Settings → Pages**.
2. Source : **Deploy from a branch**.
3. Branch : `main`, dossier `/ (root)`. Enregistrez.
4. GitHub vous donne une première adresse du type
   `https://votre-compte.github.io/syndilex-site/` : vérifiez que le site
   s'affiche correctement à cette adresse avant de continuer.

## Étape 5 — Relier votre domaine syndilex.fr

Le fichier `CNAME` (déjà présent à la racine du site, contenant
`syndilex.fr`) indique à GitHub Pages quel domaine utiliser.

1. Toujours dans **Settings → Pages**, section **Custom domain** : saisissez
   `syndilex.fr` puis **Save** (GitHub détecte automatiquement le fichier
   CNAME si vous ne l'aviez pas déjà fait).
2. Chez le bureau d'enregistrement où vous avez acheté `syndilex.fr` (celui
   où vous gérez ses DNS), ajoutez les enregistrements suivants :

   | Type  | Nom / Hôte | Valeur                  |
   |-------|------------|--------------------------|
   | A     | @          | 185.199.108.153          |
   | A     | @          | 185.199.109.153          |
   | A     | @          | 185.199.110.153          |
   | A     | @          | 185.199.111.153          |
   | CNAME | www        | votre-compte.github.io.  |

   (Le `CNAME www` est facultatif ; il permet à `www.syndilex.fr` de
   fonctionner aussi et de rediriger vers `syndilex.fr`.)

3. La propagation DNS peut prendre de quelques minutes à 24 h. Vous pouvez
   suivre l'état dans **Settings → Pages**, qui affiche « DNS check
   successful » une fois que c'est bon.

Ce domaine reste le vôtre : vous continuez de le payer uniquement à votre
bureau d'enregistrement habituel (registrar), comme aujourd'hui. GitHub ne
facture rien pour son utilisation avec Pages.

## Étape 6 — Activer HTTPS

1. Une fois le DNS validé, revenez dans **Settings → Pages**.
2. Cochez **Enforce HTTPS** (la case n'est disponible qu'une fois le
   certificat émis automatiquement par GitHub, ce qui peut prendre jusqu'à
   quelques heures après la validation DNS).
3. Vérifiez ensuite que `https://syndilex.fr` s'ouvre avec le cadenas actif,
   et que `http://syndilex.fr` redirige automatiquement vers la version
   HTTPS.

**Le site n'est considéré comme terminé qu'une fois cette case cochée et
vérifiée.**

## Étape 7 — Activer le formulaire de contact (FormSubmit)

**Prérequis indispensable :** `contact@syndilex.fr` doit être une boîte mail
réellement active (pas seulement un nom de domaine réservé). Deux façons
d'obtenir cette boîte, gratuitement ou à faible coût :
- **Redirection e-mail gratuite** : la plupart des registrars (OVHcloud,
  Gandi...) offrent une ou plusieurs redirections e-mail gratuites avec le
  domaine — `contact@syndilex.fr` peut ainsi rediriger vers une boîte que
  vous consultez déjà (Gmail, etc.), sans coût supplémentaire.
- **Boîte mail complète** chez votre registrar ou un fournisseur dédié, en
  général quelques euros par mois, si vous voulez aussi pouvoir envoyer des
  e-mails depuis cette adresse.

Tant que `contact@syndilex.fr` n'est pas une boîte active, le formulaire de
contact ne pourra pas être confirmé par FormSubmit (voir ci-dessous) et ne
fonctionnera donc pas.

Lors du tout premier envoi réel depuis `https://syndilex.fr/contact.html`,
FormSubmit envoie un e-mail de confirmation à `contact@syndilex.fr` (objet
proche de « Please confirm your email »). Ouvrez cet e-mail et cliquez une
seule fois sur le lien de confirmation. Ensuite, toutes les demandes du
formulaire arrivent automatiquement dans cette boîte, sans action
supplémentaire.

## Récapitulatif de ce que vous obtenez, gratuitement

- Hébergement : GitHub Pages (gratuit, dépôt public), aucun abonnement.
- Domaine : `syndilex.fr`, déjà le vôtre, simplement pointé vers GitHub Pages.
- HTTPS : certificat gratuit et automatique fourni par GitHub Pages.
- Administration : votre propre compte GitHub, protégé par votre mot de
  passe (+ double authentification si activée). Aucun mot de passe n'est
  écrit dans le code du site.
- Sauvegarde : l'historique complet du dépôt, plus un export ZIP à tout
  moment (voir EDITION-GUIDE.md).
