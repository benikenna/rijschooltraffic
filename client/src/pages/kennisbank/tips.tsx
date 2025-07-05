import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Hand, Brain, RotateCcw, Route, MessageCircle, Lightbulb } from "lucide-react";

export default function Tips() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Rijlessen Tips</h1>
          <p className="text-xl text-muted-foreground">Handige tips om sneller te leren autorijden</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Kijk Ver Vooruit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Kijk niet alleen naar de auto voor je, maar ver vooruit. Dit helpt je beter anticiperen op verkeerssituaties.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Hand className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Juiste Stuurhouding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Houd het stuur vast op de 9 en 3 uur positie. Dit geeft je de beste controle over je voertuig.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Blijf Kalm</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Spanning en stress maken rijden moeilijker. Probeer ontspannen te blijven tijdens je rijlessen.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <RotateCcw className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Spiegels Controleren</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Controleer regelmatig je spiegels. Doe dit elke 5-8 seconden om je omgeving in de gaten te houden.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Route className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Oefenen Buiten Les</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Oefen ook buiten je rijlessen. Theoriekennis thuis bestuderen helpt je praktijklessen effectiever te maken.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Communiceer met Instructeur</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stel vragen en deel je zorgen met je instructeur. Goede communicatie versnelt je leerproces.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="hero-gradient text-white">
          <CardHeader>
            <CardTitle className="text-3xl text-center flex items-center justify-center">
              <Lightbulb className="mr-3 h-8 w-8" />
              Veel Gestelde Vragen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-b border-blue-400 pb-6">
              <h3 className="text-xl font-semibold mb-2">Hoeveel rijlessen heb ik nodig?</h3>
              <p className="opacity-90">
                Gemiddeld hebben mensen 25-40 rijlessen nodig, maar dit hangt af van je persoonlijke leervermogen en ervaring.
              </p>
            </div>
            <div className="border-b border-blue-400 pb-6">
              <h3 className="text-xl font-semibold mb-2">Wanneer ben ik klaar voor mijn examen?</h3>
              <p className="opacity-90">
                Je instructeur zal inschatten wanneer je klaar bent. Meestal kun je zelfstandig rijden zonder begeleiding.
              </p>
            </div>
            <div className="border-b border-blue-400 pb-6">
              <h3 className="text-xl font-semibold mb-2">Wat als ik zak voor mijn examen?</h3>
              <p className="opacity-90">
                Geen probleem! Veel mensen zakken de eerste keer. Je kunt een nieuwe afspraak maken en verder oefenen.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Hoe bereid ik me voor op slecht weer?</h3>
              <p className="opacity-90">
                Oefen rijden in verschillende weersomstandigheden. Regen en wind vereisen een aangepaste rijstijl en meer afstand.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
