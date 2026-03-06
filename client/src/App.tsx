import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import MapPage from "./pages/Map";
import MyDonations from "./pages/MyDonations";
import Claims from "./pages/Claims";
import Pickups from "./pages/Pickups";
import Volunteers from "./pages/Volunteers";
import Impact from "./pages/Impact";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/login"} component={Login} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/explore"} component={Explore} />
      <Route path={"/map"} component={MapPage} />
      <Route path={"/my-donations"} component={MyDonations} />
      <Route path={"/claims"} component={Claims} />
      <Route path={"/pickups"} component={Pickups} />
      <Route path={"/volunteers"} component={Volunteers} />
      <Route path={"/impact"} component={Impact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
