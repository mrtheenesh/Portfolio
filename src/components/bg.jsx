// src/components/BackgroundBubbles.jsx
export default function Bg() {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">

      {/* Bubble 1 – hidden on very small screens */}
      <div className="absolute w-32 h-32 sm:w-40 sm:h-40 bg-purple-500 rounded-full blur-3xl top-10 left-20 animate-float hidden sm:block"></div>

      {/* Bubble 2 */}
      <div className="absolute w-16 h-16 sm:w-32 sm:h-32 bg-pink-900 rounded-full blur-3xl top-40 left-1/3 animate-float animation-delay-2000 hidden sm:block"></div>

      {/* Bubble 3 – visible but smaller on phones */}
      <div className="absolute w-16 h-16 sm:w-24 sm:h-24 bg-blue-700 rounded-full blur-3xl top-2/3 left-1/2 animate-float animation-delay-4000"></div>

      {/* Bubble 4 – hidden on phones */}
      <div className="absolute w-20 h-20 sm:w-48 sm:h-48 bg-green-700/20 rounded-full blur-3xl top-1/4 right-20 animate-float animation-delay-1000 hidden sm:block"></div>
    </div>
  );
}
