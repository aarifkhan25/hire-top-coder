import "../globals.css"
export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black ">
      <div className="text-center">
     <div className="h-10 py-2.5 px-2.5 flex items-center font-sans font-medium text-2xl md:text-4xl text-gray-500 box-content rounded-lg">
        <p>loading</p>
        
        {/* Words Container */}
        <div className="relative h-full overflow-hidden 
          after:content-[''] after:absolute after:inset-0 after:z-20
          after:bg-gradient-to-b after:from-[#111]/90 after:via-transparent after:to-[#111]/90
          after:from-10% after:via-30% after:to-90%"
        >
          <div className="flex flex-col h-full pl-1  text-primary">
            <span className="h-full block shrink-0 animate-[spinWords_4s_infinite] text-xl md:text-2xl">Hire</span>
            <span className="h-full block shrink-0 animate-[spinWords_4s_infinite] text-xl md:text-2xl">Elite</span>
            <span className="h-full block shrink-0 animate-[spinWords_4s_infinite] text-xl md:text-2xl">Digital</span>
            <span className="h-full block shrink-0 animate-[spinWords_4s_infinite] text-xl md:text-2xl">Experts</span>
            <span className="h-full block shrink-0 animate-[spinWords_4s_infinite] text-xl md:text-2xl">Instantly</span>
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}
