import { motion } from 'motion/react';
import { Factory, Globe, Cpu, Truck, ArrowRight } from 'lucide-react';

const businesses = [
  {
    id: 'manufacturing',
    title: '정밀 제조',
    description: '복잡한 산업 부품 생산을 위한 정밀 엔지니어링 및 자동화 생산 라인을 운영합니다.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1565172349727-408c1a21daf3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'trading',
    title: '글로벌 무역',
    description: '전 세계 시장을 연결하는 전략적인 국제 무역 및 자원 관리 서비스를 제공합니다.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'technology',
    title: '핵심 기술',
    description: '스마트 공장 환경을 위해 차세대 IoT 및 AI 솔루션을 개발하고 적용합니다.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'supply-chain',
    title: '공급망 솔루션',
    description: '전 세계를 연결하는 원활한 배송을 위해 엔드투엔드 물류 및 창고 최적화를 지원합니다.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8619623c4a?auto=format&fit=crop&q=80&w=800',
  },
];

export default function BusinessArea() {
  return (
    <section id="business" className="py-32 bg-navy-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-steel-400 tracking-[0.2em] uppercase mb-6">
              사업 영역
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              차별화된 기술력으로 <br />
              다양한 글로벌 산업을 선도합니다.
            </h3>
          </div>
          <p className="text-white/50 text-lg max-w-sm mt-8 md:mt-0">
            우리는 오늘날의 가장 복잡한 산업 과제를 해결하기 위해 
            통합 솔루션을 전문적으로 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businesses.map((biz, idx) => (
            <motion.div
              key={biz.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col h-[500px] hover:border-steel-500/50 transition-colors"
            >
              {/* Background on Hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <img src={biz.image} alt={biz.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-steel-500/10 rounded-xl flex items-center justify-center mb-10 group-hover:bg-steel-500 transition-colors">
                  <biz.icon className="w-8 h-8 text-steel-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-steel-400 transition-colors">{biz.title}</h4>
                <p className="text-white/40 group-hover:text-white/70 transition-colors leading-relaxed">
                  {biz.description}
                </p>
              </div>

              <div className="mt-auto relative z-10">
                <a href={`#${biz.id}`} className="flex items-center space-x-2 text-steel-400 font-semibold text-sm group-hover:text-white transition-colors uppercase tracking-widest">
                  <span>자세히 보기</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
