import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Front-End Explorer & Tech Enthusiast</h3>

                        <p className="text-muted-foreground">
                            As a 2-year developer with a background in computer programming, I build responsive, high-performance web applications using modern technologies. I focus on creating interfaces that are both visually appealing and easy to use.
                        </p>

                        <p className="text-muted-foreground">
                            I’m passionate about solving complex problems with elegant solutions and continuously learning new tools to stay ahead in the fast-evolving web landscape. My goal is to deliver web experiences that are functional, engaging, and memorable.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button ">
                                Get In Touch
                            </a>

                            <a href="/files/Umut-CV.pdf"
                            download="umutfr-CV.pdf"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 ">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Developing modern, high-performance web applications and interfaces.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Interface & Experience Designer</h4>
                                    <p className="text-muted-foreground">Building elegant, easy-to-use interfaces for modern web applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Emerging Web Developer</h4>
                                    <p className="text-muted-foreground">Learning, experimenting, and contributing to modern web projects.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}