let table = document.querySelector("table");

const API = "https://restcountries.com/v3.1/all";

fetch(API)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((item) => {
      table.innerHTML += `<tr> 
      <td><img src='${item.flags.png}' alt='${item.flags.alt}' width=30px/></td>
      <td>${item.name.common} </td>
      <td> ${item.capital}</td>
      <td>${item.name.official} </td>
      <td> ${item.population}</td>
      <td> ${item.area}</td> 
      <td> ${item.continents}</td>
      <td> ${item.independent}</td>
      <td> ${Object.values(item.languages)}</td>
      </tr>`;
    })
  );
