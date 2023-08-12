// utilized Pagination from Material UI to create a pagination component
import Pagination from "@mui/material/Pagination";
import React from "react";

// a reusable component that will be used to create a pagination
const AppPagination = ({setCurrentPage, total_pages}) => {
    const handleChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

  return (
    <div>
        {/* able to access the page number selected from the second param of onChange  */}
        <Pagination 
        onChange={(event, pageNumber)=> handleChange(pageNumber)} 
        style ={{display: "flex", justifyContent: "center"}} 
        color = "primary"
        size = "large"
        count = {total_pages}/>
    </div>
  );
}
export default AppPagination;