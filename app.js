const tampilkanHasil = document.querySelector("h1");

const inputHarga = document.getElementById("inputHarga");
const inputTip = document.getElementById("inputTip");

const buttonPlus = document.getElementById("plus");
const buttonMin = document.getElementById("minus");

const numberButton = document.querySelector("p");
let number = Number(numberButton.textContent);

const clearBtn = document.getElementById("clearBtn");

// console.log(typeof number, number);

const hitung = () => {
  const hargaStr = inputHarga.value;

  if (hargaStr === "") {
    return `Tidak Boleh Kosong`;
  }

  const tipNum = Number(inputTip.value);
  const hargaNum = Number(hargaStr);
  if (isNaN(hargaNum) || isNaN(tipNum)) {
    return `Harus berisi Angka`;
  }

  const hargaWithTip = (tipNum / 100) * hargaNum;
  const totalHarga = hargaWithTip + hargaNum;

  return totalHarga;
};

const tambah = () => {
  numberButton.textContent = ++number;
  return number;
};

const kurang = () => {
  if (number > 1) {
    numberButton.textContent = --number;
  }

  return number;
};
const bagi = () => {
  const total = hitung();

  if (typeof total === "string") {
    return total;
  }

  return (total / number).toFixed(3);
};

const clear = () => {
  number = 1;
  inputHarga.value = "";
  inputTip.value = "";
  numberButton.textContent = 1;
  tampilkanHasil.textContent = "";
  inputHarga.focus();
};

clearBtn.onclick = () => {
  clear();
};

[inputHarga, inputTip].forEach((input) => {
  input.addEventListener("keyup", () => {
    tampilkanHasil.textContent = bagi();
  });
});

[buttonPlus, buttonMin].forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "+") {
      tambah();
      tampilkanHasil.textContent = bagi();
    } else {
      kurang();
      tampilkanHasil.textContent = bagi();
    }
  });
});
