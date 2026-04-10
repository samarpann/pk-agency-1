import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "919911006579";
    const message = "Hi P.K. Agencies, I am interested in your event products.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            title="Chat on WhatsApp"
        >
            <MessageCircle size={28} />
            <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                Chat with us
            </span>
        </a>
    );
};

export default WhatsAppButton;
