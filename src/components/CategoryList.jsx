import { useState, useEffect } from "react";

const CategoryList = ({posts}) => {
    const [category,setCategory] = useState(null);
    // using nested map() and perform set operation to get the unique category names
    const temp = Array.from(new Set(posts.map(post => post.categories.map(category => category.name)).flat()));
    let categorySet = [];
    

    for (let i = 0; temp.length > i; i++){
        categorySet +=  [{name: temp[i], id:i}];
    }
    // {for (let i = 0, j = 0; i<categorySet.length; i++){ 
    //     if (categorySet[i] === "|"){
    //         console.log(categorySet.slice(j,i));
    //         j = i+1;
    //     }
    // }}
    console.log(categorySet)
    useEffect(() =>{
        setCategory(categorySet);
    }, []);
    return ( 
        
        <div className="category-list">
            <h2>Category List</h2>
            <div className="category-preview" key={categorySet.id}>
                <p>{categorySet.name}</p>
                <p>{categorySet}</p>
            </div>

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