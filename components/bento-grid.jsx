import React from 'react'
import Image from 'next/image' // Add this import

const Bento = () => {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Designs
      </h1>
      <div>
        <div className='grid my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <Image 
            src="/1.png" 
            alt="Design 1"
            width={500}
            height={300}
            className="object-cover border-2 p-5" // Recommended to add this
          />
          <Image 
            src="/2.png" 
            alt="Design 1"
            width={500}
            height={300}
            className="object-cover border-2 p-5" // Recommended to add this
          />
          <Image 
            src="/3.png" 
            alt="Design 1"
            width={500}
            height={300}
            className="object-cover border-2 p-5" // Recommended to add this
          />
          <Image 
            src="/meme3.png" 
            alt="Design 1"
            width={500}
            height={300}
            className="object-cover border-2 p-5" // Recommended to add this
          />
          <Image 
            src="/post1.png" 
            alt="Design 1"
            width={500}
            height={300}
            className="object-cover border-2 p-5" // Recommended to add this
          />
          <Image 
            src="/post2.png" 
            alt="Design 1"
            width={500}
            height={300}
            className="object-cover border-2 p-5" // Recommended to add this
          />
          <Image 
            src="/post3.png" 
            alt="Design 1"
            width={500}
            height={300}
            className="object-cover border-2 p-5" // Recommended to add this
          />
          <Image 
            src="/4.png" 
            alt="Design 1"
            width={500}
            height={300}
            className="object-cover border-2 p-5" // Recommended to add this
          />
          <Image 
            src="/post.png" 
            alt="Design 1"
            width={500}
            height={300}
            className="object-cover border-2 p-5" // Recommended to add this
          />
        </div>
      </div>
    </div>
  )
}

export default Bento