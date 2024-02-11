import { Fragment } from "react";

function Fragments(){

    let Items = ['item 1','item 2','item 3','item 4','item 5', 'item 6']

    return(

        <Fragment>
            <h1>Title</h1>
            <ul>
                { Items.map((item) => 
                (
                    <li key={item.id}> {item} </li>
                ))}
                
            </ul>

        </Fragment>
    );

}


export default Fragments;