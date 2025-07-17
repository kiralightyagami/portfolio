export type Project = {
    title: string;
    src: string;
    href: string;
    description: string;
    stack: string[];
}

export const projects: Project[] = [


    {
        title: "Pixel Pilot",
        src: "/pixel-pilot.png",
        href: "https://github.com/kiralightyagami/pixel-pilot",
        description: "Pixel Pilot is a cutting-edge platform that transforms text prompts into stunning mathematical animations using Manim",
        stack: ["Next","Nodejs","TypeScript"]
    },
    {
        title: "AeroFlux",
        src: "/aeroflux.png",
        href: "https://github.com/kiralightyagami/AeroFlux",
        description: "A powerful suite of Solana tools - AeroFlux provides an intuitive and streamlined interface for interacting with the Solana blockchain.",
        stack: ["Next","Nodejs","TypeScript","Solana"]
    },
    {
        title: "Solana-mpc-tss",
        src: "/solana-mpc-tss.png",
        href: "https://github.com/kiralightyagami/solana-mpc-tss",
        description: "A comprehensive TypeScript library for Solana Multi-Party Computation (MPC) and Threshold Signature Schemes (TSS)",
        stack: ["Nodejs","TypeScript","Solana"]
    },
    
]