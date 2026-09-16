/* =========================
   PAGE NAVIGATION
========================= */

const pages =
  document.querySelectorAll(".page");

const nextBtn =
  document.getElementById("nextBtn");

const prevBtn =
  document.getElementById("prevBtn");

const currentPageText =
  document.getElementById("currentPage");

let currentPage = 0;


/* =========================
   UPDATE NAVIGATION
========================= */

function updateNavigation() {

  currentPageText.textContent =
    currentPage + 1;

  prevBtn.disabled =
    currentPage === 0;

  nextBtn.disabled =
    currentPage === pages.length - 1;
}


/* =========================
   NEXT PAGE
========================= */

function nextPage() {

  if (
    currentPage >=
    pages.length - 1
  ) {
    return;
  }

  pages[currentPage]
    .classList
    .add("flipped");

  currentPage++;

  updateNavigation();
}


/* =========================
   PREVIOUS PAGE
========================= */

function previousPage() {

  if (currentPage <= 0) {
    return;
  }

  currentPage--;

  pages[currentPage]
    .classList
    .remove("flipped");

  updateNavigation();
}


/* =========================
   BUTTONS
========================= */

nextBtn.addEventListener(
  "click",
  nextPage
);

prevBtn.addEventListener(
  "click",
  previousPage
);


/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.target.tagName === "INPUT" ||
      event.target.tagName === "TEXTAREA"
    ) {
      return;
    }

    if (event.key === "ArrowRight") {
      nextPage();
    }

    if (event.key === "ArrowLeft") {
      previousPage();
    }

  }
);


updateNavigation();



/* =========================
   PHOTO VIEWER
========================= */

const photoModal =
  document.getElementById("photoModal");

const expandedPhoto =
  document.getElementById("expandedPhoto");

const savePhoto =
  document.getElementById("savePhoto");

const closePhoto =
  document.getElementById("closePhoto");

const downloadablePhotos =
  document.querySelectorAll(
    ".downloadable-photo"
  );


/* =========================
   OPEN PHOTO
========================= */

downloadablePhotos.forEach(
  function(photo) {

    photo.addEventListener(
      "click",
      function() {

        const image =
          photo.dataset.image;

        expandedPhoto.src =
          image;

        savePhoto.href =
          image;

        const fileName =
          image
            .split("/")
            .pop();

        savePhoto.download =
          fileName;

        photoModal
          .classList
          .add("show");

      }
    );

  }
);


/* =========================
   CLOSE PHOTO
========================= */

function closePhotoViewer() {

  photoModal
    .classList
    .remove("show");

  expandedPhoto.src = "";

}


closePhoto.addEventListener(
  "click",
  closePhotoViewer
);


/* =========================
   CLICK OUTSIDE PHOTO
========================= */

photoModal.addEventListener(
  "click",
  function(event) {

    if (
      event.target ===
      photoModal
    ) {
      closePhotoViewer();
    }

  }
);


/* =========================
   ESCAPE CLOSES PHOTO
========================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape" &&
      photoModal.classList.contains("show")
    ) {

      closePhotoViewer();

    }

  }
);



/* =========================
   ENVELOPE
========================= */

const envelope =
  document.getElementById("envelope");

const envelopeHint =
  document.getElementById("envelopeHint");

const giftMessage =
  document.getElementById("giftMessage");


/* =========================
   OPEN / CLOSE ENVELOPE
========================= */

envelope.addEventListener(
  "click",
  function() {

    const isOpen =
      envelope.classList.contains("open");


    if (!isOpen) {

      envelope
        .classList
        .add("open");

      envelopeHint.textContent =
        "♡ surprise ♡";

      setTimeout(
        function() {

          giftMessage
            .classList
            .add("show");

        },
        650
      );

    }

    else {

      envelope
        .classList
        .remove("open");

      envelopeHint.textContent =
        "click me :)";

      giftMessage
        .classList
        .remove("show");

    }

  }
);



/* =========================
   MOBILE POEM PROTECTION
========================= */

/*
   IMPORTANT:

   The scrapbook uses touch gestures,
   but the poem needs vertical scrolling.

   If the finger starts inside the poem,
   we allow the phone to scroll normally
   instead of treating the movement as
   a scrapbook page flip.
*/

const poemScroll =
  document.querySelector(".poem-scroll");


if (poemScroll) {

  poemScroll.addEventListener(
    "touchstart",
    function(event) {

      event.stopPropagation();

    },
    { passive: true }
  );


  poemScroll.addEventListener(
    "touchmove",
    function(event) {

      event.stopPropagation();

    },
    { passive: true }
  );


  poemScroll.addEventListener(
    "touchend",
    function(event) {

      event.stopPropagation();

    },
    { passive: true }
  );

}