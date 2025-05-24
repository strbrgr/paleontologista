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
}

export function CustomImage(props: Props) {
  switch (props.type) {
    case ImageType.Square:
      return (
        <Image className="rounded-sm mx-auto" src={props.src} alt={props.alt} width={500} height={500} placeholder="blur" priority={props.priority} />
      )
    case ImageType.Vertical:
      return (
        <Image className="rounded-sm mx-auto" src={props.src} alt={props.alt} width={375} height={500} placeholder="blur" priority={props.priority} />
      )
    case ImageType.Horizontal:
      return (
        <Image className="rounded-sm mx-auto" src={props.src} alt={props.alt} width={800} height={600} placeholder="blur" priority={props.priority} />
      )
  }
}
