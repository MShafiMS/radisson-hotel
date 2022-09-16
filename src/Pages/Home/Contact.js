import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#2E4239]">
      <div className="hero">
        <div className="hero-content text-white p-0 gap-0 w-full flex-col lg:flex-row-reverse">
          <div className="w-full">
            <img
              src="https://assets.website-files.com/62701b7ce52f4ac3cc48cf3d/629fbe5791ac2fbeb6a554e7_2_Lobby_Front%20mirror%20view-p-800.jpeg"
              className=""
            />
          </div>
          <div className="w-full flex flex-col my-6 lg:my-0 lg:px-0 px-4 lg:mt-16 lg:mx-8 gap-4 lg:gap-10">
            <h1 className="lg:text-8xl text-5xl font-medium">BOOK A CALL</h1>
            <p>
              Our leasing agents are available for virtual and in-person visits.
            </p>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
              <input
                type="text"
                placeholder="FIRST NAME"
                className="input bg-opacity-0 rounded-none placeholder:font-sub placeholder:text-white text-white border-b p-1 input-group-sm border-white focus:border-blue-500 border-0 w-full"
              />
              <input
                type="text"
                placeholder="LAST NAME"
                className="input bg-opacity-0 rounded-none placeholder:font-sub placeholder:text-white text-white border-b p-1 input-group-sm border-white focus:border-blue-500 border-0 w-full"
              />
              <input
                type="text"
                placeholder="EMAIL"
                className="input bg-opacity-0 rounded-none placeholder:font-sub placeholder:text-white text-white border-b p-1 input-group-sm border-white focus:border-blue-500 border-0 w-full"
              />
              <input
                type="text"
                placeholder="PHONE NUMBER"
                className="input bg-opacity-0 rounded-none placeholder:font-sub placeholder:text-white text-white border-b p-1 input-group-sm border-white focus:border-blue-500 border-0 w-full"
              />
            </div>
            <button className="bg-white w-full mt-8 text-neutral p-3 hover:bg-opacity-0 hover:text-white hover:border border">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
