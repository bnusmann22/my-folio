import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "React.js", level: 80, color: "from-cyan-500 to-blue-500" },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 75, color: "from-green-500 to-blue-500" },
        { name: "C++", level: 70, color: "from-purple-500 to-pink-500" },
        { name: "TypeScript", level: 65, color: "from-blue-600 to-purple-600" },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 85, color: "from-gray-700 to-gray-900" },
        { name: "Figma", level: 80, color: "from-purple-500 to-pink-500" },
        { name: "Canva", level: 90, color: "from-blue-500 to-purple-600" },
      ]
    },
    {
      title: "Specializations",
      skills: [
        { name: "Responsive Design", level: 95, color: "from-green-500 to-teal-500" },
        { name: "SEO Optimization", level: 85, color: "from-indigo-500 to-purple-500" },
        { name: "UI/UX Principles", level: 80, color: "from-pink-500 to-rose-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST APIs", "JSON", "Responsive Design", "Cross-browser Compatibility",
              "Version Control", "Web Performance", "Accessibility", "Progressive Web Apps",
              "CSS Animations", "Design Systems", "User Experience", "Problem Solving"
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full text-sm transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;