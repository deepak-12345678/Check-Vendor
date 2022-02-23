function clearErrors()
{
    var error=document.querySelectorAll(".formerror")
    for (let item of error){
        item.innerHTML="";
    }
    const input=document.querySelectorAll("input")
    for (let item of input){
        if (item.classList.contains("border")){
            item.classList.remove("border");
        }

    }

}
function setError(id,errorMsgs){
    // const input=document.querySelectorAll("input")
    let cup=document.getElementById(id)
    cup.innerText=""+errorMsgs
    // for (let item of input){
    //     item.classList.add("border")
    // }
    
    
    
}
// const val = document.querySelector('input').value;
function validateForm(){
    var returnVal=true
    clearErrors()
    var name=document.querySelector(".name").value;
    var number=document.querySelector(".number").value;
    var email=document.querySelector(".email").value;
    var studentID=document.querySelector(".studentID").value;
    var pass=document.querySelector(".pass").value;
    
    if (name.length<5){
        const input=document.querySelector("input")
        setError("fname","*Length of name is too small")
        input.classList.add("border")
        returnVal=false
    }
    else if  (name.length>20){
        const input=document.querySelector("input")
        setError("fname","*Length of name is too big")
        input.classList.add("border")
        returnVal=false
    }
    if (number.length!==10){
        const input=document.querySelector(".number")
        setError("fnumber","*Please enter a valid 10 digit mobile number")
        input.classList.add("border")
        returnVal=false
    }
    if (pass.length>10){
        const input=document.querySelector(".pass")
        setError("passw","*The length of password is very long")
        input.classList.add("border")
        returnVal=false
    }
    return returnVal;

}
//f20212214@pilani.bits-pilani.ac.in
//2021A7PS2214P