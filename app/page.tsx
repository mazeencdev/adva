import About from "./landing/about";
import Footer from "./landing/footer";
import Nav from "./landing/Navbar";
import Hero from "./landing/Hero";
import ThemeToggle from "./landing/theme-toggle";

export default function Home() {
  return (
    <ThemeToggle>
      <Nav />
      <Hero />
      <About />
      <Footer />
    </ThemeToggle>
  );
}
