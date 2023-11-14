

const contriesArr = ["London", "New York", "Alaska", "Eilat"]


window.onload = () => {
    contriesArr.map(city => APIurl(city));
}

const APIurl = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=he&appid=29cbbc246228b7ca0a00b431dbfbfd26`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            createCard(data);
        })
        .catch(err => {
            console.log(err);
        });

}

const getIcons = (temp) => {
    if (temp <= 20)
        return '<i class="fa fa-bolt   text-primary " aria-hidden="true"></i>'
    else if (temp > 20 && temp < 30)
        return '<i class="fa fa-cloud  text-info" aria-hidden="true"></i>'
    else
        return '   <i class="fa fa-sun-o  text-warning" aria-hidden="true"></i>'
}







const card = document.querySelector("#row")
const createCard = (obj) => {
    card.innerHTML += `
    <div class="box p-3 col-lg-4 col-md-12  mx-lg-3 ">
    <div class="title d-flex justify-content-between">
        <div>
            <h2 class="m-0">${obj.name}</h2>
            <p>${obj.weather[0].description}</p>
        </div>
        <div class="p-1">
        ${getIcons(obj.main.temp)}  
        </div>
    </div>
    <table class="values col-12">
        <tr class="row mt-1 p-1">
            <th class="col-4 text-center">טמפ' נמדדת</th>
            <th class="col-4 text-center">טמפ' מורגשת</th>
            <th class="col-4 text-center">לחות</th>
        </tr>
        <tr class="row mt-1 p-1">
            <td class="col-4 text-center">
                <p>℃${Math.round(obj.main.temp)}</p>
            </td>
            <td class="col-4 text-center">
                <p>℃${Math.round(obj.main.feels_like)}</p>
            </td>
            <td class="col-4 text-center">
                <p>${obj.main.humidity}%</p>
            </td>
        </tr>
    </table>
</div>
`
}






