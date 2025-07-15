import { cn } from "@/app/lib/utils";
import React from "react";

export const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("relative mx-auto h-full w-full max-w-4xl bg-white dark:bg-black ", className)}>
            {children}
            
        </div>
    )
}