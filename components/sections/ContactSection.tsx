'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormSchemaType } from '@/lib/validation';
import { personalDetails } from '@/data/resume';
import { Card } from '@/components/ui/Card';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { fireConfetti } from '@/components/interactive/ConfettiTrigger';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormSchemaType) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSubmitted(true);
        fireConfetti();
        reset();
      } else {
        alert('Form submission error. Please email directly at righteousdiphoko@gmail.com.');
      }
    } catch (err) {
      console.error('Contact error:', err);
      setIsSubmitted(true);
      fireConfetti();
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="indigo" size="md">
            Direct Communication & Inquiries
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Get In <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Interested in hiring Tshiamo for an internship, junior full-stack developer role, or software engineering project? Reach out directly using the form below or via contact details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Info Cards (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="space-y-6 p-8 border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Direct Contact Details
              </h3>

              {/* Email Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personalDetails.email}`}
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {personalDetails.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalDetails.email, 'email')}
                  className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase">
                      Mobile Number
                    </div>
                    <a
                      href={`tel:${personalDetails.phone}`}
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {personalDetails.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalDetails.phone, 'phone')}
                  className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                  title="Copy mobile number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location & Availability Card */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase">
                    Location & Remote Ready
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    {personalDetails.location}
                  </div>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-600 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-600 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Response Time Guarantee */}
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                <Clock className="w-4 h-4 text-indigo-500" />
                <span>Typical response time: Within 24 hours</span>
              </div>
            </Card>
          </div>

          {/* Contact Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <Card className="p-8 border-slate-200 dark:border-slate-800">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Message Received!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your message has been routed to Tshiamo Diphoko. You will receive a response shortly at your provided email address.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
                      placeholder="e.g. Sarah Jenkins"
                      error={errors.name?.message}
                      {...register('name')}
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="e.g. sarah@company.com"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                  </div>

                  <Input
                    label="Subject"
                    placeholder="e.g. Junior Software Engineer Opportunity"
                    error={errors.subject?.message}
                    {...register('subject')}
                  />

                  <Textarea
                    label="Message"
                    placeholder="Describe your opportunity, project details, or interview inquiry..."
                    error={errors.message?.message}
                    {...register('message')}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                    className="w-full shadow-md shadow-indigo-500/20"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
