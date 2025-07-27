import Background from "./components/Background";
import Header from "./components/Header";
import Profile from "./components/Profile";
import LinkList from "./components/LinkList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-gray-800">
      <Background />
      <Header />
      <Profile />
      <LinkList />
      <Footer />
    </div>
  );
}
