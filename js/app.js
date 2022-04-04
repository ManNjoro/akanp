var akamname =  document.getElementById('akamname');
var day =  document.getElementById('day');
var generater = document.getElementById('generater');


const daysofweek = {
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday"
}

const daysofweekMale = {
    0:"Kwasi",
    1:"Kwadwo",
    2:"Kwabena",
    3:"Kwaku",
    4:"Yaw",
    5:"Kofi",
    6:"Kwame"
}

const daysofweekFemale = {
    0:"Akosua",
    1:"Adwoa",
    2:"Abenaa",
    3:"Akua",
    4:"Yaa",
    5:"Afua",
    6:"Ama"
}


generater.addEventListener('click',()=>{
    var gender = document.getElementById('gender').value;
    var dob = document.getElementById('dob').value;

    if (gender =='Male') {
        const datedob = new Date(dob).getDay();
        var dow =   daysofweek[datedob];
        var culturename =  daysofweekMale[datedob]
        day.innerHTML = `Your birthday is ${dow}`
        akamname.innerHTML = `Your cultural name is ${culturename}`;

        
    } 
    if (gender =='Female') {
        const datedob = new Date(dob).getDay();
        
      var dow =   daysofweek[datedob];
      var culturename =  daysofweekFemale[datedob];
      day.innerHTML = `Your birthday is ${dow}`
      akamname.innerHTML = `Your cultural name is ${culturename}`;


    }
    if (gender =='' || dob =='') {

      alert('Please Enter you birth date and gender')
      day.innerHTML = `Please enter your birthday`
      akamname.innerHTML = `Please enter Your Gender`;

    }
    
})


