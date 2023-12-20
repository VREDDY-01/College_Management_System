import React from "react";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  
  return (
    <div className="flex-[0.05] flex justify-between items-center mx-5 my-2">
      <div className="flex items-center ">
        <img
          src="https://scontent.fbep3-1.fna.fbcdn.net/v/t39.30808-6/327200755_410303611292087_1899803162621016455_n.png?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=1z2YA1LE9EkAX-pRaws&_nc_ht=scontent.fbep3-1.fna&oh=00_AfCGjRGLbl0jlvGFC9RiHc3Y_NgTiDEUyDAd9AO1kjyY0A&oe=657C6867"
          alt=""
          className="h-7"
        />
        <h1 className="font-bold text-red-600 text-sm">KLE TECHNOLOGICAL UNIVERSITY</h1>
      </div>
      <h1 className="font-semibold text-black">Welcome</h1>
      <div className="flex items-center space-x-3">
        <Avatar
          src={user.result.avatar}
          alt={user.result.name}
          sx={{ width: 24, height: 24 }}
          className="border-blue-600 border-2"
        />
        <h1>{user.result.name.split(" ")[0]}</h1>
        <LogoutIcon
          onClick={logout}
          className="cursor-pointer hover:scale-125 transition-all "
        />
      </div>
    </div>
  );
};

export default Header;
