import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",    // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",   // Replace with your EmailJS Template ID
        formRef.current,
        "YOUR_PUBLIC_KEY"     // Replace with your EmailJS Public Key
      );

      setIsSubmitted(true);
      toast({
        title: "Message Sent! ✅",
        description: "We'll get back to you within 30 minutes.",
      });
      formRef.current.reset();

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Please try calling us at 97000 67784 instead.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            Send a Message
          </span>
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            Get a Free <span className="text-gradient">Quote</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Fill in the form below and we'll get back to you with the best pricing for your move.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl bg-card p-6 sm:p-10 shadow-premium border border-border space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="user_name" className="mb-2 block font-display text-sm font-bold text-foreground uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="user_phone" className="mb-2 block font-display text-sm font-bold text-foreground uppercase tracking-wider">
                  Phone Number *
                </label>
                <input
                  id="user_phone"
                  name="user_phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="user_email" className="mb-2 block font-display text-sm font-bold text-foreground uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="moving_from" className="mb-2 block font-display text-sm font-bold text-foreground uppercase tracking-wider">
                  Moving From
                </label>
                <input
                  id="moving_from"
                  name="moving_from"
                  type="text"
                  placeholder="City / Area"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="moving_to" className="mb-2 block font-display text-sm font-bold text-foreground uppercase tracking-wider">
                  Moving To
                </label>
                <input
                  id="moving_to"
                  name="moving_to"
                  type="text"
                  placeholder="City / Area"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="service_type" className="mb-2 block font-display text-sm font-bold text-foreground uppercase tracking-wider">
                  Service Type
                </label>
                <select
                  id="service_type"
                  name="service_type"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                >
                  <option value="">Select service</option>
                  <option value="household">Household Shifting</option>
                  <option value="office">Office Relocation</option>
                  <option value="vehicle">Vehicle Transport</option>
                  <option value="packing">Packing & Unpacking</option>
                  <option value="storage">Storage</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-display text-sm font-bold text-foreground uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your moving requirements..."
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-full gradient-orange px-8 py-4 font-display text-base font-bold text-primary-foreground shadow-glow-orange transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="h-5 w-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message & Get Free Quote
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
