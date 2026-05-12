import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-900">
      {/* Background Media Placeholder/Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-900/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
          alt="Factory background"
          className="w-full h-full object-cover"
        />
        {/* If we had a real video, we would use <video autoPlay loop muted playsInline className="w-full h-full object-cover"> */}
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-steel-400 font-semibold tracking-[0.3em] uppercase text-xs mb-6">
            글로벌 제조 산업의 리더
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
            산업의 미래를 <br />
            <span className="text-steel-400">혁신하다.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            ABC 글로벌은 전 세계 산업 변화를 주도하기 위해 
            세계 최고 수준의 제조 및 공급망 솔루션을 제공합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-steel-500 text-white font-semibold rounded-full hover:bg-steel-400 transition-all transform hover:scale-105">
              사업영역 보기
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
              비전 영상 보기
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 cursor-pointer flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2 font-bold">스크롤</span>
        <ChevronDown className="w-5 h-5 font-bold" />
      </motion.div>
    </section>
  );
}
