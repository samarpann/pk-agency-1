import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAsset, images } from '../utils/assets';
import { ShoppingCart, Eye, Filter, X } from 'lucide-react';

const Products = () => {
    const categories = [
        "All",
        "Banquet Chairs",
        "Wedding Sofas",
        "Shamiana & Kanat",
        "Lighting & Decorations",
        "Event Accessories"
    ];

    const productsData = [
        { id: 1, name: "Luxury Banquet Chair", cat: "Banquet Chairs", img: images[5], desc: "High-quality stainless steel chairs with premium upholstery." },
        { id: 2, name: "Royal Jaimala Chair", cat: "Banquet Chairs", img: images[6], desc: "Handcrafted intricate designs for the main stage." },
        { id: 3, name: "SS Wedding Sofa", cat: "Wedding Sofas", img: images[10], desc: "Ultra-luxury stainless steel sofas for premium setups." },
        { id: 4, name: "Maharaja Parda Sofa", cat: "Wedding Sofas", img: images[11], desc: "Traditional royal cushioned sofa with elegant finish." },
        { id: 5, name: "Designer Shamiana", cat: "Shamiana & Kanat", img: images[14], desc: "Weather-resistant stylish tents for outdoor events." },
        { id: 6, name: "Fancy Jhalar Light", cat: "Lighting & Decorations", img: images[20], desc: "Vibrant and efficient lighting solutions for decor." },
        { id: 7, name: "Scent Machine Parda", cat: "Event Accessories", img: images[18], desc: "Fragrance infused decorative curtains for fresh appeal." },
        { id: 8, name: "Ceiling Chandelier", cat: "Lighting & Decorations", img: images[25], desc: "Elegant ceiling decor for banquet halls." },
        { id: 9, name: "Banquet Cushion Set", cat: "Event Accessories", img: images[30], desc: "High-density foam cushions for ultimate comfort." },
        { id: 10, name: "Traditional Kanat", cat: "Shamiana & Kanat", img: images[16], desc: "Durable and colorful partitions for event spacing." },
    ];

    const [activeTab, setActiveTab] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = activeTab === "All"
        ? productsData
        : productsData.filter(p => p.cat === activeTab);

    const handleWhatsApp = (productName) => {
        const phoneNumber = "919911006579";
        const message = `Hi P.K. Agencies, I am interested in ${productName}. Please provide more details and wholesale pricing.`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Header */}
            <section className="bg-premium-ivory py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-premium-maroon mb-4">Our Product Catalog</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto uppercase tracking-widest text-sm font-semibold">Premium Furniture & Event Essentials</p>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-8 sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-center space-x-2 md:space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                        <Filter size={18} className="text-premium-gold shrink-0" />
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${activeTab === cat ? 'bg-premium-maroon text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredProducts.map((product) => (
                                <motion.div
                                    layout
                                    key={product.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                                        {/* Image Container */}
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={getAsset(product.img)}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-4 left-4 bg-premium-gold text-premium-maroon text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-md">
                                                {product.cat}
                                            </div>
                                            <div className="absolute inset-0 bg-premium-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                                                <button
                                                    onClick={() => setSelectedProduct(product)}
                                                    className="p-3 bg-white text-premium-maroon rounded-full hover:bg-premium-gold transition-colors"
                                                >
                                                    <Eye size={20} />
                                                </button>
                                                <button
                                                    onClick={() => handleWhatsApp(product.name)}
                                                    className="p-3 bg-premium-gold text-premium-maroon rounded-full hover:bg-white transition-colors"
                                                >
                                                    <ShoppingCart size={20} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="p-6 flex-grow flex flex-col">
                                            <h3 className="text-xl font-playfair font-bold text-gray-900 group-hover:text-premium-maroon transition-colors mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm mb-6 flex-grow">
                                                {product.desc}
                                            </p>
                                            <button
                                                onClick={() => handleWhatsApp(product.name)}
                                                className="w-full py-3 border border-premium-gold text-premium-maroon font-bold rounded-xl hover:bg-premium-maroon hover:text-white hover:border-premium-maroon transition-all group-hover:shadow-lg"
                                            >
                                                Enquire Now
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 text-gray-500 font-medium">
                            No products found in this category.
                        </div>
                    )}
                </div>
            </section>

            {/* Quick View Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white rounded-[2rem] overflow-hidden max-w-4xl w-full shadow-2xl relative flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-6 right-6 text-gray-400 hover:text-premium-maroon transition-colors z-10 p-2 bg-gray-100 rounded-full"
                                onClick={() => setSelectedProduct(null)}
                            >
                                <X size={24} />
                            </button>

                            {/* Image Part */}
                            <div className="md:w-1/2 h-80 md:h-[500px]">
                                <img
                                    src={getAsset(selectedProduct.img)}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Part */}
                            <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-6">
                                <div className="space-y-2">
                                    <span className="text-premium-gold font-bold uppercase tracking-widest text-xs">{selectedProduct.cat}</span>
                                    <h2 className="text-4xl font-playfair font-bold text-premium-maroon">{selectedProduct.name}</h2>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {selectedProduct.desc}
                                </p>
                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center space-x-4 text-sm font-semibold text-gray-500">
                                        <div className="w-12 h-[2px] bg-premium-gold"></div>
                                        <span>AVAILABLE IN BULK</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={() => handleWhatsApp(selectedProduct.name)}
                                            className="btn-premium flex-grow"
                                        >
                                            Enquire Wholesale Price
                                        </button>
                                        <button
                                            onClick={() => handleWhatsApp(selectedProduct.name)}
                                            className="p-4 border-2 border-gray-100 rounded-full hover:bg-gray-50 text-premium-maroon transition-colors"
                                        >
                                            <ShoppingCart size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Products;
