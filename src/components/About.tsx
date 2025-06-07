import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        
          {/* Chosen Section */}
          {/* <div
            className="flex flex-col items-center justify-center w-[60vw] h-[60vh] mx-auto my-10 animate-fade-in-up"
            style={{ minHeight: '340px' }}
          >
            <span className="block text-2xl md:text-3xl font-semibold text-muted-foreground mb-2 tracking-wide">
              . . .of course,
            </span>
            <span
              className="block font-extrabold text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-move"
              style={{
                letterSpacing: '0.05em',
                lineHeight: 1.1,
                transition: 'background-position 1s',
                backgroundSize: '200% 200%',
                backgroundPosition: '0% 50%',
              }}
            >
              I AM A CHOSEN
            </span>
          </div> */}
          {/* End Chosen Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate front-end developer from Nigeria, currently pursuing a BSc in 
                  Software Engineering at Bayero University Kano. My journey in tech is driven 
                  by a desire to create impactful digital solutions that address real-world problems.
                </p>
                <p>
                  I specialize in building responsive and user-friendly web interfaces using modern 
                  technologies. My approach combines technical expertise with creative problem-solving 
                  to deliver exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or mentoring fellow developers in the community.
                </p>
              </div>
            </Card>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-pink-500/10 to-red-500/10 border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </Card>
            </div>

            <Card className="mt-6 p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-primary/20">
              <h4 className="text-lg font-semibold mb-3 text-primary">Education</h4>
              <div className="space-y-2">
                <div className="font-medium">BSc Software Engineering</div>
                <div className="text-sm text-muted-foreground">Bayero University Kano</div>
                <div className="text-sm text-muted-foreground">2023 - Present</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;