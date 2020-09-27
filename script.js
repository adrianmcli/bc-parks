const PARK_ID = 129   // Chief; For reference, Seymour: 156, Cypress: 171
const PASS_ID = 1630  // Chief Peaks Trail only – AM - Person
const NUM_TICKETS = 2

setTimeout(function () {
  window.addEventListener("load", function () {
    const $ = document.querySelector.bind(document);

    $(`#collapsed_${PARK_ID}`).scrollIntoView();
    $(`#collapsed_${PARK_ID}`).click();

    // add num tickets
    for (let i = 0; i < NUM_TICKETS; i++) {
      plusClick(PASS_ID, 2);
    }

    getBtnAddToCart(PASS_ID, 2, PARK_ID, this);

    // un-comment next line if u want to proceed to cart page automatically
    // $("#mainContent_guestUserSelectPassPanal > .Proceed_btn_pass > a").click();
  });
}, 0);
