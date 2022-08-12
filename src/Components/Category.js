import React , {useState} from 'react';
export default function Category(){
    const [show,setShow]=useState(false)
    return(
<div>

<h1 onClick={()=>setShow(true)}>Category</h1>
{
    show?
    <div>
        <h5>Electronics</h5><h5>Books</h5>
        <h5>Furniture</h5><h5>Kids</h5>
        </div>
    
    :null
    
}
</div>
    );
}