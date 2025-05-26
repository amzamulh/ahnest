import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('Errors:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="border-l-4 border-red-500 bg-red-50 p-4" role="alert">
          <h1 className="text-lg font-bold text-red-700">
            Something went wrong.
          </h1>
          <p className="mt-1 text-red-600">
            {this.state.error && this.state.error.toString()}
          </p>
          <div className="mt-2 text-sm text-red-500">
            <summary>Error details</summary>
            <pre className="mt-1 overflow-auto rounded bg-red-100 p-2">
              {this.state.errorInfo?.componentStack}
            </pre>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
