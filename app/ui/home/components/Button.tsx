export default function Button({
  className,
  children
}: {
  className?: string,
  children: React.ReactNode
}) {
  return (
    <button className={`
        bg-[#4A60A1] hover:bg-[#364c8d] text-white
      py-[12px] px-[24px] rounded-[4px] ${className}
    `}>
      {children}
    </button>
  )
}

export function ButtonWhite({
  className,
  children
}: {
  className?: string,
  children: React.ReactNode
}) {
  return (
    <button className={`
        bg-white hover:bg-[#cccccc] text-black
      py-[12px] px-[24px] rounded-[4px] ${className}
    `}>
      {children}
    </button>
  )
}