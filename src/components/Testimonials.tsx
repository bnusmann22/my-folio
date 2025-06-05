import { Card } from '@/components/ui/card';
import { useState } from 'react';

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager at TechCorp",
      content: "Jamil delivered exceptional work on our web application. His attention to detail and problem-solving skills are outstanding. The project was completed ahead of schedule and exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupHub",
      content: "Working with Jamil was a game-changer for our startup. His React expertise and modern development practices helped us build a scalable platform that our users love.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Aisha Mohammed",
      role: "UI/UX Designer",
      content: "Jamil perfectly translated our designs into responsive, interactive web interfaces. His understanding of modern CSS and JavaScript made the collaboration seamless.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "David Wilson",
      role: "Business Owner",
      content: "The website Jamil built for my business has significantly improved our online presence. The SEO optimization work has increased our visibility and customer engagement.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "Jamil's work on our responsive website redesign was exceptional. The new site performs beautifully across all devices and has improved our conversion rates.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      role: "Fellow Developer",
      content: "Jamil is a talented developer with a keen eye for clean, maintainable code. His passion for learning and helping others makes him a valuable team member.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>
      </div>

      <div className="relative">
        <div 
          className={`flex space-x-6 ${isPaused ? '' : 'animate-slide-left'}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ width: 'fit-content' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card 
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-80 p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          Hover over the testimonials to pause the scroll
        </p>
      </div>
    </section>
  );
};

export default Testimonials;