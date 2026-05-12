import { motion } from 'motion/react';

export default function CompanyIntro() {
  return (
    <section id="company" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-steel-500 tracking-[0.2em] uppercase mb-6">
                ABC 글로벌 소개
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-navy-900 leading-tight mb-8">
                글로벌 제조의 탁월함, <br />
                그 이상의 가치를 창조합니다.
              </h3>
              <div className="space-y-6 text-navy-900/70 leading-relaxed max-w-2xl text-lg">
                <p>
                  산업 생산의 혁신을 목표로 설립된 ABC 글로벌은 
                  전 세계 50개국 이상의 고객에게 솔루션을 제공하는 글로벌 기업으로 성장했습니다. 
                  품질과 기술적 발전에 대한 우리의 약속은 변함없이 이어지고 있습니다.
                </p>
                <p>
                  우리는 단순히 제품을 만드는 것에 그치지 않습니다. 
                  끊임없이 변화하는 글로벌 시장에서 기업이 성공할 수 있도록 미래 지향적인 솔루션을 구축합니다. 
                  최첨단 시설과 글로벌 물류 네트워크를 통해 가치 사슬의 모든 단계에서 효율성을 보장합니다.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-navy-900/10">
                <div>
                  <div className="text-3xl font-bold text-navy-900 mb-1">50+</div>
                  <div className="text-xs text-navy-900/50 uppercase tracking-wider font-bold">진출 국가</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-900 mb-1">2,000+</div>
                  <div className="text-xs text-navy-900/50 uppercase tracking-wider font-bold">임직원</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-900 mb-1">30년</div>
                  <div className="text-xs text-navy-900/50 uppercase tracking-wider font-bold">기업 역사</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              {/* Main Image */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5f9c1739?auto=format&fit=crop&q=80&w=1000"
                  alt="Industrial Plant"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Accent elements */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-steel-500 rounded-2xl -z-10 opacity-20" />
              <div className="absolute -top-6 -right-6 w-1/2 aspect-video bg-navy-900/5 backdrop-blur-sm border border-navy-900/10 p-4 rounded-xl hidden sm:block">
                <div className="text-[10px] text-navy-900/40 uppercase font-bold mb-2">Internal Tech Log</div>
                <div className="space-y-1">
                  <div className="h-1 w-full bg-navy-900/20 rounded" />
                  <div className="h-1 w-2/3 bg-navy-900/20 rounded" />
                  <div className="h-1 w-3/4 bg-navy-900/20 rounded" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
