import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "glass-card hover-card rounded-xl p-6 flex flex-col items-start gap-4",
        className
      )}
    >
      <div className="p-2 rounded-lg bg-primary/5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
