/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "@/components/sidebar";
import Home from "@/src/app/page";
import PipelinePage from "@/src/app/pipeline/page";
import OutreachPage from "@/src/app/outreach/page";
import AnalyticsPage from "@/src/app/analytics/page";
import SettingsPage from "@/src/app/settings/page";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import { DesignSystemProvider } from "@/src/components/DesignSystemProvider";
import DesignSwitcher from "@/src/components/DesignSwitcher";

import MobileNav from "@/components/mobile-nav";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="jai-theme">
      <DesignSystemProvider>
        <Router>
          <div className="flex bg-background text-foreground min-h-screen">
            <div className="hidden md:block">
              <Sidebar />
            </div>
            <main className="flex-1 md:ml-[220px] h-screen overflow-hidden relative">
              <ScrollArea className="h-full w-full">
                <div className="p-4 md:p-12 pb-24 max-w-[1600px] mx-auto">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pipeline" element={<PipelinePage />} />
                    <Route path="/outreach" element={<OutreachPage />} />
                    <Route path="/analytics" element={<AnalyticsPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                  </Routes>
                </div>
              </ScrollArea>
              
              <MobileNav />
              <DesignSwitcher />
            </main>
          </div>
        </Router>
      </DesignSystemProvider>
    </ThemeProvider>
  );
}
