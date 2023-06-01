// let inputSearch = document.querySelector("#input-search");

const mockData = {
  domains: [
    {
      domain: "uzum-online.com",
      create_date: "2022-12-29T15:37:15.435498",
      update_date: "2022-12-29T15:37:15.435500",
      country: "ZA",
      isDead: "False",
      A: ["41.203.18.31"],
      NS: [
        "ns1.dns-h.com",
        "ns2.dns-h.com",
        "ns1.host-h.net",
        "ns2.host-h.net",
      ],
      CNAME: null,
      MX: [
        {
          exchange: "mail.uzum-online.com",
          priority: 10,
        },
      ],
      TXT: ["v=spf1 mx a include:spf.host-h.net ?all"],
    },
  ],

  total: 1,
  time: "2",
  next_page: null,
};

const getDomains = async (domain, zone) => {
  try {
    const res = await axios.get(
      `http://api.domainsdb.info/v1/domains/search?domain=${domain}&zone=${zone}`
    );
    return res.data;
  } catch (err) {
    return mockData;
  }
};

let setDomains = async () => {
  let inputSearch = document.querySelector("#input-search").value;
  let inputCom = document.querySelector("#input-com");
  let respons = await getDomains();

  //   console.log(respons.domains[0].domain);

  let searchInfo = document.querySelector(".search-info");
  respons.domains.map((item, index) => {
    // console.log(item.domains);
    if (item.domain.startsWith(String(inputSearch))) {
      console.log(item.domain);
      console.log(item.MX[0].exchange);
      searchInfo.innerHTML = `
      <p><a href="${item.MX[0].exchange}" class="text-white">${item.domain}</a></p>
      `;
    }
  });
};
