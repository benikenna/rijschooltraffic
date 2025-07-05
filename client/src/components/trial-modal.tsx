import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTrialModal } from "@/hooks/use-trial-modal";
import { apiRequest } from "@/lib/queryClient";
import { Loader2 } from "lucide-react";

const trialFormSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters zijn"),
  email: z.string().email("Ongeldig email adres"),
  phone: z.string().min(10, "Telefoonnummer moet minimaal 10 cijfers zijn"),
  age: z.string().min(1, "Leeftijd is verplicht"),
  licenseType: z.string().min(1, "Selecteer een rijbewijs type"),
  experience: z.string().min(1, "Selecteer je rijervaring"),
  preference: z.string().optional(),
  notes: z.string().optional(),
});

type TrialFormData = z.infer<typeof trialFormSchema>;

export default function TrialModal() {
  const { isOpen, closeModal } = useTrialModal();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<TrialFormData>({
    resolver: zodResolver(trialFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      licenseType: "",
      experience: "",
      preference: "",
      notes: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: TrialFormData) => {
      return await apiRequest("POST", "/api/trial-request", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Aanvraag verzonden!",
        description: "We nemen binnen 24 uur contact met je op om de proefles in te plannen.",
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

  const onSubmit = (data: TrialFormData) => {
    mutation.mutate(data);
  };

  const handleClose = () => {
    closeModal();
    setSubmitted(false);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Gratis Proeflies Aanvragen</DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2">Bedankt!</h3>
            <p className="text-muted-foreground mb-4">
              We nemen binnen 24 uur contact met je op om de proefles in te plannen.
            </p>
            <Button onClick={handleClose}>Sluiten</Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Volledige naam *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                    <FormLabel>Telefoon *</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Leeftijd *</FormLabel>
                    <FormControl>
                      <Input type="number" min="16" max="99" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="licenseType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gewenste rijbewijs *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecteer rijbewijs" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="B">Rijbewijs B (Auto)</SelectItem>
                        <SelectItem value="AM">Rijbewijs AM (Bromfiets)</SelectItem>
                        <SelectItem value="B-Automaat">Rijbewijs B (Automaat)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rijervaring *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecteer ervaring" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="geen">Geen ervaring</SelectItem>
                        <SelectItem value="beperkt">Beperkte ervaring</SelectItem>
                        <SelectItem value="gefaald">Eerder gefaald voor examen</SelectItem>
                        <SelectItem value="opfrissen">Rijvaardigheid opfrissen</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Voorkeur datum/tijd</FormLabel>
                    <FormControl>
                      <Input placeholder="Bijv. weekends, doordeweeks avond" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Opmerkingen</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Eventuele vragen of bijzondere wensen..." 
                        className="min-h-[80px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-2 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleClose}
                  className="flex-1"
                >
                  Annuleren
                </Button>
                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="flex-1 btn-secondary"
                >
                  {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Proefles Aanvragen
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
