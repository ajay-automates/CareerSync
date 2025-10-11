"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Shield,
  Database,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Send,
  Brain,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const FAQPage = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: HelpCircle,
      questions: [
        {
          q: "How do I connect my Gmail account?",
          a: "Click the Connect Gmail button in the navigation bar or on the Dashboard page. You will be redirected to Google's secure authentication page where you can authorize CareerSync to read your emails. We only request read-only access and never store your email content.",
        },
        {
          q: "What date range should I choose for processing emails?",
          a: "Start with the last 3-6 months for the most relevant job updates. You can use the preset buttons (Last 7 days, Last 30 days, etc.) or manually select custom dates. Processing older emails may take longer but will give you a complete history.",
        },
        {
          q: "How long does email processing take?",
          a: "Processing time depends on the number of emails in your selected date range. Typically, 100 emails take 2-3 minutes. You will see a real-time progress bar showing the current stage (fetching, classifying, extracting) and percentage complete.",
        },
        {
          q: "Is CareerSync really free?",
          a: "Yes! CareerSync is completely free and open-source. We do not charge for any features or store your data on our servers. The service is provided as-is to help job seekers organize their applications.",
        },
      ],
    },
    {
      title: "Email Processing & AI",
      icon: Brain,
      questions: [
        {
          q: "How does the AI classify my emails?",
          a: "Our AI model analyzes your email subject lines and content to identify job-related messages and categorize them into: Applied, Rejected, Interview, Next Phase, Offer, or Withdrawn. The model is trained on thousands of job application emails and continuously improving.",
        },
        {
          q: "What if the AI misclassifies an email?",
          a: "AI is not perfect! If you notice wrongly classified emails (e.g., a rejection marked as an interview, or a non-job email included in results), please send us the email subject line and what it should have been classified as to jobstatustracker@gmail.com. This helps us improve our model for everyone.",
        },
        {
          q: "What if company names or job titles are extracted incorrectly?",
          a: "Our extraction model tries to identify company names and job titles from email content. If you see Unknown or incorrect information, please forward the original email (or share the subject line and sender) to jobstatustracker@gmail.com so we can train our model to handle similar cases better.",
        },
        {
          q: "Why are some of my job emails not showing up?",
          a: "There are several reasons: (1) The email might be in a category other than Primary in Gmail, (2) The AI confidence score might be too low, (3) The sender might be on your excluded emails list, or (4) The email might not match typical job application patterns. Try adjusting your date range or check your exclusion filters.",
        },
        {
          q: "Can I report false positives?",
          a: "Absolutely! If you see emails that are not job-related but got classified as job applications, please let us know at jobstatustracker@gmail.com. Include the email subject and sender so we can improve our filtering.",
        },
      ],
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      questions: [
        {
          q: "What data do you store?",
          a: "We store minimal data: your email address, encrypted Gmail refresh tokens, and your exclusion preferences. We do NOT store your email content, messages, or job application details. All processing happens in real-time and results are sent directly to your browser.",
        },
        {
          q: "Can you read all my emails?",
          a: "Technically, our app has read-only access to your Gmail account, but we only fetch emails from the Primary category within your selected date range. We immediately process and discard them—nothing is stored on our servers.",
        },
        {
          q: "How do I revoke access?",
          a: "You can disconnect CareerSync anytime by: (1) Going to your Account page and clicking Disconnect Gmail, or (2) Visiting your Google Account security settings and removing CareerSync from connected apps. This immediately stops all access to your emails.",
        },
        {
          q: "Is my data encrypted?",
          a: "Yes. We encrypt your Gmail refresh tokens at rest using industry-standard encryption. All data transmission uses HTTPS. Your email content is never stored, so there is nothing to encrypt on our servers.",
        },
        {
          q: "Who can see my job applications?",
          a: "Only you. Since we do not store application data on our servers, it exists only in your browser session. No one else—not even CareerSync administrators—can see your job search information.",
        },
      ],
    },
    {
      title: "Features & Functionality",
      icon: CheckCircle,
      questions: [
        {
          q: "How do I exclude certain emails from being processed?",
          a: "Go to Account > Advanced Filtering. You can add email addresses (noreply@company.com), domains (@linkedin.com), or keywords (newsletter) to exclude. These filters apply to future processing sessions.",
        },
        {
          q: "Can I export my job applications?",
          a: "Yes! From the Analytics page, you can export your data to CSV, Excel, or PDF format. This is useful for tracking applications externally or sharing with career counselors.",
        },
        {
          q: "How do I search for specific applications?",
          a: "Use the search bar on the Dashboard to filter by company name, job title, email address, or subject line. You can also filter by status (Applied, Interview, Offer, etc.) using the dropdown menu.",
        },
        {
          q: "What does each status mean?",
          a: "Applied: Initial application submission confirmation. Interview: Interview invitation or scheduling. Next Phase: Moving to next round (tech screen, panel interview, etc.). Offer: Job offer received. Rejected: Application declined.",
        },
        {
          q: "Can I manually add applications?",
          a: "Currently, CareerSync only processes emails from your Gmail account. Manual entry is not supported yet, but we are considering adding this feature in future updates.",
        },
      ],
    },
    {
      title: "Troubleshooting",
      icon: AlertCircle,
      questions: [
        {
          q: "Processing failed or got stuck. What should I do?",
          a: "Try these steps: (1) Refresh the page and try again with a smaller date range, (2) Check if you are still connected to Gmail (Account page), (3) Clear your browser cache and cookies, (4) Try a different browser. If the issue persists, contact us at jobstatustracker@gmail.com.",
        },
        {
          q: "I'm not seeing any results after processing.",
          a: "Check: (1) Your date range includes the period when you applied to jobs, (2) Your exclusion filters are not too broad, (3) Your job emails are in Gmail's Primary category, (4) You have job-related emails in the selected timeframe. The AI only picks up emails that match job application patterns.",
        },
        {
          q: "Why can't I connect my Gmail account?",
          a: "Possible reasons: (1) Pop-up blocker is preventing the Google auth window, (2) Your browser does not allow third-party cookies, (3) Temporary Google API issues. Try disabling pop-up blockers for CareerSync and enabling cookies.",
        },
        {
          q: "The app says Not Authenticated even after connecting.",
          a: "Your session may have expired. Gmail access tokens expire after 1 hour. Try disconnecting and reconnecting your Gmail account from the Account page. If the issue continues, clear your browser cookies for CareerSync.",
        },
      ],
    },
    {
      title: "Data & Analytics",
      icon: Database,
      questions: [
        {
          q: "How accurate are the analytics?",
          a: "Analytics are based on the emails processed and the AI's classification. Accuracy depends on the quality of your job application emails and how well they match typical patterns. If you notice discrepancies, you can help improve our model by reporting misclassifications.",
        },
        {
          q: "Why do my statistics differ from my personal records?",
          a: "Possible reasons: (1) Not all application emails were processed (check your date range), (2) Some emails were excluded by your filters, (3) Manual applications not tracked via email will not appear, (4) AI misclassifications (please report these!).",
        },
        {
          q: "Can I see which emails were excluded?",
          a: "Currently, excluded emails are not shown in the results. They are filtered out during processing based on your exclusion preferences. You can review your exclusion list in Account > Advanced Filtering.",
        },
        {
          q: "How often should I process my emails?",
          a: "Process weekly or bi-weekly to keep your dashboard up-to-date. Since we do not store historical data, each processing session creates a fresh dataset from your Gmail account.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b w-screen md:w-full">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Frequently Asked Questions</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 md:p-6 lg:p-8 max-w-5xl mx-auto w-full">
        {/* Help Improve Section */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base md:text-lg">
              <Brain className="w-5 h-5" />
              Help Us Improve Our AI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Our AI models are constantly learning and improving. If you notice
              any of the following issues, please send us the email details:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="border rounded-lg p-3 md:p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm md:text-base mb-1">
                      Wrong Classification
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Email classified as wrong status (e.g., rejection marked
                      as interview)
                    </p>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-3 md:p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm md:text-base mb-1">
                      Wrong Extraction
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Company name or job title extracted incorrectly or showing
                      Unknown
                    </p>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-3 md:p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm md:text-base mb-1">
                      False Positives
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Non-job emails included in results (newsletters, spam,
                      etc.)
                    </p>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-3 md:p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm md:text-base mb-1">
                      Missing Emails
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Legitimate job emails that were not detected or processed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4 mt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <Send className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm md:text-base mb-1">
                      Send Feedback
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Email us the subject line, sender, and what should have
                      happened
                    </p>
                  </div>
                </div>
                <Button size="sm" asChild className="w-full sm:w-auto">
                  <a href="mailto:jobstatustracker@gmail.com?subject=AI%20Feedback%20-%20Misclassification">
                    <Mail className="w-4 h-4 mr-2" />
                    Report Issue
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {faqCategories.map((category, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <category.icon className="w-5 h-5" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, qIdx) => (
                    <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                      <AccordionTrigger className="text-left text-sm md:text-base hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <MessageSquare className="w-5 h-5" />
              Still Have Questions?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm md:text-base text-muted-foreground">
              Cannot find the answer you are looking for? We are here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="w-full sm:w-auto">
                <a href="mailto:jobstatustracker@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Support
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/privacy">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a
                  href="https://github.com/Tomiwajin/Gmail-Job-Tracking-tool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Badge */}
        <div className="mt-8 text-center">
          <Badge variant="outline" className="text-xs">
            Last updated: October 2025
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
