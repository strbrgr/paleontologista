import Image from "next/image"

export enum ImageType {
  Square,
  Vertical,
  Horizontal
}

export function getImageDimensions(type: ImageType) {
  switch (type) {
    case ImageType.Square:
      return { width: 500, height: 500 };
    case ImageType.Vertical:
      return { width: 375, height: 500 };
    case ImageType.Horizontal:
      return { width: 800, height: 600 };
  }
}

type Props = {
  src: string,
  alt: string,
  type: ImageType,
  preload: boolean,
}

export function CustomImage(props: Props) {
  switch (props.type) {
    case ImageType.Square:
      return (
        <Image className="rounded-sm mx-auto" src={props.src} alt={props.alt} width={500} height={500} placeholder="blur" preload={props.preload} />
      )
    case ImageType.Vertical:
      return (
        <Image className="rounded-sm mx-auto" src={props.src} alt={props.alt} width={375} height={500} placeholder="blur" preload={props.preload} />
      )
    case ImageType.Horizontal:
      return (
        <Image className="rounded-sm mx-auto" src={props.src} alt={props.alt} width={800} height={600} placeholder="blur" preload={props.preload} />
      )
  }
}
