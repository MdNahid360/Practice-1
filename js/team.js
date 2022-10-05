let tId = "no";
function teamSubmit() {
     let btn = document.getElementById('teamBox');
   btn.classList.toggle('d-none');
    let teamImg = document.getElementById('teamImg').value;
    let teamName = document.getElementById('teamName').value;
    let teamTitle = document.getElementById('teamTitle').value;
    let linkedin = document.getElementById('linkedin').value;
    let github = document.getElementById('github').value;
    let team={
        img : teamImg,
        name : teamName,
        title : teamTitle,
        linkedin : linkedin,
        github : github
    }
    if (tId == "no") {
        let arr = getData();
        if (arr == null) {
           let data = [team];
           setData(data);
        }else{
            arr.push(team);
            setData(arr);
        }
    }else{
        let arr = getData();
        arr[tId].img = teamImg;
        arr[tId].name = teamName;
        arr[tId].title = teamTitle;
        arr[tId].linkedin = linkedin;
        arr[tId].github = github;
        setData(arr);
        location.reload();
         let btn = document.getElementById('teamBox');
   btn.classList.toggle('d-none');
    }
    document.getElementById('teamImg').value = "";
    document.getElementById('teamName').value = "";
document.getElementById('teamTitle').value = "";
   document.getElementById('linkedin').value = "";
   document.getElementById('github').value = "";
    setTeamData();
}

function setTeamData() {
    let arr = getData();
    let template = '';
    if (arr != null) {
        for (let i = 0; i < arr.length; i++) {
            let tData = arr[i];
            template += `
              <div class="team-card">
                        <div style="background-image: url(${tData.img});" class="team-img">
                        </div>
                        <div class="team-card-body" align="center"><br>
                            <h4 class="mt-5">${tData.name}</h4>
                            <small class="text-muted">${tData.title}</small>
                            <div class="social-box mt-3">
                                <a href="${tData.linkedin}" id="linkedinLin" class="btn i-btn m-2">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                                <a href="${tData.github}" id="gth" class="btn i-btn m-2">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                                 <a href="#" id="mail" class="btn i-btn m-2">
                                    <i class="fa fa-envelope"></i>
                                </a>
                            </div>
                            <div class="d-between mt-2">
                                <button onclick="teamEdit(${i})" class="btn edit-btn-t"><i class="fa fa-edit"></i> Edit</button>
                                <button onclick="teamRemove(${i})" class="btn delete-btn-t"><i class="fa fa-trash"></i> Delete</button>
                            </div>
                        </div>
                    </div>       
            `
            document.getElementById('teamMembers').innerHTML = template;
        }
        
    }
}

setTeamData();

function teamEdit(eId) {
    tId = eId;
    let arr = getData();
    document.getElementById('teamName').value = arr[eId].name;
    document.getElementById('teamImg').value= arr[eId].img
   document.getElementById('teamTitle').value= arr[eId].title
   document.getElementById('linkedin').value= arr[eId].linkedin
  document.getElementById('github').value= arr[eId].github;
    let btn = document.getElementById('teamBox');
   btn.classList.toggle('d-none');
   
}

function teamRemove(mId) {
    let arr = getData();
    arr.splice(mId, 1);
    setData(arr);
    setTeamData();
  //  location.reload();
}

function getData() {
    let arr = JSON.parse(localStorage.getItem('team'));
    return arr;
}
function setData(t) {
    let arr = localStorage.setItem('team', JSON.stringify(t));
    return arr;
}

function teamBtn() {
   let btn = document.getElementById('teamBox');
   btn.classList.toggle('d-none');
}

// dark mode 
// function mode() {
    
//  let toggleBtn = document.getElementById('toggleBtn');
                
//                 let body = document.body;

//                 let darkMode = localStorage.getItem('dark-mode');

//                 const enableDarkMode = () => {
//                     toggleBtn.classList.replace('fa-sun', 'fa-moon');
//                     body.classList.add('dark');
//                     localStorage.setItem('dark-mode', 'enabled');
//                 }

//                 const disableDarkMode = () => {
//                     toggleBtn.classList.replace('fa-moon', 'fa-sun');
//                     body.classList.remove('dark');
//                     localStorage.setItem('dark-mode', 'disable');
//                 }
//                 if (darkMode === 'enabled') {
//                     enableDarkMode();
//                 }
//                 toggleBtn.onclick = () => {
//                     darkMode = localStorage.getItem('dark-mode');
//                     if (darkMode === 'disable') {
//                         enableDarkMode();
//                     } else {
//                         disableDarkMode();
//                     }
//                 }
// }
// mode();