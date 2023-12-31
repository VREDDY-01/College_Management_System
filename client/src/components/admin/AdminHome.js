import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { getAllDepartment,getAllAdmin,getAllFaculty,getAllStudent } from "../../redux/actions/adminActions";

const AdminHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStudent());
    dispatch(getAllFaculty());
    dispatch(getAllAdmin());
    dispatch(getAllDepartment());
  }, [dispatch]);
  return (
    <div className="bg-[#FF6666] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#F5CCA0] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
