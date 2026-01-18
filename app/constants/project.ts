export type Project = {
    title: string;
    src: string;
    href: string;
    description: string;
    stack: string[];
}

export const projects: Project[] = [


    {
        title: "n7n",
        src: "/n7n.png",
        href: "https://github.com/kiralightyagami/n7n",
        description: "An AI-powered workflow automation platform built with Next.js, enabling users to create visual workflows that connect various services and AI models. Similar to n8n, but with a focus on AI integration.",
        stack: ["Next","Tailwind","TypeScript"]    
    },{
        title: "Verse-X",
        src: "/verse-x.png",
        href: "https://github.com/kiralightyagami/VerseX",
        description: "A vibrant 2D virtual universe where users can connect, collaborate, and create extraordinary experiences.",
        stack: ["Next","Nodejs","TypeScript"]
    },{
        title: "Vulnera",
        src: "/vulnera.png",
        href: "https://vulnera-iota.vercel.app/",
        description: "Decentralized Bug Bounty Platform on Solana",
        stack: ["Solana","Anchor","Rust","Next","Nodejs","TypeScript"]
    },{
        title: "Stablecoin",
        src: "/stablecoin.png",
        href: "https://github.com/kiralightyagami/Stablecoin",
        description: "Stablecoin on solana",
        stack: ["Solana","Anchor","Rust"]
    },{
        title: "Pixel Pilot",
        src: "/pixel-pilot.png",
        href: "https://github.com/kiralightyagami/pixel-pilot",
        description: "Pixel Pilot is a cutting-edge platform that transforms text prompts into stunning mathematical animations using Manim",
        stack: ["Next","Nodejs","TypeScript"]
    },{
        title: "NFT Marketplace",
        src: "/nft-marketplace.png",
        href: "https://github.com/kiralightyagami/NFT-Marketplace",
        description: "A NFT marketplace built in Rust, a decentralized platform that enables users to mint, buy, sell, and trade unique digital assets (NFTs) on the Solana blockchain.",
        stack: ["Solana","Anchor","Rust"]
    },{
        title: "Solana-mpc-tss",
        src: "/solana-mpc-tss.png",
        href: "https://github.com/kiralightyagami/solana-mpc-tss",
        description: "A comprehensive TypeScript library for Solana Multi-Party Computation (MPC) and Threshold Signature Schemes (TSS)",
        stack: ["Nodejs","TypeScript","Solana"]
    },{
        title: "resumera",
        src: "/resumera.png",
        href: "https://github.com/kiralightyagami/resumera",
        description: "AI-Powered Resume Analysis & ATS Optimization Platform.",
        stack: ["Next","Tailwind","TypeScript"]
    },
    {
        title: "AeroFlux",
        src: "/aeroflux.png",
        href: "https://github.com/kiralightyagami/AeroFlux",
        description: "A powerful suite of Solana tools - AeroFlux provides an intuitive and streamlined interface for interacting with the Solana blockchain.",
        stack: ["Next","Nodejs","TypeScript","Solana"]
    },
    {
        title: "Amm",
        src: "/AMM.png",
        href: "https://github.com/kiralightyagami/Amm",
        description: "Half baked Automatic market maker contract without order book in Anchor",
        stack: ["Anchor","Rust","Solana"]
    },
    
]