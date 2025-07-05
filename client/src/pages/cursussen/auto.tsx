import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTrialModal } from "@/hooks/use-trial-modal";
import { CheckCircle, Car, Users, Clock, Trophy, Target } from "lucide-react";

export default function Auto() {
  const { openModal } = useTrialModal();

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Auto Rijlessen</h1>
          <p className="text-xl text-muted-foreground">Leer autorijden met professionele begeleiding</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Waarom Auto Rijlessen bij Ons?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Onze auto rijlessen zijn ontworpen om je stap voor stap te begeleiden naar je rijbewijs. 
              Met ervaren instructeurs en moderne lesvoertuigen zorg we voor een veilige en effectieve leerervaring.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Persoonlijke aandacht van ervaren instructeurs</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Moderne lesvoertuigen met dubbele bediening</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Flexibele planning aangepast aan jouw schema</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Handgeschakelde en automatische lessen</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Voorbereiding op praktijkexamen</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Student learning to drive with instructor" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="bg-muted/50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Lesstructuur</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kennismaking</h3>
              <p className="text-muted-foreground">Intake gesprek en eerste kennismaking met het voertuig</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Basis Vaardigheden</h3>
              <p className="text-muted-foreground">Leren sturen, schakelen en basishandelingen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verkeersdeelname</h3>
              <p className="text-muted-foreground">Rijden in het verkeer en verkeersregels toepassen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Examen Voorbereiding</h3>
              <p className="text-muted-foreground">Gereedmaken voor het praktijkexamen</p>
            </div>
          </div>
        </div>

        {/* Course Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Car className="mr-3 h-8 w-8 text-primary" />
                Handgeschakeld
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Leer rijden met een handgeschakelde auto. De traditionele manier die je volledige controle geeft over het voertuig.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  <span>Volledige controle over de auto</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  <span>Koppeling en versnellingen leren</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  <span>Geldig voor alle auto's</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">€45 per les</div>
              <Button onClick={openModal} className="w-full btn-primary">
                Meer Informatie
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover border-2 border-secondary">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Target className="mr-3 h-8 w-8 text-secondary" />
                Automatisch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Leer rijden met een automatische auto. Makkelijker en sneller te leren, perfect voor beginners.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  <span>Geen koppeling of versnellingen</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  <span>Sneller te leren</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  <span>Minder stress tijdens lessen</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-secondary mb-4">€55 per les</div>
              <Button onClick={openModal} className="w-full btn-secondary">
                Proefles Automaat
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl font-bold text-primary">2500+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Geslaagde Auto Leerlingen</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl font-bold text-primary">95%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Slagingspercentage</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl font-bold text-primary">30</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Gemiddeld Aantal Lessen</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Car className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl font-bold text-primary">15</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Moderne Lesvoertuigen</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Klaar om te Beginnen?</h2>
          <p className="text-xl text-muted-foreground mb-8">Start vandaag nog met je gratis proefles!</p>
          <Button onClick={openModal} size="lg" className="btn-secondary">
            Gratis Proefles Aanvragen
          </Button>
        </div>
      </div>
    </div>
  );
}
