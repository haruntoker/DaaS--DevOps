"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  ArrowRight,
  BarChart,
  CheckCircle,
  ChevronRight,
  Code2,
  Cpu,
  Download,
  FileText,
  GitBranch,
  Layers,
  LineChart,
  Lock,
  Package,
  Rocket,
  Settings,
  Terminal,
  TestTube,
  Upload,
  Users,
  Zap,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

// Custom hook for animation logic
const useDevOpsAnimation = (steps: any[]) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [steps.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  return { activeStep, isInView, animationRef };
};

const DevOpsModern = React.memo(() => {
  const steps = [
    { icon: GitBranch, label: "Plan", color: "bg-violet-500" },
    { icon: Code2, label: "Code", color: "bg-indigo-500" },
    { icon: Package, label: "Build", color: "bg-blue-500" },
    { icon: TestTube, label: "Test", color: "bg-cyan-500" },
    { icon: Rocket, label: "Release", color: "bg-teal-500" },
    { icon: Upload, label: "Deploy", color: "bg-emerald-500" },
    { icon: Settings, label: "Operate", color: "bg-green-500" },
    { icon: LineChart, label: "Monitor", color: "bg-lime-500" },
  ];

  const { activeStep, isInView, animationRef } = useDevOpsAnimation(steps);

  // DATA FOR THE WHITEPAPER
  // Benefits data
  const benefits = [
    {
      icon: Zap,
      title: "Accelerated Delivery",
      description:
        "Reduce deployment time by up to 90% with automated CI/CD pipelines that streamline the entire software delivery process from code commit to production deployment.",
    },
    {
      icon: CheckCircle,
      title: "Enhanced Quality",
      description:
        "Decrease defects in production by up to 70% through automated testing, code quality checks, and consistent deployment processes that catch issues early.",
    },
    {
      icon: Cpu,
      title: "Infrastructure Automation",
      description:
        "Provision and manage cloud resources with Infrastructure as Code, ensuring consistent, repeatable environments and reducing configuration drift by 85%.",
    },
    {
      icon: Lock,
      title: "Security Integration",
      description:
        "Embed security throughout the development lifecycle with DevSecOps practices, reducing vulnerabilities by 60% and ensuring compliance with industry standards.",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description:
        "Build systems that scale seamlessly with containerization and orchestration, improving resource utilization by 40% and enabling rapid scaling during peak demand.",
    },
    {
      icon: Terminal,
      title: "Continuous Monitoring",
      description:
        "Gain real-time insights into application and infrastructure performance with comprehensive monitoring solutions that reduce MTTR (Mean Time to Resolution) by 65%.",
    },
  ];

  // Features data
  const features = [
    {
      title: "CI/CD Pipeline Automation",
      description:
        "Our CI/CD automation services create streamlined pipelines that automate building, testing, and deploying your applications. We implement industry-leading tools like Jenkins, GitHub Actions, GitLab CI, or Azure DevOps to create efficient workflows that catch issues early and deploy reliably to any environment.",
      stats: "90% faster deployments",
      details: [
        "Automated build processes with artifact management",
        "Comprehensive test automation frameworks",
        "Blue/green and canary deployment strategies",
        "Rollback mechanisms for deployment failures",
        "Pipeline analytics and optimization",
      ],
    },
    {
      title: "Infrastructure as Code",
      description:
        "We implement Infrastructure as Code (IaC) practices using tools like Terraform, AWS CloudFormation, or Pulumi to define and provision your infrastructure through code. This approach ensures consistency across environments, enables version control for infrastructure, and facilitates disaster recovery.",
      stats: "70% reduction in config errors",
      details: [
        "Multi-cloud and hybrid cloud support",
        "Environment templating and standardization",
        "Self-service infrastructure provisioning",
        "Cost optimization through right-sizing",
        "Compliance and security policy enforcement",
      ],
    },
    {
      title: "Containerization & Orchestration",
      description:
        "Our containerization services help you package applications with their dependencies for consistent deployment across environments. We implement Docker for containerization and Kubernetes for orchestration, enabling microservices architectures and improving resource utilization.",
      stats: "80% improved resource utilization",
      details: [
        "Container strategy and architecture design",
        "Docker image optimization and security",
        "Kubernetes cluster setup and management",
        "Service mesh implementation (Istio, Linkerd)",
        "Auto-scaling and self-healing configurations",
      ],
    },
    {
      title: "Monitoring & Observability",
      description:
        "We implement comprehensive monitoring and observability solutions that provide insights into your applications and infrastructure. Using tools like Prometheus, Grafana, ELK Stack, and Datadog, we help you detect and resolve issues quickly, optimize performance, and make data-driven decisions.",
      stats: "60% faster incident resolution",
      details: [
        "Application performance monitoring (APM)",
        "Distributed tracing and log aggregation",
        "Custom dashboards and alerting",
        "Anomaly detection and predictive analytics",
        "SLO/SLI monitoring and reporting",
      ],
    },
  ];

  // Industry challenges
  const challenges = [
    {
      title: "Manual, Error-Prone Processes",
      description:
        "Many organizations still rely on manual deployment processes that are slow, error-prone, and inconsistent. This leads to frequent production issues, delayed releases, and frustrated development teams.",
      solution:
        "Our automated CI/CD pipelines eliminate manual steps, ensuring consistent, repeatable deployments that can be executed with confidence.",
    },
    {
      title: "Siloed Teams and Knowledge",
      description:
        "Traditional separation between development and operations teams creates communication barriers, conflicting priorities, and inefficient handoffs that slow down delivery and impact quality.",
      solution:
        "Our DevOps practices foster collaboration, shared responsibility, and cross-functional skills that break down silos and align teams toward common goals.",
    },
    {
      title: "Security as an Afterthought",
      description:
        "Many organizations treat security as a final checkpoint rather than an integral part of the development process, leading to vulnerabilities, compliance issues, and costly remediation.",
      solution:
        "Our DevSecOps approach integrates security at every stage of the pipeline, from code commit to production, catching issues early when they're easier and cheaper to fix.",
    },
    {
      title: "Scaling Complexity",
      description:
        "As applications grow, managing infrastructure, deployments, and operations becomes increasingly complex, requiring specialized expertise that many organizations lack internally.",
      solution:
        "Our DaaS offering provides the expertise, tools, and processes needed to manage complexity at scale, allowing your team to focus on delivering business value.",
    },
  ];

  // Implementation methodology
  const methodology = [
    {
      phase: "Assessment & Discovery",
      duration: "2-4 weeks",
      activities: [
        "Current state analysis of development and operations processes",
        "Identification of bottlenecks, pain points, and improvement opportunities",
        "DevOps maturity evaluation against industry benchmarks",
        "Technical assessment of existing tools, infrastructure, and applications",
        "Stakeholder interviews and requirements gathering",
      ],
    },
    {
      phase: "Strategy & Planning",
      duration: "2-3 weeks",
      activities: [
        "Development of a customized DevOps transformation roadmap",
        "Tool selection and architecture planning",
        "Definition of success metrics and KPIs",
        "Resource planning and team structure recommendations",
        "Risk assessment and mitigation strategies",
      ],
    },
    {
      phase: "Implementation & Automation",
      duration: "8-12 weeks",
      activities: [
        "CI/CD pipeline setup and configuration",
        "Infrastructure as Code implementation",
        "Containerization and orchestration platform deployment",
        "Monitoring and observability solution implementation",
        "Security integration and compliance controls",
      ],
    },
    {
      phase: "Knowledge Transfer & Optimization",
      duration: "Ongoing",
      activities: [
        "Team training and documentation",
        "Continuous improvement and optimization",
        "Performance tuning and scaling",
        "Advanced feature implementation",
        "Ongoing support and maintenance",
      ],
    },
  ];

  // Industry statistics
  const statistics = [
    {
      value: "23%",
      label:
        "Higher revenue growth for organizations with mature DevOps practices",
    },
    {
      value: "60x",
      label:
        "More frequent code deployments with DevOps compared to traditional approaches",
    },
    {
      value: "96%",
      label:
        "Faster recovery from failures with effective DevOps implementation",
    },
    {
      value: "22%",
      label:
        "Less time spent on unplanned work and rework with DevOps automation",
    },
  ];

  // State to track the currently active accordion item
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleAccordionClick = (index: number) => {
    const itemValue = `item-${index}`;
    setActiveAccordion(activeAccordion === itemValue ? null : itemValue);

    // Scroll to the accordion item
    if (accordionRefs.current[index]) {
      accordionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Hero section */}
      <section className="w-full py-8 md:py-12 lg:py-24 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <Badge className="w-fit bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200">
                DevOps as a Service
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-slate-900">
                Accelerate Your Development Pipeline
              </h1>
              <p className="max-w-[600px] text-slate-600 md:text-lg lg:text-xl">
                Transform your software delivery with our comprehensive DevOps
                as a Service solution. Automate, optimize, and scale your
                development operations with expert implementation and ongoing
                support.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Whitepaper
                </Button>
              </div>
            </div>

            {/* DevOps Process Visualization */}
            <div
              className="flex items-center justify-center"
              ref={animationRef}
            >
              <div
                className={`relative w-full max-w-md aspect-square transition-opacity duration-1000 ${
                  isInView ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-slate-200"></div>

                {steps.map((step, index) => {
                  const angle = (index / steps.length) * 2 * Math.PI;
                  const x = 50 + 40 * Math.sin(angle);
                  const y = 50 - 40 * Math.cos(angle);

                  const Icon = step.icon;

                  return (
                    <div
                      key={index}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                        activeStep === index ? "scale-125" : "scale-100"
                      }`}
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <div
                        className={`
                        flex items-center justify-center rounded-full w-12 h-12 
                        ${activeStep === index ? step.color : "bg-slate-100"}
                        ${
                          activeStep === index ? "text-white" : "text-slate-400"
                        }
                        shadow-lg shadow-violet-500/10 transition-colors duration-300
                      `}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div
                        className={`
                        absolute top-full left-1/2 transform -translate-x-1/2 mt-1
                        text-xs font-medium whitespace-nowrap
                        ${
                          activeStep === index
                            ? "text-violet-700"
                            : "text-slate-500"
                        }
                        transition-colors duration-300
                      `}
                      >
                        {step.label}
                      </div>
                    </div>
                  );
                })}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold text-violet-700">
                      DevOps
                    </div>
                    <div className="text-sm text-slate-500">
                      Continuous Cycle
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is DevOps as a Service Section */}
      <section className="w-full py-12 md:py-24 border-b border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200">
              Introduction
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              What is DevOps as a Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="prose prose-slate max-w-none">
              <p>
                <strong>DevOps as a Service (DaaS)</strong> is a delivery model
                that provides organizations with the expertise, tools, and
                processes needed to implement DevOps practices without having to
                build and maintain the capability in-house. It bridges the gap
                between development and operations teams, creating a
                collaborative environment that enables faster, more reliable
                software delivery.
              </p>
              <p>
                Unlike traditional consulting or staff augmentation, DaaS
                provides a comprehensive, ongoing solution that includes
                implementation, automation, and continuous improvement of your
                DevOps practices. Our team becomes an extension of your
                organization, bringing specialized expertise and proven
                methodologies to transform your software delivery process.
              </p>
              <h3>Key Components of Our DaaS Offering:</h3>
              <ul>
                <li>
                  <strong>Assessment and Strategy:</strong> Evaluating your
                  current state and developing a customized roadmap
                </li>
                <li>
                  <strong>Implementation and Automation:</strong> Setting up
                  tools, processes, and pipelines
                </li>
                <li>
                  <strong>Monitoring and Optimization:</strong> Continuously
                  improving performance and reliability
                </li>
                <li>
                  <strong>Knowledge Transfer:</strong> Training your team and
                  providing documentation
                </li>
                <li>
                  <strong>Ongoing Support:</strong> Providing expertise and
                  assistance as needed
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-4">
                Why Organizations Choose DaaS
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-violet-700" />
                  </div>
                  <div>
                    <h4 className="font-medium">Faster Time to Value</h4>
                    <p className="text-slate-600 text-sm">
                      Implement DevOps practices quickly without lengthy hiring
                      and training processes
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-violet-700" />
                  </div>
                  <div>
                    <h4 className="font-medium">Access to Expertise</h4>
                    <p className="text-slate-600 text-sm">
                      Leverage specialized skills and experience without
                      maintaining a large in-house team
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                    <BarChart className="h-5 w-5 text-violet-700" />
                  </div>
                  <div>
                    <h4 className="font-medium">Predictable Costs</h4>
                    <p className="text-slate-600 text-sm">
                      Convert variable capital expenses to predictable
                      operational expenses
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-violet-700" />
                  </div>
                  <div>
                    <h4 className="font-medium">Focus on Core Business</h4>
                    <p className="text-slate-600 text-sm">
                      Allow your team to focus on delivering features while we
                      handle the DevOps infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-violet-50 to-blue-50 rounded-lg p-6 border border-slate-200">
            <div className="grid md:grid-cols-4 gap-4">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-violet-700">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-slate-500 text-center mt-4">
              Source: State of DevOps Report 2023
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs Section */}
      <section className="w-full py-12 md:py-24 border-b border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200">
              Core Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Comprehensive DevOps Solutions
            </h2>
            <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our DaaS platform provides everything you need to modernize your
              development operations
            </p>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="cicd" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 p-1 mb-10 md:mb-0 gap-2">
                <TabsTrigger
                  value="cicd"
                  className="data-[state=active]:bg-white data-[state=active]:text-violet-700"
                >
                  CI/CD Automation
                </TabsTrigger>
                <TabsTrigger
                  value="iac"
                  className="data-[state=active]:bg-white data-[state=active]:text-violet-700"
                >
                  Infrastructure as Code
                </TabsTrigger>
                <TabsTrigger
                  value="containers"
                  className="data-[state=active]:bg-white data-[state=active]:text-violet-700"
                >
                  Containerization
                </TabsTrigger>
                <TabsTrigger
                  value="monitoring"
                  className="data-[state=active]:bg-white  data-[state=active]:text-violet-700"
                >
                  Monitoring
                </TabsTrigger>
              </TabsList>
              {features.map((feature, index) => (
                <TabsContent
                  key={index}
                  value={["cicd", "iac", "containers", "monitoring"][index]}
                  className="mt-6"
                >
                  <Card>
                    <CardHeader>
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6 items-start">
                      <div className="space-y-4">
                        <p className="text-slate-600">{feature.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-violet-100 text-violet-700 border-violet-200">
                            {feature.stats}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">Key Capabilities:</h4>
                          <ul className="space-y-1">
                            {feature.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-slate-600"
                              >
                                <CheckCircle className="h-4 w-4 text-violet-600 mt-0.5 shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          variant="outline"
                          className="border-slate-300 text-slate-700 hover:bg-slate-100"
                        >
                          Learn More <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 aspect-video flex items-center justify-center">
                        <div className="text-6xl text-violet-500">
                          {index === 0 && (
                            <Terminal className="w-20 h-20 text-violet-500" />
                          )}
                          {index === 1 && (
                            <Cpu className="w-20 h-20 text-violet-500" />
                          )}
                          {index === 2 && (
                            <Layers className="w-20 h-20 text-violet-500" />
                          )}
                          {index === 3 && (
                            <LineChart className="w-20 h-20 text-violet-500" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Implementation Methodology Section */}
      <section className="w-full py-12 md:py-24 border-b border-slate-200 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200">
              Methodology
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Our Implementation Approach
            </h2>
            <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A structured, proven methodology for implementing DevOps practices
              in your organization
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {methodology.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-slate-200 rounded-lg p-6 h-full shadow-sm">
                  <div className="absolute -top-4 -left-4 bg-violet-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <div className="mb-4">
                    <Badge className="bg-violet-100 text-violet-700 border-violet-200">
                      {phase.duration}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle className="h-4 w-4 text-violet-600 mt-0.5 shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ChevronRight className="h-6 w-6 text-violet-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">
              Detailed Implementation Process
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {methodology.map((phase, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  ref={(el) => {
                    accordionRefs.current[index] = el;
                  }}
                  onClick={() => handleAccordionClick(index)}
                >
                  <AccordionTrigger>{phase.phase}</AccordionTrigger>
                  <AccordionContent>
                    <div className="prose prose-slate max-w-none">
                      <p>
                        The Assessment & Discovery phase is the foundation of
                        our DevOps implementation. During this phase, we conduct
                        a comprehensive analysis of your current development and
                        operations processes, tools, and culture to identify
                        opportunities for improvement.
                      </p>
                      <h4>Key Activities:</h4>
                      <ul>
                        <li>
                          <strong>Current State Analysis:</strong> We evaluate
                          your existing CI/CD pipelines, deployment processes,
                          infrastructure management, and monitoring solutions.
                        </li>
                        <li>
                          <strong>Bottleneck Identification:</strong> We
                          identify pain points, inefficiencies, and constraints
                          in your software delivery process.
                        </li>
                        <li>
                          <strong>DevOps Maturity Assessment:</strong> We
                          measure your organization's DevOps maturity against
                          industry benchmarks and best practices.
                        </li>
                        <li>
                          <strong>Technical Assessment:</strong> We evaluate
                          your existing tools, infrastructure, and applications
                          to determine compatibility with modern DevOps
                          practices.
                        </li>
                        <li>
                          <strong>Stakeholder Interviews:</strong> We gather
                          input from key stakeholders to understand business
                          objectives, challenges, and requirements.
                        </li>
                      </ul>
                      <h4>Deliverables:</h4>
                      <ul>
                        <li>
                          Comprehensive assessment report with findings and
                          recommendations
                        </li>
                        <li>DevOps maturity scorecard</li>
                        <li>Prioritized list of improvement opportunities</li>
                        <li>Initial high-level roadmap</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="w-full py-12 md:py-24 border-b border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200">
              Benefits
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Transform Your Development Operations
            </h2>
            <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our DevOps as a Service delivers measurable improvements across
              your entire development lifecycle
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-slate-200 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-violet-100 p-3">
                    <benefit.icon className="h-6 w-6 text-violet-700" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section className="w-full py-12 md:py-24 border-b border-slate-200 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200">
              Challenges
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Common DevOps Challenges We Solve
            </h2>
            <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our DaaS offering addresses the most common obstacles
              organizations face when implementing DevOps
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-red-100 p-2 mt-1">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {challenge.description}
                      </p>
                      <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                          <p className="text-sm text-slate-700">
                            {challenge.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-12 md:py-24 border-b border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200">
              Success Stories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                      Enterprise SaaS
                    </Badge>
                  </div>
                  <blockquote className="text-lg italic text-slate-700">
                    "The implementation of CI/CD pipelines reduced our
                    deployment time from days to minutes and virtually
                    eliminated deployment-related issues. Our team can now focus
                    on innovation instead of firefighting."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-slate-100 w-10 h-10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-slate-500">CTO, CloudSphere</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="text-violet-700 font-bold">90%</div>
                      <div className="text-sm text-slate-600">
                        Reduction in deployment time
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                      Financial Services
                    </Badge>
                  </div>
                  <blockquote className="text-lg italic text-slate-700">
                    "Security and compliance are critical in our industry. The
                    DevSecOps practices implemented by the team have
                    significantly improved our security posture while
                    maintaining our rapid release cycles."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-slate-100 w-10 h-10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-sm text-slate-500">
                        VP of Engineering, FinSecure
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="text-violet-700 font-bold">85%</div>
                      <div className="text-sm text-slate-600">
                        Reduction in security vulnerabilities
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools and Technologies Section */}
      <section className="w-full py-12 md:py-24 border-b border-slate-200 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200">
              Technology Stack
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Tools & Technologies We Leverage
            </h2>
            <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We implement industry-leading tools tailored to your specific
              needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-violet-100 p-3">
                    <Terminal className="h-6 w-6 text-violet-700" />
                  </div>
                  <h3 className="text-xl font-bold">CI/CD Tools</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>Jenkins</li>
                    <li>GitHub Actions</li>
                    <li>GitLab CI</li>
                    <li>Azure DevOps</li>
                    <li>CircleCI</li>
                    <li>ArgoCD</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-violet-100 p-3">
                    <Cpu className="h-6 w-6 text-violet-700" />
                  </div>
                  <h3 className="text-xl font-bold">Infrastructure Tools</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>Terraform</li>
                    <li>AWS CloudFormation</li>
                    <li>Pulumi</li>
                    <li>Ansible</li>
                    <li>Chef</li>
                    <li>Puppet</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-violet-100 p-3">
                    <Layers className="h-6 w-6 text-violet-700" />
                  </div>
                  <h3 className="text-xl font-bold">Containerization</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>OpenShift</li>
                    <li>Helm</li>
                    <li>Istio</li>
                    <li>Linkerd</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-violet-100 p-3">
                    <LineChart className="h-6 w-6 text-violet-700" />
                  </div>
                  <h3 className="text-xl font-bold">Monitoring Tools</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>Prometheus</li>
                    <li>Grafana</li>
                    <li>ELK Stack</li>
                    <li>Datadog</li>
                    <li>New Relic</li>
                    <li>Dynatrace</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 border-b border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Common questions about our DevOps as a Service offering
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How is DevOps as a Service different from hiring DevOps
                  engineers?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    DevOps as a Service provides a comprehensive solution that
                    includes expertise, tools, processes, and ongoing support,
                    rather than just individual contributors. It allows you to
                    leverage a team of specialists with diverse skills and
                    experience, without the overhead of hiring, training, and
                    retaining multiple DevOps engineers. DaaS also provides a
                    more predictable cost model and faster time to value
                    compared to building an in-house team from scratch.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How long does it take to implement DevOps as a Service?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    The implementation timeline varies based on your
                    organization's size, complexity, and current DevOps
                    maturity. Typically, the initial assessment and planning
                    phases take 4-6 weeks, followed by implementation phases
                    that can range from 8-16 weeks for the core capabilities.
                    However, you'll start seeing benefits early in the process,
                    and our phased approach ensures continuous improvement over
                    time. We work with you to prioritize high-impact changes
                    that deliver value quickly.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can you work with our existing tools and processes?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    Yes, we take an incremental approach that builds upon your
                    existing investments where appropriate. During the
                    assessment phase, we evaluate your current tools and
                    processes to determine what can be leveraged, what needs to
                    be enhanced, and what might need to be replaced. Our goal is
                    to maximize the value of your existing investments while
                    introducing new tools and practices where they provide
                    significant benefits.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How do you handle knowledge transfer to our team?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    Knowledge transfer is a core component of our methodology.
                    We provide comprehensive documentation, hands-on training,
                    and pair programming sessions to ensure your team
                    understands the implemented solutions. We also offer ongoing
                    support and mentoring to help your team become
                    self-sufficient over time. Our goal is to empower your team
                    with the skills and knowledge needed to maintain and extend
                    the DevOps practices we implement.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What kind of ongoing support do you provide?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    We offer flexible support options tailored to your needs,
                    including:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                    <li>24/7 monitoring and incident response</li>
                    <li>
                      Regular health checks and optimization recommendations
                    </li>
                    <li>Proactive maintenance and updates</li>
                    <li>On-demand expertise for new features or challenges</li>
                    <li>Continuous improvement initiatives</li>
                    <li>Regular review meetings and progress reports</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
            <div className="flex flex-col items-center justify-center space-y-4 text-center relative z-10">
              <Badge className="bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200">
                Get Started
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Transform Your DevOps?
              </h2>
              <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a consultation with our DevOps experts to discuss your
                specific needs and how our DevOps as a Service can help you
                achieve your goals.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Download Whitepaper
                </Button>
              </div>
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-violet-500 rounded-full filter blur-[100px]"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full filter blur-[100px]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default DevOpsModern;
