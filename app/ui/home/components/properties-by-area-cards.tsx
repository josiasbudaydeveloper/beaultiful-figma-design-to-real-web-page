import Image, { StaticImageData } from "next/image";

export function PropertyByAreaCardShort({
  className,
  image,
  title,
  description
} : {
  className?: string,
  image: StaticImageData,
  title: string,
  description: string
}) {

  return (
    <a href="">
      <div className={`
        rounded-[8px] overflow-hidden ${className}
      `}>
        <Image 
          src={image.src}
          width={image.width}
          height={image.height}
          alt="Card image"
          className="h-[241px] object-cover"
        />

        <div className="relative top-[-241px] p-[11px] text-white mb-[-78px]">
          <h1 className={`
            font-[600] text-[24px] leading-[32px]
          `}>
            {title}
          </h1>
          <p className={`
            font-[400] text0[16px] leading-[24px]
          `}>
            {description}
          </p>
        </div>
      </div>
    </a>
  )
}

export function PropertyByAreaCardLong({
  className,
  image,
  title,
  description
} : {
  className?: string,
  image: StaticImageData,
  title: string,
  description: string
}) {

  return (
    <a href="">
      <div className={`
        h-[241px] rounded-[8px] overflow-hidden ${className}
      `}>
        <Image 
          src={image.src}
          width={image.width}
          height={image.height}
          alt="Card image"
          className="h-[241px] object-cover"
        />

        <div className="relative top-[-241px] p-[11px] text-white">
          <h1 className={`
            font-[600] text-[24px] leading-[32px]
          `}>
            {title}
          </h1>
          <p className={`
            font-[400] text0[16px] leading-[24px]
          `}>
            {description}
          </p>
        </div>
      </div>
    </a>
  )
}