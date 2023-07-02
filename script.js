
let input=document.getElementById("input");


async function getJSONData(){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=f960bcba87999b57e43f2a3354fc3584
`;

    let response=await fetch(`${url}`);
    let jsonData=await response.json();
    let data="";
    for (const key in jsonData) {
        data=`<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${input.value}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${jsonData.main.temp} F</li>
          <li class="list-group-item">${jsonData.weather[0].description}</li>
        </ul>
      </div>
        `
    }

    console.log(jsonData);
    document.querySelector(".wrapper").innerHTML=data;

}
getJSONData()