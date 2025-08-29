// src/components/BackgroundBubbles.jsx
export default function Bg() {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* Bubble 1 */}
      <div className="absolute w-32 h-32 bg-purple-500 rounded-full blur-3xl top-10 left-20 animate-float"></div>
      {/* Bubble 2 */}
      <div className="absolute w-40 h-40 bg-pink-900 rounded-full blur-3xl top-40 left-1/3 animate-float animation-delay-2000"></div>
      {/* Bubble 3 */}
      <div className="absolute w-24 h-24 bg-blue-700 rounded-full blur-3xl top-2/3 left-1/2 animate-float animation-delay-4000"></div>
      {/* Bubble 4 */}
      <div className="absolute w-48 h-48 bg-green-700/20 rounded-full blur-3xl top-1/4 right-20 animate-float animation-delay-1000"></div>
    </div>
  );
}
