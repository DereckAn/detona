import Navbar from "@/components/shared/navbar";
import { ReactNode } from "react";

const MainLayout = ({children} : {children:ReactNode}) => {
    return ( 
        <div>
           <Navbar/>
            {children}
        </div>
     );
}
 
export default MainLayout;