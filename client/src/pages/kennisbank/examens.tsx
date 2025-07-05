import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTrialModal } from "@/hooks/use-trial-modal";
import { Clock, HelpCircle, CheckCircle, Euro, Car, BookOpen, Target } from "lucide-react";

export default function Examens() {
  const { openModal } = useTrialModal();

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Examens</h1>
          <p className="text-xl text-muted-foreground">Alles over het theorie- en praktijkexamen</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BookOpen className="mr-3 h-8 w-8 text-primary" />
                Theorie Examen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Duur</h3>
                  <p className="text-muted-foreground">30 minuten</p>
                </div>
              </div>
              <div className="flex items-start">
                <HelpCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Aantal Vragen</h3>
                  <p className="text-muted-foreground">65 vragen</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Slagen</h3>
                  <p className="text-muted-foreground">Minimaal 44 goed</p>
                </div>
              </div>
              <div className="flex items-start">
                <Euro className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Kosten</h3>
                  <p className="text-muted-foreground">€39</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Car className="mr-3 h-8 w-8 text-primary" />
                Praktijk Examen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Duur</h3>
                  <p className="text-muted-foreground">55 minuten</p>
                </div>
              </div>
              <div className="flex items-start">
                <Car className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Onderdelen</h3>
                  <p className="text-muted-foreground">Rijvaardigheid, verkeersdeelname, bijzondere verrichtingen</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Slagen</h3>
                  <p className="text-muted-foreground">Maximaal 8 foutpunten</p>
                </div>
              </div>
              <div className="flex items-start">
                <Euro className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Kosten</h3>
                  <p className="text-muted-foreground">€290</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-muted/50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Tips voor een Succesvol Examen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <BookOpen className="mr-2 h-6 w-6 text-primary" />
                Theorie Examen Tips
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  Oefen regelmatig online
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  Lees de vragen goed
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  Neem je tijd
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  Blijf rustig
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Car className="mr-2 h-6 w-6 text-primary" />
                Praktijk Examen Tips
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  Zorg voor voldoende les uren
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  Oefen bijzondere verrichtingen
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  Blijf gefocust
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  Luister naar de examinator
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exam preparation course CTA */}
        <Card className="hero-gradient text-white text-center">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center justify-center">
              <Target className="mr-3 h-8 w-8" />
              Examen Voorbereiding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-8 opacity-90">
              Bereid je optimaal voor op je examen met onze professionele begeleiding!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="opacity-90">Slagingspercentage</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="opacity-90">Geslaagde leerlingen</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="opacity-90">Jaar ervaring</div>
              </div>
            </div>
            <Button onClick={openModal} size="lg" variant="secondary">
              Start je Voorbereiding
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
