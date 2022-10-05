function signUp() {
    //validate check
    let checkValid = document.getElementById('vld');
     let nEmail = document.getElementById('email');
    let emailError = document.getElementById('emailErr');
     if (!nEmail.checkValidity()) {
      emailError.innerHTML = (nEmail.validationMessage);
      checkValid.classList.add('validate-on');
      console.log(checkValid);
    }else{
         emailError.innerHTML = "";
        checkValid.classList.remove('validate-on')
    }

    //storage data in localStorage
let fName = document.getElementById('fName').value;
let lName = document.getElementById('lName').value;
let email = document.getElementById('email').value;
let age = document.getElementById('age').value;
let dateOfBirth = document.getElementById('date').value;
let profileImg = document.getElementById('profilePic').value;
let gender = document.getElementById('gender').value;
let password = document.getElementById('password').value;

    let user = {
        fName : fName,
        lName : lName,
        email : email,
        age   : age,
        dateOfBirth : dateOfBirth,
        profileImg : profileImg,
        gender : gender,
        password : password,
    }
    let cnvtJson = JSON.stringify(user);
    localStorage.setItem("user", cnvtJson);
    console.log(user);

    let getUerData = localStorage.getItem("user");
    let data = JSON.parse(getUerData);
    if (data.email === email && data.password === password) {
        window.location.href="../index.html";
    }

}
// localStorage.clear();
function signIn() {

    // sign in account and routing
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

    let getUser = localStorage.getItem('user');
    let data = JSON.parse(getUser);

    if (data.email === email && data.password === password) {
           window.location.href="../index.html";
           localStorage.setItem('code', 'secret')
    
    }else{

    }


    //sign in validate check
     let checkValid = document.getElementById('vld');
     let nEmail = document.getElementById('email');
     let nPassword = document.getElementById('password');

    let emailError = document.getElementById('emailErr');
    let passError = document.getElementById('passwordErr');
   
    if (!nEmail.checkValidity()) {
      emailError.innerHTML = (nEmail.validationMessage);
      checkValid.classList.add('validate-on');
 
    }
    
    if (!nPassword.checkValidity()) {
      passError.innerHTML = (nPassword.validationMessage);
      passError.classList.add('text-danger');

    }
    
    else{
         emailError.innerHTML = "";
         passError.innerHTML = "";
        checkValid.classList.remove('validate-on')
         passError.classList.remove('text-danger');
    }
}

// display user name in index page
function displayName() {
let user = localStorage.getItem('user');
let data = JSON.parse(user)
let setName = document.getElementById('displayInfo');
setName.innerHTML = `Hi <i class="fa fa-hand text-warning"></i>  <span class="text-danger" id="ds">${data.fName}  ${data.lName}</span>`
}
displayName();

//ser profile
function setProfile(){
    let profileBtn = document.getElementById('profile');
    let user = localStorage.getItem('user');
    let data = JSON.parse(user);
    profileBtn.innerHTML = `<img src="${data.profileImg}" alt=""  class="img-fluid">
`;
}
setProfile();

//profile box in navbar

function profile() {
    let profileBox = document.getElementById('profileBox')
    profileBox.classList.toggle('d-none');

}

function setProfileInfo() {
    let profileBox = document.getElementById('profileBox')
    let user = localStorage.getItem('user');
    let data = JSON.parse(user);
    let name = data.fName + " " + data.lName;
    profileBox.innerHTML = `
         <div class="prf-img-box" id="nRout">
                                    <img src="${data.profileImg}" class="img-fluid" alt="">
                                </div>
                                <h5 class="mt-2 m-tx">${name}</h5>
                                <p class="text-muted  ml-fx">${data.email}</p>
                                <a href="page/profile.html" class="btn btn-danger ml-fx">View Profile</a>
                                <hr>
                                <ul class="list-unstyled ml-fx">
                                    <li class="l-item">
                                        <a href="#" class="link-item">
                                        <i class="uil sm-icn uil-video"></i> <span class="ml-2">Conceptual Sessions</span>
                                        </a>
                                    </li>
                                    <li class="l-item">
                                        <a href="page/logout.html" class="link-item">
                                            <i class="uil uil-signout"></i>
                                            <span class="ml-2"> Log out</span>
                                        </a>
                                    </li>
                                </ul>

    `
}
setProfileInfo();

//preloader
let loding1 = document.getElementById('loding1')
function preloader() {
    setTimeout(function(){
        loding1.style.display = 'none';
    },2000)
}

// dark mode index page 
 let toggleBtn = document.getElementById('toggleBtn');
                let body = document.body;
                
                let darkMode = localStorage.getItem('dark-mode');

                const enableDarkMode = () => {
                    toggleBtn.classList.replace('fa-sun', 'fa-moon');
                    body.classList.add('dark');
                    localStorage.setItem('dark-mode', 'enabled');
                }

                const disableDarkMode = () => {
                    toggleBtn.classList.replace('fa-moon', 'fa-sun');
                    body.classList.remove('dark');
                    localStorage.setItem('dark-mode', 'disable');
                }
                if (darkMode === 'enabled') {
                    enableDarkMode();
                }
                toggleBtn.onclick = () => {
                    darkMode = localStorage.getItem('dark-mode');
                    if (darkMode === 'disable') {
                        enableDarkMode();
                    } else {
                        disableDarkMode();
                    }
                }