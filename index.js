fetch("https://api.quran.gading.dev/surah/2/185")
  .then((data) => data.json())
  .then((res) => {
    console.log(res.data);
  });
