import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { VercelToolbar } from "@vercel/toolbar/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import SidebarNav from "@/components/sidebar-nav";
import { LockScreen } from "@/components/LockScreen";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CPS Digital Marketing Strategy | B2C Student Acquisition",
  description:
    "B2C Digital Marketing Strategy for Cornerstone Performance Solutions — HCIB & ACL6 student acquisition plan by Broadbrand.",
  icons: {
    icon: "/logos/cps-logo.avif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldInjectToolbar =
    process.env.NODE_ENV === "development" ||
    process.env.VERCEL_ENV === "preview";

  return (
    <html lang="en" className={`${poppins.variable} ${poppins.className}`}>
      <body className="antialiased">
        <LockScreen>
          <SidebarNav />

          {/* Main content: offset by sidebar width on desktop, full-width + top-bar offset on mobile */}
          <main className="min-h-screen pt-14 md:ml-[260px] md:pt-0">
            <TooltipProvider>{children}</TooltipProvider>
          </main>
        </LockScreen>
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
