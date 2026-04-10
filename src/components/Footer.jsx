import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-premium-maroon text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <div className="text-3xl font-bold font-playfair flex flex-col leading-none border-b-2 border-premium-gold pb-2">
                                <span className="text-white">P.K.</span>
                                <span className="text-premium-gold text-lg tracking-widest">AGENCIES</span>
                            </div>
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Leading Manufacturers & Wholesale Supplier of event items, shamiana, furniture, and decorative solutions in Delhi-6.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-premium-gold transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-premium-gold transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-premium-gold transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-playfair font-semibold text-premium-gold uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
                            <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-playfair font-semibold text-premium-gold uppercase tracking-wider">Our Products</h4>
                        <ul className="space-y-3">
                            <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Banquet Chairs</Link></li>
                            <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Wedding Sofas</Link></li>
                            <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Shamiana & Kanat</Link></li>
                            <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Fancy Lights</Link></li>
                            <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Event Accessories</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-playfair font-semibold text-premium-gold uppercase tracking-wider">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 group">
                                <MapPin className="text-premium-gold mt-1 group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-gray-300 text-sm">2257, Sarai Top Khana, H.C. Sen Road, Chandni Chowk, Delhi-6</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <Phone className="text-premium-gold group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-gray-300 text-sm">+91-9911006579, 7011816293</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <Mail className="text-premium-gold group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-gray-300 text-sm">kumarpsingh2003@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center">
                    <p className="text-gray-400 text-xs">
                        © {new Date().getFullYear()} P.K. Agencies. All rights reserved. Designed with ❤️ for elegant events.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
