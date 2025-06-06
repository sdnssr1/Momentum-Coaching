import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  disablePinkBackground?: boolean;
}

// Form steps
type Step =
  | "goals"
  | "location"
  | "age"
  | "investment"
  | "customGoals"
  | "contact";

interface FormData {
  goal: string;
  location: string;
  ageRange: string;
  readyToInvest: boolean;
  customGoals: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  occupation: string;
  instagram: string;
  discountCode: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  isOpen,
  onClose,
  disablePinkBackground = false,
}) => {
  const [currentStep, setCurrentStep] = useState<Step>("goals");
  const [formData, setFormData] = useState<FormData>({
    goal: "",
    location: "",
    ageRange: "",
    readyToInvest: false,
    customGoals: "",
    fullName: "",
    email: "",
    phone: "",
    country: "UNITED STATES OF AMERICA",
    occupation: "",
    instagram: "",
    discountCode: "",
  });

  // Progress tracker - which step out of total
  const steps: Step[] = [
    "goals",
    "location",
    "age",
    "investment",
    "customGoals",
    "contact",
  ];
  const currentStepIndex = steps.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  // Validation function to check if current step is complete
  const isCurrentStepValid = () => {
    switch (currentStep) {
      case "goals":
        return formData.goal !== "";
      case "location":
        return formData.location !== "";
      case "age":
        return formData.ageRange !== "";
      case "investment":
        return true; // Boolean field, always valid
      case "customGoals":
        return formData.customGoals !== "";
      case "contact":
        return (
          formData.fullName !== "" && 
          formData.email !== "" && 
          formData.phone !== ""
        );
      default:
        return true;
    }
  };

  const handleNext = () => {
    // Only proceed if current step is valid
    if (!isCurrentStepValid()) {
      alert("Please complete all required fields before proceeding.");
      return;
    }
    
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex]);
    } else {
      // Form submission logic here
      console.log("Form submitted:", formData);
      // You could send this data to your backend here
      onClose();
      alert("Application submitted successfully! We'll be in touch soon.");
    }
  };

  const handleBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex]);
    }
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="w-full h-full overflow-auto">
      <div className={`relative w-full ${!disablePinkBackground ? "min-h-screen bg-[#D91A6D]" : ""} text-white py-8`}>
        {/* Only show close button when not in dropdown */}
        {!disablePinkBackground && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 p-2 z-10"
            aria-label="Close form"
          >
            <X className="h-6 w-6" />
          </button>
        )}

        {/* Only show title when not in dropdown */}
        {!disablePinkBackground && (
          <h1 className="text-3xl font-bold text-center pt-8 pb-4">APPLY FOR A SPOT HERE</h1>
        )}
        
        {/* Only show explanation text when not in dropdown */}
        {!disablePinkBackground && (
          <>
            <p className="text-center px-4 mb-6">
              Signing up is noncommittal. I do recommend you to read through the website before going through your application.
            </p>
            {/* Separator line */}
            <hr className="border-t border-white/30 w-4/5 mx-auto" />
          </>
        )}

        {/* Main form content */}
        <div className="max-w-md mx-auto flex flex-col gap-4 px-4 pb-8">

          {/* Progress bar - subtle and elegant design */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex-grow h-[3px] bg-white/20 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-white absolute left-0 top-0 transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-xs text-white/80 ml-3">
              {currentStepIndex + 1}/{steps.length}
            </div>
          </div>

          {/* Step content */}
          {currentStep === "goals" && (
            <div className="space-y-4">
              {/* Only show this heading when not in dropdown */}
              {!disablePinkBackground && (
                <h3 className="text-xl text-center mb-6">How can I help you?</h3>
              )}

              <Button
                variant="outline"
                className="w-full bg-transparent text-white border border-white hover:bg-white/20 hover:text-white rounded-full py-6"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  updateFormData("goal", "LOSE WEIGHT / TONE");
                  handleNext(); // Use handleNext to apply validation
                }}
              >
                LOSE WEIGHT / TONE
              </Button>

              <Button
                variant="outline"
                className="w-full bg-transparent text-white border border-white hover:bg-white/20 hover:text-white rounded-full py-6"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  updateFormData("goal", "GROW YOUR GLUTES");
                  handleNext(); // Use handleNext to apply validation
                }}
              >
                GROW YOUR GLUTES
              </Button>

              <Button
                variant="outline"
                className="w-full bg-transparent text-white border border-white hover:bg-white/20 hover:text-white rounded-full py-6"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  updateFormData("goal", "FAT LOSS + GROW YOUR GLUTES");
                  handleNext(); // Use handleNext to apply validation
                }}
              >
                FAT LOSS + GROW YOUR GLUTES
              </Button>
            </div>
          )}

          {currentStep === "location" && (
            <div className="space-y-4">
              <h3 className="text-xl text-center mb-6">
                Where is your location?
              </h3>

              {[
                "USA/CANADA",
                "SWEDEN",
                "UK",
                "EUROPE",
                "AUSTRALIA",
                "OTHER",
              ].map((location) => (
                <Button
                  key={location}
                  variant="outline"
                  className="w-full bg-transparent text-white border border-white hover:bg-white/20 rounded-full py-6"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    updateFormData("location", location);
                    setCurrentStep("age");
                  }}
                >
                  {location}
                </Button>
              ))}
            </div>
          )}

          {currentStep === "age" && (
            <div className="space-y-4">
              <h3 className="text-xl text-center mb-6">
                Age (I'm working only with 18+ years clients)
              </h3>

              {["18-25", "25-30", "30-35", "35-45", "40+"].map((ageRange) => (
                <Button
                  key={ageRange}
                  variant="outline"
                  className="w-full bg-transparent text-white border border-white hover:bg-white/20 rounded-full py-6"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    updateFormData("ageRange", ageRange);
                    setCurrentStep("investment");
                  }}
                >
                  {ageRange}
                </Button>
              ))}
            </div>
          )}

          {currentStep === "investment" && (
            <div className="space-y-4">
              <h3 className="text-xl text-center mb-6">
                Invest in yourself are the best investment you can do! Are you
                ready invest time and money to receive the support you need to
                achieve your goals?
              </h3>
              <div className="flex flex-col space-y-4">
                <Button
                  variant="outline"
                  className="w-full bg-transparent text-white border border-white hover:bg-white/20 rounded-full py-6"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    updateFormData("readyToInvest", true);
                    setCurrentStep("customGoals");
                  }}
                >
                  YES
                </Button>

                <Button
                  variant="outline"
                  className="w-full bg-transparent text-white border border-white hover:bg-white/20 rounded-full py-6"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    updateFormData("readyToInvest", false);
                    setCurrentStep("customGoals");
                  }}
                >
                  NO
                </Button>
              </div>
            </div>
          )}

          {currentStep === "customGoals" && (
            <div className="space-y-4">
              <h3 className="text-xl text-center mb-6">
                What goals do you like to achieve with my coaching and what keep
                you from reaching it today?
              </h3>

              <textarea
                className="w-full p-4 rounded-3xl bg-white text-[#D42A78] min-h-[120px]"
                placeholder="WRITE HERE..."
                value={formData.customGoals}
                onChange={(e) => updateFormData("customGoals", e.target.value)}
              />
              
              <Button
                variant="outline"
                className="w-full bg-transparent text-white border border-white hover:bg-white/20 rounded-full py-4 mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentStep("contact");
                }}
                disabled={!formData.customGoals}
              >
                NEXT
              </Button>
            </div>
          )}

          {currentStep === "contact" && (
            <div className="space-y-4">
              <h3 className="text-xl text-center mb-6">Contact information</h3>

              <input
                type="text"
                className="w-full p-4 rounded-full bg-transparent text-white border border-white placeholder-white/80"
                placeholder="YOUR FULL NAME"
                value={formData.fullName}
                onChange={(e) => updateFormData("fullName", e.target.value)}
              />

              <input
                type="email"
                className="w-full p-4 rounded-full bg-transparent text-white border border-white placeholder-white/80"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
              />

              <div className="flex items-center border border-white rounded-full overflow-hidden">
                <div className="px-3 flex items-center">
                  <span className="text-sm">🇺🇸</span>
                  <span className="mx-1">+1</span>
                </div>
                <input
                  type="tel"
                  className="flex-1 p-4 bg-transparent text-white placeholder-white/80"
                  placeholder="YOUR PHONE"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                />
              </div>

              <input
                type="text"
                className="w-full p-4 rounded-full bg-transparent text-white border border-white placeholder-white/80"
                placeholder="UNITED STATES OF AMERICA"
                disabled
                value={formData.country}
                onChange={(e) => updateFormData("country", e.target.value)}
              />

              <input
                type="text"
                className="w-full p-4 rounded-full bg-transparent text-white border border-white placeholder-white/80"
                placeholder="WHAT IS YOUR OCCUPATION?"
                value={formData.occupation}
                onChange={(e) => updateFormData("occupation", e.target.value)}
              />

              <input
                type="text"
                className="w-full p-4 rounded-full bg-transparent text-white border border-white placeholder-white/80"
                placeholder="WHAT IS YOUR INSTAGRAM HANDLE, SO I CAN CONTACT YOU (OPTIONAL)"
                value={formData.instagram}
                onChange={(e) => updateFormData("instagram", e.target.value)}
              />

              <input
                type="text"
                className="w-full p-4 rounded-full bg-transparent text-white border border-white placeholder-white/80"
                placeholder="ENTER DISCOUNT CODE"
                value={formData.discountCode}
                onChange={(e) => updateFormData("discountCode", e.target.value)}
              />
            </div>
          )}

          {/* Navigation buttons */}
          <div
            className={cn(
              "flex gap-4 mt-6",
              currentStep === "goals" ? "justify-end" : "justify-between"
            )}
          >
            {currentStepIndex > 0 && (
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 rounded-full flex items-center px-6"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  
                  const prevIndex = currentStepIndex - 1;
                  if (prevIndex >= 0) {
                    setCurrentStep(steps[prevIndex]);
                  }
                }}
              >
                <ChevronLeft className="mr-2 h-5 w-5" />
                BACK
              </Button>
            )}

            <Button
              className={cn(
                "text-white hover:bg-white/20 rounded-full flex items-center px-6",
                currentStep === "contact" ? "bg-white/20" : "bg-transparent"
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const nextIndex = currentStepIndex + 1;
                if (nextIndex < steps.length) {
                  setCurrentStep(steps[nextIndex]);
                } else {
                  // Form submission logic here
                  console.log("Form submitted:", formData);
                  // You could send this data to your backend here
                  alert("Application submitted successfully! We'll be in touch soon.");
                  onClose();
                }
              }}
              disabled={
                (currentStep === "customGoals" && !formData.customGoals) ||
                (currentStep === "contact" &&
                  (!formData.fullName || !formData.email || !formData.phone))
              }
            >
              {currentStep === "contact" ? "SUBMIT" : "NEXT"}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
