import { Link } from "wouter";
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Diep Opleidingen</span>
            </div>
            <p className="text-gray-400 mb-4">
              Dé rijschool in Amsterdam met meer dan 25 jaar ervaring. 
              Wij maken van jou een veilige bestuurder.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Cursussen</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/cursussen/auto" className="hover:text-white transition-colors">Rijbewijs B</Link></li>
              <li><Link href="/cursussen/bromfiets" className="hover:text-white transition-colors">Rijbewijs AM</Link></li>
              <li><Link href="/cursussen/spoed" className="hover:text-white transition-colors">Spoedcursus</Link></li>
              <li><Link href="/cursussen/auto" className="hover:text-white transition-colors">Automaat Rijles</Link></li>
              <li><Link href="/cursussen/auto" className="hover:text-white transition-colors">Faalangst Begeleiding</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Informatie</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/over-ons" className="hover:text-white transition-colors">Over ons</Link></li>
              <li><Link href="/tarieven" className="hover:text-white transition-colors">Tarieven</Link></li>
              <li><Link href="/kennisbank/verkeersregels" className="hover:text-white transition-colors">Kennisbank</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/werken-bij-diep" className="hover:text-white transition-colors">Werken bij ons</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Hoofdstraat 123, Amsterdam</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>020-1234567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@diepopleidingen.nl</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Diep Opleidingen. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
