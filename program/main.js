document.getElementById("form1").addEventListener("submit", (e)=>
{
    e.preventDefault();
    var ip = document.getElementById("input").value;
    fetch(`https://ipapi.co/${ip}/json/`).then(response =>
    {
        return response.json();
    }).then(data=>
    {
        console.log(data);
        document.getElementById("ipaddress").innerText = ip;
        document.getElementById("city").innerText = data.city;
        document.getElementById("region").innerText = data.region;
        document.getElementById("country").innerText = data.country_name;
        document.getElementById("capital").innerText = data.country_capital;
        document.getElementById("postalcode").innerText = data.postal;
        document.getElementById("latlon").innerText = data.latitude + " "+ data.longitude;
        document.getElementById("timezone").innerText = data.timezone;
        document.getElementById("callingcode").innerText = data.country_calling_code;
        document.getElementById("displayIp").innerText = data.ip;
        document.getElementById("output").style.display = "";
    });
});