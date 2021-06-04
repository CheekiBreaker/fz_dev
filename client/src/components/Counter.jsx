import { observer } from 'mobx-react-lite';
import React from 'react';
import counter from '../store/counter';



const Counter = observer(() =>{

    return(
       
        <div>
            
             {"щетчик = " + counter.i}
            <input id="a" type="float" placeholder="Sugar"/>
            <input id="b" type="float" placeholder="XE"/>
            <button onClick={()=> counter.result()}>go</button>
        </div>

    )
});

export default Counter;