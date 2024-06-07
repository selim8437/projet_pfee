import { DashboardLayoutHeader } from "@/components/component/dashboard-layout-header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="bg-gray-900 flex flex-col">
        <div  >
            <DashboardLayoutHeader />
        </div>
        <div className="flex  flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            
            {children}</div>
      </div>
    );
  }