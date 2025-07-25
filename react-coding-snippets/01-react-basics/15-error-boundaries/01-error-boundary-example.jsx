// 📌 Topic: Error Boundaries
// 📖 Description: Error boundaries catch runtime errors in React components
// and prevent the entire app from crashing. Only work in class components.

import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }
  render() {
    if (this.state.hasError) return <h2>🚨 Something went wrong.</h2>;
    return this.props.children;
  }
}

const BuggyComponent = () => {
  throw new Error("Intentional error!");
};

export default function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

// 💡 Output:
// Instead of crashing, it shows: 🚨 Something went wrong.
