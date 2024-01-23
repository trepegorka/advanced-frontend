import * as React from 'react'

interface HomeIconProps {
    className?: string
}
const HomeIcon = ({ className }: HomeIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        viewBox="0 0 24 24"
        className={className}
    >
        <path d="M19 10v10H9m-4 0V10l7-7 3.5 3.5" />
    </svg>
)
export default HomeIcon
