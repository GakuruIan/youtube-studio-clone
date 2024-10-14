import React, { useState } from "react";

// components
import Wrapper from "../../components/Wrapper/Wrapper";

// Ag -grid
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { CustomCellRendererProps } from "ag-grid-react";

// icons
import { IoEyeOutline } from "react-icons/io5";

const CustomPill = (props: CustomCellRendererProps) => {
  let style: String = "";

  switch (props.value) {
    case "Todo":
      style = "cyan";
      break;
    case "Complete":
      style = "green";
      break;
    case "In Progress":
      style = "yellow";
      break;
    case "Review":
      style = "violet";
      break;
    case "Overdue":
      style = "red";
      break;

    default:
      style = "gray";
      break;
  }

  return (
    <>
      <span
        className={`bg-${style}-100 text-${style}-800 text-xs font-medium me-2 px-3 py-1 rounded-full dark:bg-${style}-900 dark:text-${style}-300 hover:cursor-pointer`}
      >
        <IoEyeOutline className="text-base"/>
      </span>
    </>
  );
};

const Content = () => {
  const [rowData, setRowData] = useState([
    { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
    { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
    { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
    { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
    
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "Video", filter: "agSetColumnFilter", checkboxSelection: true },
    { field: "Views", filter: "agDateColumnFilter" },
    { field: "Shares",  },
    { field: "Likes" },
    { field: "Dislikes" },
    { field: "Comments" }
  ]);

  const autoSizeStrategy = {
    type: 'fitGridWidth',
    defaultMinWidth: 100,
    // columnLimits: [
    //     {
    //         colId: 'country',
    //         minWidth: 900
    //     }
    // ]
};
  return (
    <Wrapper>
      <h1 className="text-base">Content</h1>
      <div className="mt-4">
        <div className="w-full ag-theme-quartz h-96">
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            autoSizeStrategy={autoSizeStrategy}
            className="dark:bg-dark-200"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Content;
