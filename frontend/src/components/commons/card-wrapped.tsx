"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "./header";
import Social from "../auth/social";
import BackButton from "../auth/back-button";

interface CardWrappedProps {
  children: React.ReactNode;
  headerLabel: string;
  headerTitle: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocialLinks?: boolean;
}

const CardWrapped = ({
  children,
  headerLabel,
  headerTitle,
  backButtonLabel,
  backButtonHref,
  showSocialLinks,
}: CardWrappedProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header title={headerTitle} label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocialLinks && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton 
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
};

export default CardWrapped;
