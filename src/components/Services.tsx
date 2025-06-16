import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const handleDiscuss =()=>{
    window.open('https://wa.me/2349160152870', '_blank')
  }
  const services = [
    {
      title: "Starter Package",
      price: "$100",
      description: "Single-page website with basic features",
      features: [
        "Responsive single-page design",
        "Basic contact form",
        "Social media integration",
        "Mobile-friendly layout",
        "Basic SEO optimization",
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      title: "Standard Package",
      price: "$250",
      description: "Multi-page website with responsive design",
      features: [
        "Up to 5 responsive pages",
        "Advanced contact forms",
        "Interactive UI components",
        "Cross-browser compatibility",
        "Enhanced SEO optimization",
        "Content management system",
        "2 rounds of revisions",
        "Basic analytics setup"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      title: "Premium Package",
      price: "$400+",
      description: "Full-stack web application with backend support",
      features: [
        "Custom web application",
        "Backend API development",
        "Database integration",
        "User authentication",
        "Advanced animations",
        "Performance optimization",
        "Unlimited revisions",
        "3 months support",
        "Deployment assistance"
      ],
      color: "from-green-500 to-emerald-500",
      popular: false
    }
  ];

  const additionalServices = [
    "Website Maintenance & Updates",
    "Performance Optimization",
    "SEO Audit & Improvement",
    "UI/UX Design Consultation",
    "Code Review & Refactoring",
    "Technical Documentation"
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Services & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Freelance web development services tailored to your needs
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            *Prices are negotiable based on project scope and requirements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`relative p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in-up ${
                service.popular ? 'ring-2 ring-primary/20 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <div className={`text-4xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-2`}>
                  {service.price}
                </div>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card 
                key={service}
                className="p-4 bg-muted/50 hover:bg-muted/70 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-sm font-medium text-center">{service}</div>
              </Card>
            ))}
          </div>
          
          <div className="mt-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8"
              onClick = {handleDiscuss}
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;