import React  from "react";
import { AboutProps } from "./AboutProps";


export const AboutComponent = ({content}:AboutProps) =>{

    return(
    <div>
        <p>{content}</p>
    </div>);
        
}
