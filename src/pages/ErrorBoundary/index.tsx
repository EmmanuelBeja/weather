import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

class ErrorBoundary extends React.Component {
  state: { error: object | null; errorInfo: React.ErrorInfo | null };
  appProps: Props;

  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
    this.appProps = props;
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this?.state?.errorInfo) {
      // Error path
      return (
        <section className="flex justify-center items-center h-[100vh] w-full">
          <div className="flex justify-center items-center w-[80%] h-full">
            <div className="w-3/5">
              <div className="text-[26px] text-[#000] font-[600] mb-5">
                Something went wrong 🧐.
              </div>
              <div className="text-left text-[18px] font-[600]">
                {this?.state?.error && this.state.error.toString()}
              </div>
              <div className="text-[14px] font-[400]">
                {this.state.errorInfo.componentStack}
              </div>
              <div className="pt-20 flex">
                <button
                  type="button"
                  className="bg-transparent border border-primary text-primary font-inter font-[500] rounded-[26px] px-11 py-3 flex items-center hover:scale-103 transition-all duration-250 ease-in-out"
                  onClick={() => window.location.replace('/')}
                >
                  Home
                </button>
              </div>
            </div>
          </div>
        </section>
      );
    }
    // Normally, just render children
    return this.appProps.children;
  }
}

export default ErrorBoundary;
