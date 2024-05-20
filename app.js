var form = document.getElementById("myForm"),
        userName = document.getElementById("name"),
    city = document.getElementById("city"),
    email = document.getElementById("email"),
    sDate = document.getElementById("sDate"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    newUserBtn = document.querySelector(".newUser")


let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Submit',
    modalTitle.innerText = "Fill the Form"
    isEdit = false
    imgInput.src = "./image/Profile Icon.webp"
    form.reset()
})




function showInfo(){
    document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails">
            <td>${index+1}</td>
            <td>${element.employeeName}</td>
            <td>${element.employeeCity}</td>
            <td>${element.employeeEmail}</td>
            <td>${element.startDate}</td>


            <td>
                
                <button class="btn btn-primary" onclick="editInfo(${index},  '${element.employeeName}',  '${element.employeeCity}', '${element.employeeEmail}',  '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

                <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
                            
            </td>
        </tr>`

        userInfo.innerHTML += createElement
    })
}
showInfo()


function readInfo( name ,city, email, sDate){
    document.querySelector('#showName').value = name,
    document.querySelector("#showCity").value = city,
    document.querySelector("#showEmail").value = email,
    document.querySelector("#showsDate").value = sDate
}


function editInfo(index, name, City, Email, Sdate){
    isEdit = true
    editId = index
    userName.value = name
    city.value =City
    email.value = Email,
    sDate.value = Sdate

    submitBtn.innerText = "Update"
    modalTitle.innerText = "Update The Form"
}


function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1)
        localStorage.setItem("userProfile", JSON.stringify(getData))
        showInfo()
    }
}


form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const information = {
        employeeName: userName.value,
        employeeCity: city.value,
        employeeEmail: email.value,
        startDate: sDate.value
    }

    if(!isEdit){
        getData.push(information)
    }
    else{
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('userProfile', JSON.stringify(getData))

    submitBtn.innerText = "Submit"
   

    showInfo()

    form.reset()

  

})