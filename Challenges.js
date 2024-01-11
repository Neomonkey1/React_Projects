//form
function validateForm(){
    let x = document.forms['myForm']['name','phone'].value;
    if (x == ""){
        alert('all fields must be filled out');
        return false;
    }
}
//Popup form
function openForm(){
    document.getElementById('myForm2').style.display = "block";
}
function closeForm(){
    document.getElementById("myForm2").style.display = "none";
}