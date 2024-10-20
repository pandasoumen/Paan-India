import React, { useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = (setIsLoggedIn ) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ));
    }

    function submitHandler(event) {
        event.preventDeafault();
        setIsLoggedIn = true;
        toast.success("Logged In");
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address <span className="text-pink-200">*</span></p>
                <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] outline-none " required type="email" value={formData.email} onChange={changeHandler} placeholder="Enter email adress" name="email" />
            </label>

            <label className="w-full relative">
                <p>Password <span className="text-pink-200">*</span></p>
                <input required type={showPassword ? ("text") : ("password")} value={formData.password} onChange={changeHandler} placeholder="Enter password" name="password" className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] outline-none " />

                <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                </span>
                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password?</p>
                </Link>
            </label>

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                Log in
            </button>
            <Link to="/signup">
                <p className="">New customer? Sign up for an account</p>
            </Link>
        </form>
    )
}

export default LoginPage;