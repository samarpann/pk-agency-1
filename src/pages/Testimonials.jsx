import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import { getAsset } from '../utils/assets';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rajesh Malhotra",
            role: "Founder, RM Events",
            content: "P.K. Agencies provided the furniture for our luxury resort banquet hall. The quality of jaimala chairs and sofas is unmatched. Highly recommended for wholesale orders.",
            rating: 5
        },
        {
            name: "Sanjay Gupta",
            role: "Wedding Planner",
            content: "We've been sourcing our tent house items and fancy lights from P.K. Agencies for over 5 years. Their wholesale prices and pan-India delivery make them our go-to partner.",
            rating: 5
        },
        {
            name: "Amit Sharma",
            role: "Hotel Manager",
            content: "The banquet chairs we ordered are not only beautiful but extremely durable. The custom designs they offered perfectly matched our interior theme.",
            rating: 5
        },
        {
            name: "Priya Singh",
            role: "Event Coordinator",
            content: "Excellent quality wedding sofas and stage decorations. P.K. Agencies understands the needs of modern event planners and delivers on time.",
            rating: 5
        },
        {
            name: "Vikram Rathore",
            role: "Catering Services",
            content: "Highly impressed with their wide range of event accessories. Their showroom in Chandni Chowk is a must-visit for anyone in the event business.",
            rating: 5
        },
        {
            name: "Meenakshi Iyer",
            role: "Interior Designer",
            content: "The aesthetic appeal of their fancy lighting collection is superior to anything else we found in the Delhi market. Truly premium quality.",
            rating: 5
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-premium-ivory">
            {/* Header */}
            <section className="py-32 bg-premium-maroon text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={getAsset('bg-decor.png')} alt="Background" className="w-full h-full object-cover opacity-30 brightness-[0.4]" />
                </div>
                <div className="absolute inset-0 z-1 bg-gradient-to-b from-premium-maroon/90 via-premium-maroon/60 to-premium-maroon/90"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-playfair font-black mb-4"
                    >
                        Client <span className="text-premium-gold">Testimonials</span>
                    </motion.h1>
                    <div className="w-24 h-1 bg-premium-gold mx-auto mb-6"></div>
                    <p className="text-premium-goldLight uppercase tracking-[0.3em] font-semibold text-sm">Words from our trusted partners across India</p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {testimonials.map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all relative group"
                            >
                                <div className="absolute top-6 right-6 text-premium-ivory group-hover:text-premium-gold/20 transition-colors">
                                    <Quote size={60} strokeWidth={1.5} />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex text-premium-gold mb-6">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={18} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                                        "{t.content}"
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-14 h-14 bg-premium-maroon rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-lg">{t.name}</div>
                                            <div className="text-premium-maroon text-xs uppercase tracking-widest font-bold">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-white rounded-[3rem] p-16 text-center shadow-2xl border border-premium-gold/20">
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-premium-maroon mb-6">Experience Excellence Yourself</h2>
                        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">Join hundreds of satisfied event planners and business owners who trust P.K. Agencies for their event infrastructure needs.</p>
                        <button className="btn-premium px-12 py-4 text-lg">Work With Us</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
