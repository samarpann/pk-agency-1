import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { getAsset, images } from '../utils/assets';
import { CheckCircle2, Star, Quote, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const features = [
        { title: "Premium Quality", desc: "Highest grade materials for all our event furniture." },
        { title: "Wholesale Prices", desc: "Best market rates for bulk orders and event planners." },
        { title: "Pan India Delivery", desc: "Safe and timely transport across the country." },
        { title: "Custom Designs", desc: "Tailored solutions to match your wedding theme." }
    ];

    const categories = [
        { name: "Banquet Chairs", img: images[5], path: "/products" },
        { name: "Wedding Sofas", img: images[10], path: "/products" },
        { name: "Fancy Lights", img: images[15], path: "/products" }
    ];

    return (
        <div className="overflow-x-hidden">
            <Hero />

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-premium-maroon font-bold uppercase tracking-widest flex items-center gap-2">
                            <span className="w-12 h-[2px] bg-premium-gold"></span>
                            Welcome to P.K. Agencies
                        </h3>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 leading-tight">
                            Crafting Memorable <br />
                            <span className="text-premium-maroon italic">Event Experiences</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            With decades of experience in the heart of Delhi, P.K. Agencies stands as a beacon of quality in the event industry. We specialize in manufacturing and supplying a vast range of products from traditional Shamianas to modern Banquet Chairs.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {['Exquisite Styles', 'Durable Build', 'Royal Theme', 'Versatile Options'].map(item => (
                                <div key={item} className="flex items-center space-x-3 text-premium-purple font-medium">
                                    <CheckCircle2 className="text-premium-gold" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-4">
                            <Link to="/about" className="btn-outline">Learn More About Us</Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src={getAsset(images[0])} alt="Premium Decor" className="w-full h-[500px] object-cover" loading="lazy" />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-premium-maroon text-white p-8 rounded-2xl shadow-xl hidden md:block">
                            <div className="text-4xl font-playfair font-bold text-premium-gold">20+</div>
                            <div className="text-sm uppercase tracking-widest font-semibold">Years of <br />Excellence</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="py-24 bg-premium-ivory">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-premium-maroon">Our Featured Collections</h2>
                        <div className="w-24 h-1 bg-premium-gold mx-auto"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of premium products designed for luxury weddings and events.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative h-[450px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                            >
                                <img src={getAsset(cat.img)} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-premium-maroon text-white flex flex-col justify-end p-8 opacity-90">
                                    <h4 className="text-2xl font-playfair font-bold mb-2">{cat.name}</h4>
                                    <Link to={cat.path} className="text-premium-goldLight text-sm font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                                        <span>Shop All</span>
                                        <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials (dummy) */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-10 right-10 text-premium-ivory">
                    <Quote size={200} strokeWidth={1} />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-playfair font-bold">Trusted by Top <span className="text-premium-gold">Event Planners</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow bg-white">
                                <div className="flex text-premium-gold mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-600 italic mb-6">
                                    "P.K. Agencies provided the furniture for our luxury resort banquet hall. The quality of jaimala chairs and sofas is unmatched. Highly recommended for wholesale orders."
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-premium-maroon rounded-full flex items-center justify-center text-white font-bold">R</div>
                                    <div>
                                        <div className="font-bold text-gray-900">Rajesh Malhotra</div>
                                        <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">RM Events</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-premium-maroon rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <img src={getAsset(images[12])} alt="Decor" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight">Ready to Elevate Your Next Event?</h2>
                            <p className="text-premium-goldLight text-lg max-w-2xl mx-auto">Get in touch today for wholesale pricing and a custom quote tailored to your needs.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                                <Link to="/contact" className="btn-premium">Contact Now</Link>
                                <Link to="/products" className="px-8 py-3 bg-transparent border-2 border-premium-gold text-premium-gold rounded-full font-bold hover:bg-premium-gold hover:text-premium-maroon transition-all">Download Brochure</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
