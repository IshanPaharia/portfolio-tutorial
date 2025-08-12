import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Languages
    { name: "Python", level: 90, category: "languages" },
    { name: "JavaScript", level: 90, category: "languages" },
    { name: "C", level: 85, category: "languages" },
    { name: "C++", level: 85, category: "languages" },
    { name: "Java", level: 80, category: "languages" },
  
    // Frameworks
    { name: "Django", level: 85, category: "frameworks" },
    { name: "React", level: 90, category: "frameworks" },
    { name: "TailwindCSS", level: 90, category: "frameworks" },
    { name: "Framer Motion", level: 80, category: "frameworks" },
    { name: "Flask", level: 75, category: "frameworks" },
  
    // Database & DevOps
    { name: "MongoDB", level: 80, category: "database" },
    { name: "PostgreSQL", level: 75, category: "database" },
    { name: "MySQL", level: 75, category: "database" },
    { name: "Docker", level: 70, category: "database" },
    { name: "Vercel", level: 85, category: "database" },
  
    // Others
    { name: "Data Structures & Algorithms", level: 90, category: "others" },
    { name: "Problem Solving", level: 95, category: "others" },
    { name: "Object-Oriented Programming", level: 85, category: "others" },
    { name: "Git", level: 90, category: "others" },
    { name: "Linux/Bash", level: 80, category: "others" },
    { name: "APIs", level: 85, category: "others" },
  ];
  
const categories = ["all", "languages", "frameworks", "database", "others"];  

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="flex flex-col justify-between bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex justify-between text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground">
                    {skill.level}%
                    </span>
                </div>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};