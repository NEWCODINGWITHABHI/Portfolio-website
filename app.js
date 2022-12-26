
let btn=document.getElementById("form-submit-btn");
function sendData(e){
    // e.preventDefault();
    // alert("hiii");
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;
    // console.log(name);
    // let data={
    //     userName:name,
    //     userEmail:email,
    //     userMessage:message,
    // }
    dataSubmit(name,email,message);
    console.log("hiii");
}

function dataSubmit(name,email,message){
    console.log("hiii");

fetch('https://email-data-70504-default-rtdb.firebaseio.com/',{
        method:'POST',
        headers:{
            'Context-Type':'application/json'
        },
        body:JSON.stringify({
            userName:name,
            userMessage:message,
            userEmail:email,
        })
    }).then((res)=>{
        
        alert("feedback form submitted successfully")
       return  res.json()
    })
    .then((data)=>{
        console.log(data);
       
      })
    // fetch("https://email-data-70504-default-rtdb.firebaseio.com/").then(res=>{
    //     console.log(res);
    //     return res.json();
    // }).then(data=>{
    //     console.log(data)
    //     return data;
    // })
    }


