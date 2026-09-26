/* =========================================================
   SYNDILEX — config.js
   SOURCE UNIQUE des coordonnées affichées sur le site.

   Pour changer l'e-mail de contact PARTOUT sur le site (pied de
   page, page Contact, mentions légales, et adresse de réception
   du formulaire), il suffit de modifier "email" ci-dessous puis
   d'enregistrer ce fichier.

   Le téléphone est volontairement désactivé par défaut
   (phoneEnabled: false) : SYNDILEX se présente avec l'e-mail
   comme moyen de contact principal. Pour réactiver l'affichage
   du téléphone (page Contact uniquement), passez phoneEnabled à
   true — aucune autre modification n'est nécessaire, les blocs
   correspondants sont déjà présents dans contact.html et
   s'afficheront automatiquement.

   Ne rien modifier d'autre : ce fichier ne contient que des
   coordonnées, aucune information sensible ni mot de passe.
   ========================================================= */
window.SYNDILEX_CONTACT = {
  email: "contact@syndilex.fr",
  phoneDisplay: "06 83 27 36 95",
  phoneHref: "+33683273695",
  phoneEnabled: false,
  site: "https://syndilex.fr"
};
