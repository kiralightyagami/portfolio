import { cn } from '@/app/lib/utils'
import React from 'react'
import { IconAnchor } from '@tabler/icons-react'

export const ReactIcon = ({className}: {className?: string}) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_9_114)">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.3-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.788-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
            </g>
            <defs>
                <clipPath id="clip0_9_114">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
            <style>
                {`path { fill: #61DAFB; }`}
            </style>
        </svg>
    </div>
  )
}

export const NextIcon = ({className}: {className?: string}) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
            </svg>
        </div>
    )
}

export const TypeScriptIcon = ({className}: {className?: string}) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="#3178C6"/>
            </svg>
        </div>
    )
}

export const TailwindIcon = ({className}: {className?: string}) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="url(#tailwind-gradient)"/>
                <defs>
                    <linearGradient id="tailwind-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06B6D4"/>
                        <stop offset="100%" stopColor="#3B82F6"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export const PythonIcon = ({className}: {className?: string}) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="url(#python-gradient)"/>
                <defs>
                    <linearGradient id="python-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3776AB"/>
                        <stop offset="100%" stopColor="#FFD43B"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export const RustIcon = ({className}: {className?: string}) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <img
                src="data:image/png;base64,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"
                alt="Rust"
                className={cn("h-full w-full object-contain", className)}
            />
        </div>
    )
}

export const SolanaIcon = ({className}: {className?: string}) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.07 398.17">
                <defs>
                    <linearGradient id="linear-gradient-sol" x1="463" y1="205.16" x2="182.39" y2="742.62" gradientTransform="translate(0 -198)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#00ffa3"/>
                        <stop offset="1" stopColor="#dc1fff"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-2-sol" x1="340.31" y1="141.1" x2="59.71" y2="678.57" xlinkHref="#linear-gradient-sol"/>
                    <linearGradient id="linear-gradient-3-sol" x1="401.26" y1="172.92" x2="120.66" y2="710.39" xlinkHref="#linear-gradient-sol"/>
                </defs>
                <path fill="url(#linear-gradient-sol)" d="M84.53,358.89A16.63,16.63,0,0,1,96.28,354H501.73a8.3,8.3,0,0,1,5.87,14.18l-80.09,80.09a16.61,16.61,0,0,1-11.75,4.86H10.31A8.31,8.31,0,0,1,4.43,439Z" transform="translate(-1.98 -55)"/>
                <path fill="url(#linear-gradient-2-sol)" d="M84.53,59.85A17.08,17.08,0,0,1,96.28,55H501.73a8.3,8.3,0,0,1,5.87,14.18l-80.09,80.09a16.61,16.61,0,0,1-11.75,4.86H10.31A8.31,8.31,0,0,1,4.43,140Z" transform="translate(-1.98 -55)"/>
                <path fill="url(#linear-gradient-3-sol)" d="M427.51,208.42a16.61,16.61,0,0,0-11.75-4.86H10.31a8.31,8.31,0,0,0-5.88,14.18l80.1,80.09a16.6,16.6,0,0,0,11.75,4.86H501.73a8.3,8.3,0,0,0,5.87-14.18Z" transform="translate(-1.98 -55)"/>
            </svg>
        </div>
    )
}

export const NodeIcon = ({className}: {className?: string}) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.047.194.047.267 0l8.795-5.076c.082-.047.134-.141.134-.247V6.921c0-.107-.052-.2-.134-.247l-8.795-5.076c-.082-.047-.194-.047-.267 0L2.847 6.674c-.082.047-.134.141-.134.247v10.141c0 .107.052.2.134.247l2.414 1.395c1.309.654 2.108-.116 2.108-.891V7.787c0-.153.119-.272.267-.272h1.197c.148 0 .267.119.267.272v10.026c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55L2.051 18.271c-.571-.329-.922-.936-.922-1.604V6.525c0-.668.351-1.275.922-1.604L10.846 0.845c.559-.315 1.301-.315 1.86 0l8.795 5.076c.571.329.922.936.922 1.604v10.142c0 .668-.351 1.275-.922 1.604l-8.795 5.076c-.28.163-.6.247-.922.247l.214-.001z" fill="#68A063"/>
                <path d="M14.131 17.952c-3.853 0-4.654-1.77-4.654-3.248 0-.153.119-.272.267-.272h1.219c.133 0 .246.096.267.229.181 1.219.717 1.837 3.901 1.837 2.4 0 3.428-.544 3.428-1.817 0-.735-.289-1.277-4.015-1.646-3.111-.309-5.04-1.004-5.04-3.51 0-2.31 1.946-3.688 5.208-3.688 3.665 0 5.486 1.273 5.712 4.003.007.077-.02.153-.074.207-.054.054-.126.086-.2.086h-1.219c-.126 0-.236-.09-.26-.211-.289-1.29-.994-1.704-4.259-1.704-3.139 0-3.502.791-3.502 1.383 0 .827.43 1.069 3.892 1.537 3.433.463 5.168 1.117 5.168 3.607 0 2.5-2.081 3.928-5.712 3.928l.062-.002z" fill="#68A063"/>
            </svg>
        </div>
    )
}

export const DockerIcon = ({className}: {className?: string}) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M11.06 11.078h2.12a.186.186 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185M8.137 11.078h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H8.137a.185.185 0 0 0-.186.185v1.888c0 .102.084.185.186.185M11.06 8.137h2.12a.185.185 0 0 0 .185-.185V6.064a.185.185 0 0 0-.185-.186h-2.12a.185.185 0 0 0-.185.186v1.888c0 .102.082.185.185.185M8.137 8.137h2.119a.185.185 0 0 0 .185-.185V6.064a.185.185 0 0 0-.185-.186H8.137a.185.185 0 0 0-.186.186v1.888c0 .102.084.185.186.185M5.212 11.078h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.212a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185M2.288 11.078h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.288a.185.185 0 0 0-.186.185v1.888c0 .102.084.185.186.185" fill="#2496ED"/>
                <path d="M8.137 5.212h2.119a.185.185 0 0 0 .185-.185V3.139a.185.185 0 0 0-.185-.185H8.137a.185.185 0 0 0-.186.185V5.027c0 .102.084.185.186.185M19.764 9.52c-.367-.214-.84-.314-1.427-.314-.367 0-.754.052-1.15.157-.053-.157-.105-.304-.157-.461-.314-.945-.891-1.492-1.625-1.492-.157 0-.314.052-.471.157a.185.185 0 0 0-.052.26c.105.157.157.367.157.576 0 .314-.105.628-.314.891-.157.209-.367.366-.576.471-.052.026-.079.079-.079.131v.079c0 .367.157.734.419.997.314.314.734.471 1.15.471.314 0 .628-.105.891-.314.209-.157.366-.367.471-.576.314.105.628.157.942.157.471 0 .891-.105 1.25-.314.576-.314.891-.786.891-1.36 0-.314-.105-.628-.314-.891-.052-.026-.105-.026-.157 0" fill="#2496ED"/>
            </svg>
        </div>
    )
}

export const GitIcon = ({className}: {className?: string}) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" fill="#F05032"/>
            </svg>
        </div>
    )
}

export const AnchorIcon = ({className}: {className?: string}) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <IconAnchor className="h-full w-full" />
        </div>
    )
}




