import React from "react";

// icons
import { CiMenuFries } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

// image
import pic from '../../assets/image.jpg'

const Topbar = () => {
  return (
    <div className="w-[calc(100vw-60px)] px-2 h-16 py-4 flex items-center justify-between fixed top-0  dark:bg-dark-200">
      <div className="">
        <CiMenuFries className="text-xl" />
      </div>
      <form
        className="flex items-center dark:bg-dark-50 w-full max-w-xl rounded-md px-4"
      >
        <input
          type="text"
          name="search"
          id=""
          className="outline-0 bg-inherit py-2  w-full placeholder:text-gray-400 placeholder:text-sm"
          placeholder="search videos,shorts and posts"
        />
        <button type="submit">
          < CiSearch className="text-xl"/>
        </button>
      </form>
      <div className="">
        <div className="flex items-center gap-x-2">
          <img className="w-8 h-8 rounded-full" src={pic} alt="Rounded avatar"/>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
