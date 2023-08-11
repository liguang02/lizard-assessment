import { useState, useEffect } from "react";

const CategoryList = ({posts}) => {
    // const [category,setCategory] = useState([]);
    // using nested map() and perform set operation to get the unique category names
    const temp = Array.from(new Set(posts.map(post => post.categories.map(category => category.name)).flat()));
    let categorySet = [];

    for (let i = 0; temp.length > i; i++){
        categorySet.push({name: temp[i], id:i+1});
    }

    

    
   
   
    return ( 
        
        <div className="category-list">
            <h2>Category List</h2>
            {categorySet.map((categorySet)=> (
                <div className="category-preview" key={categorySet.id}>
                    {/* <p>{categorySet.name}</p> */}
                    <p>{categorySet.id + ". " + categorySet.name}</p>
                    {/* <p>{category}</p> */}
            </div>
            ))}
            

            {/* <table>
                <tr>
                    <th>Category Name</th>
                    <th></th>
                    <th>Check</th>
                </tr>
                <tr>
                    <td>
                        
                    </td>
                </tr>


            </table> */}
        
        </div>
     );
}
 
export default CategoryList;