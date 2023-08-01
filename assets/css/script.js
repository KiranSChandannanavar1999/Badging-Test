let name = document.getElementById("name");
let mobile = document.getElementById("mobile");
let email = document.getElementById("email");
let image = document.getElementById("image");

function deleteData(event){
   event.preventDefault()
   const nameKey = "User Name";
   const nameValue = name.Value;

   const mobileKey = "User Mobile";
   const mobileValue = mobile.value;

   const emailKey ="User Email";
   const emailValue = email.value;

   const imageKey = "User Image";
   const imageValue = image.value;

   if(nameKey && nameValue) 
   {
    localStorage.setItem(nameKey,nameValue);
    localStorage.setItem(mobileKey,mobileValue);
    localStorage.setItem(emailKey,emailValue);
    localStorage.setItem(imageKey.imageValue);
   }
    else {
        alert("Enter The User Details")
    }
}
for(let index=0; index<localStorage.length; index++)
{
    const nameValue=localStorage.getItem("User Name");
    const mobileValue=localStorage.getItem("User Mobile");
    const emailValue=localStorage.getItem("User Email");
    const imageValue=localStorage.getItem("User Image");
    console.log(nameValue,mobileValue,emailValue,imageValue)
}