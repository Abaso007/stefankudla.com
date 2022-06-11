import Image from 'next/image'

const CoverImage: React.FC<{ title: string; url: string }> = ({
  title,
  url,
}) => {
  return (
    <div className="relative w-full pb-[80%]">
      <Image
        src={url}
        quality={60}
        alt={`Cover image for ${title}`}
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  )
}
export default CoverImage
