import { Button } from "@/components/ui/button";
import { useTrialModal } from "@/hooks/use-trial-modal";
import { Link } from "wouter";

export default function Hero() {
  const { openModal } = useTrialModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Jouw Rijbewijs Binnen Handbereik
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professionele rijlessen met ervaren instructeurs. Start vandaag nog met je rijbewijs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={openModal}
              size="lg" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Gratis Proeflies
            </Button>
            <Link href="/tarieven">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                Bekijk Tarieven
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
