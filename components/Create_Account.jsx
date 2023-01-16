import React from "react";
import { sendCreateAccountData } from "../Actions/createAccount";

const Create_Account = () => {
  return (
    <div>
        <div>
            <h1>Create_Account</h1>
        </div>
        <div>
            <form action="">
                <div>
                    <p>First Name</p>
                    <input type="name" placeholder="First Name" />
                </div>
                <div>
                    <p>Last Name</p>
                    <input type="name" placeholder="Last Name" />
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" placeholder="Email" id="" />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password"  id=""  placeholder="Password"/>
                </div>
                <div>
                    <button type="submit" onClick={(e)=>sendCreateAccountData(e)}>Submit</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Create_Account;
