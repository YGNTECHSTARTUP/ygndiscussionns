import React from 'react'
import Textanimate from './Textanimate'
const H1animater = ({text}) => {
  return (
    <div>
      <h1 className="mb-5 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-teal-200 to-slate-800 text-center underline decoration-slate-100"><Textanimate text={text}/></h1>
  
    </div>
  )
}

export default H1animater
