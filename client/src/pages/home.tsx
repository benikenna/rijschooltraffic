import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTrialModal } from "@/hooks/use-trial-modal";
import { Link } from "wouter";
import { GraduationCap, Car, Trophy, Users, Clock, Shield, CheckCircle, Star } from "lucide-react";

export default function Home() {
  const { openModal } = useTrialModal();

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Waarom Kiezen Voor Diep Opleidingen?</h2>
            <p className="text-xl text-muted-foreground">Ontdek wat ons onderscheidt van andere rijscholen</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Ervaren Instructeurs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Onze instructeurs hebben jaren ervaring en helpen je op een professionele manier naar je rijbewijs.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Moderne Voertuigen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Leer rijden in onze moderne, veilige voertuigen die regelmatig onderhouden worden.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Flexibele Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Plan je rijlessen op momenten die jou uitkomen. Wij passen ons aan jouw schema aan.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Onze Cursussen</h2>
            <p className="text-xl text-muted-foreground">Vind de perfecte cursus voor jouw behoeften</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <div 
                className="h-48 bg-cover bg-center rounded-t-lg"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250')"
                }}
              />
              <CardHeader>
                <CardTitle>Auto Rijlessen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Leer autorijden met onze professionele instructeurs in moderne voertuigen.
                </CardDescription>
                <Link href="/cursussen/auto">
                  <Button variant="outline" className="w-full">
                    Meer info →
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <div 
                className="h-48 bg-cover bg-center rounded-t-lg"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250')"
                }}
              />
              <CardHeader>
                <CardTitle>Motor Rijlessen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Behaal je motorrijbewijs met onze veilige en professionele motorcursussen.
                </CardDescription>
                <Link href="/cursussen/motor">
                  <Button variant="outline" className="w-full">
                    Meer info →
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <div 
                className="h-48 bg-cover bg-center rounded-t-lg"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250')"
                }}
              />
              <CardHeader>
                <CardTitle>Theorie Cursus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Bereid je optimaal voor op je theorie-examen met onze theorie cursussen.
                </CardDescription>
                <Link href="/cursussen/theorie">
                  <Button variant="outline" className="w-full">
                    Meer info →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 stats-number">2500+</div>
              <div className="text-lg opacity-90">Geslaagde Leerlingen</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 stats-number">15+</div>
              <div className="text-lg opacity-90">Jaar Ervaring</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 stats-number">20+</div>
              <div className="text-lg opacity-90">Professionele Instructeurs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 stats-number">92%</div>
              <div className="text-lg opacity-90">Slagingspercentage</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Klaar om te Beginnen?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start vandaag nog met je gratis proefles en ervaar waarom wij de beste rijschool zijn!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openModal} size="lg" className="btn-secondary">
              Gratis Proefles Aanvragen
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Opnemen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
