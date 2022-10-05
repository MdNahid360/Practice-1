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
                                        <a id="logoutCrt" href="../page/logout.html" class="link-item">
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

        // Wrap every letter in a span
        var textWrapper = document.querySelector('.ml10 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: true })
            .add({
                targets: '.ml10 .letter',
                rotateY: [-90, 0],
                duration: 1300,
                delay: (el, i) => 45 * i
            }).add({
                targets: '.ml10',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });

        // table data manage 
        let employee = [
            {
                pic: "../img/nahid.jpg",
                name: "md nahid",
                email: "n@g.com",
                address: "Mymenshingh",
                number: 01303531371,
                date: "02/05/22",
                cv: "mycv.pdf",
            }, {
                pic: "https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/161362363_489298818995018_8864891515418570311_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE8Y82l8HvlN6QU-V5QQpOnAEzzSLmy938ATPNIubL3f-jRAc6CJpE9bDXLYrCh0Mk1qBX2XLTf5JGiio_2oDFH&_nc_ohc=ieCfVoQ_vSkAX9ih6Yo&_nc_zt=23&_nc_ht=scontent.fdac2-1.fna&oh=00_AT9w_allVhfRyHTphRG4cj8yJI7HjTDRBYdXXAPxB11rQg&oe=632EB49A",
                name: "Nadim Hassan",
                email: "nadimhassan@g.com",
                address: "Kumillah",
                number: 01303531372,
                date: "02/05/22",
                cv: "mycv.pdf",
            }, {
                pic: "https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-1/53516224_106674613829417_3521557966480211968_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEnie-y2nes_sU3fU_GGHIW1fpVhDraYbzV-lWEOtphvJ9xKwpaugWCnd1-G2aMgca0G8XdeVIni_yHaTZhrDl_&_nc_ohc=pXYOF7kwH2kAX_x376K&_nc_ht=scontent.fdac2-1.fna&oh=00_AT_9h5xHeYNWPxxaHu6QpHg48fpZG6Wl34hMZGChLFtxxA&oe=634FAEBC",
                name: "Mh Murshed",
                email: "murshed@gmail.com",
                address: "Mymenshingh",
                number: 01303531373,
                date: "02/05/22",
                cv: "murshed.pdf",
            }
            , {
                pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHp0V8Csfa8uHwG1-W27HbWhYzce8NF1amX-K57o61IcHuORgb4vud-6kBhEHI9WDdGY&usqp=CAU",
                name: "Employee 1",
                email: "employee@gmail.com",
                address: "Mymenshingh",
                number: 876575453687,
                date: "02/05/22",
                cv: "mycv.pdf",
            }, {
                pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHp0V8Csfa8uHwG1-W27HbWhYzce8NF1amX-K57o61IcHuORgb4vud-6kBhEHI9WDdGY&usqp=CAU",
                name: "Employee 2",
                email: "employee@gmail.com",
                address: "Mymenshingh",
                number: 876575453687,
                date: "02/05/22",
                cv: "mycv.pdf",
            }, {
                pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHp0V8Csfa8uHwG1-W27HbWhYzce8NF1amX-K57o61IcHuORgb4vud-6kBhEHI9WDdGY&usqp=CAU",
                name: "Employee 3",
                email: "employee@gmail.com",
                address: "Mymenshingh",
                number: 876575453687,
                date: "02/05/22",
                cv: "mycv.pdf",
            }, {
                pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHp0V8Csfa8uHwG1-W27HbWhYzce8NF1amX-K57o61IcHuORgb4vud-6kBhEHI9WDdGY&usqp=CAU",
                name: "Employee 4",
                email: "employee@gmail.com",
                address: "Mymenshingh",
                number: 876575453687,
                date: "02/05/22",
                cv: "mycv.pdf",
            }, {
                pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHp0V8Csfa8uHwG1-W27HbWhYzce8NF1amX-K57o61IcHuORgb4vud-6kBhEHI9WDdGY&usqp=CAU",
                name: "Employee 5",
                email: "employee@gmail.com",
                address: "Mymenshingh",
                number: 876575453687,
                date: "02/05/22",
                cv: "mycv.pdf",
            }, {
                pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHp0V8Csfa8uHwG1-W27HbWhYzce8NF1amX-K57o61IcHuORgb4vud-6kBhEHI9WDdGY&usqp=CAU",
                name: "Employee 6",
                email: "employee@gmail.com",
                address: "Mymenshingh",
                number: 876575453687,
                date: "02/05/22",
                cv: "mycv.pdf",
            }, {
                pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHp0V8Csfa8uHwG1-W27HbWhYzce8NF1amX-K57o61IcHuORgb4vud-6kBhEHI9WDdGY&usqp=CAU",
                name: "Employee 7",
                email: "employee@gmail.com",
                address: "Mymenshingh",
                number: 876575453687,
                date: "02/05/22",
                cv: "mycv.pdf",
            }, {
                pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHp0V8Csfa8uHwG1-W27HbWhYzce8NF1amX-K57o61IcHuORgb4vud-6kBhEHI9WDdGY&usqp=CAU",
                name: "Employee 8",
                email: "employee@gmail.com",
                address: "Mymenshingh",
                number: 876575453687,
                date: "02/05/22",
                cv: "mycv.pdf",
            }, {
                pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHp0V8Csfa8uHwG1-W27HbWhYzce8NF1amX-K57o61IcHuORgb4vud-6kBhEHI9WDdGY&usqp=CAU",
                name: "Employee 9",
                email: "employee@gmail.com",
                address: "Mymenshingh",
                number: 876575453687,
                date: "02/05/22",
                cv: "mycv.pdf",
            }, {
                pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHp0V8Csfa8uHwG1-W27HbWhYzce8NF1amX-K57o61IcHuORgb4vud-6kBhEHI9WDdGY&usqp=CAU",
                name: "Employee 10",
                email: "employee@gmail.com",
                address: "Mymenshingh",
                number: 876575453687,
                date: "02/05/22",
                cv: "mycv.pdf",
            }
        ];

        let count = 0;
        employee.map(function (data) {
            count += 1;
            let tableBody = document.getElementById('tableBody');
            let tr = document.createElement('tr');
            tr.setAttribute('id', `${count}`);
            tr.classList.add('ntr');
            
            tr.innerHTML = `
                  <th scope="row" id="td${count}" class="e-img">
                                <img src="${data.pic}" class="img-fluid e-img-sm" alt="">
                                </th>
                                <td>${data.name}</td>
                                <td>${data.email}</td>
                                <td>${data.address}</td>
                                <td>${data.number}</td>
                                <td>${data.date}</td>
                                <td><a href="${data.cv}" class="text-decoration-underline">nahid.pdf</a></td>
                                <td id="type${count}" class="text-success ">
                                  Pending...
                                </td>
                                <td class="btn-group d-flex justify-content-between">
                                    <button id="${count}" onclick="approve(this)" class="btn btn-primary">Approve</button>

                                    <button id="${count}" onclick="reject(this)" class="btn btn-warning">Reject</button>
                                    
                                    <button id=${count} onclick="remove(this)" class="btn btn-danger"><i class="fa-solid fa-trash-alt"></i></button>
                                </td>                
                
                `;
            tableBody.appendChild(tr);
            x(count);
       
        });

   
        
           function x() {
              let x = document.getElementById('totalCv');
              let tbl = document.getElementById('tableBody');
              let q = tbl.getElementsByTagName('tr').length;
               x.innerText = q;
            }

        function remove(btn) {
            let number = btn.id;
            let mkTr = document.getElementById(number);
            mkTr.remove();
             let x = document.getElementById('totalCv');
              let tbl = document.getElementById('tableBody');
              let q = tbl.getElementsByTagName('tr').length;
               x.innerText = q;
            
        }
        function reject(rj) {
            let setId = rj.id;
            let rejectUser = document.getElementById('type' + setId);
            console.log(rejectUser);
            rejectUser.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Rejected`;
            rejectUser.classList.remove('text-primary')
            rejectUser.classList.add('text-danger')
        }
        function approve(apr) {
            let setId = apr.id;
            let rejectUser = document.getElementById('type' + setId);
            rejectUser.innerHTML = `<i class="fa-solid fa-circle-check"></i> Approved`;
            rejectUser.classList.remove('text-danger')
            rejectUser.classList.add('text-primary')
        }


        // search employee  
        function filterUser() {
            let input, filter, tbody, tr, td, textValue;
            input = document.getElementById('searchEployee');
            filter = input.value.toUpperCase();
            tbody = document.getElementById('tableBody');
            tr = tbody.getElementsByTagName("tr");
         
            for (let i = 0; i < tr.length; i++) {
                const td = tr[i].getElementsByTagName("td")[1];
                
                if (td) {
                    textValue = td.textContent || td.innerHTML;
                    if (textValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    

                          let x = document.getElementById('totalCv');
                        let totalEmp = document.getElementById('totalEmp');
                          let q = tr.length;
                          x.innerText = q;
                          totalEmp.innerText = q;
                    } else {
                        tr[i].style.display = "none";
                        
                    }
                }

            }

            
        }
        //    download employee submited CV list
        function downloadTable() {
            let table = document.getElementById("table");
            var opt = {
                margin: 0,
                padding:40,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(table).set(opt).save();
        }
        
let  totalEmployees = JSON.parse(localStorage.getItem('employee')).length;
document.getElementById('totalEmp').innerText = totalEmployees;

// preloader
let loding2 = document.getElementById('loding2')
function preloader() {
    setTimeout(function(){
        loding2.style.display = 'none';
    },1000)
}

function setEmployees() {
    
let a = localStorage.getItem('employee');
let pData = JSON.parse(a)
for (let i = 0; i < pData.length; i++) {
   document.getElementById('totalEmp').innerText = i + 1
}
}
setEmployees();

function setProjects() {
    
let a = localStorage.getItem('project');
let pData = JSON.parse(a)
for (let i = 0; i < pData.length; i++) {
   document.getElementById('totalProject').innerText = i + 1
}
}
setProjects();

function totalTeam() {
    let a = localStorage.getItem('team');
    let b = JSON.parse(a);
    for (let i = 0; i < b.length; i++) {
       // const teamData = b[i];
        document.getElementById('totalTeam').innerText = i + 1;
    }

}
totalTeam();

// dark mode 
