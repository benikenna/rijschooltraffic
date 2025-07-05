import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTrialModal } from "@/hooks/use-trial-modal";
import { CheckCircle, Calendar, Clock, Euro, Gauge, BookOpen, Bike, Shield } from "lucide-react";

export default function Bromfiets() {
  const { openModal } = useTrialModal();

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bromfiets Cursus</h1>
          <p className="text-xl text-muted-foreground">Veilig en verantwoord op de bromfiets</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Bromfiets Rijbewijs AM</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Vanaf 16 jaar kun je je bromfietsrijbewijs (AM) halen. Onze cursus bereidt je voor op 
              veilig bromfietsrijden en het behalen van je rijbewijs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-primary" />
                    Theorie Cursus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Verkeersregels</li>
                    <li>• Verkeersborden</li>
                    <li>• Veiligheid</li>
                    <li>• Techniek</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Bike className="mr-2 h-5 w-5 text-primary" />
                    Praktijk Lessen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Beheersing voertuig</li>
                    <li>• Verkeersdeelname</li>
                    <li>• Defensief rijden</li>
                    <li>• Praktijkexamen</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1572114731149-5e9f2e2a2332?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Moped/scooter driving lesson" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="bg-muted/50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Cursus Informatie</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Leeftijd</h3>
              <p className="text-muted-foreground">Vanaf 16 jaar</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Duur</h3>
              <p className="text-muted-foreground">3-5 weken</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prijs</h3>
              <p className="text-muted-foreground">€295 totaal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Snelheid</h3>
              <p className="text-muted-foreground">Max 45 km/u</p>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Theorie Onderdelen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Verkeersregels & Borden</h4>
                  <p className="text-sm text-muted-foreground">Leer alle belangrijke verkeersregels en herken verkeersborden</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Veilig Rijgedrag</h4>
                  <p className="text-sm text-muted-foreground">Defensief rijden en gevaren herkennen</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Technische Kennis</h4>
                  <p className="text-sm text-muted-foreground">Basis onderhoud en technische controles</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Praktijk Training</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold">Voertuigbeheersing</h4>
                  <p className="text-sm text-muted-foreground">Leren rijden, remmen en manoeuvreren</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold">Verkeerssituaties</h4>
                  <p className="text-sm text-muted-foreground">Rijden in het echte verkeer</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold">Examenvoorbereiding</h4>
                  <p className="text-sm text-muted-foreground">Specifieke voorbereiding op het praktijkexamen</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Wat is Inbegrepen?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Theorie Materiaal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Alle benodigde lesmaterialen en online oefeningen
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <Bike className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Praktijk Lessen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professionele begeleiding op veilige oefenterreinen
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Veiligheidsuitrusting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Helm en beschermende kleding tijdens de lessen
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Card */}
        <Card className="max-w-2xl mx-auto mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Compleet Bromfiets Pakket</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-primary mb-2">€295</div>
              <p className="text-muted-foreground">Alles inbegrepen</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Theorie cursus met lesmateriaal</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>6 praktijklessen van 60 minuten</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Gebruik van helm en beschermende kleding</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Online oefenplatform toegang</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Examen aanmelding en begeleiding</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Flexibele planning</span>
              </li>
            </ul>
            
            <Button onClick={openModal} size="lg" className="w-full btn-secondary">
              Aanmelden voor Bromfiets Cursus
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
