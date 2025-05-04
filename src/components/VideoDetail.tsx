import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment, FaComment } from 'react-icons/fa'
import { BsBookmark, BsBookmarkFill, BsLightbulb } from 'react-icons/bs'
import { RiShareForwardLine } from 'react-icons/ri'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { IoTimeOutline } from 'react-icons/io5'

const API_KEY = 'YOUR_PEXELS_API_KEY' // Replace with your real API key

const VideoDetail = () => {
  const { id } = useParams<{ id: string }>()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [video, setVideo] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`https://api.pexels.com/videos/videos/${id}`, {
          headers: {
            Authorization: 'vNmpL3RPsdURSAu41Oj08UGWqV67qDTU8MklcQgMlXQySd7fyTg7E5pq',
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch video')
        }

        const data = await response.json()
        setVideo(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchVideo()
  }, [id])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) setCurrentTime(videoRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration)
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error}</div>

  return (
    <div className="min-h-screen bg-gray-900 flex justify-start">
      <div className="w-full max-w-[800px] p-4 text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center ring-2 ring-emerald-500/20">
              <span className="text-emerald-400 font-medium text-lg">
                {video?.user?.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h4 className="text-gray-100 font-medium text-lg">{video?.user?.name}</h4>
              <div className="flex items-center gap-2">
                <BsLightbulb className="text-emerald-400 text-xs" />
                <span className="text-emerald-400 text-xs font-medium">
                  {video?.category || 'Quick Learn'}
                </span>
              </div>
            </div>
          </div>
          <button className="text-gray-400 p-1 hover:text-gray-200">
            <BiDotsHorizontalRounded size={24} />
          </button>
        </div>

        {/* Video Player */}
        <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden mb-4">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            autoPlay
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={video?.video_files?.[0]?.link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Stats Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-emerald-500/10 rounded-lg mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <BsLightbulb className="text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">2.5k learned</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400 text-sm">{formatTime(duration)} min quick learn</span>
          </div>
        </div>

        {/* Interaction Bar */}
        <div className="px-4 py-3 bg-gray-800/50 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="transform hover:scale-110 transition-all group"
              >
                {isLiked ? (
                  <AiFillHeart className="text-emerald-500 text-3xl" />
                ) : (
                  <AiOutlineHeart className="text-gray-100 text-3xl group-hover:text-emerald-400" />
                )}
              </button>
              <button
                onClick={() => setShowComments(!showComments)}
                className="transform hover:scale-110 transition-all group"
              >
                {showComments ? (
                  <FaComment className="text-emerald-400 text-2xl" />
                ) : (
                  <FaRegComment className="text-gray-100 text-2xl group-hover:text-emerald-400" />
                )}
              </button>
              <button className="transform hover:scale-110 transition-all group">
                <RiShareForwardLine className="text-gray-100 text-2xl group-hover:text-emerald-400" />
              </button>
            </div>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="transform hover:scale-110 transition-all group"
              title="Save for later"
            >
              {isSaved ? (
                <BsBookmarkFill className="text-emerald-400 text-2xl" />
              ) : (
                <BsBookmark className="text-gray-100 text-2xl group-hover:text-emerald-400" />
              )}
            </button>
          </div>

          {/* Content Info */}
          <div className="space-y-3">
            <h1 className="text-xl font-semibold text-gray-100">{video?.title}</h1>
            <p className="text-gray-400 text-sm">
              {video?.description || 'Quick learn in minutes! 🎓✨'}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{isLiked ? '1,235 found this helpful' : '1,234 found this helpful'}</span>
              <button className="hover:text-emerald-400">
                {showComments ? 'Hide comments' : 'View all 48 comments'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail
