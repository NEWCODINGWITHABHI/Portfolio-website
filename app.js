
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



    let nextBtn=document.querySelector("#next");
    let prevBtn=document.querySelector("#prev");
    let imgCardes=document.querySelectorAll(".m-card");
    let cardWrapper=document.querySelector(".m-card-wrapper");
    let imgArray=[...imgCardes];

    nextBtn.addEventListener("click",nextSlider);

    function nextSlider(){
       let firstImg=imgArray[0];
       console.log("object")
       for(let i=1;i<imgArray.length;i++){
        imgArray[i-1]=imgArray[i];
       }
       imgArray[imgArray.length-1]=firstImg;

       for(let i=0;i<imgArray.length;i++){
        cardWrapper.appendChild(imgArray[i]);
       }
    }
    prevBtn.addEventListener("click",prevSlider);

    function prevSlider(){
       let lastImg=imgArray[imgArray.length-1];
       console.log("object")
       for(let i=imgArray.length-1;i>0;i--){
        imgArray[i]=imgArray[i-1];
       }
       imgArray[0]=lastImg;

       for(let i=0;i<imgArray.length;i++){
        cardWrapper.appendChild(imgArray[i]);
       }
    }

    let imageIntervalId=setInterval(nextSlider,3000)
