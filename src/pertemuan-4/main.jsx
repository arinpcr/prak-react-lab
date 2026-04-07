import { createRoot } from "react-dom/client";
// import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import FrameworkList from "./FrameworkList";
import FrameworkListSearch from "./FrameworkListSearch";
import { ResponsiveDesign } from "./ResponsiveDesign";


createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* {FrameworkList} */}
            {/* <FrameworkListSearch /> */}
            <ResponsiveDesign/>
            
        </div>
    )