import { ThemeToggle } from "../components/ThemeToggle"
import img06 from '/public/image.png'

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}
    <ThemeToggle/>
    {/* Background Effects */}

    {/* Navbar */}

    

    {/* Main Content */}

    {/* Footer */}

    <p>buna basarak temayi degistirebilirsin</p><br></br>
    <div className="text-3xl font-bold underline">
        Ceza'ya selam, catismaya devam!
    </div><br></br><br></br><br></br>

    <div className="items-center justify-center flex" >
    <img src={img06} className="w-150"></img>
    </div>
    </div>
  )
}