

//  Years Selection//
var yearSelector = document.getElementById('year');
var options ='';

for(var i = 2024 ; i >=1900; i--){
    options += `<option value="${i}">${i}</option>`;
    
}

yearSelector.innerHTML = options;




//  Dayes Selection//
var daySelector = document.getElementById('day');
var options1 = '';


for( var i = 31;  i >= 1; i--){

    options1 += `<option value="${i}">${i}</option>`;
}

daySelector.innerHTML = options1;





//  Monthes Selection//
var monthSelector = document.getElementById('month');
var options2 = '';

for (var i = 12; i >= 1; i--){

    options2 += `<option value="${i}">${i}</option>`;
}


monthSelector.innerHTML = options2;