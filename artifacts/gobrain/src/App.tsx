import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import ItsPage from "@/pages/ItsPage";
import StrefaTerapeutyPage from "@/pages/StrefaTerapeutyPage";
import SzkoleniaPage from "@/pages/SzkoleniaPage";
import BlogPage from "@/pages/BlogPage";
import FaqPage from "@/pages/FaqPage";
import PomocPage from "@/pages/PomocPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/its" component={ItsPage} />
      <Route path="/strefa-terapeuty" component={StrefaTerapeutyPage} />
      <Route path="/szkolenia-i-webinary" component={SzkoleniaPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/pomoc" component={PomocPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
