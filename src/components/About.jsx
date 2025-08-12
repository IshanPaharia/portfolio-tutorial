import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer | Problem Solver | AI Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I specialize in building robust and scalable full stack
              applications using modern technologies, delivering seamless
              user experiences from front-end to back-end.
            </p>

            <p className="text-muted-foreground">
              Alongside development, I’m passionate about competitive
              programming — constantly sharpening my problem-solving skills —
              and exploring cutting-edge areas of Machine Learning, Artificial
              Intelligence, and Generative AI to build innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building end-to-end web applications with modern frameworks,
                    databases, and cloud technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Competitive Programming</h4>
                  <p className="text-muted-foreground">
                    Solving algorithmic challenges to enhance logical thinking
                    and problem-solving efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />    
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI/ML & Generative AI</h4>
                  <p className="text-muted-foreground">
                    Exploring intelligent systems and generative models to
                    create innovative, data-driven solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
