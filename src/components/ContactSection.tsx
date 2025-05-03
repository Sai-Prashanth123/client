
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import useInView from '@/hooks/useInView';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  message: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  });
  
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data);
      toast({
        title: "Request Submitted",
        description: "Our investment advisor will contact you shortly.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-spacing relative" ref={sectionRef}>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')" }}
      />
      <div className="absolute inset-0 bg-korat-dark opacity-90 z-10" />
      
      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={isInView ? 'animate-fade-in' : 'opacity-0'}>
            <span className="text-sm uppercase tracking-widest text-korat-gold">Start Your Journey</span>
            <h2 className="heading-lg mt-2 mb-8">Your Next Investment Move Starts Here</h2>
            
            <p className="text-gray-300 mb-6">
              Take the first step toward building your global real estate portfolio. Our investment advisors are ready to provide you with personalized guidance tailored to your financial goals.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Full Name" 
                          {...field} 
                          className="bg-transparent border-gray-700 focus:border-korat-gold"
                        />
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
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Email Address" 
                          {...field} 
                          className="bg-transparent border-gray-700 focus:border-korat-gold"
                        />
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
                      <FormLabel className="text-white">Phone</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Phone Number" 
                          {...field} 
                          className="bg-transparent border-gray-700 focus:border-korat-gold"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your investment goals" 
                          {...field} 
                          className="bg-transparent border-gray-700 focus:border-korat-gold"
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <button 
                  type="submit" 
                  className={`btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Information'}
                </button>
              </form>
            </Form>
          </div>
          
          <div className={`${isInView ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
              alt="Premium Interior"
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
