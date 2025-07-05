import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TrialModal from "@/components/trial-modal";
import Home from "@/pages/home";
import OverOns from "@/pages/over-ons";
import Tarieven from "@/pages/tarieven";
import VerkeersRegels from "@/pages/kennisbank/verkeersregels";
import Examens from "@/pages/kennisbank/examens";
import Tips from "@/pages/kennisbank/tips";
import Voertuigen from "@/pages/kennisbank/voertuigen";
import Auto from "@/pages/cursussen/auto";
import Motor from "@/pages/cursussen/motor";
import Bromfiets from "@/pages/cursussen/bromfiets";
import Theorie from "@/pages/cursussen/theorie";
import Spoed from "@/pages/cursussen/spoed";
import WerkenBijDiep from "@/pages/werken-bij-diep";
import Reviews from "@/pages/reviews";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/over-ons" component={OverOns} />
        <Route path="/tarieven" component={Tarieven} />
        <Route path="/kennisbank/verkeersregels" component={VerkeersRegels} />
        <Route path="/kennisbank/examens" component={Examens} />
        <Route path="/kennisbank/tips" component={Tips} />
        <Route path="/kennisbank/voertuigen" component={Voertuigen} />
        <Route path="/cursussen/auto" component={Auto} />
        <Route path="/cursussen/motor" component={Motor} />
        <Route path="/cursussen/bromfiets" component={Bromfiets} />
        <Route path="/cursussen/theorie" component={Theorie} />
        <Route path="/cursussen/spoed" component={Spoed} />
        <Route path="/werken-bij-diep" component={WerkenBijDiep} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <TrialModal />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
