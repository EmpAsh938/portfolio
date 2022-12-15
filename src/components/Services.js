export default function Services() {
    return (
        <section id="services" className="min-h-screen pt-6 flex flex-col gap-8 p-2">
            <h2 className="text-center text-2xl underline decoration-blue-500 decoration-4">Services</h2>
            <article className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center pb-20">
                <div className="max-w-xs flex flex-col gap-2 border border-solid border-gray-100 shadow-md rounded-md bg-white transition-all hover:scale-[.94]">
                    <img src="/images/vanilla.jpg" alt="" className="h-[200px] object-contain" />
                    <div className="p-3">
                        <h3 className="font-bold capitalize">Frontend Developer</h3>
                        <p className="text-[12px]">Build application with vanilla Javascript and HTML/CSS. With minimum libraries and design focussed and less logic featured apps.</p>
                    </div>
                </div>
                <div className="max-w-xs flex flex-col gap-2 border border-solid border-gray-100 shadow-md rounded-md bg-white transition-all hover:scale-[.94]">
                    <img src="/images/react.jpg" alt="" className="h-[200px] object-contain" />
                    <div className="p-3">
                        <h3 className="font-bold capitalize">React Developer</h3>
                        <p className="text-[12px]">Single Page or Multi Page with complex logic and details.</p>
                    </div>
                </div>
                <div className="max-w-xs flex flex-col gap-2 border border-solid border-gray-100 shadow-md rounded-md bg-white transition-all hover:scale-[.94]">
                    <img src="/images/backend.jpg" alt="" className="h-[200px] object-contain" />
                    <div className="p-3">
                        <h3 className="font-bold capitalize">FullStack Developer</h3>
                        <p className="text-[12px]">Develop fully stack applications that handles the client and server with fully stacked backend and client logic.</p>
                    </div>
                </div>
            </article>
        </section>
    )
}
