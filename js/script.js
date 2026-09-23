/* =========================================================
   SYNDILEX — script.js
   JavaScript léger : menu mobile, formulaire de contact,
   validation, anti-spam (honeypot + question simple),
   bandeau cookies.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Coordonnées : source unique (js/config.js) ---------- */
  var C = window.SYNDILEX_CONTACT || {
    email: "syndilex.conseil@gmail.com",
    phoneDisplay: "06 83 27 36 95",
    phoneHref: "+33683273695",
    site: "https://syndilex.fr"
  };

  document.querySelectorAll("[data-coord]").forEach(function (el) {
    var kind = el.getAttribute("data-coord");
    if (kind === "email-link") { el.href = "mailto:" + C.email; }
    if (kind === "email-full") { el.href = "mailto:" + C.email; el.textContent = C.email; }
    if (kind === "email-text") { el.textContent = C.email; }
    if (kind === "phone-full") { el.href = "tel:" + C.phoneHref; el.textContent = C.phoneDisplay; }
    if (kind === "phone-text") { el.textContent = C.phoneDisplay; }
    if (kind === "site-text") { el.textContent = C.site.replace(/^https?:\/\//, ""); }
  });

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  var backdrop = document.querySelector(".nav-backdrop");

  function closeNav() {
    if (!nav) return;
    nav.classList.remove("is-open");
    if (backdrop) backdrop.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
  function openNav() {
    if (!nav) return;
    nav.classList.add("is-open");
    if (backdrop) backdrop.classList.add("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.contains("is-open");
      if (isOpen) { closeNav(); } else { openNav(); }
    });
  }
  if (backdrop) backdrop.addEventListener("click", closeNav);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  /* ---------- Formulaire de contact ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    // L'adresse d'envoi provient de js/config.js (source unique des coordonnées).
    form.action = "https://formsubmit.co/" + C.email;

    var statusBox = document.getElementById("form-status");

    // Petite question anti-spam générée dynamiquement (équivalent CAPTCHA léger,
    // sans dépendance externe). Combinée à un champ honeypot invisible.
    var a = Math.floor(Math.random() * 8) + 2;
    var b = Math.floor(Math.random() * 8) + 1;
    var captchaLabel = document.getElementById("captcha-question");
    var captchaAnswer = a + b;
    if (captchaLabel) {
      captchaLabel.textContent = "Combien font " + a + " + " + b + " ? *";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      statusBox.className = "form-status";
      statusBox.textContent = "";

      var honeypot = form.querySelector('input[name="site_web"]');
      if (honeypot && honeypot.value.trim() !== "") {
        // Rempli par un robot : on ignore silencieusement.
        return;
      }

      var required = form.querySelectorAll("[required]");
      var missing = false;
      required.forEach(function (field) {
        if (!field.value || !field.value.toString().trim()) {
          missing = true;
          field.style.borderColor = "#C0392B";
        } else {
          field.style.borderColor = "";
        }
      });

      var captchaField = document.getElementById("captcha-response");
      var captchaOk = captchaField && parseInt(captchaField.value, 10) === captchaAnswer;

      if (missing) {
        statusBox.className = "form-status is-error";
        statusBox.textContent =
          "Merci de compléter les champs obligatoires (*) avant d'envoyer votre demande.";
        statusBox.setAttribute("tabindex", "-1");
        statusBox.focus();
        return;
      }
      if (!captchaOk) {
        statusBox.className = "form-status is-error";
        statusBox.textContent =
          "La réponse à la question de vérification est incorrecte. Merci de réessayer.";
        statusBox.setAttribute("tabindex", "-1");
        statusBox.focus();
        return;
      }

      /*
        Envoi réel du formulaire via FormSubmit (https://formsubmit.co) :
        service gratuit qui transmet le contenu du formulaire par e-mail,
        sans nécessiter de serveur ni d'API key. L'adresse cible est celle
        indiquée dans l'attribut action du formulaire (syndilex.conseil@gmail.com).

        Important : lors du tout premier envoi depuis ce site, FormSubmit
        adresse un e-mail de confirmation à syndilex.conseil@gmail.com ;
        il faut cliquer une seule fois sur le lien d'activation reçu pour
        que les envois suivants arrivent automatiquement en boîte de réception.
      */
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      var endpoint = form.action.replace("formsubmit.co/", "formsubmit.co/ajax/");
      fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Envoi impossible");
          statusBox.className = "form-status is-success";
          statusBox.textContent =
            "Merci pour votre message. Votre demande a bien été transmise à SYNDILEX.";
          statusBox.setAttribute("tabindex", "-1");
          statusBox.focus();
          form.reset();
        })
        .catch(function () {
          statusBox.className = "form-status is-error";
          statusBox.innerHTML =
            "L'envoi automatique a échoué. Merci de nous écrire directement à " +
            '<a href="mailto:' + C.email + '">' + C.email + "</a> " +
            'ou par téléphone au <a href="tel:' + C.phoneHref + '">' + C.phoneDisplay + "</a>.";
          statusBox.setAttribute("tabindex", "-1");
          statusBox.focus();
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  /* ---------- Bandeau cookies ---------- */
  var banner = document.getElementById("cookie-banner");
  if (banner) {
    var STORAGE_KEY = "syndilex_cookie_choice";
    var saved = null;
    try { saved = window.localStorage.getItem(STORAGE_KEY); } catch (err) { saved = null; }

    if (!saved) {
      banner.classList.add("is-visible");
    }

    var acceptBtn = document.getElementById("cookie-accept");
    var refuseBtn = document.getElementById("cookie-refuse");

    function choose(value) {
      try { window.localStorage.setItem(STORAGE_KEY, value); } catch (err) {}
      banner.classList.remove("is-visible");
    }
    if (acceptBtn) acceptBtn.addEventListener("click", function () { choose("accepted"); });
    if (refuseBtn) refuseBtn.addEventListener("click", function () { choose("refused"); });
  }
})();
