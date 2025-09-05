const useViewTransition = (callback: () => void) => {
  return () => {
    if (document.startViewTransition) {
      document.startViewTransition(callback);
    } else {
      // fallback for non-supporting browsers
      callback();
    }
  };
};

export default useViewTransition;
