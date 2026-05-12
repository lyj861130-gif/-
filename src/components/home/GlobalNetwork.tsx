import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const locations = [
  { id: 1, name: '서울', x: '82%', y: '35%', type: 'Global HQ' },
  { id: 2, name: '싱가포르', x: '78%', y: '65%', type: '물류 거점' },
  { id: 3, name: '베를린', x: '50%', y: '30%', type: '기술 센터' },
  { id: 4, name: '뉴욕', x: '25%', y: '35%', type: '글로벌 무역' },
  { id: 5, name: '상파울루', x: '35%', y: '75%', type: '제조 공장' },
];

export default function GlobalNetwork() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-steel-500 tracking-[0.2em] uppercase mb-6">
              글로벌 네트워크
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy-900 leading-tight tracking-tighter">
              시장을 연결하고, <br />
              <span className="text-steel-400">지평을 확장합니다.</span>
            </h3>
          </motion.div>
        </div>

        <div className="relative aspect-[2/1] w-full max-w-5xl mx-auto group">
          {/* World Map Placeholder Background */}
          <div className="absolute inset-0 bg-navy-900/5 rounded-3xl overflow-hidden border border-navy-900/10">
            {/* Simple Grid/Dot pattern for a techy map look */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ backgroundImage: 'radial-gradient(circle, #0A192F 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          </div>

          {/* Locations */}
          {locations.map((loc) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * loc.id, type: 'spring' }}
              style={{ left: loc.x, top: loc.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group/pin"
            >
              <div className="relative">
                <div className="w-4 h-4 bg-steel-500 rounded-full animate-ping absolute inset-0" />
                <div className="w-4 h-4 bg-navy-900 rounded-full relative z-10 border-2 border-white shadow-lg group-hover/pin:bg-steel-500 transition-colors" />
                
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-4 py-2 bg-white shadow-2xl rounded-lg opacity-0 group-hover/pin:opacity-100 transition-all pointer-events-none whitespace-nowrap z-20 border border-navy-900/5 flex items-center space-x-2">
                  <MapPin className="w-3 h-3 text-steel-500" />
                  <div>
                    <div className="text-xs font-bold text-navy-900">{loc.name}</div>
                    <div className="text-[10px] text-navy-900/40 font-bold uppercase">{loc.type}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Visual paths (abstract) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <motion.path
              d="M 82% 35% Q 80% 50% 78% 65%"
              fill="none"
              stroke="#4682B4"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
            />
            <motion.path
              d="M 82% 35% Q 65% 25% 50% 30%"
              fill="none"
              stroke="#4682B4"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
            />
            <motion.path
              d="M 50% 30% Q 37% 30% 25% 35%"
              fill="none"
              stroke="#4682B4"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
            />
          </svg>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-navy-900/5 pt-12">
          {locations.map((loc) => (
            <div key={loc.id} className="text-center md:text-left">
              <div className="text-sm font-bold text-navy-900 mb-1">{loc.name}</div>
              <div className="text-[10px] text-navy-900/40 font-bold uppercase tracking-widest">{loc.type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
