// State
const bank = [];
const odd = [];
const even = [];

// Helper functions

function addToBank(number) {
  // Adds number to bank
  bank.push(Number(number));

  render();
}

// Sort
function sort() {
  const number = bank.shift();

  if (number % 2 === 0) {
    even.push(number);
  } else {
    odd.push(number);
  }
}

// Sort 1
function sortOne() {
  if (bank.length === 0) return;

  sort();

  render();
}

// Sort all

function sortAll() {
  while (bank.length > 0) {
    sort();
  }

  render();
}

// Component

function NumberForm() {
  const $form = document.createElement("form");

  $form.innerHTML = `
       <label>
      Add a number to the bank
       </label>

       <input name="number" type="number" />

        <button>
            Add number
        </button>

            <button
            type="button"
            id="sortOne"
        >
            Sort 1
        </button>

        <button
            type="button"
            id="sortAll"
        >
            Sort All
        </button>

    `;

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData($form);
    const newNum = Number(data.get("number"));
    addToBank(newNum);
  });

  $form.querySelector("#sortOne").addEventListener("click", sortOne);

  $form.querySelector("#sortAll").addEventListener("click", sortAll);

  return $form;

  $form.reset();
}

function NumberInBank() {
  const $section = document.createElement("section");

  $section.innerHTML = `
        <h2>
            Number Bank
        </h2>
    `;

  const $numbers = bank.map((number) => {
    const $span = document.createElement("span");

    $span.textContent = number;

    return $span;
  });

  $section.append(...$numbers); //

  return $section;
}

function OddNumbers() {
  const $section = document.createElement("section");

  $section.innerHTML = `
        <h2>
            Odd Numbers
        </h2>
    `;

  const $numbers = odd.map((number) => {
    const $span = document.createElement("span");

    $span.textContent = number;

    return $span;
  });

  $section.append(...$numbers);

  return $section;
}

function EvenNumbers() {
  const $section = document.createElement("section");

  $section.innerHTML = `
        <h2>
            Even Numbers
        </h2>
    `;

  const $numbers = even.map((number) => {
    const $span = document.createElement("span");

    $span.textContent = number;

    return $span;
  });

  $section.append(...$numbers);

  return $section;
}

// Render

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
        <h1>
            Odds and Evens
        </h1>

        <div id="form"></div>

        <div id="bank"></div>

        <div id="odd"></div>

        <div id="even"></div>
    `;

  $app.querySelector("#form").replaceWith(NumberForm());

  $app.querySelector("#bank").replaceWith(NumberInBank());

  $app.querySelector("#odd").replaceWith(OddNumbers());

  $app.querySelector("#even").replaceWith(EvenNumbers());
}

render();
