import { useState, useRef } from 'react'
import { BsUpload, BsLightbulb } from 'react-icons/bs'
import { IoTimeOutline } from 'react-icons/io5'

const Create = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const categories = [
    'Technology', 'Education', 'Science', 
    'Programming', 'Design', 'Business'
  ]

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)
    // TODO: Implement upload logic
    setTimeout(() => setIsUploading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-[600px] mx-auto p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <BsUpload className="text-emerald-400 text-xl" />
          </div>
          <h1 className="text-2xl font-semibold text-white">Create Content</h1>
        </div>

        {/* Upload Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Video Upload Section */}
          <div className="aspect-video bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-700 overflow-hidden">
            {selectedFile ? (
              <video
                className="w-full h-full object-cover"
                src={URL.createObjectURL(selectedFile)}
                controls
              />
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-full flex flex-col items-center justify-center text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <BsUpload className="text-3xl mb-4" />
                <p className="text-sm">Click to upload video</p>
                <p className="text-xs text-gray-500 mt-2">MP4, WebM, Ogg (Max 100MB)</p>
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 text-white 
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                placeholder="Enter a descriptive title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 text-white 
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                rows={4}
                placeholder="Describe what viewers will learn"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 text-white 
                         focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!selectedFile || !title || isUploading}
            className="w-full py-3 px-4 bg-emerald-500 text-white rounded-lg font-medium
                     hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isUploading ? 'Uploading...' : 'Upload Content'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Create
