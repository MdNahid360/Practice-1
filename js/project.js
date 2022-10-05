let pId = "no";
let projectBox = document.getElementById('prBox')

function manageProject() {
    let name = document.getElementById('name').value;
    let img = document.getElementById('img').value;
    let link = document.getElementById('link').value;
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    projectBox.classList.toggle('d-none')
    let prj={
        img : img,
        name : name,
        link : link,
        title : title,
        date : date
    }
//    let pName = prj.name;
   if (pId == 'no') {
            let arr = getData();
            if (arr == null) {
                let data = [prj]
                setData(data)
            }else{
                arr.push(prj);
                setData(arr)
            }
   }
   else{
       let arr = getData();
       arr[pId].name = name;
       arr[pId].img = img;
       arr[pId].title = title;
       arr[pId].link = link;
       arr[pId].date = date;
       
       setData(arr);
   }

 projectData();
 document.getElementById('name').value = ''
 document.getElementById('img').value = ''
 document.getElementById('title').value = ''
 document.getElementById('link').value = ''
 document.getElementById('date').value = ''
   
}

function projectData() {
    let arr = getData();
    if (arr != null) {
        let template = '';
    for (let i = 0; i < arr.length; i++) {
        let pData = arr[i];
         template += `
           <div id="nns1" class="card">
                        <div style="background-image:url(${pData.img}); background-size:cover; "  class="thu-img">
                           
                        </div>
                        <h5>${pData.name}</h5>
                        <a href="#" class="text-success"><i class="fa-solid fa-share-from-square"></i> ${pData.link}</a>
                        <small class="text-muted summary-box mt-2">
                        ${pData.title}
                        </small>
                        <div class="d-between">
                            <div class="badge badge-danger p-2">${pData.date}</div>
                            <div class="all-center">
                                <button onclick="edit(${i})" class="icn-btn btn">
                                    <i class="fa fa-edit text-info"></i>
                                </button>
                                 <button onclick="remove(${i})" class="icn-btn btn ">
                                    <i class="fa fa-trash text-danger"></i>
                                </button>
                            </div>
                        </div>
                    </div>
         
         `
         document.getElementById('nss').innerHTML = template;
    }
    }
}
projectData()
function edit(rId) {

    projectBox.classList.remove('d-none')
    
    pId = rId;
    let arr = getData();
    document.getElementById('name').value = arr[rId].name;
    document.getElementById('img').value = arr[rId].img;
    document.getElementById('link').value = arr[rId].link;
    document.getElementById('title').value = arr[rId].title;
    document.getElementById('date').value = arr[rId].date;
}
function remove(rData) {
    let arr = getData();
    arr.splice(rData, 1);
    setData(arr);
    projectData();
    location.reload();
}

function getData() {
    let arr = JSON.parse(localStorage.getItem('project'));
    return arr
}

function setData(p) {
    let arr = localStorage.setItem('project', JSON.stringify(p))
    return arr;
   
}
function prjBtn() {
    projectBox.classList.toggle('d-none')
    
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