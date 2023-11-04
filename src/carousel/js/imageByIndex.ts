import image1 from '../images/slide-1.webp'
import image2 from '../images/slide-2.webp'
import image3 from '../images/slide-3.webp'
import image4 from '../images/slide-4.webp'

export const images: string[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
