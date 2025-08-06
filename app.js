"use strcit";

// Variabel
const hargaInp = document.getElementById("hargaInp");
const tipInp = document.getElementById("tipInp");

const inputs = document.querySelectorAll("input");

const tampikanTotal = document.getElementById("tampilkanTotal");

const kurang = document.getElementById("kurang");
const tambah = document.getElementById("tambah");

const hasilTambahKurang = document.getElementById("hasilTambahKurang");

// Function

const tampilkanHarga = () => {
  const harga = Number(hargaInp.value);
  const tip = Number(tipInp.value);
  const totalOrang = Number(hasilTambahKurang.textContent);

  // if (harga) {
  //   tampikanTotal.textContent = `Rp. ${harga.toFixed(3)}`;
  // }

  const total = harga + (harga * tip) / 100;
  const perOrang = total / totalOrang;
  // const totalFix = total / totalOrang;
  tampikanTotal.textContent = `Rp. ${perOrang.toFixed(3)}`;

  return perOrang;
};

// console.log(typeof tampilkanHarga());

hargaInp.oninput = () => tampilkanHarga();
tipInp.oninput = () => tampilkanHarga();

kurang.onclick = () => {
  let number = Number(hasilTambahKurang.textContent);
  if (number > 1) {
    hasilTambahKurang.textContent = number - 1;
    tampilkanHarga();
  }
};

tambah.onclick = () => {
  let number = Number(hasilTambahKurang.textContent);
  hasilTambahKurang.textContent = number + 1;
  tampilkanHarga();

  // console.log(fix);
};
