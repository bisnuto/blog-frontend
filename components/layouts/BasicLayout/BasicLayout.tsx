import { Navbar } from "@/components/modules/Navbar";
import { Footer } from "@/components/modules/Footer";


function BasicLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>

    </>
  )
}
export {BasicLayout}