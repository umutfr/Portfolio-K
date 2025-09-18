import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackgorund } from "@/components/StarBackground"


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackgorund/>

      {/* Navbar */}
      <Navbar/>
    

      {/* Main Content */}

      {/* Footer */}


    </div>
  )
}