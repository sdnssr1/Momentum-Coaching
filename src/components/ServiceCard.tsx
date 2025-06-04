import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  learnMoreHref?: string;
}

const ServiceCard = ({
  title = "Service Title",
  description = "A detailed description of the service offered, explaining the benefits and what clients can expect.",
  icon,
  learnMoreHref = "#",
}: ServiceCardProps) => {
  return (
    <Card className="w-full max-w-[320px] h-[380px] flex flex-col bg-white border-purple-100 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        {icon && (
          <div className="flex justify-center mb-4 text-[#4B0082]">{icon}</div>
        )}
        <CardTitle className="text-xl font-semibold text-[#4B0082] text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-[#333] text-center">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-0 flex justify-center">
        <Button
          variant="link"
          className="text-[#4B0082] font-medium flex items-center gap-1 hover:gap-2 transition-all"
          asChild
        >
          <a href={learnMoreHref}>
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
