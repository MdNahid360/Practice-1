let n = gItem();
document.getElementById('personalInfo').innerHTML = `
 <h4>Your Personal Information</h4>    
                <small class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio ut accusantium deleniti magni, saepe at! Officia omnis dolor, soluta quos voluptate numquam provident animi in porro incidunt culpa consequuntur.</small>        
               <h6 class="mt-3"> First Name</h6>
               <p class="dFname text-muted">${n.fName}</p>

            <h6> Last Name</h6>
            <p class="dLname text-muted">${n.lName}</p>

            <h6> Email</h6>
            <p class="eEmail text-muted">${n.email}</p>

            <h6> Age</h6>
            <p class="dAge text-muted">${n.age}</p>

            <h6>Death of birth</h6>
            <p class="dAge text-muted">${n.dateOfBirth}</p>

            <h6> Gender</h6>
            <p class="dGender text-muted">male</p>

            <h6>Password</h6>
            <p class="dPassword text-muted">${n.password}</p>

`
let profilePic = document.getElementById('profilePic')
profilePic.innerHTML =`
 <div class="set-img" style=" background-image: url(${n.profileImg});"></div>
`
document.getElementById('fullName').innerText = n.fName+" "+n.lName;
let prfId = "no"
function pEdit() {
    let add = document.getElementById('add');
    let fmBox = document.getElementById('fmBox');
    add.classList.toggle('d-none')
    fmBox.classList.toggle('d-none');
    // set data in input box

     
    let arr = gItem();
    document.getElementById('firstName').value = arr.fName;
    document.getElementById('lastName').value = arr.lName;
    document.getElementById('pImg').value = arr.profileImg;
    document.getElementById('pEmail').value = arr.email;
    document.getElementById('pGender').value = arr.gender;
    document.getElementById('pAge').value = arr.age;
    document.getElementById('eDate').value = arr.dateOfBirth;
    document.getElementById('pPassword').value = arr.password;
  
     prfId = "yes";

}

function setProfile() {
        let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let pImg = document.getElementById('pImg').value;
    let pEmail = document.getElementById('pEmail').value;
    let pGender = document.getElementById('pGender').value;
    let pAge = document.getElementById('pAge').value;
    let eDate = document.getElementById('eDate').value;
    let pPassword = document.getElementById('pPassword').value;

    let arr = gItem()
    arr.fName = document.getElementById('firstName').value;
    arr.lName = document.getElementById('lastName').value;
    arr.profileImg = document.getElementById('pImg').value;
    arr.email = document.getElementById('pEmail').value;
    arr.gender = document.getElementById('pGender').value;
    arr.age = document.getElementById('pAge').value;
    arr.dateOfBirth = document.getElementById('eDate').value;
    arr.password = document.getElementById('pPassword').value;

    sItem(arr);

    // display personal information in dom
    let personalInfo = document.getElementById('personalInfo');
    let setData = gItem();
    
    personalInfo.innerHTML = `
      <h4>Your Personal Information</h4>    
                <small class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio ut accusantium deleniti magni, saepe at! Officia omnis dolor, soluta quos voluptate numquam provident animi in porro incidunt culpa consequuntur.</small>        
               <h6 class="mt-3"> First Name</h6>
               <p class="dFname text-muted">${setData.fName}</p>

            <h6> Last Name</h6>
            <p class="dLname text-muted">${setData.lName}</p>

            <h6> Email</h6>
            <p class="eEmail text-muted">${setData.email}</p>

            <h6> Age</h6>
            <p class="dAge text-muted">${setData.age}</p>
            
            <h6>Death of birth</h6>
            <p class="dAge text-muted">${setData.dateOfBirth}</p>

            <h6> Gender</h6>
            <p class="dGender text-muted">mail</p>

            <h6>Password</h6>
            <p class="dPassword text-muted">${setData.password}</p>
    
    `
let profilePic = document.getElementById('profilePic')
profilePic.innerHTML =`
 <div class="set-img" style=" background-image: url(${setData.profileImg});"></div>
`
document.getElementById('fullName').innerText = setData.fName+" "+setData.lName;

}

function gItem() {
   let arr = JSON.parse(localStorage.getItem('user'));
   return arr
}

function sItem(p) {
    localStorage.setItem('user', JSON.stringify(p))
}
