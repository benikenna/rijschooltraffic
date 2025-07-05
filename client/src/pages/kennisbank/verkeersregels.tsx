import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, TrafficCone, Shield, AlertTriangle } from "lucide-react";

export default function VerkeersRegels() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Verkeersregels</h1>
          <p className="text-xl text-muted-foreground">Alles wat je moet weten over de Nederlandse verkeersregels</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl">Belangrijkste Verkeersregels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-3">Voorrangsregels</h3>
                  <p className="text-muted-foreground">
                    Verkeer van rechts heeft voorrang, tenzij anders aangegeven door verkeersborden of wegmarkering.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-3">Snelheidslimieten</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Binnen de bebouwde kom: 50 km/u</li>
                    <li>• Buiten de bebouwde kom: 80 km/u</li>
                    <li>• Autosnelwegen: 100-130 km/u</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-3">Inhaalregels</h3>
                  <p className="text-muted-foreground">
                    Inhalen is alleen toegestaan als dit veilig kan en de weg vrij is. Links inhalen is de regel.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-3">Parkeerregels</h3>
                  <p className="text-muted-foreground">
                    Parkeren is verboden bij kruispunten, voor uitritten, en in bochten. Respecteer betaald parkeren zones.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Detailed Articles */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="card-hover">
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250')"
                  }}
                />
                <CardHeader>
                  <CardTitle className="text-lg">Verkeersborden Herkennen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Leer de verschillende verkeersborden en hun betekenis kennen.
                  </p>
                  <Button variant="outline" size="sm">
                    Lees meer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250')"
                  }}
                />
                <CardHeader>
                  <CardTitle className="text-lg">Voorrang op Kruispunten</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Begrijp de voorrangsregels op verschillende soorten kruispunten.
                  </p>
                  <Button variant="outline" size="sm">
                    Lees meer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/kennisbank/examens" className="text-primary hover:text-secondary transition-colors">
                      Examens
                    </Link>
                  </li>
                  <li>
                    <Link href="/kennisbank/tips" className="text-primary hover:text-secondary transition-colors">
                      Rijlessen Tips
                    </Link>
                  </li>
                  <li>
                    <Link href="/kennisbank/voertuigen" className="text-primary hover:text-secondary transition-colors">
                      Voertuigen
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hero-gradient text-white">
              <CardHeader>
                <CardTitle className="text-xl">Hulp Nodig?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Onze instructeurs helpen je graag met al je vragen over verkeersregels.
                </p>
                <Link href="/contact">
                  <Button variant="secondary" className="w-full">
                    Contact Opnemen
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Safety Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-accent" />
                  Veiligheidstips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Houd altijd voldoende afstand</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gebruik je richtingaanwijzers tijdig</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Controleer dode hoeken</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Rijd defensief en anticipeer</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
