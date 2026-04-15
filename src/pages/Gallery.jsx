import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAsset, images, videos } from '../utils/assets';
import { X, Play, ZoomIn } from 'lucide-react';

const Gallery = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [filter, setFilter] = useState('all');

    const allItems = [
        ...images.map((img, idx) => ({ id: `img-${idx}`, type: 'image', src: img })),
        ...videos.map((vid, idx) => ({ id: `vid-${idx}`, type: 'video', src: vid }))
    ];

    const filteredItems = filter === 'all'
        ? allItems
        : allItems.filter(item => item.type === filter);

    return (
        <div className="pt-20 min-h-screen bg-premium-ivory">
            {/* Header */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
                    <h1 className="text-5xl font-playfair font-black text-premium-maroon">Our Visual Journey</h1>
                    <div className="w-24 h-1 bg-premium-gold mx-auto"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto uppercase tracking-widest text-sm font-semibold">Exquisite Setups & Premium Collections</p>

                    <div className="flex justify-center space-x-4 pt-8">
                        {['all', 'image', 'video'].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-8 py-2 rounded-full border-2 transition-all font-bold uppercase text-xs tracking-widest ${filter === f ? 'bg-premium-maroon border-premium-maroon text-white' : 'border-gray-300 text-gray-500 hover:border-premium-gold'}`}
                            >
                                {f}s
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        layout
                        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
                    >
                        <AnimatePresence>
                            {filteredItems.map((item) => (
                                <motion.div
                                    layout
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden shadow-md"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    {item.type === 'image' ? (
                                        <img src={getAsset(item.src)} alt="Gallery Item" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                                    ) : (
                                        <div className="relative aspect-video bg-black flex items-center justify-center">
                                            <video src={getAsset(item.src)} className="w-full h-full object-cover opacity-60" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                                    <Play fill="currentColor" size={24} />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-premium-maroon/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <ZoomIn className="text-white" size={32} />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                    >
                        <button
                            className="absolute top-10 right-10 text-white hover:text-premium-gold transition-colors z-[110]"
                            onClick={() => setSelectedItem(null)}
                        >
                            <X size={40} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="max-w-5xl w-full h-full flex items-center justify-center"
                        >
                            {selectedItem.type === 'image' ? (
                                <img src={getAsset(selectedItem.src)} alt="Full Preview" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
                            ) : (
                                <video
                                    src={getAsset(selectedItem.src)}
                                    controls
                                    autoPlay
                                    className="max-w-full max-h-full rounded-lg shadow-2xl"
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
