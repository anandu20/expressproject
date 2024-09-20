document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();  //page reload can be stopped
    const name=document.getElementById("name").value;
    const age=parseInt(document.getElementById("age").value);
    const dob=document.getElementById("dob").value;
    const place=document.getElementById("place").value;
    const phone=parseInt(document.getElementById("phone").value);
    const blood_group=document.getElementById("blood_group").value;
    fetch("http://localhost:3001/api/adddonor",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,age,dob,place,phone,blood_group})
    }).then((res)=>{
        console.log(res);
        if(res.status==201){
            alert("success");
        }
        else if(res.status==400){
            alert("phone number already exist")
        }
        else{
            alert("error")
        }
        
    }).catch((error)=>{
        console.log(error);
        
    });
})