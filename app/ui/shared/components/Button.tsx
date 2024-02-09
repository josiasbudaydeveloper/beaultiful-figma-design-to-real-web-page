export default function Button({
  className,
  bgColor,
  bgHoverColor,
  textColor,
  children
}: {
  className?: string,
  bgColor?: string,
  bgHoverColor?: string,
  textColor?: string,
  children: React.ReactNode
}) {
  return (
    <button className={`
      ${bgColor ? `bg-[${bgColor}]` : 'bg-[#4A60A1]' }
      ${bgHoverColor ? `hover:bg-[${bgHoverColor}]` : 'hover:bg-[#364c8d]'}
      ${textColor ? `text-[${textColor}]` : 'text-white'}
      py-[12px] px-[24px] rounded-[4px] ${className}
    `}>
      {children}
    </button>
  )
}