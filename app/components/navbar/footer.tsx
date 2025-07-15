import Link from "next/link";
import React from "react";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { Container } from "../container";

export const Footer = () => {
    return <Container className="flex justify-between border-t border-neutral-100 dark:border-neutral-800 py-3 px-6">
        <p className="text-xs text-neutral-500">
            Built with ❤️ by Asvin Shrivas
        </p>
        <div className="flex items-center justify center gap-4 ">
            <Link href="https://github.com/kiralightyagami">
            <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
            </Link>
            <Link href="https://x.com/ShrivasAsvin">
            <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
            </Link>
        </div>
    </Container>
}