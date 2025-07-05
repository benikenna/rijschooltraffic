import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTrialModal } from "@/hooks/use-trial-modal";
import { CheckCircle, Zap, Calendar, Target, Trophy, Clock, Rocket, Headphones } from "lucide-react";

export default function Spoed() {
  const { openModal } = useTrialModal();

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Spoedcursus</h1>
          <p className="text-xl text-muted-foreground">Je rijbewijs in recordtijd - intensieve begeleiding</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Rijbewijs in 2-3 Weken</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Heb je haast met je rijbewijs? Onze spoedcursus is perfect voor mensen die snel hun 
              rijbewijs willen halen. Met intensieve begeleiding en een gepersonaliseerde aanpak 
              haal je je rijbewijs in recordtijd.
            </p>
            <div className="bg-accent/20 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Zap className="mr-2 h-5 w-5 text-secondary" />
                Snelle Resultaten
              </h3>
              <p className="text-muted-foreground">
                Gemiddeld slagen onze spoedcursus studenten binnen 2-3 weken!
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Dagelijkse rijlessen mogelijk</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Intensieve theorie voorbereiding</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Prioritaire examenscheduling</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Persoonlijke begeleiding</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Intensive driving lesson scenario" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="bg-muted/50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Spoedcursus Pakketten</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Basis Spoedcursus</CardTitle>
                <div className="text-4xl font-bold text-primary">€1299</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>20 rijlessen à 60 minuten</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Theorie cursus inclusief</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Flexibele planning (ook weekends)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Examen begeleiding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Online theorie platform</span>
                  </li>
                </ul>
                <Button onClick={openModal} className="w-full btn-primary">
                  Kies Basis Pakket
                </Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2 border-secondary">
              <CardHeader>
                <div className="text-center mb-4">
                  <Badge className="bg-secondary text-white">POPULAIR</Badge>
                </div>
                <CardTitle className="text-2xl">Premium Spoedcursus</CardTitle>
                <div className="text-4xl font-bold text-secondary">€1699</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>30 rijlessen à 60 minuten</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Privé theorie cursus</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Dagelijkse lessen mogelijk</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Gegarandeerde examen datum</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Slaag-garantie*</span>
                  </li>
                </ul>
                <Button onClick={openModal} className="w-full btn-secondary">
                  Kies Premium Pakket
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg">Snelle Start</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Begin binnen 48 uur na aanmelding</p>
            </CardContent>
          </Card>
          
          <Card className="text-center card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg">Flexibele Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Dagelijkse lessen, ook in weekenden</p>
            </CardContent>
          </Card>
          
          <Card className="text-center card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg">Hoog Slagingspercentage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">90% slaagt in eerste poging</p>
            </CardContent>
          </Card>
          
          <Card className="text-center card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg">Persoonlijke Begeleiding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Toegewijde instructeur gedurende gehele cursus</p>
            </CardContent>
          </Card>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Het Spoedcursus Proces</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <CardTitle>Week 1: Intensieve Start</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Theorie cursus versneld</li>
                  <li>• Dagelijkse praktijklessen</li>
                  <li>• Basis rijvaardigheden</li>
                  <li>• Voortgangsevaluatie</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <CardTitle>Week 2: Verdieping</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Complexe verkeerssituaties</li>
                  <li>• Snelweg rijden</li>
                  <li>• Parkeren en manoeuvreren</li>
                  <li>• Theorie examen afleggen</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <CardTitle>Week 3: Examen Klaar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Examen simulatie</li>
                  <li>• Laatste verfijningen</li>
                  <li>• Mentale voorbereiding</li>
                  <li>• Praktijkexamen</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-muted/50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Succesverhalen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">SB</span>
                  </div>
                  <h4 className="font-semibold">Sarah B.</h4>
                  <p className="text-sm text-muted-foreground">23 jaar</p>
                </div>
                <p className="text-sm text-muted-foreground italic text-center">
                  "Binnen 2 weken mijn rijbewijs gehaald! De intensieve aanpak werkte perfect voor mij."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">MJ</span>
                  </div>
                  <h4 className="font-semibold">Mark J.</h4>
                  <p className="text-sm text-muted-foreground">28 jaar</p>
                </div>
                <p className="text-sm text-muted-foreground italic text-center">
                  "Had het rijbewijs nodig voor mijn nieuwe baan. In 18 dagen was ik geslaagd!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">LH</span>
                  </div>
                  <h4 className="font-semibold">Lisa H.</h4>
                  <p className="text-sm text-muted-foreground">31 jaar</p>
                </div>
                <p className="text-sm text-muted-foreground italic text-center">
                  "De persoonlijke begeleiding en dagelijkse lessen waren precies wat ik nodig had."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Card className="hero-gradient text-white text-center">
          <CardHeader>
            <CardTitle className="text-3xl">Klaar voor de Challenge?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-8 opacity-90">
              Start vandaag nog met onze spoedcursus en haal je rijbewijs binnen 3 weken!
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="opacity-90">Slagingspercentage</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2-3</div>
                <div className="opacity-90">Weken gemiddeld</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="opacity-90">Geslaagde spoedcursisten</div>
              </div>
            </div>
            <Button onClick={openModal} size="lg" variant="secondary">
              Start Spoedcursus
            </Button>
            <p className="text-sm mt-4 opacity-80">*Voorwaarden van toepassing</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
