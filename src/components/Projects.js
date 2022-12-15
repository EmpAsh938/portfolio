import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen pt-6 flex flex-col gap-8">
            <h2 className="text-center text-2xl underline decoration-blue-500 decoration-4">Projects</h2>
        <article className="max-w-3xl mx-auto flex flex-col gap-8 p-3">
           <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 overflow-hidden">
                    <img src="/images/project-1.png" alt="Blogging application" className="hover:scale-[1.1] transition-transform ease-in-out"/>
                </div>
                <div className="flex-1 rounded-bl-lg border-blue-300 p-1 border-2">
                    <div className="flex gap-2 items-center">
                        <h3 className="text-2xl font-bold capitalize">Blogging App</h3>
                        <a href="https://github.com/empash938/write-in" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>

                        <a href="https://writein.fly.dev" target="_blank" rel="noreferrer">
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                    <p className="italic text-sm">Fullstack MERN App</p>
                    <p className="text-gray-700 mt-2 text-sm">Full Fledged Blogging application. Built with Nodejs/express along with cloudinary integration for image uploads and token validation.</p>
                </div>
           </div>
           <div className="flex flex-col sm:flex-row-reverse gap-2">
                <div className="flex-1 overflow-hidden">
                    <img src="/images/project-2.png" alt="Facebook Clone" className="hover:scale-[1.1] transition-transform ease-in-out"/>
                </div>
                <div className="flex-1 rounded-bl-lg border-blue-300 p-1 border-2">
                    <div className="flex gap-2 items-center">
                        <h3 className="text-2xl font-bold capitalize">Facebook Clone</h3>
                        <a href="https://github.com/empash938/facebook-clone" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>

                        <a href="https://facebook-clone-c4bb7.web.app" target="_blank" rel="noreferrer">
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                    <p className="italic text-sm">React with Firebase Integration</p>
                    <p className="text-gray-700 mt-2 text-sm">Facebook Clone integrated firebase services for backend services like authentication, storage(firestore), image upload,etc. Add new posts along with like feature.</p>
                </div>
           </div>
           <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 overflow-hidden">
                    <img src="/images/project-3.png" alt="Tic Tac Toe" className="hover:scale-[1.1] transition-transform ease-in-out"/>
                </div>
                <div className="flex-1 rounded-bl-lg border-blue-300 p-1 border-2">
                    <div className="flex gap-2 items-center">
                        <h3 className="text-2xl font-bold capitalize">Tic-Tac-Toe</h3>
                        <a href="https://github.com/empash938/tictactoe" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>

                        <a href="https://empash-tictactoe.netlify.app/" target="_blank" rel="noreferrer">
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                    <p className="italic text-sm">React Application</p>
                    <p className="text-gray-700 mt-2 text-sm">Built with React. Player vs Player and Player vs CPU mode. Inspired from Frontendmentor challenges.</p>
                </div>
           </div>
        </article>
        <article className="pb-20 flex items-center justify-center">
            <a className="flex items-center gap-2 rounded bg-blue-500 px-2 py-3 text-white hover:bg-blue-600 transition-all ease-linear cursor-pointer" href="https://empash-projects.netlify.app/" target="_blank" rel="noreferrer">
                <span className="capitalize">view more</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </article>
        </section>
    )
}
