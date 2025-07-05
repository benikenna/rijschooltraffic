import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTrialModal } from "@/hooks/use-trial-modal";
import { Car, Shield, CheckCircle, Cog, Thermometer, Leaf, Wrench } from "lucide-react";

export default function Voertuigen() {
  const { openModal } = useTrialModal();

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Voertuigen</h1>
          <p className="text-xl text-muted-foreground">Onze moderne vloot lesvoertuigen</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Onze Lesauto's</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Bij Diep Opleidingen leer je rijden in moderne, goed onderhouden voertuigen. 
              Alle auto's zijn uitgerust met dubbele bediening voor optimale veiligheid.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Dubbele bediening voor veiligheid</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Automatische en handgeschakelde auto's</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Airconditioning voor comfort</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Regelmatig onderhoud en keuring</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>Alle voertuigen jonger dan 3 jaar</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Modern driving school car" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="card-hover">
            <div 
              className="h-48 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250')"
              }}
            />
            <CardHeader>
              <CardTitle className="text-xl">Volkswagen Polo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Betrouwbare en comfortabele lesauto, perfect voor beginners.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Handgeschakeld</Badge>
                <Badge variant="secondary">Dubbele bediening</Badge>
                <Badge variant="secondary">Airconditioning</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <div 
              className="h-48 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250')"
              }}
            />
            <CardHeader>
              <CardTitle className="text-xl">Toyota Yaris</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Zuinige en wendbare auto, ideaal voor stadsrijden.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Handgeschakeld</Badge>
                <Badge variant="secondary">Zeer wendbaar</Badge>
                <Badge variant="secondary">Milieuvriendelijk</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <div 
              className="h-48 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250')"
              }}
            />
            <CardHeader>
              <CardTitle className="text-xl">Honda Civic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Ruime en comfortabele lesauto voor alle niveaus.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Handgeschakeld</Badge>
                <Badge variant="secondary">Extra ruim</Badge>
                <Badge variant="secondary">Moderne uitrusting</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <div 
              className="h-48 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250')"
              }}
            />
            <CardHeader>
              <CardTitle className="text-xl">Nissan Micra</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Compacte automatische lesauto, perfect voor beginners.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Automatische transmissie</Badge>
                <Badge variant="secondary">Eenvoudig te besturen</Badge>
                <Badge variant="secondary">Ideaal voor beginners</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <div 
              className="h-48 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250')"
              }}
            />
            <CardHeader>
              <CardTitle className="text-xl">BMW 1 Serie</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Premium lesauto voor gevorderde leerlingen.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Handgeschakeld</Badge>
                <Badge variant="secondary">Premium comfort</Badge>
                <Badge variant="secondary">Sportieve uitstraling</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <div 
              className="h-48 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250')"
              }}
            />
            <CardHeader>
              <CardTitle className="text-xl">Suzuki Swift</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Speelse en betrouwbare lesauto voor alle situaties.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Handgeschakeld</Badge>
                <Badge variant="secondary">Zeer betrouwbaar</Badge>
                <Badge variant="secondary">Prettig rijgedrag</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vehicle Features */}
        <div className="bg-muted/50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Waarom Onze Voertuigen?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Veiligheid Eerst</h3>
              <p className="text-muted-foreground">Dubbele bediening en moderne veiligheidssystemen in alle voertuigen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Goed Onderhoud</h3>
              <p className="text-muted-foreground">Regelmatige service en keuringen voor optimale betrouwbaarheid</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comfort</h3>
              <p className="text-muted-foreground">Airconditioning en comfortabele stoelen voor een prettige leservaring</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Milieuvriendelijk</h3>
              <p className="text-muted-foreground">Moderne, zuinige motoren met lage uitstoot</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="hero-gradient text-white text-center">
          <CardHeader>
            <CardTitle className="text-3xl">Klaar om te Beginnen?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-8 opacity-90">
              Ervaar zelf hoe het is om te leren rijden in onze moderne voertuigen!
            </p>
            <Button onClick={openModal} size="lg" variant="secondary">
              Boek je Gratis Proefles
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
