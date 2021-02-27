import React from 'react'
import Draggable from 'react-draggable'

export default function draggable() {

    const style = {
        div: {
            backgroundColor: 'rgb(73, 71, 71)',
            width: '400px',
            height: '200px',
            border: '1px solid #000'
        }
    }

    return (

        <Draggable bounds='parent'> 
            <div style={style.div}>

            </div>
        </Draggable>

        

       
    )
}


