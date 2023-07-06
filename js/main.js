let loadingHTML = `

<div class="d-flex align-items-center justify-content-center">
<div class="loader m-4">
</div>
</div> 

`;

let errorHTML = `
<p class=" fs-2 text-center" >
<i class="text-danger fa-solid fa-triangle-exclamation"></i>
error in fetch
</p>
`;

let noTextHTML = `
<p class=" fs-2 text-center" >
<i class="text-danger fa-solid fa-triangle-exclamation"></i>
There is no such domain
</p>
`;

let noTextEntered = `
<p class=" fs-2 text-center" >
<i class="text-danger fa-solid fa-triangle-exclamation"></i>
No text entered
</p>
`;

let historyDiv = document.querySelector(".history");
let searchInfo = document.querySelector(".search-info");

const getDomains = async (domain, zone) => {
  try {
    const res = await axios.get(
      `https://api.domainsdb.info/v1/domains/search?domain=${domain}&zone=${zone}`
    );
    return res.data;
  } catch (error) {
    // console.log(console.error(error));
    return mockData;
  }
};
let setDomains = async () => {
  let inputSearch = document.querySelector("#input-search").value;
  let inputCom = document.querySelector("#input-com").value;
  let topolmadi = true;

  searchInfo.innerHTML = loadingHTML;
  if (inputSearch !== "") {
    let respons = await getDomains(inputSearch, inputCom);

    console.log(respons);

    searchInfo.innerHTML = "";
    respons.map((item, index) => {
      console.log(item);
      if (item.domain.startsWith(String(inputSearch))) {
        console.log(item.domain);
        localStorage.setItem("history", item.domain);
        historyDiv.innerHTML += `
        
        <p>${localStorage.getItem("history")}</p>

        `;

        searchInfo.innerHTML += `
        
        <div class="d-flex align-items-center justify-content-between  ">
        <p class="m-0 p-0 fs-5" id="damain-text">${item.domain}</p>
        
      <a href="${
        item.MX !== null ? item.MX[0].exchange : "#"
      } " class="text-white">
        <button class="btn-damen">Link</button>
      </a>
      </div>
      `;
        topolmadi = false;
      }
    });

    searchInfo.innerHTML += `
    
    <button
      id="search-button"
      class="btn-damen"
      onclick="history()">
                  History
    </button>
             
    `;

    if (topolmadi) {
      searchInfo.innerHTML = noTextHTML;
    }
  } else {
    searchInfo.innerHTML = noTextEntered;
  }
};

let history = () => {
  searchInfo.innerHTML = "";
  searchInfo.innerHTML = historyDiv.innerHTML;

  searchInfo.innerHTML += `
  <button
      id="search-button"
      class="btn-damen"
      onclick="exit()">
                  Orqaga
    </button>



  `;
};

let exit = () => {
  setDomains();
};
