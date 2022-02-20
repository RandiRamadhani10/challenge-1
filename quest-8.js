const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];
const getInfoPenjualan = (dataPenjualan) => {
  const totalKeuntungan = untung(dataPenjualan);
  const totalModal = modal(dataPenjualan);
  const persentase = (totalKeuntungan / totalModal) * (100 / 100);
  const buku = bukuTerlaris(dataPenjualan);
  const penulis = penulisTerlaris(dataPenjualan);
  const result = {
    totalKeuntungan: `Rp.${totalKeuntungan}`,
    totalModal: `Rp.${totalModal}`,
    persentase: `${Math.round(persentase)}%`,
    produkBukuTerlaris: buku,
    penulisTerlaris: penulis,
  };
  return result;
};
const untung = (dataPenjualan) => {
  const arr = dataPenjualan.map((data) => {
    return (data.hargaJual - data.hargaBeli) * data.totalTerjual;
  });
  const result = arr.reduce((a, b) => {
    return a + b;
  });
  return result;
};

const modal = (dataPenjualan) => {
  const arr = dataPenjualan.map((data) => {
    return data.hargaBeli;
  });
  const result = arr.reduce((a, b) => {
    return a + b;
  });
  return result;
};

const bukuTerlaris = (dataPenjualan) => {
  const arr = dataPenjualan.sort((a, b) => {
    return b.totalTerjual - a.totalTerjual;
  });
  return arr[0].namaProduk;
};

const penulisTerlaris = (dataPenjualan) => {
  const nama = dataPenjualan.map((data) => {
    return data.penulis;
  });

  const data = nama.filter((num, index) => {
    return nama.indexOf(num) === index;
  });

  const filter = data.map((nama) => {
    const filteredPenulis = dataPenjualan.filter((data) => {
      return data.penulis === nama;
    });
    const sorting = filteredPenulis.map((data) => {
      return data.totalTerjual;
    });
    const result = sorting.reduce((a, b) => {
      return a + b;
    });
    const obj = { penulis: nama, totalTerjual: result };
    return obj;
  });
  const result = filter.sort((a, b) => {
    return b.totalTerjual - a.totalTerjual;
  });
  return result[0].penulis;
};
console.log(getInfoPenjualan(dataPenjualanNovel));
