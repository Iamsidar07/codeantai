import { MobileNavigation } from "@/components/MobileNavigation";
import { Sidebar } from "@/components/sidebar";
import { Suspense } from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Suspense>
                <MobileNavigation />
                <Sidebar />
            </Suspense>
            <div className="flex-1 lg:ml-[242px] bg-muted lg:p-6 lg:w-[calc(100vw-242px)] min-h-svh">
                <div className="bg-white border rounded-xl h-full shadow-xs border-[#E9EAEB] pt-16 sm:pt-0">
                    {children}
                </div>
            </div>
        </div>
    );
}
