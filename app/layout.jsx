// Styles
import "@styles/globals.scss"

export const metadata = {
  title: "YouTube Clone",
  description: "Watch, Enjoy & Be Happy",
};

const RootLatout = ({ children }) => {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default RootLatout