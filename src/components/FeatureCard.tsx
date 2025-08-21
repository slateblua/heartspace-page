import { Card } from "@/components/ui/card";
import HeartIcon from "./HeartIcon";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 gradient-heart shadow-soft border-0 relative overflow-hidden group hover:shadow-heart transition-all duration-300">
      <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-30 transition-opacity">
        <HeartIcon className="w-8 h-8 text-primary heart-pulse" filled />
      </div>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-primary">{icon}</div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};

export default FeatureCard;