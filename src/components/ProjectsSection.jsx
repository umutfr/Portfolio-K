import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    /*{
        id: 1,
        title: "Karaoğlu İzolasyon Website",
        description: "HTML, CCS ve JS kullanarak gelistirilmistir.",
        image: "../projects/project1.png",
        tags:["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",


    },*/
    {

        id: 1,
        title: "EKAK Yalıtım",
        description: "Developed using HTML, CSS, and JS.",
        image: "../projects/project1.png",
        tags:["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
    },
    /*{
        id: 1,
        title: "Lorem ipsum dolor Sayfası",
        description: "HTML, CCS ve JS kullanarak gelistirilmistir.",
        image: "/projects/project1.png",
        tags:["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
    },*/
]


export const ProjectsSection = () => {
    return(
    <section id="projects" className="py-24 px-4 relative ">
        <div className="container mx-auto mx-w-5xl items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here’s a look at some projects I’ve developed, emphasizing practical design and smooth performance.</p>

            <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap justify-center">
                {projects.map((project,key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full max-w-md">

                        <div className="h-hax overflow-hidden">
                            <img src={project.image}
                            alt={project.title}
                            className="w-full max-w-150 h-auto object-cover transition-transform duration-500 group-hover:scale-110"/>
                            
                        </div>

                        <div className="p-6" >
                            <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
                                {project.tags.map((tag) =>(
                                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">{tag}
                                    </span>

                                ))}
                            </div>

                        

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}

                        </p>
                        <div className="flex items-center justify-between">
                        <div>
                            <a href="https://github.com/umutfr/Karaoglu-Izolasyon-Web-Sitesi">
                            <Github size={20} className="text-foreground/80 hover:text-primary transition-colors duration-300"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://ekakendustriyel.com.tr/"
                            target="_blank">
                            <ExternalLink size={20} className="text-foreground/80 hover:text-primary transition-colors duration-300"/>
                            </a>
                        </div>
                        </div>

                        </div>
                    </div>

                ))}

            </div>

            <div className="text-center mt-12">
                <a 
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                href="https://github.com/umutfr"
                target="_blank">
                    Check my Github <ArrowRight size={16}/>
                </a>

            </div>

        </div>

    </section>
    )
}