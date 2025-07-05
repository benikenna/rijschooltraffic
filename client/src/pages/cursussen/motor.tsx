import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTrialModal } from "@/hooks/use-trial-modal";
import { CheckCircle, Bike, Shield, Calendar, Zap } from "lucide-react";

export default function Motor() {
  const { openModal } = useTrialModal();

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Motor Rijlessen</h1>
          <p className="text-xl text-muted-foreground">Behaal je motorrijbewijs veilig en professioneel</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Motorrijbewijs Halen</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Droom je van de vrijheid op twee wielen? Onze motorcursussen bieden professionele 
              begeleiding voor alle niveaus, van complete beginners tot ervaren rijders die hun skills willen verbeteren.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Gecertificeerde motorinstructeurs</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Moderne motoren en veiligheidsuitrusting</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>A1, A2 en A motorrijbewijs cursussen</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Gratis gebruik van helm en beschermende kleding</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Theorie en praktijk ondersteuning</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Motorcycle driving instruction scene" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Bike className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">A1 Rijbewijs</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Voor lichte motoren tot 125cc en maximaal 11kW</p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Vanaf 16 jaar</li>
                <li>• Maximaal 125cc</li>
                <li>• Tot 11kW vermogen</li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">€750</div>
              <Button onClick={openModal} className="w-full btn-primary">
                Meer Info
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover border-2 border-secondary">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Bike className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">A2 Rijbewijs</CardTitle>
              <Badge className="bg-secondary text-white">POPULAIR</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Voor motoren tot 35kW (ongeveer 47pk)</p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Vanaf 18 jaar</li>
                <li>• Tot 35kW vermogen</li>
                <li>• Populairste categorie</li>
              </ul>
              <div className="text-2xl font-bold text-secondary mb-4">€950</div>
              <Button onClick={openModal} className="w-full btn-secondary">
                Start Nu
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Bike className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">A Rijbewijs</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Voor alle motoren zonder beperkingen</p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Vanaf 20 jaar (A2 → A)</li>
                <li>• Vanaf 24 jaar (direct)</li>
                <li>• Geen beperkingen</li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">€1150</div>
              <Button onClick={openModal} className="w-full btn-primary">
                Meer Info
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Course Features */}
        <div className="bg-muted/50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Wat Maakt Onze Motorcursus Bijzonder?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Veiligheid Centraal</h3>
              <p className="text-muted-foreground">Complete veiligheidsuitrusting en ervaren instructeurs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Bike className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Moderne Motoren</h3>
              <p className="text-muted-foreground">Leer op moderne, goed onderhouden motorfietsen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexibele Planning</h3>
              <p className="text-muted-foreground">Weekend en avondlessen mogelijk</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Snelle Resultaten</h3>
              <p className="text-muted-foreground">Gemiddeld binnen 6-8 weken je motorrijbewijs</p>
            </div>
          </div>
        </div>

        {/* Training Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Het Leerproces</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Theorie & Voorbereiding</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Verkeersinzicht en motorspecifieke regels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Veiligheidsbewustzijn en risicoherkenning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Motorvoertuigtechniek basis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Online oefenplatform toegang</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Praktijk Training</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Motorbeheersing op gesloten terrein</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Geleidelijke overgang naar openbare weg</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Defensief rijden en anticipatie</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Examenvoorbereiding en -begeleiding</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Card className="hero-gradient text-white text-center">
          <CardHeader>
            <CardTitle className="text-3xl">Klaar voor het Avontuur?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-8 opacity-90">
              Begin vandaag nog met je motorcursus en ervaar de vrijheid op twee wielen!
            </p>
            <Button onClick={openModal} size="lg" variant="secondary">
              Informatie Aanvragen
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
