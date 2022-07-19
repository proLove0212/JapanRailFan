// Script for companies.html

var content = document.getElementById("companies")
var operatorsHtml = ""

for (const [operatorKey, value] of Object.entries(operators)) {
    var operatorName = value.name
    var operatorJapaneseName = value.japaneseName
    var operatorLogo = value.logo

    operatorsHtml += '<div class="col-md-6 col-lg-4 mb-3"><a href="./company.html?operator=' + operatorKey + '"><div class="card h-shadow"><div class="w-100 d-flex justify-content-center align-items-center" style="background-color:white;"><img style="height: 100px; max-width: 80%;" class="my-5" src="' + operatorLogo + '"></div><div class="card-body d-flex align-items-center"><div class="flex-fill"><h5 class="card-title m-0">' + operatorName + '</h5><small class="white">' + operatorJapaneseName + '</small></div><span class="material-symbols-sharp white">chevron_right</span></div></div></a></div>'
}

content.innerHTML = operatorsHtml