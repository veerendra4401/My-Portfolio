export default function Resume() {
    return (
        <section id="resume" className="p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-4">Resume</h2>
            <p className="text-center text-lg">
                Download my resume or view key experiences and achievements below.
            </p>
            <div className="text-center mt-6">
                <a
                    href="https://drive.google.com/uc?id=12CJli2nem0YSjJEu72j8Oj56lKOWorF4&export=download"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition transform hover:scale-105"
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
}
