function BasicLayout({ children }) {
  return (
    <>
      <div>navbar</div>
      <main>{children}</main>
      <div>footer</div>

    </>
  )
}
export {BasicLayout}