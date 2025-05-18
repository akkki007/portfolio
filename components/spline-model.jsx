import Spline from '@splinetool/react-spline'
import React from 'react'

const SplineModel = () => {
  return (
   <div className="flex-1 flex justify-center">
  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <Spline
        scene="https://prod.spline.design/YDZ95aOR8czCexhR/scene.splinecode" 
      />
    </div>
  </div>
</div>
  )
}

export default SplineModel
