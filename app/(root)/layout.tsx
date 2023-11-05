import SideBar from "@/components/shared/sidebar";
import { ReactNode } from "react";

const MainLayout = ({children} : {children:ReactNode}) => {
    return ( 
        <div>
           <SideBar/>
            {children}
        </div>
     );
}
 
export default MainLayout;