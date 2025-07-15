export type Project = {
    title: string;
    src: string;
    href: string;
    description: string;
}

export const projects: Project[] = [


    {
        title: "Pixel Pilot",
            src: "/pixel-pilot.png",
        href: "#",
        description: "Pixel Pilot is a cutting-edge platform that transforms text prompts into stunning mathematical animations using Manim"
    },
    {
        title: "AeroFlux",
        src: "/aeroflux.png",
        href: "#",
        description: "A powerful suite of Solana tools - AeroFlux provides an intuitive and streamlined interface for interacting with the Solana blockchain."
    },
    {
        title: "Solana-mpc-tss",
        src: "/solana-mpc-tss.png",
        href: "#",
        description: "A comprehensive TypeScript library for Solana Multi-Party Computation (MPC) and Threshold Signature Schemes (TSS)"
    },
    
]