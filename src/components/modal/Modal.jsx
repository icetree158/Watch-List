import React from 'react'
import './modal.scss'
export default function Modal({active,setActive,title,children}) {
  
  return (
    <div className={active?"modal active":"modal"}  >
       
        <div className={active?"modal_content active":"modal_content"}>
        <button onClick={()=>setActive(false)} className='close_modal'>
          <svg className='close_butt'><path fill='red' d="M 8.832031 7.496094 L 14.890625 1.433594 C 15.019531 1.304688 15.019531 1.09375 14.890625 0.960938 L 14.027344 0.0976562 C 13.964844 0.0351562 13.878906 0 13.789062 0 C 13.699219 0 13.617188 0.0351562 13.554688 0.0976562 L 7.496094 6.15625 L 1.433594 0.0976562 C 1.308594 -0.0273438 1.085938 -0.0273438 0.960938 0.0976562 L 0.0976562 0.960938 C -0.03125 1.09375 -0.03125 1.304688 0.0976562 1.433594 L 6.15625 7.496094 L 0.0976562 13.554688 C -0.03125 13.683594 -0.03125 13.894531 0.0976562 14.027344 L 0.960938 14.890625 C 1.023438 14.953125 1.109375 14.988281 1.199219 14.988281 C 1.289062 14.988281 1.371094 14.953125 1.433594 14.890625 L 7.496094 8.832031 L 13.554688 14.890625 C 13.617188 14.953125 13.703125 14.988281 13.789062 14.988281 C 13.878906 14.988281 13.964844 14.953125 14.027344 14.890625 L 14.890625 14.027344 C 15.019531 13.894531 15.019531 13.683594 14.890625 13.554688 Z M 8.832031 7.496094 "/></svg>
        </button>
            <span className='header'>{title}</span>
            {children}
            
            </div>
            
    </div>
  )
}
