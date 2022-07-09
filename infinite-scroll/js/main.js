let endOfThePage = 0;

let preLoading = false;

const showPreloader = () => {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "block";
  preloader = true;
};
const hidePreloader = () => {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
  preLoading = false;
};

const getData = () => {
  if (!preLoading) {
    showPreloader();

    fetch("https://akademia108.pl/api/ajax/get-users.php")
      .then((res) => res.json())
      .then((data) => {
        let body = document.body;
        let hr = document.createElement("hr");
        body.appendChild(hr);

        for (let user of data) {
          let pId = document.createElement("p");
          let pName = document.createElement("p");
          let pWebsite = document.createElement("p");

          pId.innerText = `User ID : ${user.id}`;
          pName.innerText = `User Name : ${user.name}`;
          pWebsite.innerHTML = `User URL : ${user.website} <br />--------------------`;

          body.appendChild(pId);
          body.appendChild(pName);
          body.appendChild(pWebsite);
        }

        hidePreloader();
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

const scrollToEndOfPage = () => {
  // odwołanie do całego elementu okna  html
  let d = document.documentElement;
  // wysokość całego okna wraz tego nie widocznego
  let scrollHeight = d.scrollHeight;
  // liczba pixeli od samej góry do obecnej wysokości przeskrolowanego okna
  let scrollTop = d.scrollTop;
  // wysokość okna widocznego przez clienta
  let clientHeight = d.clientHeight;

  let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

  if (sumScrollTopClientHeight >= scrollHeight) {
    endOfThePage += 1;
    console.log(`scrolled to END OF PAGE: ${endOfThePage}`);
    showPreloader();
    getData();
  }
};

window.addEventListener("scroll", scrollToEndOfPage);
