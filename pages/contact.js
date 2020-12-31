import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/global/header'
import css from '../styles/index.module.scss'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

// handleSubmit = e => {
//     fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: encode({ "form-name": "contact", ...this.state })
//     })
//         .then(() => alert("Success!"))
//         .catch(error => alert(error));

//     e.preventDefault();
// };

function useInputChange() {
    const [value, setValue] = useState(null)
    const handleChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }
    return [value, handleChange]
}

export default function Home() {
    const [name, setName] = useInputChange()
    const [email, setEmail] = useInputChange()
    const [message, setMessage] = useInputChange()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { name, email, message }
    }

    return (
        <div className={css.container}>
            <Head>
                <title>Antonin Barbier - Contact</title>
            </Head>
            <Header />
            <main className={css.main}>
                {/* <form onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" name="name" onChange={setName} />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" onChange={setEmail} />
                    </p>
                    <p>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" onChange={setMessage}></textarea>
                    </p>
                    <p>
                        <button type="submit">Envoyer</button>
                    </p>
                </form> */}
                <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" />
                    </p>
                    <p>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </main>
        </div>
    )
}