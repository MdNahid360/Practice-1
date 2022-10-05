 function setProfile() {
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
                                <a href="../page/profile.html" class="btn btn-danger ml-fx">View Profile</a>
                                <hr>
                                <ul class="list-unstyled ml-fx">
                                    <li class="l-item">
                                        <a href="#" class="link-item">
                                        <i class="uil sm-icn uil-video"></i> <span class="ml-2">Conceptual Sessions</span>
                                        </a>
                                    </li>
                                    <li class="l-item">
                                        <a id="../page/logout.html" href="../page/logout.html" class="link-item">
                                            <i class="uil uil-signout"></i>
                                            <span class="ml-2"> Log out</span>
                                        </a>
                                    </li>
                                </ul>

    `
        }
        setProfileInfo();

        //home page navigation
        function menu() {
            let sideBar = document.getElementById('sideBar');
            let logoMd = document.getElementById('logoMd');
            sideBar.classList.toggle('active-menu');
            logoMd.classList.toggle('d-none')
        }

let form = document.getElementById('employeeForm');
// CRUD operation start 
// data inserting
let id='no';
function manageData(){

    let name = document.getElementById('eName').value;
    let email = document.getElementById('eEmail').value;
    let address = document.getElementById('eAddress').value;
     let phone = document.getElementById('eNumber').value;
    let joined = document.getElementById('eJoined').value;
    let post = document.getElementById('ePost').value;
    let salary = document.getElementById('eSalary').value;
    let emp ={
        name : name,
        email : email,
        address : address,
        phone : phone,
        joined : joined,
        post : post,
        salary : salary
    }
   let nm = emp.name;
   let ml = emp.email;
   let ad = emp.address;
   let phn = emp.phone;
   let join = emp.joined;
   let ps = emp.post;
   let slr = emp.salary;
   if (nm == '' && ml == '' && ad == '' && phn == '' && join == '' && ps == '' && slr == '') {
       alert('please filed all input');
      form.classList.add('d-block')
   }
   else{
          form.classList.remove('d-block')
     if (id == 'no') {
        let arr = getData();
        if(arr == null){
                let data = [emp];
                setData(data);
        }else{
            arr.push(emp);
            setData(arr);
        }
    }
    else{
        
        // update data
        let arr = getData();
       arr[id].name = name;
       arr[id].email = email;
       arr[id].address = address;
       arr[id].phone = phone;
       arr[id].joined = joined;
       arr[id].salary = salary;
       arr[id].post = post;
   

       setData(arr);
       location.reload();

    }
    selectData();
   }
   

     document.getElementById('eName').value = '';
   document.getElementById('eEmail').value = '';
  document.getElementById('eAddress').value = '';
    document.getElementById('eNumber').value = '';
    document.getElementById('eJoined').value = '';
  document.getElementById('ePost').value = '';
   document.getElementById('eSalary').value = '';
 
    form.classList.toggle('d-none')


}


// user data set in DOM 
function selectData() {
    let arr = getData();
    if (arr != null) {
        let html = '';
        for (let i = 0; i < arr.length; i++) {
            let data = arr[i];

            html += `
             <tr scope="row">
                        <td id="td${i}" class="e-img">
                            <img src="../img/employee.png" class="img-fluid e-img-sm" alt="">
                        </td>
                        <td>${data.name}</td>
                        <td>${data.email}</td>
                        <td>${data.address}</td>
                         <td>${data.phone}</td>
                        <td>${data.joined}</td>
                        <td class="text-info"><b>৳</b> ${data.salary}</td>
                        <td>${data.post}</td>

                        <td id="type${i}class="text-success ">
                            <a href="https://mail.google.com" target="_blank" class="btn" tooltip="Send Mail">
                                <i class="fa fa-envelope ac-icn text-success"></i>
                            </a>
                        </td>
                        <td class="btn-group">
                            <div class="btn" onclick="editData(${i})">
                                <i class="fa fa-edit ac-icn text-indego"></i>
                            </div>
                            <div class="btn" onclick="deleteData(${i})">
                                 <i class="fa fa-trash-alt ac-icn text-danger"></i>
                            </div>
                        </td>
                </tr>
            `;
            document.getElementById('tableBody').innerHTML = html;
        }
    }
}
selectData()
//edit operation
function editData(rId) {
    id=rId;
    let arr = getData();
     document.getElementById('eName').value = arr[rId].name;
   document.getElementById('eEmail').value = arr[rId].email;
  document.getElementById('eAddress').value = arr[rId].address;
    document.getElementById('eNumber').value = arr[rId].phone;
document.getElementById('eJoined').value = arr[rId].joined;
  document.getElementById('ePost').value = arr[rId].post;
   document.getElementById('eSalary').value = arr[rId].salary;
   setData[arr];
  //  location.reload();
    form.classList.toggle('d-none')

}
//delete operation
function deleteData(rData) {
    let arr = getData();
    arr.splice(rData, 1);
    setData(arr);
    selectData();
    // location.reload();
        // form.classList.toggle('d-none')
}
//get localStorage data     
function getData() {
    let arr = JSON.parse(localStorage.getItem('employee'));
    return arr;
}
//set localStorage data
function setData(s) {
    let arr = localStorage.setItem('employee', JSON.stringify(s));
    return arr;
}

// function clr() {
//     localStorage.clear();
// }

// employee form toggle
addBtn = document.getElementById('addBtn').addEventListener('click', () =>{
    form.classList.toggle('d-none')
});


// page reload 
document.getElementById('reload').addEventListener('click', () =>{
    location.reload();
})

