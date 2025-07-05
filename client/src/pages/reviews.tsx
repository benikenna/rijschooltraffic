import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote, TrendingUp, Award, Users } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Emma de Jong",
      date: "Geslaagd in maart 2024",
      rating: 5,
      text: "Fantastische rijschool! Jan is een geweldige instructeur die veel geduld heeft. Dankzij zijn goede uitleg heb ik in één keer mijn rijbewijs gehaald.",
      course: "Auto Rijlessen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Tim van der Berg",
      date: "Geslaagd in februari 2024",
      rating: 5,
      text: "Ik had faalangst, maar Maria heeft me zo goed geholpen. Ze is rustig en begripvol. Zonder haar steun was het me nooit gelukt!",
      course: "Faalangst Begeleiding",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Lisa Hendriks",
      date: "Geslaagd in januari 2024",
      rating: 5,
      text: "Professionele rijschool met moderne auto's. De spoedcursus was perfect georganiseerd. Binnen 3 weken had ik mijn rijbewijs!",
      course: "Spoedcursus",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c359e9a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Mark Jansen",
      date: "Geslaagd in april 2024",
      rating: 5,
      text: "De automatische lessen waren perfect voor mij. Peter heeft me heel goed begeleid en de planning was zeer flexibel.",
      course: "Automaat Rijlessen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Sarah de Wit",
      date: "Geslaagd in maart 2024",
      rating: 5,
      text: "Uitstekende service! De theorie ondersteuning was geweldig en de praktijklessen waren zeer leerzaam. Zeker een aanrader!",
      course: "Premium Pakket",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Robert Smit",
      date: "Geslaagd in februari 2024",
      rating: 5,
      text: "Als oudere leerling (45 jaar) was ik wat zenuwachtig, maar Lisa maakte me op mijn gemak. Geweldige begeleiding!",
      course: "Auto Rijlessen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Jasmin Ozkurt",
      date: "Geslaagd in december 2023",
      rating: 5,
      text: "Zeer professionele aanpak. De instructeurs zijn geduldig en weten je echt vooruit te helpen. Mijn theorie en praktijk beide in één keer gehaald!",
      course: "Compleet Pakket",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c359e9a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Kevin Mostert",
      date: "Geslaagd in november 2023",
      rating: 5,
      text: "Had al eerder gefaald bij een andere rijschool, maar hier hebben ze me echt geholpen. Duidelijke uitleg en veel oefening.",
      course: "Auto Rijlessen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Priya Sharma",
      date: "Geslaagd in oktober 2023",
      rating: 5,
      text: "Excellente rijschool! De theorie cursus was zeer informatief en de praktijklessen waren uitstekend gestructureerd.",
      course: "Theorie + Praktijk",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wat Onze Leerlingen Zeggen</h1>
          <p className="text-xl text-muted-foreground">Echte ervaringen van onze geslaagde leerlingen</p>
          
          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="flex text-yellow-400">
              {renderStars(5)}
            </div>
            <span className="text-3xl font-bold">4.9/5</span>
            <span className="text-muted-foreground">(847 reviews)</span>
          </div>
        </div>

        {/* Review Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl font-bold text-primary">95%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Beoordeelt ons met 5 sterren</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl font-bold text-primary">92%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Slaagt in eerste poging</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl font-bold text-primary">2500+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Tevreden leerlingen</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Quote className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl font-bold text-primary">847</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Geschreven reviews</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <img 
                    src={review.avatar}
                    alt={`${review.name} review photo`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {renderStars(review.rating)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {review.course}
                  </span>
                </div>
                <blockquote className="text-muted-foreground italic">
                  "{review.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Platforms */}
        <div className="bg-muted/50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-8">Ook te vinden op</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <CardTitle>Google Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-2xl font-bold text-primary">4.8/5</p>
                <p className="text-muted-foreground">324 reviews</p>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">f</span>
                </div>
                <CardTitle>Facebook</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-2xl font-bold text-primary">4.9/5</p>
                <p className="text-muted-foreground">186 reviews</p>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Trustpilot</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-2xl font-bold text-primary">4.7/5</p>
                <p className="text-muted-foreground">267 reviews</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Success Stories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Recente Succesverhalen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-6 w-6 text-accent" />
                  Deze Maand: 47 Geslaagden
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  In maart 2024 zijn maar liefst 47 van onze leerlingen geslaagd voor hun rijexamen. 
                  Een fantastisch resultaat waar we trots op zijn!
                </p>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold">Slagingspercentage deze maand: 94%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2 h-6 w-6 text-primary" />
                  Recordholder: 12 Lessen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Onze jongste recordholder, Sophie (18), slaagde na slechts 12 rijlessen! 
                  Een combinatie van talent en goede begeleiding.
                </p>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold">"Dankzij de duidelijke uitleg voelde ik me snel zelfverzekerd achter het stuur"</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
