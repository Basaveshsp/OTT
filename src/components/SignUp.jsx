import { useRef } from "react";

const SignUp = () => {
    let Name=useRef()
    let Email=useRef()
    let Phno=useRef()
    let Dob=useRef()
    let Pwd=useRef()
    let Repwd=useRef()

    function handlesignup(e) {
        e.preventDefault()

        let newUser={
            "name":Name.current.value,
            "emailid":Email.current.value,
            "phno":Phno.current.value,
            "dob":Dob.current.value,
            "pwd":Pwd.current.value,
            "repwd":Repwd.current.value,

        }
        // if (Pwd==Repwd) {
        //    if (newUser.hasOwnProperty("pwd")) {
        //     console.log("we have pwd");
        //    }
        //    else{
        //     newUser.pwd=Pwd

        //    }
        // }
        alert("Sign Up succesfull")
        console.log(newUser);
        fetch("http://localhost:4001/Profiles",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify (newUser)
        })
       
    }
    return (  
        <div>
        <h1>Sign Up </h1>
        <div id="signupForm" >
            <form action="" onSubmit={handlesignup}>
                <span >Name :</span><input type="text" name="" id=""  placeholder="Enter Name" ref={Name} />
                <span>Email ID :</span><input type="email" name="" id="" placeholder="Enter Email" ref={Email} />
                <span>PH NO :</span><input type="text" name="" id="" placeholder="Enter Phone no" ref={Phno}/>
                <span>Date Of Birth :</span><input type="date" name="" id="" ref={Dob}  />
                <span>Password :</span><input type="password" name="" id="" placeholder="Password" ref={Pwd} />
                <span>Re-Enter Password :</span><input type="password" name="" id=""  placeholder="Password" ref={Repwd}/>
                 <input type="submit" value="Sign Up" />
            </form>
        </div>

        </div>
    );
}
 
export default SignUp;