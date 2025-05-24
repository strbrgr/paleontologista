import Image from "next/image"

export enum ImageType {
  Square,
  Vertical,
  Horizontal
}

type Props = {
  src: string,
  alt: string,
  type: ImageType,
  priority: boolean,
  blurDataUrl: string
}

export function CustomImage(props: Props) {
  switch (props.type) {
    case ImageType.Square:
      return (
        <Image className="w-full h-auto rounded-sm mx-auto" src={props.src} alt={props.alt} width={500} height={500} placeholder="blur" blurDataURL={props.blurDataUrl} />
      )
    case ImageType.Vertical:
      return (
        <Image className="w-full h-auto rounded-sm mx-auto" src={props.src} alt={props.alt} width={375} height={500} placeholder="blur" blurDataURL={props.blurDataUrl} />
      )
    case ImageType.Horizontal:
      return (
        <Image className="w-full h-auto rounded-sm mx-auto" src={props.src} alt={props.alt} width={800} height={600} placeholder="blur" blurDataURL={props.blurDataUrl} />
      )
  }
}
