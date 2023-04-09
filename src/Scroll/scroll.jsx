import React from 'react'
import "./style.scss"

function Scrol() {
    const Upto = (e) => {
        window.scrollTo({top:0,behavior:'smooth'})
    }
  return (
      <div className='srolTop'>
          <span onClick={Upto}>🔝</span>
      </div>
  )
}

export default Scrol