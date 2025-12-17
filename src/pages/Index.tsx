import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BarChart3, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { BasisLogo } from "@/components/BasisLogo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-0 shadow-lg">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-primary/10">
              <BasisLogo className="text-foreground" width={140} height={32} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            Panel Dashboard
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            Monitor your smart panel installations in real-time
          </p>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <p className="text-xs font-medium text-muted-foreground">
                Live Charts
              </p>
            </div>
            <div className="space-y-2">
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <p className="text-xs font-medium text-muted-foreground">
                Real-time
              </p>
            </div>
            <div className="space-y-2">
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <p className="text-xs font-medium text-muted-foreground">
                Secure
              </p>
            </div>
          </div>
          <Link to="/dashboard" className="block">
            <Button className="w-full h-12 text-base font-medium">
              Access Dashboard
            </Button>
          </Link>
          <p className="text-center text-xs text-muted-foreground">
            Powered by Basis Smart Panel Technology
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
