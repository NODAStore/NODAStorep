function hitungHarga(event) {
  event.preventDefault();
  let mulai = document.getElementById("rank").value;
  localStorage.setItem("currentRank", mulai);
  let finish = document.getElementById("jokirank").value;
  localStorage.setItem("targetRank", finish);
  let rankArr = [
    "Warrior",
    "Elite",
    "Master",
    "Grand Master",
    "Epic",
    "Legend",
    "Mythic",
    "Mythic Glory",
  ];
  let harga = [5000, 10000, 20000, 30000, 50000, 75000, 95000, 115000];
  let a = 0;
  let numStart = 0;
  let numFinish = 0;
  let total = 0;

  while (a < rankArr.length) {
    if (mulai === rankArr[a]) {
      numStart = a;
    }
    if (finish === rankArr[a]) {
      numFinish = a;
    }
    a = a + 1;
  }

  let numJumlah = numFinish - numStart;

  if (numJumlah < 0) {
    alert("Rank Warrior Proses 1 Jam");
    alert("Rank Elite Proses 1 Jam");
    alert("Rank Master Proses 1-2 Jam");
    alert("Rank GrandMaster Proses 5-6 Jam");
    alert("Rank Epic Proses 10-12 Jam");
    alert("Rank Legends Proses 1 hari");
    alert("Rank Maytich Proses 1 hari");
    alert("Rank Maytich Glory Proses 1-2 hari");
    alert("Rank V, IV, lll, ll, l, Beda harga, kami akan menurunkan harga tergantung dari tingkatan di rank anda");
  } else if (numJumlah === 0) {
    alert("Request HERO ✓");
    alert("video Montage ✓");
    alert("Full Win Streak ✓");
  } else {
    while (numStart < numFinish) {
      total += harga[numStart];
      numStart++;
    }
  }
  document.getElementById("totalHarga").value = total;
  localStorage.setItem("totalHarga", total);
}

function validasiNoHp(number) {
  if (isNaN(number)) {
    return false;
  }
  return true;
}

function submitted(event) {
  event.preventDefault();
  let name = document.getElementById("nama").value;
  let nohp = document.getElementById("contact").value;
  localStorage.setItem("totalHarga", 10000);

  if (validasiNoHp(nohp)) {
    localStorage.setItem("name", name);
    localStorage.setItem("contact", nohp);

    window.location.href = "hitung-harga.html";
  } else {
    alert("Nomor WA ya!");
  }
}

function gasJoki(event) {
  event.preventDefault();
  window.location.href = "checkout-form.html";
}

document.getElementById("outputNama").value = localStorage.getItem("name");
document.getElementById("No Hp").value = localStorage.getItem("contact");
document.getElementById("Total Harga").value =
  localStorage.getItem("totalHarga");

function kembali() {
  window.location.href = "hitung-harga.html";
}

function kembaliHome() {
  window.location.href = "index.html";
}
