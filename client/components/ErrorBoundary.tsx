import React, { Component, ErrorInfo, ReactNode } from "react";
import ErrorPage from "@/pages/ErrorPage";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          errorCode="500"
          title="Trading Platform Error"
          message="Something unexpected happened!"
          description="We encountered an error while loading the trading platform. Our technical team has been notified and is working to fix this issue."
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

