import * as React from 'react'

interface AboutIconProps {
    className?: string
}
const AboutIcon = ({ className }: AboutIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        viewBox="0 0 24 24"
        className={className}
    >
        <path d="M5 13.5H3.5v7h7v-7H9M13.5 5V3.5h7v7h-7V9m-10-5.5h7v7h-7v-7Zm10 10h7v7h-7v-7Z" />
    </svg>
)
export default AboutIcon
