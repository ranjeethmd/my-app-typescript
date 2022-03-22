import React  from "react";
import { HomeProps } from "./HomeProps";


export const HomeComponent = ({title, name, age,urlCallBack}:HomeProps) =>{

    return(
    <div>
        <p>{title}</p>
        <p>{name}</p>
        <p>{age}</p>
        <button onClick={() => urlCallBack(1)}>Click Here !!</button>
    </div>);
        
}

