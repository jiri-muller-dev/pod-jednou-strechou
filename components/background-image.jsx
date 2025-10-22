import Image from "next/image";

export function BackgroundImage({ 
  imagePath, 
  tintColor = '#FCCEE8', 
  opacity = 0.7 , 
  children, 
  className 
}) {
  return (
    <div className={['relative h-full w-screen', className].filter(Boolean).join(' ')} >
      <Image 
        src={imagePath}
        alt="Background"
        fill
        className="absolute inset-0 z-[-1] object-cover"
      />
      <div 
        className="absolute inset-0 z-[-1]" 
        style={{
          backgroundColor: tintColor,
          mixBlendMode: 'hard-light',
          opacity: opacity
        }}
      >
      </div>
      <div className="relative z-10 content h-full py-8 px-4 lg:px-0 text-black">
        {children}
      </div>
    </div>
  )
}
