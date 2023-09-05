import React from "react";
import './Nav.css'
function Nav(){
    return(
        <>  
            {/* <div class= "bg-red-400 h-full  w-full" >
            <h1 class="text-center bg-black text-white "> Nav Testing  </h1>
            </div>     */}

            <body class="bg-gray-100">
                    <header class="bg-black" >
                        <nav class="container mx-auto px-6 py-3">
                            <div class="flex justify-between items-center">
                                <a href="#" class="text-2xl font-bold text-white"> My Website</a>
                                <div class="flex  space-x-4">
                                    <a href="#" class="text-white" > HOME   </a>
                                    <a href="#" class="text-white" > ABOUT   </a>
                                    <a href="#" class="text-white" > SERVICES   </a>
                                    <a href="#" class="text-white" > WORK   </a>
                                    <a href="#" class="text-white" > BLOG  </a>
                                    <a href="#" class="text-white" > CONTACT  </a>
                                </div>
                            </div>
                        </nav>
                    </header>
            </body>        
        
        
        
        
        </>


    )
}

export default Nav;

