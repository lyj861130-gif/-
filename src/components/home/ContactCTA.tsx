import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Clock, ArrowRight, CheckCircle } from 'lucide-react';

export default function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-navy-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 p-12 md:p-20 bg-navy-800 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                준비되셨나요? <br />
                <span className="text-steel-400">함께 협력하십시오.</span>
              </h2>
              <p className="text-white/60 mb-12 max-w-sm">
                ABC 글로벌의 전문가들과 연결하여 귀사의 비즈니스를 혁신할 수 있는 
                최적의 솔루션을 찾아보십시오.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-steel-400" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-1">이메일 문의</div>
                    <div className="text-lg font-medium">inquiry@abcglobal.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-steel-400" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-1">전화 상담</div>
                    <div className="text-lg font-medium">02-1234-5678</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-steel-400" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-1">운영 시간</div>
                    <div className="text-lg font-medium">09:00 - 18:00 (월-금)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10 hidden lg:block">
              <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-white/30 uppercase">
                <span>신뢰할 수 있는 글로벌 파트너</span>
                <div className="w-8 h-[1px] bg-white/30" />
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 md:p-20 bg-white relative">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold text-navy-900 mb-8">상세 문의하기</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-navy-900/40 mb-3 ml-1">회사명</label>
                        <input 
                          required
                          type="text" 
                          placeholder="ABC 주식회사"
                          className="w-full px-5 py-4 bg-navy-900/5 border border-navy-900/5 rounded-xl focus:outline-none focus:border-steel-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-navy-900/40 mb-3 ml-1">담당자명</label>
                        <input 
                          required
                          type="text" 
                          placeholder="홍길동"
                          className="w-full px-5 py-4 bg-navy-900/5 border border-navy-900/5 rounded-xl focus:outline-none focus:border-steel-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-navy-900/40 mb-3 ml-1">이메일 주소</label>
                        <input 
                          required
                          type="email" 
                          placeholder="example@abc.com"
                          className="w-full px-5 py-4 bg-navy-900/5 border border-navy-900/5 rounded-xl focus:outline-none focus:border-steel-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-navy-900/40 mb-3 ml-1">연락처</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="010-0000-0000"
                          className="w-full px-5 py-4 bg-navy-900/5 border border-navy-900/5 rounded-xl focus:outline-none focus:border-steel-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-widest text-navy-900/40 mb-3 ml-1">문의 내용</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="프로젝트 요건 또는 문의하실 내용을 입력해 주세요..."
                        className="w-full px-5 py-4 bg-navy-900/5 border border-navy-900/5 rounded-xl focus:outline-none focus:border-steel-500 transition-colors resize-none"
                      />
                    </div>
                    
                    <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                      <p className="text-[11px] text-navy-900/40 leading-relaxed max-w-sm">
                        본 양식을 제출함으로써 귀하는 당사의 개인정보처리방침에 따른 
                        정보 수집 및 활용에 동의하게 됩니다.
                      </p>
                      <button 
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full md:w-auto px-10 py-5 bg-navy-900 text-white font-bold rounded-full flex items-center justify-center space-x-3 hover:bg-steel-500 transition-all hover:shadow-xl disabled:opacity-50"
                      >
                        <span>{isSubmitting ? '전송 중...' : '문의 제출하기'}</span>
                        {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-navy-900 mb-4">문의가 접수되었습니다</h3>
                  <p className="text-navy-900/60 max-w-sm mx-auto mb-8">
                    ABC 글로벌에 관심을 가져주셔서 감사합니다. 
                    검토 후 영업일 기준 24시간 이내에 답변해 드리겠습니다.
                  </p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="text-sm font-bold text-steel-500 uppercase tracking-widest border-b-2 border-steel-500 pb-1"
                  >
                    추가 문의하기
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
