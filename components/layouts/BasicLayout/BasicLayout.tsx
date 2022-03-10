import { Navbar } from "@/components/modules/Navbar";


function BasicLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <div>footer</div>

    </>
  )
}
export {BasicLayout}