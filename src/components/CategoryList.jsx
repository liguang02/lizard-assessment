// most of the code in this file is adapted from the Material UI documentation: https://mui.com/material-ui/react-select/
import { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {Button} from 'react-bootstrap';
import React from "react";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 400,
    },
  },
};
// this component takes in posts and setPosts so that it can update the posts state in the home component after the category filter is applied
const CategoryList = ({posts, setPosts}) => {
    const [categoryList,setCategoryList] = useState([]);
    // a state to check if the filter button is clicked
    const [isFiltered, setIsFiltered] = useState(false);
    // using nested map() and perform set operation to get the unique category names
    const categorySet = Array.from(new Set(posts.map(post => post.categories.map(category => category.name)).flat()));
   
  
    // a function to handle the change of the category list when the user selected a category in the drop down list
    const handleChange = (event) => {   
        const {
            target: { value }
        } = event;
        setCategoryList(
            value
        )
    }
    // a function to handle the filter button
    const handleFilter = () => {
        // set the post state to the filtered posts
        setPosts(posts.filter(post => post.categories.some(category => categoryList.includes(category.name))));
        
        setIsFiltered(true);
    }
    // a function to handle the reset button
    const handleReset = () => {
        // fetch the posts from the server to set the post state to the original posts
        fetch("http://localhost:3000/api/posts").then((res)=> res.json()).then((json)=> {
        setPosts(json.posts)
        })
        // remove the filtered category list text
        setIsFiltered(false);
        // reset the category list state
        setCategoryList([]);
    }
   
    return ( 
        <div className="category-list">
            <FormControl sx={{ m: 1, width: 600 }}>
                <InputLabel id="demo-multiple-checkbox-label">Filter by Category</InputLabel>
                <Select
                labelId="multiple-checkbox-label"
                id = "multiple-checkbox"
                multiple value = {categoryList}
                onChange = {handleChange}
                input={<OutlinedInput label="Category" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                >
                {categorySet.map((categories)=> (
                    <MenuItem key={categories} value={categories}>
                        <Checkbox checked={categoryList.indexOf(categories) > -1}/>
                        <ListItemText primary={categories}/>
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <br></br> 
            <div className="filter-buttons">      
                <Button variant="danger" onClick={handleReset}>Clear Filter</Button>

                <Button variant="primary" onClick={handleFilter}>Filter</Button>
            </div>
            { isFiltered && <p><b>Filtered by:</b> {categoryList.join(', ')} </p>} 

        </div>
     );
}
 
export default CategoryList;