async function getDonor() {
    const url=window.location.href;
    const urlParams=new URLSearchParams(url.split("?")[1]);
    const id=urlParams.get("id");
    const res=await fetch(`http://localhost:3001/api/getdonor/${id}`)
    const donor=await res.json()
    console.log(donor);
    document.getElementById("frm").innerHTML=`             <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="${donor.name}">

            <label for="age">Age:</label>
            <input type="text" id="age" name="age" value="${donor.age}">

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value="${donor.dob}">

            <label for="place">Place:</label>
            <input type="text" id="place" name="place" >

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" >

            <label for="blood_group">Blood Group:</label>
            <select id="blood_group" name="blood_group" >
                <option value="${donor.blood_group}">${donor.blood_group}</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>

            <div class="buttons">
                <button type="submit">Save</button>
                    </div>`
    
}
getDonor()

document.getElementById("frm").addEventListener(`submit`,async(e)=>{
    e.preventDefault()
    console.log("0hai");

    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const dob=document.getElementById("dob").value;
    const place=document.getElementById("place").value;
    const phone=document.getElementById("phone").value;
    const blood_group=document.getElementById("blood_group").value;
    console.log(name,age,dob,place,phone,blood_group);
    



    
})