import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';
// import { useNavigationType, useLocation } from 'react-router-dom';

interface ViewTransitionWrapperProps {
  children: React.ReactNode;
}

function ViewTransitionWrapper({ children }: ViewTransitionWrapperProps) {
  const navigationType = useNavigationType();
  const location = useLocation();

  useEffect(() => {
    // Only animate on POP (back/forward)
    if (navigationType === 'POP' && document.startViewTransition) {
      document.startViewTransition(() => {
        // React will have already updated the DOM after location change.
        // No need to do anything here.
      });
    }
  }, [location, navigationType]);

  return children;
}

export default ViewTransitionWrapper;
