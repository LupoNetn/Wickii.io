import React from 'react'
import { IoHomeOutline } from "react-icons/io5"
import { IoCreateOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { NavLink } from 'react-router-dom'

const FeedBottomBar = () => {
  const menuItems = [
    { icon: <IoHomeOutline size={24} />, label: 'Feed', path: '/feed' },
    { icon: <IoCreateOutline size={24} />, label: 'Create', path: '/create' },
    { icon: <CgProfile size={24} />, label: 'Profile', path: '/profile' }
  ]

  return (
    <div className="h-full px-4">
      <div className="flex justify-around items-center h-full max-w-md mx-auto">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `
              flex flex-col items-center justify-center
              ${isActive ? 'text-emerald-400' : 'text-gray-400 hover:text-emerald-400'}
            `}
          >
            <span className="mb-1">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default FeedBottomBar
