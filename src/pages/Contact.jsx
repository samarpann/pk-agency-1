import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Header */}
            <section className="bg-premium-maroon py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-6xl font-playfair font-black text-white mb-6"
                    >
                        Get In <span className="text-premium-gold">Touch</span>
                    </motion.h1>
                    <p className="text-premium-goldLight uppercase tracking-[0.4em] font-semibold text-sm">Let's discuss your next grand event</p>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info Tiles */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-playfair font-bold text-premium-maroon mb-8 leading-tight">We're here to assist you <br />with your requirements.</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { icon: <Phone />, title: "Call Us", content: "+91-9911006579, 7011816293", sub: "Mon-Sat: 10AM - 8PM" },
                                { icon: <Mail />, title: "Email Us", content: "kumarpsingh2003@gmail.com", sub: "We reply within 24 hours" },
                                { icon: <MapPin />, title: "Visit Us", content: "2257, Sarai Top Khana, Chandni Chowk, Delhi-6", sub: "Historic Chandni Chowk Market" },
                                { icon: <MessageSquare />, title: "WhatsApp", content: "+91-9911006579", sub: "Quick Enquiry Support" }
                            ].map((item, idx) => (
                                <div key={idx} className="glass-card flex flex-col items-start space-y-4 hover:border-premium-gold transition-colors group">
                                    <div className="p-3 bg-premium-maroon/5 text-premium-maroon rounded-xl group-hover:bg-premium-maroon group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-premium-maroon uppercase tracking-wider text-xs">{item.title}</h4>
                                        <p className="font-bold text-gray-900 mt-1">{item.content}</p>
                                        <p className="text-gray-400 text-xs mt-1">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Google Map Mock */}
                        <div className="rounded-2xl overflow-hidden shadow-xl h-64 border-4 border-premium-ivory">
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.077241851241!2d77.2272846!3d28.6574106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd17c76f6259%3A0xc3f173b22b07040a!2sChandni%20Chowk%2C%20Delhi!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-premium-ivory p-8 md:p-12 rounded-3xl shadow-2xl border border-white"
                    >
                        <h3 className="text-3xl font-playfair font-bold text-premium-maroon mb-8">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Name</label>
                                    <input type="text" className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:border-premium-gold outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Email</label>
                                    <input type="email" className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:border-premium-gold outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                                <select className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:border-premium-gold outline-none transition-all">
                                    <option>Product Enquiry</option>
                                    <option>Wholesale Order</option>
                                    <option>Event Consultation</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                                <textarea rows="5" className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:border-premium-gold outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full btn-premium py-5 flex items-center justify-center space-x-3 text-lg">
                                <Send size={20} />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
