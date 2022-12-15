
export default function About() {
    return (
        <section id="about" className="min-h-screen pt-6 flex flex-col gap-8 p-2">
            <h2 className="text-center text-2xl underline decoration-blue-500 decoration-4">About</h2>
            <article className="max-w-md mx-auto shadow-xl rounded-md border border-solid border-gray-200 p-4 bg-white flex flex-col gap-2">
                <p>
                    My name is <strong>Ashok Thapa</strong>. I am from Nepal residing in the eastern terai part of the country.
                </p>
                <p>
                    Currently, I am pursuing <strong>Bachelor of Computer Application</strong> degree from <strong>Damak Multiple Campus</strong>.
                </p>
                <p>
                    <strong>FullStack Developer</strong> with <strong>Javascript tech stack</strong>. I love building web applications with fully featured and user-firendly applications.
                </p>
            </article>
        </section>
    )
}
