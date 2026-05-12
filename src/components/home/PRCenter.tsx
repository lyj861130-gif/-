import { motion } from 'motion/react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const news = [
  {
    id: '1',
    title: 'ABC 글로벌, 동남아시아 반도체 생산 시설 확충 발표',
    category: '뉴스',
    date: '2024.05.10',
    link: '#',
  },
  {
    id: '2',
    title: '2023 지속가능성 보고서: RE100 100% 달성 성과',
    category: '공지사항',
    date: '2024.04.25',
    link: '#',
  },
  {
    id: '3',
    title: '글로벌 물류 선도 기업과 전략적 파트너십 체결',
    category: '뉴스',
    date: '2024.04.15',
    link: '#',
  },
];

export default function PRCenter() {
  return (
    <section id="pr" className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold text-steel-500 tracking-[0.2em] uppercase mb-6">
              인사이트 및 업데이트
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy-900 leading-tight tracking-tighter">
              ABC 글로벌 홍보센터의 <br />
              <span className="text-steel-400">새로운 소식을 만나보세요.</span>
            </h3>
          </div>
          <a href="/news" className="group flex items-center space-x-3 text-sm font-bold text-navy-900 uppercase tracking-widest border-b-2 border-navy-900 pb-2 hover:text-steel-500 hover:border-steel-500 transition-all">
            <span>소식 전체 보기</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-navy-900/5 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-8">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  item.category === 'Notice' 
                    ? 'bg-navy-900 text-white' 
                    : 'bg-steel-500/10 text-steel-500'
                }`}>
                  {item.category}
                </span>
                <div className="flex items-center text-navy-900/30 text-xs font-medium">
                  <Calendar className="w-3 h-3 mr-2" />
                  {item.date}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-navy-900 leading-snug mb-8 group-hover:text-steel-500 transition-colors">
                {item.title}
              </h4>

              <div className="mt-auto pt-6 border-t border-navy-900/5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-navy-900/40">Read Full Article</span>
                <div className="w-8 h-8 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-steel-500 group-hover:text-white transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
