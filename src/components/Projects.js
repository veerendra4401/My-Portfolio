// Projects.js
export default function Projects() {
    return (
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-emerald-500 font-bold text-center">
                My Projects
            </h2>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://github.com/veerendra4401/PG-Web-Application.git"
                        className="w-full h-full">
                        <img src=
"https://private-user-images.githubusercontent.com/175823054/404540599-d72f48d1-6eec-4a66-84f4-213921ecc085.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDMxNTIwNzgsIm5iZiI6MTc0MzE1MTc3OCwicGF0aCI6Ii8xNzU4MjMwNTQvNDA0NTQwNTk5LWQ3MmY0OGQxLTZlZWMtNGE2Ni04NGY0LTIxMzkyMWVjYzA4NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyOFQwODQ5MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZDE2Y2Q1ZmYyYWY1MzE3ODYyYmU0YzViYzU4YmNhYjY5NmY4ZDhiNWJlZGY1OTBmMTU0NDUzYzMyZmUzMDQxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.T3UdAP7xhru0Sk6jqh_td9_W_lQLw_hWR5_bMpsx0PM"
                             alt="Project 1"
                             className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
"https://github.com/veerendra4401/PG-Web-Application.git">
                            PG-Life Web Application
                        </a>
                    </h2>
                    <p>
                    Welcome to the PG Life project! This Project contains a web application designed to help users find and explore Paying Guest accommodations in major cities like Delhi, Mumbai, Bangalore, and Hyderabad.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://github.com/veerendra4401/Uni-chat.git"
                       className="w-full h-full">
                        <img src=
"https://private-user-images.githubusercontent.com/175823054/406907749-c770018a-aaa5-4f9d-b276-fc71ef51fb16.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDMxNTIxNzgsIm5iZiI6MTc0MzE1MTg3OCwicGF0aCI6Ii8xNzU4MjMwNTQvNDA2OTA3NzQ5LWM3NzAwMThhLWFhYTUtNGY5ZC1iMjc2LWZjNzFlZjUxZmIxNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyOFQwODUxMThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03M2UyNTc2NDM1ZDUwNDFiNzE4MzE1YTNlY2MwMzY5MTRhNTQyN2UyMDkyNWE1OGEwYmRiOTBmYTBlOTk3MjM2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.rJmmt5u4q85byMMk1x4ar1YGTtMMT_qG0AaGhi1aNZ8"
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
"https://github.com/veerendra4401/Uni-chat.git">
                            Uni-Chat
                        </a>
                    </h2>
                    <p>
                    This project is a full-stack chat application designed for seamless real-time communication. The frontend is built with React.js, providing a responsive and intuitive user interface, while the backend uses Node.js and Express.js for efficient API handling and Socket.IO for real-time message exchange. MongoDB serves as the database, ensuring secure and scalable data storage.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://github.com/veerendra4401/Invoice-Generator.git"
                       className="w-full h-full">
                        <img src=
"https://private-user-images.githubusercontent.com/175823054/405963443-c90eac89-ff25-4a60-a37b-61b0e2b3c2d4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDMxNTI2MDUsIm5iZiI6MTc0MzE1MjMwNSwicGF0aCI6Ii8xNzU4MjMwNTQvNDA1OTYzNDQzLWM5MGVhYzg5LWZmMjUtNGE2MC1hMzdiLTYxYjBlMmIzYzJkNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyOFQwODU4MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZmFlZWU2YjhiMjUyZWExNDJiNmQwNzM3NWNkYzk3ZjQ1ODQ1YzU1YTQ5ZDQ2ZWVjZTkwY2VkNjIwY2NlYzJmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Ypvv2mNke5dAxEamo6jpfYLviOgdx8ouh9oBSm7FUeo"
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
"https://github.com/veerendra4401/Invoice-Generator.git">
                            Bill/Invoice Generator
                        </a>
                    </h2>
                    <p>
                    The Bill/Invoice Generator is a sleek and functional web application designed to simplify billing tasks. This project allows users to effortlessly add items, calculate totals, and generate professional invoices in PDF format.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://github.com/veerendra4401/Music-Player.git"
                       className="w-full h-full">
                        <img src=
"https://private-user-images.githubusercontent.com/175823054/405662746-0b211e3f-2c4b-46c2-83d2-aeb0460436c7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDMxNTI3OTksIm5iZiI6MTc0MzE1MjQ5OSwicGF0aCI6Ii8xNzU4MjMwNTQvNDA1NjYyNzQ2LTBiMjExZTNmLTJjNGItNDZjMi04M2QyLWFlYjA0NjA0MzZjNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyOFQwOTAxMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMTdiNTA3YjY4NjA1ZGVjY2IyOTFmNTc0Zjc2YTI4MDY2NzlhNThhYjU0YzI0NGQ2MGU0MDg2MGIyNmEwYzhkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.X_epmCY8XhJtQwSmMeGh_8ayPSkbcOJKpzFvXjuEFcw."
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
"https://github.com/veerendra4401/Music-Player.git">
                            Music Player
                        </a>
                    </h2>
                    <p>
                    The Music Player project is a web application built using React that offers users an interface to play, pause, and manage their music collection. It has a responsive design making it effortless for users to enjoy their songs. It has a separate data file using which the users can add their own songs to the list and can listen to their personalized songs playlist.
                    </p>
                </div>
            </div>
        </section>
    );
}
