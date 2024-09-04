import React, { Component, ReactNode } from "react";
interface ErrorBoundaryProps {
    children: ReactNode;
    fallbackUI?: ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
}
declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
}
export default ErrorBoundary;
