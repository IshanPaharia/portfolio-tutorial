import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="p-4 pr-4 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between items-center">
      {" "}
      <p className="pl-5 text-md text-muted-foreground">
        Have a nice day!
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};