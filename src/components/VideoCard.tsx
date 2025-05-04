import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment, FaComment, FaPlay } from 'react-icons/fa'
import { BsBookmark, BsBookmarkFill, BsLightbulb } from 'react-icons/bs'
import { RiShareForwardLine } from 'react-icons/ri'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { IoTimeOutline } from 'react-icons/io5'

interface VideoCardProps {
  video: {
    id: string
    video_files: { link: string }[]
    user: { name: string; avatar?: string }
    title?: string
    description?: string
    duration?: number
    category?: string
  }
}

const VideoCard = ({ video }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const navigate = useNavigate()

  const handlePlayPause = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) setCurrentTime(videoRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleInteraction = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleCardClick = () => {
    navigate(`/feed/${video.id}`)  // HashRouter will automatically handle the '#'
  }

  return (
    <div
      className="bg-gray-900/95 border border-gray-800 rounded-xl overflow-hidden 
                 shadow-xl mb-6 transition-transform hover:-translate-y-1"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center ring-2 ring-emerald-500/20">
              <span className="text-emerald-400 font-medium">
                {video.user.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h4 className="text-gray-100 font-medium">{video.user.name}</h4>
              <div className="flex items-center gap-2">
                <BsLightbulb className="text-emerald-400 text-xs" />
                <span className="text-emerald-400 text-xs font-medium">
                  {video.category || 'Quick Learn'}
                </span>
              </div>
            </div>
          </div>
          <button className="text-gray-400 p-1 hover:text-gray-200" onClick={handleInteraction}>
            <BiDotsHorizontalRounded size={24} />
          </button>
        </div>

        {/* Clickable Video Area */}
        <div
          className="aspect-video relative bg-gray-800 group cursor-pointer"
          onClick={handleCardClick}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            poster={video.video_files[0]?.link}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={video.video_files[0]?.link} type="video/mp4" />
          </video>

          {/* Play Button Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent transition-opacity duration-300 
              ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
          >
            <button
              onClick={(e) => {
                handleInteraction(e)
                handlePlayPause()
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                bg-emerald-500/90 hover:bg-emerald-500 text-white p-4 rounded-full 
                transition-all group-hover:scale-110"
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                </svg>
              ) : (
                <FaPlay className="text-xl ml-1" />
              )}
            </button>

            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
              <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all duration-100"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
              <div className="flex items-center gap-2 text-white text-sm font-medium bg-gray-900/60 px-2 py-1 rounded-md">
                <IoTimeOutline className="text-emerald-400" />
                <span>{formatTime(currentTime)}</span>
                <span>/</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-emerald-500/10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <BsLightbulb className="text-emerald-400" />
              <span className="text-emerald-400 text-xs font-medium">2.5k learned</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400 text-xs">3 min quick learn</span>
          </div>
        </div>

        {/* Interaction Bar */}
        <div className="px-3 pt-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-6">
              <button
                onClick={(e) => {
                  handleInteraction(e)
                  setIsLiked(!isLiked)
                }}
                className="transform hover:scale-110 transition-all group"
              >
                {isLiked ? (
                  <AiFillHeart className="text-emerald-500 text-2xl" />
                ) : (
                  <AiOutlineHeart className="text-gray-100 text-2xl group-hover:text-emerald-400" />
                )}
              </button>
              <button
                onClick={(e) => {
                  handleInteraction(e)
                  setShowComments(!showComments)
                }}
                className="transform hover:scale-110 transition-all group"
              >
                {showComments ? (
                  <FaComment className="text-emerald-400 text-xl" />
                ) : (
                  <FaRegComment className="text-gray-100 text-xl group-hover:text-emerald-400" />
                )}
              </button>
              <button onClick={handleInteraction} className="transform hover:scale-110 transition-all group">
                <RiShareForwardLine className="text-gray-100 text-2xl group-hover:text-emerald-400" />
              </button>
            </div>
            <button
              onClick={(e) => {
                handleInteraction(e)
                setIsSaved(!isSaved)
              }}
              className="transform hover:scale-110 transition-all group"
              title="Save for later"
            >
              {isSaved ? (
                <BsBookmarkFill className="text-emerald-400 text-xl" />
              ) : (
                <BsBookmark className="text-gray-100 text-xl group-hover:text-emerald-400" />
              )}
            </button>
          </div>

          {/* Content Info (Clickable title) */}
          <div className="space-y-2 pb-3">
            <h3
              className="text-gray-100 font-medium line-clamp-2 cursor-pointer hover:underline"
              onClick={handleCardClick}
            >
              {video.title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {video.description || 'Quick learn in minutes! 🎓✨'}
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>{isLiked ? '1,235 found this helpful' : '1,234 found this helpful'}</span>
              <button
                onClick={handleInteraction}
                className="hover:text-emerald-400"
              >
                {showComments ? 'Hide comments' : 'View all 48 comments'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
