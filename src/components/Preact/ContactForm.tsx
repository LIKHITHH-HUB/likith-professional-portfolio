import { useState, useRef } from 'preact/hooks'
import emailjs from "@emailjs/browser"

emailjs.init("T6BtirAaN8HVyw-xk");

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState("")

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const handleSubmit = async (e: Event) => {
        e.preventDefault()

        if (!nameRef.current || !emailRef.current || !messageRef.current) return

        const templateParams = {
            from_name: nameRef.current.value,
            from_email: emailRef.current.value,
            message: messageRef.current.value,
        }

        try {
            setIsLoading(true)

            await emailjs.send(
                "service_fsx497j",
                "template_nre5rwi",
                templateParams
            )

            setStatus("success")
            setIsLoading(false)

            nameRef.current.value = ""
            emailRef.current.value = ""
            messageRef.current.value = ""

        } catch (err) {
            setStatus("error")
            setIsLoading(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-[500px] p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl flex flex-col gap-6"
        >

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-white text-center">
                Let’s Connect
            </h2>

            {/* NAME */}
            <div className="relative">
                <input
                    type="text"
                    ref={nameRef}
                    required
                    className="peer w-full bg-transparent border border-white/20 rounded-md px-3 pt-5 pb-2 text-white outline-none focus:border-purple-500 transition"
                />
                <label className="absolute left-3 top-2 text-sm text-gray-400 peer-focus:text-purple-400 transition">
                    Name
                </label>
            </div>

            {/* EMAIL */}
            <div className="relative">
                <input
                    type="email"
                    ref={emailRef}
                    required
                    className="peer w-full bg-transparent border border-white/20 rounded-md px-3 pt-5 pb-2 text-white outline-none focus:border-purple-500 transition"
                />
                <label className="absolute left-3 top-2 text-sm text-gray-400 peer-focus:text-purple-400 transition">
                    Email
                </label>
            </div>

            {/* MESSAGE */}
            <div className="relative">
                <textarea
                    rows={4}
                    ref={messageRef}
                    required
                    className="peer w-full bg-transparent border border-white/20 rounded-md px-3 pt-5 pb-2 text-white outline-none focus:border-purple-500 transition resize-none"
                />
                <label className="absolute left-3 top-2 text-sm text-gray-400 peer-focus:text-purple-400 transition">
                    Message
                </label>
            </div>

            {/* BUTTON */}
            <button
                type="submit"
                disabled={isLoading}
                className="relative overflow-hidden rounded-md py-3 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-[1.02] active:scale-95 transition"
            >
                {isLoading ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS */}
            {status === "success" && (
                <p className="text-green-400 text-center text-sm animate-pulse">
                     Message sent successfully!
                </p>
            )}

            {status === "error" && (
                <p className="text-red-400 text-center text-sm animate-pulse">
                    ❌ Something went wrong
                </p>
            )}
        </form>
    )
}

export default ContactForm