import { ButtonLink } from "./ui/button-link";

export const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8">
        <span className="inline-flex animate-fade-down">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/5 text-primary">
            Welcome
          </span>
        </span>
        
        <h1 className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Create beautiful experiences that inspire
        </h1>
        
        <p className="animate-fade-up text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Craft exceptional digital experiences with precision and elegance. Every detail matters.
        </p>
        
        <div className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <ButtonLink href="#features" size="lg" className="min-w-[160px]">
            Explore Features
          </ButtonLink>
          <ButtonLink
            href="#about"
            variant="outline"
            size="lg"
            className="min-w-[160px]"
          >
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
