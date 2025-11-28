import React from 'react';

// Designer's Note: This file was previously an empty module (`export {}`) to
// fix a build error. However, this caused a critical runtime crash because
// another part of the application was attempting to render it as a component.
//
// By converting this into a minimal but valid React component that renders nothing,
// we satisfy both the build system's need for an importable module and React's
// need for a valid component type. This resolves the "Failed to load" error.
const Logo = () => {
  return null;
};

export default Logo;
