import { useTheme } from '../context/ThemeContext'

export const useThemeStyles = () => {
  const { isDark } = useTheme()

  return {
    background: isDark ? 'bg-gray-900' : 'bg-gray-50',
    text: isDark ? 'text-gray-100' : 'text-gray-900',
    card: isDark ? 'bg-gray-800/80' : 'bg-white/80',
    border: isDark ? 'border-gray-700/20' : 'border-gray-200/20',
    hover: isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/50'
  }
}