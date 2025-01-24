import React, { Component } from 'react';

class ErrorBoundary extends Component<ErrorBoundaryProps & { children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps & { children: React.ReactNode }) { 
    super(props);
    this.state = { hasError: false, message: null }; 
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, message: error.toString() }; 
  }

  componentDidCatch(error: any, errorInfo: any) {
    // Tallenna virhetiedot (esim. lähettäminen palvelimelle)
    console.error("An error occurred:", error, errorInfo);
    // Voit esimerkiksi tallentaa virhetiedot palvelimelle täällä
  }

  render() {
    if (this.state.hasError) {
      if (this.props.errorUI) {
        return this.props.errorUI;
      } else {
        return (
          <h3>
            {`An error occurred: ${this.state.message}`} 
          </h3>
        );
      }
    } else {
      return this.props.children; 
    }
  }
}


interface ErrorBoundaryProps {
    errorUI?: React.ReactNode;
  }
  
  interface ErrorBoundaryState {
    hasError: boolean;
    message: string | null; 
  }
  

export default ErrorBoundary;