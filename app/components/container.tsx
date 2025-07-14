import { cn } from "@/app/lib/utils";
import React from "react";

export const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("max-w-4xl mx-auto bg-white dark:bg-black p-4 md:p-10", className)}>
            {children}
        </div>
    )
}