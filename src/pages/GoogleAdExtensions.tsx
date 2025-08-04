import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import AdExtensionsForm from "@/components/AdExtensionsForm";

const GoogleAdExtensions = () => {
  const handleExtensionSubmit = (data: any) => {
    console.log('Extension data submitted:', data);
    // Handle the submission here - could be API call, etc.
    alert('Ad extensions saved successfully!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Google Ad Extensions Manager
            </h1>
            <p className="text-xl text-muted-foreground">
              Configure and customize ad extensions for enhanced ad performance
            </p>
          </div>
          
          <AdExtensionsForm onSubmit={handleExtensionSubmit} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GoogleAdExtensions;