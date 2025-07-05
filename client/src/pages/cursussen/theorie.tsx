import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTrialModal } from "@/hooks/use-trial-modal";
import { CheckCircle, BookOpen, Laptop, TrendingUp, Users, Target, Award } from "lucide-react";

export default function Theorie() {
  const { openModal } = useTrialModal();

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Theorie Cursus</h1>
          <p className="text-xl text-muted-foreground">Optimale voorbereiding op je theorie-examen</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Slaag in Één Keer!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Onze theorie cursus is speciaal ontworpen om je optimaal voor te bereiden op het 
              CBR theorie-examen. Met een hoog slagingspercentage van 95% ben je verzekerd van de beste voorbereiding.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Persoonlijke begeleiding van ervaren docenten</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Online oefenplatform met duizenden vragen</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Actuele examenvragen en -situaties</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Flexibele cursustijden (avond en weekend)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Geld-terug-garantie bij niet slagen</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Classroom theory training session" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="bg-muted/50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Cursus Opties</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Groepscursus</CardTitle>
                <div className="text-3xl font-bold text-primary">€149</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>8 lessen van 2 uur</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Maximaal 12 cursisten</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Online oefenplatform</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Alle lesmateriaal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Proefexamens</span>
                  </li>
                </ul>
                <Button onClick={openModal} className="w-full btn-primary">
                  Aanmelden
                </Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2 border-secondary">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl">Privé Cursus</CardTitle>
                  <Badge className="bg-secondary text-white">AANBEVOLEN</Badge>
                </div>
                <div className="text-3xl font-bold text-secondary">€299</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>6 lessen van 2 uur</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Persoonlijke aandacht</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Flexibele planning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Online oefenplatform</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Garantie regeling</span>
                  </li>
                </ul>
                <Button onClick={openModal} className="w-full btn-secondary">
                  Kies Privé
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Interactieve Lessen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Leer door middel van interactieve presentaties, video's en discussies
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Online Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Thuis oefenen met ons geavanceerde online oefenplatform
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Voortgang Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Houd je vooruitgang bij en zie precies waar je staat
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Course Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Cursusinhoud</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Verkeersregels & Voorrang</h4>
                    <p className="text-sm text-muted-foreground">Alle belangrijke verkeersregels en voorrangsituaties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Verkeersborden</h4>
                    <p className="text-sm text-muted-foreground">Herkenning en betekenis van alle verkeersborden</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Gevaarherkenning</h4>
                    <p className="text-sm text-muted-foreground">Leren anticiperen op gevaarlijke situaties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Milieu & Veiligheid</h4>
                    <p className="text-sm text-muted-foreground">Eco-friendly rijden en veiligheidsbewustzijn</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Examen Voorbereiding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-secondary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Proefexamens</h4>
                    <p className="text-sm text-muted-foreground">Regelmatige toetsing met officiële examenvragen</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-secondary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Examenstrategieën</h4>
                    <p className="text-sm text-muted-foreground">Tips en trucs voor een succesvol examen</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-secondary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Tijdmanagement</h4>
                    <p className="text-sm text-muted-foreground">Efficiënt omgaan met de examentijd</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-secondary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Zenuwcontrole</h4>
                    <p className="text-sm text-muted-foreground">Technieken om kalm te blijven tijdens het examen</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="hero-gradient text-white text-center">
          <CardHeader>
            <CardTitle className="text-3xl">95% Slagingspercentage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-8 opacity-90">
              Onze cursisten slagen gemiddeld in één keer voor hun theorie-examen!
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="opacity-90">Slagingspercentage</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1500+</div>
                <div className="opacity-90">Geslaagde cursisten</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Online platform toegang</div>
              </div>
            </div>
            <Button onClick={openModal} size="lg" variant="secondary">
              Start je Theorie Cursus
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
