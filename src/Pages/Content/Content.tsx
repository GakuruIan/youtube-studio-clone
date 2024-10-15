import React, { useState } from "react";

// components
import Wrapper from "../../components/Wrapper/Wrapper";
import Datagrid from "../../components/Datagrid/Datagrid";

// icons
import { IoEyeOutline } from "react-icons/io5";



const Content = () => {
 
  return (
    <Wrapper>
      <h1 className="text-base">Content</h1>
      <div className="mt-4">
        {/* adding props here */}
        <Datagrid/>
      </div>
    </Wrapper>
  );
};

export default Content;
