async function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>

  const getPage = (num) => {
    const url = `https://jsonmock.hackerrank.com/api/countries?page=${num}`;
    return new Promise((resolve, reject) => {
      https
        .get(url, (res) => {
          let response = "";
          res.on("data", (c) => {
            response += c;
          });
          res.on("end", (_) => {
            resolve(JSON.parse(response));
          });
        })
        .on("error", (err) => reject(err));
    });
  };

  const searchData = (data, code) => {
    const obj = data.find((obj) => obj.alpha2Code === code);
    return obj ? obj.name : false;
  };

  let res;
  try {
    res = await getPage(1);
  } catch (err) {
    if (err) throw new Error(err);
    console.log(err);
  }

  // Issue below is countries not sorted by AlphaCode
  // Final implementation (not here) just loop through all the pages to find Alpha2Code

  const totalPages = res.total_pages;
  let previousPage = totalPages;
  let currentPage = 1;
  let name, firstCountry, temp;
  console.log(totalPages);
  while (!name) {
    let country = searchData(res.data, code);

    if (country) return country;
    else {
      firstCountry = res.data[0].alpha2Code;

      temp = currentPage;
      currentPage = Math.floor(currentPage + (previousPage - currentPage) / 2);
      previousPage = temp;

      if (
        currentPage <= 0 ||
        currentPage > totalPages ||
        currentPage === previousPage
      )
        return false;
      res = await getPage(currentPage);
    }
  }

  return name;
}
