// let inputSearch = document.querySelector("#input-search");

let mockData = [
  {
    domain: "zinc.guru",
    create_date: "2023-05-20T11:55:40.458470",
    update_date: "2023-05-20T11:55:40.458475",
    country: "US",
    isDead: "False",
    A: ["34.102.136.180"],
    NS: ["ns12.domaincontrol.com", "ns11.domaincontrol.com"],
    CNAME: null,
    MX: null,
    TXT: null,
  },

  {
    domain: "uzum",
    create_date: "2023-05-20T11:55:40.458470",
    update_date: "2023-05-20T11:55:40.458475",
    country: "US",
    isDead: "False",
    A: ["34.102.136.180"],
    NS: ["ns12.domaincontrol.com", "ns11.domaincontrol.com"],
    CNAME: null,
    MX: [{ exchange: "uzum.com", priority: 10 }],
    TXT: null,
  },

  {
    domain: "uzum.ru",
    create_date: "2023-05-20T11:55:40.458470",
    update_date: "2023-05-20T11:55:40.458475",
    country: "US",
    isDead: "False",
    A: ["34.102.136.180"],
    NS: ["ns12.domaincontrol.com", "ns11.domaincontrol.com"],
    CNAME: null,
    MX: [{ exchange: "uzum.ru", priority: 10 }],
    TXT: null,
  },

  {
    domain: "uzum-bank.uz",
    create_date: "2023-05-20T11:55:40.458470",
    update_date: "2023-05-20T11:55:40.458475",
    country: "US",
    isDead: "False",
    A: ["34.102.136.180"],
    NS: ["ns12.domaincontrol.com", "ns11.domaincontrol.com"],
    CNAME: null,
    MX: [{ exchange: "uzum-bank.uz", priority: 10 }],
    TXT: null,
  },
  {
    domain: "zigzag.guru",
    create_date: "2023-05-20T11:55:40.458107",
    update_date: "2023-05-20T11:55:40.458112",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "zigzag.guru",
    create_date: "2023-05-20T11:55:40.458107",
    update_date: "2023-05-20T11:55:40.458112",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "yourparty.guru",
    create_date: "2023-05-20T11:55:40.456997",
    update_date: "2023-05-20T11:55:40.457002",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "yuyu.guru",
    create_date: "2023-05-20T11:55:40.457351",
    update_date: "2023-05-20T11:55:40.457355",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "zdex.guru",
    create_date: "2023-05-20T11:55:40.457701",
    update_date: "2023-05-20T11:55:40.457706",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "yourmeditation.guru",
    create_date: "2023-05-20T11:55:40.456574",
    update_date: "2023-05-20T11:55:40.456579",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "yolo247.guru",
    create_date: "2023-05-20T11:55:40.456223",
    update_date: "2023-05-20T11:55:40.456228",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "yardcare.guru",
    create_date: "2023-05-20T11:55:40.455114",
    update_date: "2023-05-20T11:55:40.455117",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "yeswehack.guru",
    create_date: "2023-05-20T11:55:40.455863",
    update_date: "2023-05-20T11:55:40.455868",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "yash.guru",
    create_date: "2023-05-20T11:55:40.455465",
    update_date: "2023-05-20T11:55:40.455471",
    country: null,
    isDead: "False",
    A: null,
    NS: ["ns2.bluehost.com", "ns1.bluehost.com"],
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "xn--kcrz2ojoihmkpxqer4a.guru",
    create_date: "2023-05-20T11:55:40.454277",
    update_date: "2023-05-20T11:55:40.454279",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "xn----zhceh2asv7f.guru",
    create_date: "2023-05-20T11:55:40.454074",
    update_date: "2023-05-20T11:55:40.454076",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "xn--taloyhti-u4a.guru",
    create_date: "2023-05-20T11:55:40.454462",
    update_date: "2023-05-20T11:55:40.454465",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "xox.guru",
    create_date: "2023-05-20T11:55:40.454668",
    update_date: "2023-05-20T11:55:40.454671",
    country: "US",
    isDead: "False",
    A: ["192.64.119.113"],
    NS: ["dns1.registrar-servers.com", "dns2.registrar-servers.com"],
    CNAME: null,
    MX: [
      { exchange: "mx2.privateemail.com", priority: 10 },
      { exchange: "mx1.privateemail.com", priority: 10 },
    ],
    TXT: ["v=spf1 include:spf.privateemail.com ~all"],
  },
  {
    domain: "xzilla.guru",
    create_date: "2023-05-20T11:55:40.454928",
    update_date: "2023-05-20T11:55:40.454930",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "wrestle.guru",
    create_date: "2023-05-20T11:55:40.453451",
    update_date: "2023-05-20T11:55:40.453453",
    country: "US",
    isDead: "False",
    A: ["67.199.248.13", "67.199.248.12"],
    NS: ["ns37.domaincontrol.com", "ns38.domaincontrol.com"],
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "x-zilla.guru",
    create_date: "2023-05-20T11:55:40.453857",
    update_date: "2023-05-20T11:55:40.453859",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "winwizards.guru",
    create_date: "2023-05-20T11:55:40.453257",
    update_date: "2023-05-20T11:55:40.453259",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "wti.guru",
    create_date: "2023-05-20T11:55:40.453624",
    update_date: "2023-05-20T11:55:40.453626",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "winslots.guru",
    create_date: "2023-05-20T11:55:40.453072",
    update_date: "2023-05-20T11:55:40.453074",
    country: null,
    isDead: "False",
    A: null,
    NS: ["aragorn.ns.cloudflare.com", "erin.ns.cloudflare.com"],
    CNAME: null,
    MX: null,
    TXT: ["yandex-verification: 52292fe7879282e4"],
  },
  {
    domain: "whalewatcher.guru",
    create_date: "2023-05-20T11:55:40.452853",
    update_date: "2023-05-20T11:55:40.452855",
    country: "DE",
    isDead: "False",
    A: ["185.53.177.10"],
    NS: ["ns2.parkingcrew.net", "ns1.parkingcrew.net"],
    CNAME: null,
    MX: [{ exchange: "mail.h-email.net", priority: 5 }],
    TXT: ["v=spf1 ip6:fd1b:212c:a5f9::/48 -all"],
  },
  {
    domain: "weightloss-pills.guru",
    create_date: "2023-05-20T11:55:40.452390",
    update_date: "2023-05-20T11:55:40.452392",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "wetech.guru",
    create_date: "2023-05-20T11:55:40.452584",
    update_date: "2023-05-20T11:55:40.452586",
    country: "US",
    isDead: "False",
    A: ["50.63.202.55"],
    NS: ["ns27.domaincontrol.com", "ns28.domaincontrol.com"],
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "webz.guru",
    create_date: "2023-05-20T11:55:40.452187",
    update_date: "2023-05-20T11:55:40.452190",
    country: "GB",
    isDead: "False",
    A: ["88.208.252.229"],
    NS: ["ns2.livedns.co.uk", "ns3.livedns.co.uk", "ns1.livedns.co.uk"],
    CNAME: null,
    MX: [{ exchange: "mailserver.webz.guru", priority: 10 }],
    TXT: [
      "google-site-verification=ZiuNOFEITXJPfjoEFCn2a4-Wl3FIypCH1yLoWqCR0YE",
    ],
  },
  {
    domain: "webmusic.guru",
    create_date: "2023-05-20T11:55:40.451682",
    update_date: "2023-05-20T11:55:40.451684",
    country: "FR",
    isDead: "False",
    A: ["62.210.248.206"],
    NS: ["ns75.domaincontrol.com", "ns76.domaincontrol.com"],
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "webseo.guru",
    create_date: "2023-05-20T11:55:40.451913",
    update_date: "2023-05-20T11:55:40.451915",
    country: "US",
    isDead: "False",
    A: ["162.241.237.73"],
    NS: ["ns2.webseo.guru", "ns1.webseo.guru"],
    CNAME: null,
    MX: [{ exchange: "webseo.guru", priority: 0 }],
    TXT: ["v=spf1 +a +mx +ip4:162.241.237.73 ~all"],
  },
  {
    domain: "w5678.guru",
    create_date: "2023-05-20T11:55:40.451162",
    update_date: "2023-05-20T11:55:40.451164",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "waiver.guru",
    create_date: "2023-05-20T11:55:40.451492",
    update_date: "2023-05-20T11:55:40.451494",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "viewyentreat.guru",
    create_date: "2023-05-20T11:55:40.450161",
    update_date: "2023-05-20T11:55:40.450163",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "vue.guru",
    create_date: "2023-05-20T11:55:40.450526",
    update_date: "2023-05-20T11:55:40.450528",
    country: null,
    isDead: "False",
    A: null,
    // NS: [
    //   ns5linode.com = "ns1.linode.com"),
    //   //   "ns4.linode.cm,
    //   //   "ns2.linode.com",
    //   //   "ns3.linode.com"
    // ],
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "vulkan-casino.guru",
    create_date: "2023-05-20T11:55:40.450699",
    update_date: "2023-05-20T11:55:40.450701",
    country: "US",
    isDead: "False",
    A: ["157.90.158.10"],
    //     NS: [
    //    "dns31cloudns.net",        "ns34.cloudns.net",
    //       "dns33.cloudns.nt,
    //       "dns32.cloudns.net"
    //     ],
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "vn138.guru",
    create_date: "2023-05-20T11:55:40.450354",
    update_date: "2023-05-20T11:55:40.450356",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "vulkandengi.guru",
    create_date: "2023-05-20T11:55:40.450959",
    update_date: "2023-05-20T11:55:40.450962",
    country: "US",
    isDead: "False",
    A: ["172.67.203.81", "104.21.22.68"],
    NS: ["mona.ns.cloudflare.com", "ed.ns.cloudflare.com"],
    CNAME: null,
    MX: null,
    TXT: ["yandex-verification: 9f99817773a51430"],
  },
  {
    domain: "truffleretreat.guru",
    create_date: "2023-05-20T11:55:40.449207",
    update_date: "2023-05-20T11:55:40.449209",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "vag.guru",
    create_date: "2023-05-20T11:55:40.449674",
    update_date: "2023-05-20T11:55:40.449676",
    country: "US",
    isDead: "False",
    A: ["184.168.221.47"],
    NS: ["ns32.domaincontrol.com", "ns31.domaincontrol.com"],
    CNAME: null,
    MX: [
      { exchange: "mailstore1.secureserver.net", priority: 10 },
      { exchange: "smtp.secureserver.net", priority: 0 },
    ],
    TXT: null,
  },
  {
    domain: "velocity.guru",
    create_date: "2023-05-20T11:55:40.449909",
    update_date: "2023-05-20T11:55:40.449911",
    country: "US",
    isDead: "False",
    A: ["192.0.78.208", "192.0.78.166"],
    NS: ["ns2.wordpress.com", "ns1.wordpress.com", "ns3.wordpress.com"],
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "united-by-our.guru",
    create_date: "2023-05-20T11:55:40.449413",
    update_date: "2023-05-20T11:55:40.449417",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "topcars.guru",
    create_date: "2023-05-20T11:55:40.448119",
    update_date: "2023-05-20T11:55:40.448121",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "trash2cash.guru",
    create_date: "2023-05-20T11:55:40.448294",
    update_date: "2023-05-20T11:55:40.448297",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "traum.guru",
    create_date: "2023-05-20T11:55:40.448475",
    update_date: "2023-05-20T11:55:40.448477",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "troll.guru",
    create_date: "2023-05-20T11:55:40.448995",
    update_date: "2023-05-20T11:55:40.448997",
    country: "US",
    isDead: "False",
    A: ["107.170.212.13"],
    NS: ["dns1.registrar-servers.com", "dns2.registrar-servers.com"],
    CNAME: null,
    MX: [
      { exchange: "eforward5.registrar-servers.com", priority: 20 },
      { exchange: "eforward1.registrar-servers.com", priority: 10 },
      { exchange: "eforward3.registrar-servers.com", priority: 10 },
      { exchange: "eforward2.registrar-servers.com", priority: 10 },
      { exchange: "eforward4.registrar-servers.com", priority: 15 },
    ],
    TXT: ["v=spf1 include:spf.efwd.registrar-servers.com ~all"],
  },
  {
    domain: "tripguru.guru",
    create_date: "2023-05-20T11:55:40.448681",
    update_date: "2023-05-20T11:55:40.448683",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "tiyu.guru",
    create_date: "2023-05-20T11:55:40.447679",
    update_date: "2023-05-20T11:55:40.447681",
    country: "US",
    isDead: "False",
    A: ["23.234.27.218"],
    NS: ["ns1-show.myhostadmin.net", "ns2-show.myhostadmin.net"],
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "thinkpositive.guru",
    create_date: "2023-05-20T11:55:40.447505",
    update_date: "2023-05-20T11:55:40.447507",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "together.guru",
    create_date: "2023-05-20T11:55:40.447924",
    update_date: "2023-05-20T11:55:40.447926",
    country: "US",
    isDead: "False",
    A: ["50.63.202.56"],
    NS: ["ns54.domaincontrol.com", "ns53.domaincontrol.com"],
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "therapist.guru",
    create_date: "2023-05-20T11:55:40.447099",
    update_date: "2023-05-20T11:55:40.447101",
    country: "US",
    isDead: "False",
    A: ["50.63.202.52"],
    NS: ["ns63.domaincontrol.com", "ns64.domaincontrol.com"],
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "thetravel.guru",
    create_date: "2023-05-20T11:55:40.447329",
    update_date: "2023-05-20T11:55:40.447331",
    country: "CA",
    isDead: "False",
    A: ["167.114.13.200"],
    NS: ["ns1.agoristhosting.net", "ns2.agoristhosting.net"],
    CNAME: null,
    MX: [{ exchange: "thetravel.guru", priority: 0 }],
    TXT: null,
  },
  {
    domain: "thekindnessculture.guru",
    create_date: "2023-05-20T11:55:40.446191",
    update_date: "2023-05-20T11:55:40.446193",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "theplantbased.guru",
    create_date: "2023-05-20T11:55:40.446883",
    update_date: "2023-05-20T11:55:40.446887",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
  {
    domain: "themusicindustry.guru",
    create_date: "2023-05-20T11:55:40.446515",
    update_date: "2023-05-20T11:55:40.446520",
    country: null,
    isDead: "False",
    A: null,
    NS: null,
    CNAME: null,
    MX: null,
    TXT: null,
  },
];

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
const getDomains = async (domain, zone) => {
  try {
    const res = await axios.get(
      `http://api.domainsdb.info/v1/domains/search?domain=${domain}&zone=${zone}`
    );
    return res.data;
  } catch (error) {
    // console.log(console.error(error));
    return mockData;
  }
};

let setDomains = async () => {
  let inputSearch = document.querySelector("#input-search").value;
  let inputCom = document.querySelector("#input-com");
  let searchInfo = document.querySelector(".search-info");
  let topolmadi = true;

  searchInfo.innerHTML = loadingHTML;
  if (inputSearch !== "") {
    let respons = await getDomains();

    console.log(respons);

    searchInfo.innerHTML = "";
    respons.map((item, index) => {
      console.log(item);
      if (item.domain.startsWith(String(inputSearch))) {
        console.log(item.domain);

        searchInfo.innerHTML += `
        
        <div class="d-flex align-items-center justify-content-between  ">
        <p class="m-0 p-0 fs-5">${item.domain}</p>

      <a href="${
        item.MX !== null ? item.MX[0].exchange : "#"
      } " class="text-white">
        <button class="btn-damen">Link</button>
      </a>
      </div>
      `;
        topolmadi = false;
        localStorage.setItem("history", searchInfo.innerHTML);
      }
    });

    if (topolmadi) {
      searchInfo.innerHTML = noTextHTML;
    }
  } else {
    searchInfo.innerHTML = noTextEntered;
  }
};

let historyDiv = document.querySelector(".history");
historyDiv.innerHTML = localStorage.getItem("history");
