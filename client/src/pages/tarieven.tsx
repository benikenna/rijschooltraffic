import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTrialModal } from "@/hooks/use-trial-modal";
import { CheckCircle, Clock, Heart, RotateCcw, Settings } from "lucide-react";

export default function Tarieven() {
  const { openModal } = useTrialModal();

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tarieven</h1>
          <p className="text-xl text-muted-foreground">Transparante prijzen voor al onze cursussen</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Basic Package */}
          <Card className="relative">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Basis Pakket</CardTitle>
              <div className="text-4xl font-bold text-primary">€45</div>
              <CardDescription>per rijles (60 min)</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>60 minuten rijles</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Professionele instructeur</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Modern lesvoertuig</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Flexibele planning</span>
                </li>
              </ul>
              <Button onClick={openModal} className="w-full btn-primary">
                Kies dit pakket
              </Button>
            </CardContent>
          </Card>
          
          {/* Premium Package */}
          <Card className="relative border-primary">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-secondary text-white">POPULAIR</Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Premium Pakket</CardTitle>
              <div className="text-4xl font-bold text-primary">€400</div>
              <CardDescription>10 rijlessen pakket</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>10 x 60 minuten rijles</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Gratis theorie ondersteuning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Tussentijdse evaluatie</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Prioriteit bij planning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>€50 korting</span>
                </li>
              </ul>
              <Button onClick={openModal} className="w-full btn-primary">
                Kies dit pakket
              </Button>
            </CardContent>
          </Card>
          
          {/* Complete Package */}
          <Card className="relative">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Compleet Pakket</CardTitle>
              <div className="text-4xl font-bold text-primary">€750</div>
              <CardDescription>20 rijlessen + theorie</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>20 x 60 minuten rijles</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Theorie cursus inclusief</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Examen begeleiding</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Garantie regeling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>€150 korting</span>
                </li>
              </ul>
              <Button onClick={openModal} className="w-full btn-primary">
                Kies dit pakket
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional Services */}
        <div className="bg-muted/50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-8">Extra Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Faalangst Begeleiding</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  Speciale begeleiding voor mensen met faalangst
                </CardDescription>
                <div className="text-2xl font-bold text-primary">€60 per les</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Spoedcursus</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  Intensieve cursus voor snelle resultaten
                </CardDescription>
                <div className="text-2xl font-bold text-primary">€1200</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <RotateCcw className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Opfris Lessen</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  Voor mensen die al een rijbewijs hebben
                </CardDescription>
                <div className="text-2xl font-bold text-primary">€50 per les</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Theorie Cursus</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  Alleen theorie ondersteuning
                </CardDescription>
                <div className="text-2xl font-bold text-primary">€150</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
