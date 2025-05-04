import { Outlet } from 'react-router-dom'
import FeedSideBar from './FeedSideBar'
import FeedBottomBar from './FeedBottomBar'

const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar - hidden on mobile, shown on md screens and up */}
      <div className="hidden md:block w-64 flex-shrink-0 border-r border-gray-700/50">
        <FeedSideBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full pb-16 md:pb-0 overflow-y-auto">
        <Outlet />
      </div>

      {/* Bottom Navigation - shown on mobile, hidden on md screens and up */}
      <div className="fixed bottom-0 left-0 right-0 h-16 z-50 md:hidden bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50">
        <FeedBottomBar />
      </div>
    </div>
  )
}

export default AppLayout
