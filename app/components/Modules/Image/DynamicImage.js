import React from 'react'
import Image from 'next/image'

const DynamicImage = ({ image, alt, width, height }) => {
    return (
            <Image src={image} alt={alt} width={width} height={height} className='' />
        
    )
}

export default DynamicImage