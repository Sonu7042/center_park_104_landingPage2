import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const number = "919876543210"; // your WhatsApp number with country code
  const link = `https://wa.me/${number}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp size={26}/>
    </a>
  );
}
