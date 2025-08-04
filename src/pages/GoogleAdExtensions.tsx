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

  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: '#F8F9FA',
    fontFamily: 'Inter, system-ui, sans-serif'
  };

  const headerSpacingStyle = {
    paddingTop: '80px',
    paddingBottom: '40px'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center' as const,
    marginBottom: '16px',
    lineHeight: '1.5'
  };

  const subtitleStyle = {
    fontSize: '16px',
    color: '#6C757D',
    textAlign: 'center' as const,
    marginBottom: '32px',
    lineHeight: '1.6'
  };

  return (
    <div style={pageStyle}>
      <Header />
      <main style={headerSpacingStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle}>
            Google Ad Extensions Manager
          </h1>
          <p style={subtitleStyle}>
            Configure and customize ad extensions for enhanced ad performance
          </p>
          
          <AdExtensionsForm onSubmit={handleExtensionSubmit} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GoogleAdExtensions;