import React from "react";
import LoginPage from "../Pages/LoginPage";
import { toast } from "react-toastify";
import SignPage from "../Pages/SignPage";

const AccountPage = () => {
    // Example condition to decide which page to render
    const isSignedIn = false; // This should be your actual condition

    // Show toast notification based on the condition
    if (isSignedIn) {
        toast.info('Already Signed In');
    } else {
        toast.info('Already Logged In');
    }

    return (
        <div>
             {isSignedIn ? (
                <SignPage />
            ) : (
                <LoginPage />
            )
             }
        </div>
    );
};

export default AccountPage;