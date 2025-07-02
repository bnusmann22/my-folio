import { Card } from '@/components/ui/card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Idris Mukhtar",
      role: "Network Engineer @ Meed network",
      content: "Jamil an amazing learner. His attention to detail and problem-solving skills are outstanding.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Sunusi Tanko",
      role: "CTO at NIHub",
      content: "Understanding how Jamil brain works is awesomely fascinating , kid with big Dreams💚",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Maryam Ibrahim Mukhtar",
      role: "Project Manager & Lecturer(BUK)",
      content: "Jamil is a potential driven individual , working with Jamil was reall a thrill🤗",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Nasir Idris",
      role: "CEO G.N.G.R",
      content: "Its just a mix of enthusiasm and die hard effort while examining Jamil, Kudos he delivers beyond expectations",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Ismail A. BATAGARAWA",
      role: "AI & ML expert",
      content: "Jamil's skills and finesse is just mesmerizing... indeed he is the CHOSEN ONE😎",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Ibrahim Isah Egya",
      role: "Consulting Legal Advocate",
      content: "Jamil is a talented developer with a truly relentless spirit, and very much in cognisance with legal riddance tied to tech. You can trust him on THAT ⚖💚",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    }
  ];

  const renderStars = (rating: number) => (
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}>★</span>
    ))
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
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

      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-700">
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
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
