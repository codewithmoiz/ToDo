// var nameInp = document.querySelector('#name');
// var emailInp = document.querySelector('#email');
// var ageInp = document.querySelector('#age');
// var cityInp = document.querySelector('#city');

// var btn = document.querySelector('.inputs>button');

// console.log(nameInp, emailInp, ageInp, cityInp, btn);


// btn.addEventListener('click', function(){
//     if(nameInp.value == "" || emailInp.value == "" || ageInp.value == "" || cityInp.value == ""){
//         alert("Fields aren't filled!")
//     }
//     else{
//         localStorage.setItem("name",nameInp.value);
//         localStorage.setItem("email",emailInp.value);
//         localStorage.setItem("age",ageInp.value);
//         localStorage.setItem("city",cityInp.value);
//         document.querySelector('table tbody').innerHTML += `
//         <tr>
//             <td>${nameData}</td>
//             <td>${emailData}</td>
//             <td>${ageData}</td>
//             <td>${cityData}</td>
//         </tr>
// `
//     }
 
// });

// var nameData = localStorage.getItem("name");
// var emailData = localStorage.getItem("email");
// var ageData = localStorage.getItem("age");
// var cityData = localStorage.getItem("city");




var nameInp = document.querySelector('#name');
var emailInp = document.querySelector('#email');
var ageInp = document.querySelector('#age');
var cityInp = document.querySelector('#city');

var btn = document.querySelector('.inputs>button');

console.log(nameInp, emailInp, ageInp, cityInp, btn);

var idx = 0;
btn.addEventListener('click', function(){
    if(nameInp.value == "" || emailInp.value == "" || ageInp.value == "" || cityInp.value == ""){
        alert("Fields aren't filled!")
    }
    else{
        localStorage.setItem(`name${idx}`,nameInp.value);
        localStorage.setItem(`email${idx}`,emailInp.value);
        localStorage.setItem(`age${idx}`,ageInp.value);
        localStorage.setItem(`city${idx}`,cityInp.value);
    }
 ++idx;
 window.location.reload();
});

var nameData = localStorage.getItem(`name${idx}`);
var emailData = localStorage.getItem(`email${idx}`);
var ageData = localStorage.getItem(`age${idx}`);
var cityData = localStorage.getItem(`city${idx}`);

document.querySelector('table tbody').innerHTML += `
<tr>
    <td>${nameData}</td>
    <td>${emailData}</td>
    <td>${ageData}</td>
    <td>${cityData}</td>
</tr>
`