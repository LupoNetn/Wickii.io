import { useState } from 'react'
import { BsLightbulb, BsPencil, BsBookmark } from 'react-icons/bs'
import { IoTimeOutline } from 'react-icons/io5'
import { FaRegComment } from 'react-icons/fa'

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'saved'>('videos')

  // Mock data - Replace with real data
  const userProfile = {
    name: 'John Doe',
    username: '@johndoe',
    bio: 'Creating educational content to help others learn and grow. Tech enthusiast and lifelong learner.',
    stats: {
      videos: 12,
      learners: '2.5k',
      helped: '15.2k'
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-[600px] mx-auto p-4">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center ring-2 ring-emerald-500/20">
              <span className="text-emerald-400 text-3xl font-medium">
                {userProfile.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-1">{userProfile.name}</h1>
              <p className="text-gray-400 text-sm">{userProfile.username}</p>
            </div>
            <button className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-colors">
              <BsPencil />
            </button>
          </div>

          <p className="text-gray-300 mb-6">{userProfile.bio}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{userProfile.stats.videos}</div>
              <div className="text-gray-400 text-sm">Videos</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{userProfile.stats.learners}</div>
              <div className="text-gray-400 text-sm">Learners</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{userProfile.stats.helped}</div>
              <div className="text-gray-400 text-sm">Helped</div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mb-6">
          <div className="flex border-b border-gray-700">
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex-1 py-3 text-sm font-medium transition-colors
                ${activeTab === 'videos' 
                  ? 'text-emerald-400 border-b-2 border-emerald-400' 
                  : 'text-gray-400 hover:text-gray-300'}`}
            >
              My Videos
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex-1 py-3 text-sm font-medium transition-colors
                ${activeTab === 'saved' 
                  ? 'text-emerald-400 border-b-2 border-emerald-400' 
                  : 'text-gray-400 hover:text-gray-300'}`}
            >
              Saved
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-gray-800/50 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-700/50">
                {/* Video Thumbnail */}
              </div>
              <div className="p-3">
                <h3 className="text-white font-medium mb-2 line-clamp-1">
                  How to Build a React App
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <IoTimeOutline />
                    <span>3:45</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-400">
                      <BsLightbulb className="text-emerald-400" />
                      <span>1.2k</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <FaRegComment />
                      <span>24</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
