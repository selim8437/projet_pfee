import { DashboardLayoutAdmin } from "@/components/component/dashboard-layout-admin";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] bg-gray-900">
      <div className="hidden border-r  lg:block dark:bg-gray-900">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <DashboardLayoutAdmin />
        </div>
      </div>
    <div >{children}</div>
  </div>
  );
}