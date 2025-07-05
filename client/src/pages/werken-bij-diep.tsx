import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { CheckCircle, Users, Award, Car, Clock, GraduationCap, TrendingUp, Heart } from "lucide-react";

export default function WerkenBijDiep() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Werken bij Diep Opleidingen</h1>
          <p className="text-xl text-muted-foreground">Wordt onderdeel van ons professionele team</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Jouw Carrière als Rijinstructeur</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ben je gepassioneerd over het onderwijs en wil je anderen helpen bij het behalen van hun rijbewijs? 
              Bij Diep Opleidingen bieden we uitstekende carrièremogelijkheden voor zowel ervaren als beginnende instructeurs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Competitief salaris en goede arbeidsvoorwaarden</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Professionele ontwikkeling en training</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Moderne lesvoertuigen en materiaal</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Flexibele werktijden</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Ondersteuning bij WRM certificering</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Professional team meeting" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Geweldig Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Werk samen met gepassioneerde collega's in een ondersteunende omgeving
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Ontwikkeling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Continue training en professionele ontwikkeling voor al onze medewerkers
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Work-Life Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Flexibele werktijden en respect voor je persoonlijke tijd
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-muted/50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Huidige Vacatures</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Rijinstructeur Auto (Voltijd)</CardTitle>
                    <p className="text-muted-foreground">Locatie: Amsterdam & Omgeving</p>
                  </div>
                  <Badge className="bg-accent text-white">Voltijd</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We zoeken een ervaren en geduldige rijinstructeur die graag leerlingen begeleidt naar hun rijbewijs. 
                  WRM certificering is vereist.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">WRM Certificaat</Badge>
                  <Badge variant="secondary">2+ jaar ervaring</Badge>
                  <Badge variant="secondary">Communicatieve vaardigheden</Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">Wat wij bieden:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Salaris €2800-€3500 per maand</li>
                      <li>• 25 vakantiedagen</li>
                      <li>• Pensioenregeling</li>
                      <li>• Moderne lesvoertuigen</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Wat wij vragen:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Geldige WRM certificering</li>
                      <li>• Minimaal 2 jaar ervaring</li>
                      <li>• Goede communicatieve vaardigheden</li>
                      <li>• Flexibiliteit in werktijden</li>
                    </ul>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="btn-primary">
                    Solliciteer Nu
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Motorinstructeur</CardTitle>
                    <p className="text-muted-foreground">Locatie: Amsterdam & Omgeving</p>
                  </div>
                  <Badge className="bg-primary text-white">Parttime</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Gepassioneerde motorinstructeur gezocht voor het geven van motor rijlessen. 
                  Ervaring met A1, A2 en A categorie vereist.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Motor WRM</Badge>
                  <Badge variant="secondary">A Rijbewijs</Badge>
                  <Badge variant="secondary">Flexibele tijden</Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">Wat wij bieden:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• €45-€55 per lesuur</li>
                      <li>• Flexibele planning</li>
                      <li>• Moderne motoren</li>
                      <li>• Veiligheidsuitrusting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Wat wij vragen:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Motor WRM certificering</li>
                      <li>• A rijbewijs minimaal 3 jaar</li>
                      <li>• Ervaring met motoronderwijs</li>
                      <li>• Passie voor motorfietsen</li>
                    </ul>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="btn-primary">
                    Solliciteer Nu
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Theorie Docent</CardTitle>
                    <p className="text-muted-foreground">Locatie: Amsterdam Centrum</p>
                  </div>
                  <Badge className="bg-secondary text-white">Avonduren</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ervaren docent gezocht voor het geven van theorie cursussen. Kennis van de Nederlandse verkeersregels 
                  en didactische vaardigheden zijn essentieel.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Onderwijservaring</Badge>
                  <Badge variant="secondary">Verkeerskennis</Badge>
                  <Badge variant="secondary">Presentatie skills</Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">Wat wij bieden:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• €35-€45 per lesuur</li>
                      <li>• Avond- en weekendwerk</li>
                      <li>• Modern klaslokaal</li>
                      <li>• Alle lesmateriaal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Wat wij vragen:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• HBO werk- en denkniveau</li>
                      <li>• Onderwijservaring gewenst</li>
                      <li>• Uitstekende verkeerskennis</li>
                      <li>• Goede presentatievaardigheden</li>
                    </ul>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="btn-primary">
                    Solliciteer Nu
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Administratief Medewerker</CardTitle>
                    <p className="text-muted-foreground">Locatie: Amsterdam Kantoor</p>
                  </div>
                  <Badge className="bg-accent text-white">32 uur</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Zelfstandige administratief medewerker voor ondersteuning van ons kantoor en planning van rijlessen.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Planning</Badge>
                  <Badge variant="secondary">Klantenservice</Badge>
                  <Badge variant="secondary">Administratie</Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">Wat wij bieden:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• €2400-€2800 per maand</li>
                      <li>• 32 uur per week</li>
                      <li>• Flexibele werktijden</li>
                      <li>• Gezellig team</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Wat wij vragen:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• MBO werk- en denkniveau</li>
                      <li>• Ervaring met planningssystemen</li>
                      <li>• Klantvriendelijke instelling</li>
                      <li>• Goede communicatieve vaardigheden</li>
                    </ul>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="btn-primary">
                    Solliciteer Nu
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Training Program */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Interne Ontwikkeling</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                  WRM Traject
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Nog geen WRM certificaat? Geen probleem! Wij begeleiden je door het hele traject.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Volledige financiering van de opleiding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Begeleiding door ervaren mentoren</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Garantie op werkplek na certificering</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <TrendingUp className="mr-3 h-6 w-6 text-primary" />
                  Doorgroeimogelijkheden
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Bij ons kun je groeien naar verschillende rollen binnen de organisatie.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Senior instructeur</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Teamleider</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    <span>Locatiemanager</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Card className="hero-gradient text-white text-center">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center justify-center">
              <Heart className="mr-3 h-8 w-8" />
              Klaar voor een Nieuwe Uitdaging?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-8 opacity-90">
              Stuur ons je CV en motivatiebrief. We nemen snel contact met je op!
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <p className="opacity-90">vacatures@diepopleidingen.nl</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Telefoon</h4>
                <p className="opacity-90">020-1234567</p>
              </div>
            </div>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Solliciteer Nu
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
