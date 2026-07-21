import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import ItsPage from "@/pages/ItsPage";
import StrefaTerapeutyPage from "@/pages/StrefaTerapeutyPage";
import SzkoleniaPage from "@/pages/SzkoleniaPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import FaqPage from "@/pages/FaqPage";
import PomocPage from "@/pages/PomocPage";
import SklepPage from "@/pages/SklepPage";
import ProgramyEdukacyjnePage from "@/pages/ProgramyEdukacyjnePage";
import ProgramPage from "@/pages/ProgramPage";
import ItsSchoolPage from "@/pages/ItsSchoolPage";
import KartaMowyPage from "@/pages/KartaMowyPage";
import DarmoveWebinaryPage from "@/pages/DarmoveWebinaryPage";
import NotFound from "@/pages/not-found";
import PolitykaPrywatnosciPage from "@/pages/PolitykaPrywatnosciPage";
import RegulaminPage from "@/pages/RegulaminPage";
import RegulaminAplikacjiPage from "@/pages/RegulaminAplikacjiPage";

export interface RenderResult {
  html: string;
  head: string;
  scripts: string;
}

export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const queryClient = new QueryClient();

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/its" element={<ItsPage />} />
                <Route path="/its-school" element={<ItsSchoolPage />} />
                <Route path="/strefa-terapeuty" element={<StrefaTerapeutyPage />} />
                <Route path="/szkolenia-i-webinary" element={<SzkoleniaPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/pomoc" element={<PomocPage />} />
                <Route path="/sklep" element={<SklepPage />} />
                <Route path="/programy-edukacyjne" element={<ProgramyEdukacyjnePage />} />
                <Route path="/programy-edukacyjne/:slug" element={<ProgramPage />} />
                <Route path="/karta-mowy" element={<KartaMowyPage />} />
                <Route path="/darmowe-webinary" element={<DarmoveWebinaryPage />} />
                <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosciPage />} />
                <Route path="/regulamin" element={<RegulaminPage />} />
                <Route path="/regulamin-aplikacji" element={<RegulaminAplikacjiPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;
  const headParts = [
    helmet?.title?.toString() ?? "",
    helmet?.meta?.toString() ?? "",
    helmet?.link?.toString() ?? "",
    helmet?.script?.toString() ?? "",
  ].filter((s) => s.trim() !== "");
  const head = headParts.join("\n    ");
  const scripts = helmet?.script?.toString() ?? "";

  return { html, head, scripts };
}
