import Footer from "@/components/Footer";

export const metadata = {
	title: "Zekri | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
