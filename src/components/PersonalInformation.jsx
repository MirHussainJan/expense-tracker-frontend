import React from "react";
import { FaUser, FaEnvelope, FaIdCard, FaMapMarkerAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const PersonalInformation = () => {
  const data = [
    { label: "Name", value: "Sakthivel", icon: <FaUser /> },
    { label: "Aadhar No.", value: "8888 7777 6666", icon: <FaIdCard /> },
    { label: "Mail ID", value: "abc123@gmail.com", icon: <FaEnvelope /> },
    {
      label: "Address",
      value: "Anna Nagar, Chennai",
      icon: <FaMapMarkerAlt />,
    },
  ];

  return (
    <div className="border-2 bg-white col-lg-6 border-black p-6 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-800">
          Personal Information
        </h2>
        <div className="text-black text-lg border-2 border-black w-10 h-10 bg-white flex items-center justify-center rounded-full"><MdEdit/>
        </div>
      </div>
      <hr/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg ps-3 py-3"
          >
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-base font-medium text-black">{item.value}</p>
            </div>
            <div className="text-black text-lg border-2 border-black w-10 h-10 bg-white flex items-center justify-center rounded-full">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInformation;
