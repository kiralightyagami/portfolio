"use client"
import React from 'react'
import Marquee from 'react-fast-marquee'
import { SectionHeading } from './section-heading'

export const Skills = () => {
  const dataLeft = [{
    name: "React",
    avatar: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    name: "Next.js",
    avatar: "https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-2/15/nextjs-256.png"
  },
  {
    name: "Tailwind CSS",
    avatar: "https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-tailwind-css-256.png"
  },
  {
    name: "TypeScript",
    avatar: "https://cdn1.iconfinder.com/data/icons/brands-5/512/fi-brands-typescript-256.png"
  },
  {
    name: "Node.js",
    avatar: "https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-256.png"
  },
  {
    name: "Python",
    avatar: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-256.png"
  },
  {
    name: "Docker",
    avatar: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-256.png"
  },
  {
    name: "Websocket",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/WebSocket_colored_logo.svg/512px-WebSocket_colored_logo.svg.png"
  },
  {
    name: "Solana",
    avatar: "https://cdn1.iconfinder.com/data/icons/crypto-coins-10/256/Solana.png"
  },
  {
    name: "Rust",
    avatar: "https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/rust-256.png"
  },

]

const dataRight = [{
    name: "Javascript",
    avatar: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png",
  },
  {
    name: "HTML",
    avatar: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png"
  },
  {
    name: "CSS",
    avatar: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-256.png"
  },
  {
    name: "Turborepo",
    avatar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDMuMDUiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjU2IDMxOCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJJY29uaWZ5SWQxOTgxMzU2MGE4NThlYzU0YjYiIHgxPSIxMjMuNzc5JSIgeDI9IjEyMy43NzklIiB5MT0iMCUiIHkyPSI2OTguOTYyJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFOTBGRiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGMUU1NiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJJY29uaWZ5SWQxOTgxMzU2MGE4NThlYzU0YjciIHgxPSIxMS40ODYlIiB4Mj0iMTEuNDg2JSIgeTE9Ii0yLjE5NCUiIHkyPSI1MTIuMzk4JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFOTBGRiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGMUU1NiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJJY29uaWZ5SWQxOTgxMzU2MGE4NThlYzU0YjgiIHgxPSItMTUzLjc0MyUiIHgyPSItMTUzLjc0MyUiIHkxPSItNjIuMjYzJSIgeTI9IjI3OC40NzklIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMUU5MEZGIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkYxRTU2Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Ikljb25pZnlJZDE5ODEzNTYwYTg1OGVjNTRiOSIgeDE9Ii0xNTMuNzQzJSIgeDI9Ii0xNTMuNzQzJSIgeTE9Ii0xNzguNDglIiB5Mj0iMTYyLjI2NCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxRTkwRkYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRjFFNTYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iSWNvbmlmeUlkMTk4MTM1NjBhODU4ZWM1NGIxMCIgeDE9IjExLjQ4NiUiIHgyPSIxMS40ODYlIiB5MT0iLTQxMi4zOTclIiB5Mj0iMTAyLjE5NCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxRTkwRkYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRjFFNTYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iSWNvbmlmeUlkMTk4MTM1NjBhODU4ZWM1NGIxMSIgeDE9IjEyMy43NzklIiB4Mj0iMTIzLjc3OSUiIHkxPSItNTk4Ljk2MSUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMUU5MEZGIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkYxRTU2Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNJY29uaWZ5SWQxOTgxMzU2MGE4NThlYzU0YjYpIiBkPSJNMTAzLjQxLjA5NUM2Ni44MzctMS4xNjYgMzAuMjY4IDEwLjE4MyAwIDM0LjE0NGwyMC4xNzcgMTEuMzVjMjMuOTYyLTE3LjY1NiA1NC4yMjYtMjUuMjIyIDgzLjIzMy0yMy45NjF6Ii8+PHBhdGggZmlsbD0idXJsKCNJY29uaWZ5SWQxOTgxMzU2MGE4NThlYzU0YjcpIiBkPSJNMjEwLjYgNDguMDE2Yy0yNS4yMjItMjYuNDgzLTU4LjAxLTQyLjg3Ny05My4zMTktNDYuNjZ2MjEuNDM4YzMwLjI2OCA1LjA0NCA1Ni43NSAxOC45MTYgNzguMTg4IDQwLjM1NXoiLz48cGF0aCBmaWxsPSJ1cmwoI0ljb25pZnlJZDE5ODEzNTYwYTg1OGVjNTRiOCkiIGQ9Ik0yNTYgMTUxLjQyNGMtMS4yNi0zMi43ODgtMTMuODcxLTY1LjU3Ni0zNS4zMDktOTMuMzJsLTE1LjEzNiAxNS4xMzNjMTcuNjU3IDIzLjk2IDI3Ljc0NyA1MC40NDQgMjkuMDA4IDc4LjE4N3oiLz48cGF0aCBmaWxsPSJ1cmwoI0ljb25pZnlJZDE5ODEzNTYwYTg1OGVjNTRiOSkiIGQ9Ik0yMjAuNjkxIDI1OS44NzdjMjEuNDM4LTI3Ljc0NCAzNC4wNDktNjAuNTMyIDM1LjMwOS05My4zMmgtMjEuNDM3Yy0xLjI2IDI3Ljc0NC0xMS4zNTEgNTQuMjI3LTI5LjAwOCA3OC4xODd6Ii8+PHBhdGggZmlsbD0idXJsKCNJY29uaWZ5SWQxOTgxMzU2MGE4NThlYzU0YjEwKSIgZD0iTTExNy4yODEgMzE2LjYyNmMzNC4wNDktMy43ODMgNjguMDk3LTIwLjE3OCA5My4zMi00Ni42NmwtMTUuMTMyLTE1LjEzM2MtMjEuNDM3IDIyLjctNDkuMTg1IDM2LjU3MS03OC4xODggNDAuMzU0eiIvPjxwYXRoIGZpbGw9InVybCgjSWNvbmlmeUlkMTk4MTM1NjBhODU4ZWM1NGIxMSkiIGQ9Ik0wIDI4My44MzhjMzAuMjY4IDIzLjk2IDY2LjgzNyAzNS4zMSAxMDMuNDEgMzQuMDQ5di0yMS40MzljLTI5LjAwNyAxLjI2Mi01OC4wMS02LjMwNS04My4yMzMtMjMuOTZ6Ii8+PHBhdGggZD0iTTk3LjY1MSA3MS4zNDRxMjAuMjE4IDAgMzcuMzIxIDYuODg2cTE3LjEwMyA2LjY2NCAyOS4zMjQgMTguNjZxMTIuNDM4IDExLjk5NyAxOS4zMjYgMjguMjE0cTYuODg4IDE1Ljk5NCA2Ljg4NyAzNC42NTVxLjAwMSAxOC42Ni02Ljg4NyAzNC44NzdxLTYuODg4IDE1Ljk5NC0xOS4zMjYgMjcuOTlxLTEyLjIyIDExLjk5Ny0yOS4zMjQgMTguODgzcS0xNy4xMDMgNi42NjUtMzcuMzIgNi42NjVxLTIwLjQ0IDAtMzcuNTQ0LTYuNjY1Yy0xMS4yNTctNC41OTEtMjAuOTU0LTEwLjg4NS0yOS4xMDEtMTguODgycS0xMi4yMTktMTEuOTk3LTE5LjEwNS0yNy45OTFxLTYuODg3LTE2LjIxNy02Ljg4Ny0zNC44Nzd0Ni44ODctMzQuNjU1cTYuODg2LTE2LjIxOCAxOS4xMDUtMjguMjEzYzguMTQ3LTcuOTk4IDE3Ljg0NC0xNC4yMTggMjkuMTAxLTE4LjY2YzExLjQwMi00LjU5MiAyMy45Mi02Ljg4NyAzNy41NDMtNi44ODdtMCA0Mi4yMDhxLTkuNTUzIDAtMTguMjE2IDMuNTU0Yy01LjYyNiAyLjIyMi0xMC41OSA1LjQwNi0xNC44ODQgOS41NTNxLTYuNDQyIDYuMjItMTAuMjE5IDE0LjY2MXEtMy43NzUgOC40NDItMy43NzYgMTguNDM5cS4wMDEgOS45OTYgMy43NzYgMTguNDM4cTMuNzc3IDguNDQyIDEwLjIyIDE0LjY2MmM0LjI5MyA0LjE0NyA5LjI1NyA3LjQwNCAxNC44ODMgOS43NzRxOC42NjMgMy4zMzMgMTguMjE2IDMuMzMycTkuNTU1IDAgMTcuOTk0LTMuMzMycTguNjY1LTMuNTU0IDE1LjEwNi05Ljc3NHE2LjY2Ni02LjIyIDEwLjQ0MS0xNC42NjJ0My43NzctMTguNDM4cTAtOS45OTctMy43NzctMTguNDM5cS0zLjc3NS04LjQ0MS0xMC40NC0xNC42NjFxLTYuNDQyLTYuMjItMTUuMTA3LTkuNTUzcS04LjQzOS0zLjU1NC0xNy45OTQtMy41NTQiLz48L3N2Zz4="
  },
  {
    name: "Java",
    avatar: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-256.png"
  },
  {
    name: "Express",
    avatar: "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png"
  },
  {
    name: "PostgreSQL",
    avatar: "https://cdn.iconscout.com/icon/free/png-512/free-postgresql-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-logo-freebies-pack-logos-icons-1175122.png?f=webp&w=256"
  },
  {
    name: "Kubernetes",
    avatar: "https://cdn2.iconfinder.com/data/icons/mixd/512/16_kubernetes-256.png"
  },
  {
    name: "Webrtc",
    avatar: "https://www.svgrepo.com/show/354551/webrtc.svg"
  },
  {
    name: "Redis",
    avatar: "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000"
  },

]
  
    return (
      <div className='py-10 '>
        <SectionHeading>Skills</SectionHeading>
        <div className="[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] flex"> 
        <Marquee speed={20} pauseOnHover={true} className='py-4'>
            {dataLeft.map((item, idx) => (
                <SkillCard key={`skill-${idx}`} {...item} />
            ))}
        </Marquee>
         </div>
         <div className="[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] flex"> 
        <Marquee direction='right' speed={20} pauseOnHover={true} className='py-4'>
            {dataRight.map((item, idx) => (
                <SkillCard key={`skill-${idx}`} {...item} />
            ))}
        </Marquee>
         </div>
    </div>
  )
}

const SkillCard = ({name, avatar}: {name: string, avatar: string}) => {
  return (
    <div className='hover:shadow-md hover:dark:[box-shadow:var(--shadow-section)] hover:dark:bg-neutral-900 hover:dark:border-neutral-600 hover:dark:scale-[1.02] transition-all duration-500 ease-out mx-auto p-2 rounded-xl flex justify-between flex-col max-w-xs w-full shadow-input bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 items-center'>
      <div className='flex items-center'>
        <img src={avatar} alt={name} className='object-cover size-4 rounded-full' />
        <p className='ml-1 text-xs text-neutral-500 dark:text-neutral-400'>{name}</p>
      </div>
    </div>
    
  )
}
