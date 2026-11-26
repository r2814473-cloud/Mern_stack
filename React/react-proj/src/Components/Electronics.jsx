import React from "react";
import Mobile from './Mobile';

// function Electronics({mobile}) {
//     return (
//         <>
//             <h1>Electronics page</h1>
//             {/* <Mobile mobile={mobile} /> */}
//         </>
//     );
// }  Deconstructing method


function Electronics() {
    return (
        <>
            <h1>Electronics page</h1>
            <Mobile />
        </>
    );
}// prop drilling-usecontext
export default Electronics;
