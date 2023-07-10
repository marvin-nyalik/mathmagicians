import Navigation from './Navigation';

const layout = ({ children }) => (
  <div className="container">
    <Navigation />
    {children}
  </div>
);
export default layout;
