import { Form } from "react-router-dom";

export default function About() {
    const about = {
        first: "Quintin",
        last: "Carr",
        avatar: "https://placekitten.com/g/200/200",
        github: "Carrnage",
        notes: "SIT",
        favorite: true,
    };

    return (
        <div id="contact">
            <div>
                <img
                    key={about.avatar}
                    src={about.avatar || null}
                />
            </div>
            <div>
                <h1>
                    {about.first || about.last ? (
                        <>
                            {about.first} {about.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )
                    }
                    {" "}
                </h1>

                {about.github && (
                    <p>
                        <a
                            target="_blank"
                            href={`https://github.com/${about.github}`}
                        >
                            {about.github}
                        </a>
                    </p>
                )}

                {about.notes && <p>{about.notes}</p>}

            </div>
        </div>
    )
}