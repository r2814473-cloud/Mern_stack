import React from "react";
import Electronics from './Electronics';

// function Flipkart({mobile})//deconstructing method ,instead of using dot notation we can directly pass it using deconstructing 
// {  return (
//         <>
//             <h1>welcome to page Flipkart</h1>
//             {/* <Electronics mobile={mobile} /> */}
//         </>
//     );
// } deconstructing method


function Flipkart()
{  return (
        <>
            <h1>welcome to page Flipkart</h1>
            <Electronics />
        </>
    );
} // prop drilling -usecontext

export default Flipkart;

// useContext is a prop drilling technique
// denconstructing method is not a prop drilling technique
