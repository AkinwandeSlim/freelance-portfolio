import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Trophy, 
  ChartLine, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Code, 
  Globe, 
  Github, 
  Linkedin, 
  MessageSquare,
  CheckCircle,
  Shield,
  Brain,
  Database,
  Cloud,
  Wrench,
  Award,
  Tag,
  Send,
  Download,
  FileText,
  Eye,
  ExternalLink
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({ title: "Error", description: "Please enter your name", variant: "destructive" });
      return false;
    }
    if (!formData.email.trim()) {
      toast({ title: "Error", description: "Please enter your email", variant: "destructive" });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Error", description: "Please enter a valid email address", variant: "destructive" });
      return false;
    }
    if (!formData.subject.trim()) {
      toast({ title: "Error", description: "Please enter a subject", variant: "destructive" });
      return false;
    }
    if (!formData.message.trim()) {
      toast({ title: "Error", description: "Please enter your message", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      toast({ title: "Success", description: "Thank you for your message! I will get back to you soon." });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Add scroll animation effect
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-primary">Fakorede Alexander</div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-foreground hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
              <a href="/resume/Fakorede_Akinwande_Alexander_Resume.txt" download className="text-foreground hover:text-primary transition-colors flex items-center">
                <Download className="w-4 h-4 mr-1" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted" data-animate>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Professional Image */}
            <div className="mb-8">
              <div className="relative inline-block">
                <img 
                  src="assets\images\alexsss.jpg" 
                  alt="Fakorede Akinwande Alexander - Data Science & Fullstack Developer" 
                  className="w-48 h-48 lg:w-64 lg:h-64 rounded-full mx-auto shadow-2xl object-cover border-8 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-success text-white p-3 rounded-full shadow-lg">
                  <CheckCircle className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4">
              Fakorede Akinwande
              <span className="block text-primary text-4xl lg:text-5xl mt-2">Alexander</span>
            </h1>
            
            <div className="text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
              Data Science & Fullstack Developer
            </div>

            {/* Specialization Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm">
                <Brain className="w-4 h-4 mr-2" />
                Machine Learning
              </Badge>
              <Badge className="bg-success/10 text-success border-success/20 px-4 py-2 text-sm">
                <Code className="w-4 h-4 mr-2" />
                Fullstack Development
              </Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm">
                <Globe className="w-4 h-4 mr-2" />
                Global Solutions
              </Badge>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Trophy className="w-12 h-12 text-success mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">4+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <ChartLine className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">99.7%</div>
                  <div className="text-muted-foreground">ML Accuracy</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-success mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                  <div className="text-muted-foreground">Users Served</div>
                </CardContent>
              </Card>
            </div>

            {/* Value Proposition */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Delivering scalable, data-driven solutions with expertise in Python, Machine Learning, 
              Computer Vision, NLP, and modern web technologies for clients worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-success hover:bg-success/90 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="https://wa.me/2348126378786" className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-3" />
                  Contact via WhatsApp
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="mailto:alexdata2022@gmail.com" className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-2 border-success text-success hover:bg-success hover:text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="/resume/Fakorede_Akinwande_Alexander_Resume.txt" download className="flex items-center">
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm mb-2">Learn More</span>
                  <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="py-16 bg-primary text-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Download My Resume</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a detailed overview of my experience, skills, and achievements in data science and fullstack development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8 text-center">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-4">Complete Resume</h3>
                  <p className="text-blue-100 mb-6">
                    Full CV with detailed experience, education, projects, and technical skills
                  </p>
                  <div className="space-y-3">
                    <Button 
                      asChild 
                      className="bg-white text-primary hover:bg-gray-100 w-full"
                    >
                      <a href="/resume/Fakorede_Akinwande_Alexander_Resume.txt" download>
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-primary w-full"
                    >
                      <a href="/resume/Fakorede_Akinwande_Alexander_Resume.txt" target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        View Online
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8 text-center">
                  <Award className="w-16 h-16 mx-auto mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-4">Quick Summary</h3>
                  <div className="text-left text-blue-100 space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      <span>4+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      <span>B.Sc. Computer Science (4.22 GPA)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      <span>ML/AI Specialist</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      <span>Fullstack Developer</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      <span>Python, React, Django Expert</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Professional Profile</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A highly skilled Computer Science graduate with expertise in data science, backend, and fullstack development. 
                Proficient in Python, Django, Flask, Machine Learning, Computer Vision, NLP, React, and Next.js, with a proven 
                track record of delivering scalable, data-driven solutions for global clients.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-primary mr-3 w-5 h-5" />
                  <span>Based in Nigeria, Serving Global Clients</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="text-primary mr-3 w-5 h-5" />
                  <span>B.Sc. Computer Science, GPA: 4.22/5.0</span>
                </div>
                <div className="flex items-center">
                  <Code className="text-primary mr-3 w-5 h-5" />
                  <span>Specializing in ML, CV, NLP & Fullstack Development</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">B.Sc. Computer Science</h4>
                    <p className="text-muted-foreground mb-1">Joseph Sarwuan Tarka University Makurdi</p>
                    <p className="text-sm text-muted-foreground">Sep 2017 - Dec 2022 | GPA: 4.22/5.0</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">Diploma in Software Engineering</h4>
                    <p className="text-muted-foreground mb-1">Zoe Information Technology</p>
                    <p className="text-sm text-muted-foreground">Feb 2021 - Aug 2021 | Grade: Excellence</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">WASSCE</h4>
                    <p className="text-muted-foreground mb-1">Ogotun Unity Secondary School & Christ's School Ado-Ekiti</p>
                    <p className="text-sm text-muted-foreground">2006 - 2015</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-background" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Code className="mr-2 w-5 h-5" />
                  Programming Languages
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Python", level: 95 },
                    { name: "JavaScript (ES6+)", level: 90 },
                    { name: "Java", level: 85 },
                    { name: "PHP", level: 80 }
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Frameworks & Libraries */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Wrench className="mr-2 w-5 h-5" />
                  Frameworks & Libraries
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Django/Flask", level: 95 },
                    { name: "React/Next.js", level: 90 },
                    { name: "TensorFlow/PyTorch", level: 92 },
                    { name: "Pandas/NumPy", level: 95 }
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Brain className="mr-2 w-5 h-5" />
                  Specializations
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Machine Learning", level: 95 },
                    { name: "Computer Vision", level: 90 },
                    { name: "NLP", level: 88 },
                    { name: "Data Visualization", level: 92 }
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Database className="mr-2 w-5 h-5" />
                  Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "PostgreSQL", "SQLite", "Elasticsearch", "Cassandra", "DuckDB"].map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cloud & Big Data */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Cloud className="mr-2 w-5 h-5" />
                  Cloud & Big Data
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Azure", "GCP", "DigitalOcean", "Kafka", "Flink"].map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Others */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Wrench className="mr-2 w-5 h-5" />
                  Tools & Others
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "Jupyter", "API Development", "Microservices", "Cybersecurity"].map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-muted" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Data Science Project Assistant",
                company: "Universiti Sains Malaysia",
                period: "Dec 2022 - Oct 2024",
                achievements: [
                  "Achieved 99.7% accuracy in PM 2.5 prediction using advanced ML algorithms",
                  "Processed and analyzed 150,000+ environmental data points",
                  "Developed real-time monitoring systems for air quality assessment"
                ]
              },
              {
                title: "Backend Developer",
                company: "720Degree Innovation Hub",
                period: "Sep 2023 - Jul 2024",
                achievements: [
                  "Developed Django-based inventory management system reducing stock discrepancies by 15%",
                  "Mentored 6 junior developers in best practices and code quality",
                  "Implemented RESTful APIs and microservices architecture"
                ]
              },
              {
                title: "Data Science Facilitator",
                company: "GRAZAC Academy",
                period: "Jan 2024 - May 2024",
                achievements: [
                  "Trained 20+ students in Python-based data analysis and machine learning",
                  "Designed and delivered 4 comprehensive hands-on projects",
                  "Curriculum development for data science bootcamp program"
                ]
              }
            ].map((role, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{role.title}</h3>
                      <p className="text-primary font-medium">{role.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm lg:text-right">{role.period}</span>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    {role.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <CheckCircle className="text-success mr-2 mt-1 flex-shrink-0 w-4 h-4" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}

    {/* Projects Section */}
    <section id="projects" className="py-16 bg-background" data-animate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my diverse portfolio spanning fullstack web development and cutting-edge data science solutions
          </p>
        </div>

        {/* Fullstack Development Projects */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center bg-primary/10 rounded-full px-6 py-3">
              <Code className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-primary">Fullstack Development</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "SLUK-TPMA (Teaching Practice Management)",
              description: "A comprehensive Teaching Practice Management Application developed for Sule Lamido University in collaboration with NITDA. Features trainee/supervisor CRUD operations, school listings, authentication, and assignment workflows designed for academic institutions.",
              technologies: ["Next.js", "Flask (Python)", "TailwindCSS", "JWT Authentication", "React Hook Form + Zod", "REST API"],
              period: "Academic System",
              metric: "University Collaboration",
              icon: Users,
              image: "assets/images/projects/TPMA.jpg",
              demoUrl: "https://tpma-frontend.vercel.app/",
              githubUrl: "https://github.com/AkinwandeSlim/SLUK-TPMA"
            },
            {
              title: "Django E-Banking Website",
              description: "A secure, full-stack banking application showcasing best practices in financial system development. Features secure user authentication, account management, transaction handling, and responsive admin dashboard for both desktop and mobile.",
              technologies: ["Django", "Python", "HTML/CSS", "JavaScript", "Bootstrap"],
              period: "Full-Stack Project",
              metric: "Complete Banking Solution",
              icon: Globe,
              image: "assets/images/projects/bankweb.jpg",
              demoUrl: null,
              githubUrl: "https://github.com/AkinwandeSlim/Django-bankwebsite"
            }
          ].map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="default" className="bg-primary text-primary-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                <div className="flex items-center text-success mb-4">
                  <project.icon className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{project.metric}</span>
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3">
                  {project.demoUrl ? (
                    <Button 
                      asChild 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 text-white flex-1"
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      asChild 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 text-white flex-1"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button 
                      asChild 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-300 hover:bg-gray-50 flex-1"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>





{/* Data Science / AI / ML Projects */}
<div className="mb-16">
  <div className="flex items-center justify-center mb-8">
    <div className="flex items-center bg-success/10 rounded-full px-6 py-3">
      <Brain className="w-6 h-6 text-success mr-3" />
      <h3 className="text-2xl font-bold text-success">Data Science & AI/ML</h3>
    </div>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      title: "Dust Particle Control System",
      description: "Advanced Streamlit-based web application for monitoring and predicting dust particle concentrations (PM2.5 and PM10) using machine learning. Enables environmental agencies and researchers to analyze air quality data and forecast PM2.5 levels.",
      technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn", "SQLite"],
      period: "Environmental ML",
      metric: "PM2.5 Prediction",
      icon: ChartLine,
      image: "assets/images/projects/dpcs.jpg",
      demoUrl: null,
      githubUrl: "https://github.com/AkinwandeSlim/Dust-Particle-Control-System"
    },
    {
      title: "Breast Cancer Detection System",
      description: "Advanced deep learning application for early breast cancer detection using histopathological image patches. Features custom ResNet18 model, tissue visualization with cancer overlays, heatmaps, and intuitive Streamlit interface for healthcare practitioners.",
      technologies: ["Python", "PyTorch", "Streamlit", "NumPy", "Pandas", "Matplotlib", "Torchvision", "Scikit-learn", "TensorFlow"],
      period: "Healthcare AI",
      metric: "Deep Learning Detection",
      icon: Brain,
      image: "assets/images/projects/BreastCancer.jpg",
      demoUrl: "https://www.youtube.com/watch?v=pXYgyJ3ne7A",
      githubUrl: "https://github.com/AkinwandeSlim/breast-cancer-detection"
    },
    {
      title: "Nigeria Banditry Attack Analysis",
      description: "Data mining and predictive modeling system analyzing banditry incidents across Nigeria using ACLED crime data. Identifies high-risk LGAs, key crime drivers, and provides actionable insights for national security strategy using XGBoost and SHAP.",
      technologies: ["Python", "Jupyter", "pandas", "scikit-learn", "XGBoost", "SHAP", "GeoPandas"],
      period: "Security Analytics",
      metric: "Crime Prediction",
      icon: Shield,
      image: "assets/images/projects/NGBA.jpg",
      demoUrl: null,
      githubUrl: "https://github.com/AkinwandeSlim/NG-Banditry-Analysis"
    },
    {
      title: "MANET Network Intrusion Detection",
      description: "Network Intrusion Detection System for Mobile Ad-Hoc Networks simulating real-time file event monitoring across multiple nodes. Features encrypted alert routing to admin nodes, tailored for military operations, disaster zones, and IoT systems.",
      technologies: ["Python", "watchdog", "Colorama", "Pycryptodome", "Socket", "RSA", "3DES"],
      period: "Network Security",
      metric: "Real-time Monitoring",
      icon: Shield,
      image: "assets/images/projects/MANET.jpg",
      demoUrl: "https://www.youtube.com/watch?v=ZFatL-b8YzI",
      githubUrl: "https://github.com/AkinwandeSlim/MANET-NIDS"
    },
    {
      title: "SABDDeM Flink Drift Detection",
      description: "Real-time streaming pipeline using Apache Flink for concept drift detection with a custom Sliding Window Adaptive Beta Distribution Drift Detection Model (SABDDeM). Integrates Kafka, LightGBM, Elasticsearch, Kibana, Redis, and a Flask API with River ML for monitoring and predictions.",
      technologies: ["Python", "PyFlink", "Kafka", "LightGBM", "Elasticsearch", "Kibana", "Redis", "Flask", "River ML", "Docker"],
      period: "Real-time Analytics",
      metric: "Concept Drift Detection",
      icon: Brain,
      image: "assets/images/projects/output.png",
      demoUrl: null,
      githubUrl: "https://github.com/AkinwandeSlim/FlinkApp"
    }
  ].map((project, index) => (
    <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <Badge key={techIndex} variant="default" className="bg-primary text-primary-foreground">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4} more
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
        <div className="flex items-center text-success mb-4">
          <project.icon className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">{project.metric}</span>
        </div>
        
        {/* Project Links */}
        <div className="flex gap-3">
          {project.demoUrl ? (
            <Button 
              asChild 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-white flex-1"
            >
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                {project.demoUrl.includes('youtube') ? 'Demo Video' : 'Live Demo'}
              </a>
            </Button>
          ) : (
            <Button 
              asChild 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-white flex-1"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button 
              asChild 
              size="sm" 
              variant="outline" 
              className="border-gray-300 hover:bg-gray-50 flex-1"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  ))}
  </div>
</div>






      </div>
    </section>

      {/* Achievements & Certifications */}
      <section className="py-16 bg-muted" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Achievements */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Achievements</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="bg-success text-white p-3 rounded-full mr-4 flex-shrink-0">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">10th Place - Africa Collegiate Programming Contest</h3>
                      <p className="text-muted-foreground">Ranked 10th in the prestigious 2020/2021 Africa Collegiate Programming Contest, competing against top universities across Africa.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="bg-primary text-white p-3 rounded-full mr-4 flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Open-Source Adoption</h3>
                      <p className="text-muted-foreground">Teaching Practice Management System adopted by a Nigerian university, demonstrating real-world impact and scalability.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Certifications</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="bg-success text-white p-3 rounded-full mr-4 flex-shrink-0">
                      <Tag className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Diploma in Software Engineering</h3>
                      <p className="text-muted-foreground mb-1">Zoe Information Technology</p>
                      <p className="text-sm text-muted-foreground">August 2021 | Grade: Excellence</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="bg-primary text-white p-3 rounded-full mr-4 flex-shrink-0">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Python Programming Tag</h3>
                      <p className="text-sm text-muted-foreground">October 2020</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="bg-success text-white p-3 rounded-full mr-4 flex-shrink-0">
                      <ChartLine className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Python for Data Science</h3>
                      <p className="text-sm text-muted-foreground">January 2021</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your data into actionable insights? Let's discuss how my expertise in 
              data science and fullstack development can drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+234 812-637-8786</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-success text-white p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">alexdata2022@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-success text-white p-3 rounded-full mr-4">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <a href="https://wa.me/2348126378786" className="text-success hover:underline">Chat on WhatsApp</a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-4">Professional Profiles</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://akinwandealex.vercel.app">
                      <Globe className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/AkinwandeSlim">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/akinwandealex">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..." 
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4">© 2025 Fakorede Akinwande Alexander. All rights reserved.</p>
            <p className="text-gray-300 mb-4">Delivering Global Data Science & Fullstack Solutions</p>
            <div className="flex justify-center space-x-6">
              <a href="https://akinwandealex.vercel.app" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
              <a href="https://github.com/AkinwandeSlim" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/akinwandealex" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:alexdata2022@gmail.com" className="text-gray-300 hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}



















