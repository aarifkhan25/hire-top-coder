import Image from "next/image"
export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black ">
      <div className="text-center">
        <Image
                       width={500}
                       height={500}
                       src="/assets/logo1.png"
                       alt="logo"
                       loading="eager"
                       className="w-[120px] h-[60px] lg:w-[300px]  lg:h-[200px] 2xl:w-[500px] 2xl:h-[370px] animate-pulse object-contain"
                     />
      </div>
    </div>
  )
}
