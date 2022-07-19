import {React,Fragment} from "react";
import Button from 'react-bootstrap/Button';
import './Button.css';

export default function ButtonPrincipal () {

    return (

        <Fragment>
            <Button className="button1"> Aceptar </Button>
           
            <Button className="button2" variant="primary" size="lg" active>
                Aceptar
            </Button>{' '} 

           
            
        </Fragment>  
    )
}

