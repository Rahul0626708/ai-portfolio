export function SkeletonCard() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 animate-pulse">
      <div className="h-4 bg-gray-700 rounded w-1/3 mb-3"></div>
      <div className="h-3 bg-gray-800 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-800 rounded w-2/3 mb-4"></div>
      <div className="h-3 bg-gray-800 rounded w-1/4"></div>
    </div>
  )
}

export function SkeletonPill() {
  return (
    <div className="h-10 w-28 bg-gray-800 rounded-lg animate-pulse"></div>
  )
}