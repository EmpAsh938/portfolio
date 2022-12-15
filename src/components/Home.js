import 'animate.css';

export default function Home() {
    return (
        <section className="h-[calc(100vh-70px)] flex flex-col-reverse items-center md:flex-row gap-4 p-2">
            <div className="flex-1 flex flex-col items-end gap-3 animate__animated animate__bounceInUp">
                <h2 className="max-w-md w-full text-3xl text-center md:text-left">I am a developer.</h2>
                <p className="max-w-md w-full leading-6 text-left text-gray-700">Passionate about building stuffs. Love trying new techs and skills.</p>
            </div>
            <div className="flex-1 relative">
                <img src="/images/pic.jpg" alt="profile" className="w-[300px] h-[300px] rounded-full object-cover shadow-lg shadow-cyan-600"/>
            </div>
        </section>
    )
}
