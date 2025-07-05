import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Car, Clock } from "lucide-react";

export default function OverOns() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Over Diep Opleidingen</h1>
          <p className="text-xl text-muted-foreground">Jouw betrouwbare partner voor het behalen van je rijbewijs</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Onze Missie</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Bij Diep Opleidingen geloven we dat iedereen het recht heeft op kwalitatief rijonderwijs. 
              Met meer dan 15 jaar ervaring in de rijschoolbranche, hebben we duizenden leerlingen 
              geholpen bij het behalen van hun rijbewijs.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Onze ervaren instructeurs zorgen voor een veilige en prettige leeromgeving, 
              waarbij we ons aanpassen aan het leertempo van elke individuele leerling.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Persoonlijke aandacht</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Flexibele planning</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Moderne lesvoertuigen</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Hoog slagingspercentage</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Professional driving instructor with student" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-primary">5000+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Geslaagde Leerlingen</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-primary">95%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Slagingspercentage</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-primary">15</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Ervaren Instructeurs</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-primary">25+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Jaar Ervaring</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Team Section */}
        <div className="bg-muted/50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-12">Ons Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="Professional driving instructor Jan" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
              />
              <h3 className="text-xl font-semibold mb-2">Jan de Vries</h3>
              <p className="text-muted-foreground mb-2">Hoofdinstructeur</p>
              <Badge variant="secondary">15 jaar ervaring</Badge>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616c359e9a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="Female driving instructor" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
              />
              <h3 className="text-xl font-semibold mb-2">Maria Jansen</h3>
              <p className="text-muted-foreground mb-2">Senior Instructeur</p>
              <Badge variant="secondary">12 jaar ervaring</Badge>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="Male driving instructor" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
              />
              <h3 className="text-xl font-semibold mb-2">Peter Bakker</h3>
              <p className="text-muted-foreground mb-2">Instructeur</p>
              <Badge variant="secondary">8 jaar ervaring</Badge>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="Female driving instructor Lisa" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
              />
              <h3 className="text-xl font-semibold mb-2">Lisa de Wit</h3>
              <p className="text-muted-foreground mb-2">Instructeur</p>
              <Badge variant="secondary">6 jaar ervaring</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
