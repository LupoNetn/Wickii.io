import { IoHomeOutline } from "react-icons/io5"
import { IoCreateOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { NavLink } from 'react-router-dom'

const FeedSideBar = () => {
  const menuItems = [
    { icon: <IoHomeOutline size={28} />, label: 'Feed', path: '/feed' },
    { icon: <IoCreateOutline size={28} />, label: 'Create', path: '/create' },
    { icon: <CgProfile size={28} />, label: 'Profile', path: '/profile' }
  ]

  return (
    <div className="h-full relative border-r border-gray-700/50">
      <div className="sticky top-20 p-4">
        <nav className="flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 p-3 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-emerald-400/10 text-emerald-400' 
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-emerald-400'
                }
              `}
            >
              <span>{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default FeedSideBar
