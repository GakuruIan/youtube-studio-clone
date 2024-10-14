import React from 'react'

interface props {
  icon:React.ReactElement,
  to:string,
  text:string
}

// router
import { Link } from 'react-router-dom'

const SideLink:React.FC<props> = ({icon,to,text}) => {
  return (
    <Link to={to} className="inline-flex items-center gap-x-6 hover:bg-dark-50 py-2 px-2 rounded-md">
      
        {React.cloneElement(icon, { className: 'text-xl min-w-5 min-h-5' })}
        <p className="text-base">{text}</p>
    </Link>
  )
}

export default SideLink