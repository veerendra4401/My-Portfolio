export default function Certifications() {
    const certifications = [
        {
            title: "Certified in Web Development",
            issuer: "Internshala Trainings",
            link: "https://trainings.internshala.com/verify-certificate/?certificate_number=f6afguqfwze",
            imgPath: "/assets/certificates/Internshala.png"
        },
        {
            title: "Certified in Python Programming",
            issuer: "Codetantra",
            link: "https://jyothishmathi.codetantra.com/cert/certificate.jsp?certId=CT635-tnDkIH4-cf6",
            imgPath: "/assets/certificates/python.png"
        },
        {
            title: "Certified in Core Java",
            issuer: "Internshala",
            link: "https://trainings.internshala.com/verify-certificate/?certificate_number=fvhdbk7tl0u",
            imgPath: "/assets/certificates/java.png"
        },
        {
            title: "Certified in Tcs Carer edge",
            issuer: "TCS",
            imgPath: "/assets/certificates/tcs.png"
        },
        {
            title: "Certified in Artificial Intelligence and Data Analytics with a focus on Green Skills",
            issuer: "Edunet Foundation",
            imgPath: "/assets/certificates/edunet.png"
        },
    ];

    return (
        <section id="certifications" className="my-20 w-full max-w-5xl mx-auto p-5">
            <h2 className="text-5xl text-emerald-500 font-bold text-center">Certifications</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
                {certifications.map((cert, index) => (
                    <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer"
                        className="p-5 bg-emerald-200 rounded shadow-lg transition hover:shadow-xl hover:scale-105 w-80 text-center">
                        <img src={cert.imgPath} alt={cert.title} className="w-full h-40 object-cover rounded" />
                        <h3 className="font-bold text-xl mt-3">{cert.title}</h3>
                        <p className="text-gray-700">{cert.issuer}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
