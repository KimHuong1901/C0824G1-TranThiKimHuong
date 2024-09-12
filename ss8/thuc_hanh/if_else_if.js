//Nếu tên nhập vào là Admin thì yêu cầu nhập mật khẩu.
// Nếu mật khẩu là TheMaster thì in ra chuỗi Welcome.
// Nếu mật khẩu nhập vào là null in ra chuỗi Canceled.
// Còn lại in ra chuỗi Wrong password.
// Nếu tên nhập vào là null in ra chuỗi canceld.
// Còn lại in ra chuỗi “I don’t know you"
let name = prompt("What is the name?");

if (name == "Admin"){
    let password = prompt("Enter the password");
    if (password == "TheMaster"){
        alert("Welcome");
    }
    else if (password == null){
        alert("Canceled");
    }
    else{
        alert("Wrong password");
    }
}
else if(name == null){
    alert("caceled");
}
else {
    alert ("I don't know you")
}