import { motion } from 'framer-motion';
import { getAsset, videos } from '../utils/assets';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover brightness-[0.75] contrast-[1.1]"
                >
                    <source src={getAsset(videos[0])} type="video/mp4" />
                </video>
            </div>

            {/* Decorative Overlay */}
            <div className="absolute inset-0 z-1 bg-gradient-to-t from-premium-maroon/40 via-transparent to-black/20"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-premium-gold text-lg md:text-xl font-semibold tracking-[0.3em] uppercase">
                        Manufacturers & Wholesale Suppliers
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-playfair font-black text-white leading-tight">
                        Premium Event Furniture & <br className="hidden md:block" />
                        <span className="text-premium-gold">Decoration Solutions</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Elevating your weddings and banquet events with exquisite shamianas, luxurious sofas, and state-of-the-art lighting.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link to="/products" className="btn-premium flex items-center space-x-2 group">
                            <span>View Collection</span>
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/contact" className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full hover:bg-white hover:text-premium-maroon transition-all duration-300 font-semibold">
                            Contact Us Now
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white opacity-60"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
