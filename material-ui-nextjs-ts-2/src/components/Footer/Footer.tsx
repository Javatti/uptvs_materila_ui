import * as React from 'react';
import {FC} from 'react';

type OneProps = {
    version : number;
    caption : string;
}
const Footer: FC<OneProps> = (props:OneProps) =>{

    return(
        <footer>
            <p>{props.caption}</p>
            <p>version is {props.version}</p>
        </footer>
    )
}
export default Footer;
