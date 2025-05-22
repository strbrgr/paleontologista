import { cn } from "@/lib/utils";

function HeaderOne(props: { text: string, className?: string }) {
  return (
    <h1
      className={cn(
        "mb-4 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight",
        props.className
      )}>
      {props.text}</h1>
  )
}

function HeaderTwo(props: { text: string, className?: string }) {
  return (
    <h2
      className={cn(
        "mb-3 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight",
        props.className
      )}>
      {props.text}</h2>
  )
}

function HeaderThree(props: { text: string, className?: string }) {
  return (
    <h3
      className={cn(
        "mb-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight",
        props.className
      )}>
      {props.text}
    </h3>
  )
}

function HeaderFour(props: { text: string, className?: string }) {
  return (
    <h4
      className={cn(
        "mb-2 text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight",
        props.className
      )}
    >{props.text}</h4>
  )
}

function HeaderFive(props: { text: string, className?: string }) {
  return (
    <h4
      className={cn(
        "mb-2 text-xl md:text-2xl lg:text-3xl font-semibold leading-snug tracking-tight",
        props.className
      )}
    >{props.text}</h4>
  )
}

export {
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  HeaderFour,
  HeaderFive
}
