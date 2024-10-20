import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignPage = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [showPassowrd, setShowPassword] = useState(false);
    const [showConfirmPassowrd, setShowConfirmPassword] = useState(false);
    // const [accountType, setAccountType] = useState("student");
    function changehandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Passowrd do not match");
            return;
        }
        setIsLoggedIn(true);
        // setIsSignedIn(true);
        toast.success("Account created");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("Printing account data");
        console.log(finalData);
        navigate("/");
    }

    return (
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max ">
            </div>
            <form onSubmit={submitHandler} className="">
                {/* first and last name */}
                <div className="flex gap-x-4 mt-[20px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<span className="text-pink-200">*</span></p>
                        <input type="text" name="firstName" required placeholder="Enter First Name" onChange={changehandler} value={formData.firstName} className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] outline-none" />
                    </label>

                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<span className="text-pink-200">*</span></p>
                        <input type="text" name="lastName" required placeholder="Enter last Name" onChange={changehandler} value={formData.lastName} className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] outline-none" />
                    </label>
                </div>
                {/* email address */}
                <div className="mt-[20px]">
                    <label className="">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<span className="text-pink-200">*</span></p>
                        <input type="email" name="email" required placeholder="Enter email" onChange={changehandler} value={formData.email} />
                    </label>
                </div>

                {/* create password and confirm password */}
                <div className="flex justify-between w-full mt-[20px]">
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<span className="text-pink-200">*</span></p>
                        <input type={showPassowrd ? ("text") : ("password")} name="password" required placeholder="Enter Password" onChange={changehandler} value={formData.password} className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] outline-none" />

                        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer">
                            {showPassowrd ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>

                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<span className="text-pink-200">*</span></p>
                        <input  type={showConfirmPassowrd ? ("text") : ("password")} name="confirmPassword" required placeholder="Confirm Password" onChange={changehandler} value={formData.confirmPassword} className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] outline-none" />

                        <span onClick={() => setShowConfirmPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer">
                            {showConfirmPassowrd ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>
                </div>
                <button formData className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6  w-full">
                    Create Account
                </button>
                <p>or</p>
                <Link to='/'>
                    Return to Store
                </Link>
            </form>
        </div>
    )
}


export default SignPage;
