import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="root">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
