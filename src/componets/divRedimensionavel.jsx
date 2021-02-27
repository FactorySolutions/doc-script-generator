import React from 'react'
import { ResizableBox } from 'react-resizable';
import '../Style/Resizable.css'
import Draggable from './divArrsatavel'

export default function resizable() {

    const style = {
        div: {
          backgroundColor: 'rgb(184, 44, 44)',
          width: '100px',
          minHeight: '100px',
          border: '1px solid #fff' 
        } 
    }

    return (

        <ResizableBox width={1200} height={800} className='resizable' resizeHandles={['se', 'sw', 'ne']}>
            <Draggable/>
            
            <div style={style.div}>

            </div> 
        </ResizableBox>




    )
}