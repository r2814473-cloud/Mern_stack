import React, { useContext } from 'react';
import { MobileContext } from './MobileContext';

// function Mobile({mobile}) {
  
//     return (
//         <>
//             <h1>Mobile page</h1>
//             <h1>data : {mobile}</h1>  
            
//         </>
//     );
// } deconstructing method

function Mobile() {
   const mobile= useContext(MobileContext);
   console.log(mobile);
    return (
        <>
            <h1>Mobile page</h1>
            <h2>Mobile ={mobile}</h2>
        </>
    );
}//prop drilling - useContext

export default Mobile;
