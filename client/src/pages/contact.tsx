import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle } from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "Voornaam moet minimaal 2 karakters zijn"),
  lastName: z.string().min(2, "Achternaam moet minimaal 2 karakters zijn"),
  email: z.string().email("Ongeldig email adres"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Selecteer een onderwerp"),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters zijn"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
      toast({
        title: "Bericht verzonden!",
        description: "We nemen zo spoedig mogelijk contact met je op.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Fout bij verzenden",
        description: error.message || "Er is een fout opgetreden. Probeer het opnieuw.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p className="text-xl text-muted-foreground">Neem contact met ons op voor meer informatie</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contactgegevens</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Adres</h4>
                  <p className="text-muted-foreground">
                    Hoofdstraat 123<br />
                    1234 AB Amsterdam
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Telefoon</h4>
                  <p className="text-muted-foreground">020-1234567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-muted-foreground">info@diepopleidingen.nl</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Openingstijden</h4>
                  <div className="text-muted-foreground">
                    <p>Ma-Vr: 08:00 - 20:00</p>
                    <p>Za: 09:00 - 17:00</p>
                    <p>Zo: Gesloten</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="mt-8 bg-muted rounded-xl h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Google Maps integration</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Stuur ons een bericht</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Bedankt!</h3>
                    <p className="text-muted-foreground">
                      We hebben je bericht ontvangen en nemen zo spoedig mogelijk contact met je op.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Voornaam *</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Achternaam *</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefoon</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Onderwerp *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecteer een onderwerp" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="rijlessen">Rijlessen informatie</SelectItem>
                                <SelectItem value="spoedcursus">Spoedcursus</SelectItem>
                                <SelectItem value="tarieven">Tarieven</SelectItem>
                                <SelectItem value="planning">Planning</SelectItem>
                                <SelectItem value="anders">Anders</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bericht *</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                className="min-h-[120px]"
                                placeholder="Typ hier je bericht..."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        disabled={mutation.isPending}
                        className="w-full btn-primary"
                      >
                        {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Bericht Versturen
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
