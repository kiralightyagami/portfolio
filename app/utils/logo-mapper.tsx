import React from 'react'
import { ReactIcon, NextIcon, TypeScriptIcon, TailwindIcon, PythonIcon, DockerIcon, GitIcon, SolanaIcon, NodeIcon } from '@/app/icons/stack'

import { IconCode } from '@tabler/icons-react'

export const getLogoForTechnology = (technology: string) => {
    const logoMap : Record<string, React.ReactNode> = {
        React: <ReactIcon className="h-4 w-4 shrink-0" />,
        Next: <NextIcon className="h-4 w-4 shrink-0" />,
        Tailwind: <TailwindIcon className="h-4 w-4 shrink-0" />,
        TypeScript: <TypeScriptIcon className="h-4 w-4 shrink-0" />,
        Python: <PythonIcon className="h-4 w-4 shrink-0" />,
        Docker: <DockerIcon className="h-4 w-4 shrink-0" />,
        Git: <GitIcon className="h-4 w-4 shrink-0" />,
        Solana: <SolanaIcon className="h-4 w-4 shrink-0" />,
        Nodejs: <NodeIcon className="h-4 w-4 shrink-0" />,
    }
    return (
    logoMap[technology] || <IconCode className="h-4 w-4 shrink-0 text-neutral-600 dark:text-neutral-200" />
  )
}

export const getTechnologyDisplayName = (technology: string) => {
    const displayNameMap: Record<string, string> = {
        Next: "Next.js",
        Nodejs: "Node.js",
        TypeScript: "TypeScript",
        React: "React",
        Python: "Python",
        Docker: "Docker",
        Git: "Git",
        Solana: "Solana",
        Tailwind: "Tailwind CSS",
    }
    return displayNameMap[technology] || technology
}
