import { Sparkles, Zap, Shield, Palette } from "lucide-react";
import { FeatureCard } from "./feature-card";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Beautiful Design",
      description: "Craft stunning interfaces with attention to every detail",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      title: "Lightning Fast",
      description: "Optimized performance for the smoothest experience",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Rock Solid",
      description: "Built with reliability and security in mind",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Magical Experience",
      description: "Create moments that delight and inspire users",
      icon: <Sparkles className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="features"
      className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Crafted with precision
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Every feature is designed to provide the best possible experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              className={`animate-slide-up-fade [animation-delay:${
                index * 150
              }ms]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
