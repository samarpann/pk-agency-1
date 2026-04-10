import { motion } from 'framer-motion';
import { getAsset, images } from '../utils/assets';
import { ShieldCheck, Target, Award, Users } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: <ShieldCheck className="text-premium-gold" />, label: "Quality Guaranteed", value: "20+ Years" },
        { icon: <Users className="text-premium-gold" />, label: "Happy Clients", value: "5000+" },
        { icon: <Target className="text-premium-gold" />, label: "Products Delivered", value: "100K+" },
        { icon: <Award className="text-premium-gold" />, label: "Industry Leaders", value: "Since 2003" },
    ];

    return (
        <div className="pt-20">
            {/* Page Header */}
            <section className="relative py-24 bg-premium-maroon">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/royal-lineage.png')]"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-playfair font-black mb-4"
                    >
                        About <span className="text-premium-gold">P.K. Agencies</span>
                    </motion.h1>
                    <p className="text-premium-goldLight uppercase tracking-[0.3em] font-semibold text-sm">Legacy of Excellence in Event Solutions</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden shadow-2xl relative"
                    >
                        <img src={getAsset(images[1])} alt="Our Heritage" className="w-full h-[600px] object-cover" />
                        <div className="absolute inset-0 bg-premium-maroon/10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-playfair font-bold text-premium-maroon leading-tight">Leading Manufacturers & Wholesale Supplier</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Based in the historic Chandni Chowk of Delhi, P.K. Agencies has been a cornerstone of the event and decoration industry for two decades. We understand that every event, from a wedding to a corporate banquet, deserves the best furniture and decor.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our mission is to provide high-quality, durable, and aesthetically pleasing event solutions at wholesale prices. We specialize in everything from Shamiana and Kanat to Jaimala chairs, Banquet chairs, Stainless Steel sofas, and Fancy lighting.
                        </p>

                        <div className="pt-4 border-l-4 border-premium-gold pl-6">
                            <p className="text-xl font-playfair italic text-premium-maroon">
                                "We don't just sell products; we help you create royal environments for life's most precious moments."
                            </p>
                            <div className="mt-4 font-bold uppercase text-sm tracking-widest">— P.K. Singh, Founder</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-premium-ivory">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card text-center space-y-4"
                            >
                                <div className="w-16 h-16 bg-premium-maroon/10 rounded-full flex items-center justify-center mx-auto scale-110">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-playfair font-bold text-premium-maroon">{stat.value}</div>
                                <div className="text-sm font-semibold uppercase text-gray-500 tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Gallery Preview */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-playfair font-bold">Our Infrastructure & Products</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[2, 3, 4, 7, 8, 9, 11, 13].map((num, i) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="h-64 rounded-xl overflow-hidden shadow-md group"
                            >
                                <img src={getAsset(images[num])} alt="Our Setup" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
