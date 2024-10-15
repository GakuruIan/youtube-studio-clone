import {useState} from 'react'

// Ag -grid
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { CustomCellRendererProps } from "ag-grid-react";


const Datagrid = () => {
    const [rowData, setRowData] = useState([
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
        { Video: "Design Tutorial", Views:1000,Shares:200,Likes:800,Dislikes:200,Comments:550},
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
    <div>
        <div className="w-full ag-theme-quartz h-[calc(100vh-170px)]">
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            autoSizeStrategy={autoSizeStrategy}
            className="dark:bg-dark-200"
          />
        </div>
    </div>
  )
}

export default Datagrid