import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function useContact() {
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatusMessage("");
    setIsSuccess(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setIsSuccess(true);
      setStatusMessage("Message sent successfully! We will contact you soon.");

      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setIsSuccess(false);
      setStatusMessage("Failed to send your message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return {
    formRef,
    handleSubmit,
    isSending,
    statusMessage,
    isSuccess,
  };
}
