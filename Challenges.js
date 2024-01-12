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
//Popup sticky form2
function openForm2(){
    document.getElementById('myForm3').style.display = "block";
}
function closeForm2(){
    document.getElementById("myForm3").style.display = "none";
}