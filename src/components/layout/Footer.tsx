import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white/70 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Info */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold text-white tracking-tighter mb-6">
            ABC<span className="text-steel-400">GLOBAL</span>
          </h3>
          <p className="text-sm leading-relaxed mb-6">
            ABC 글로벌은 혁신과 기술, 그리고 지속 가능한 우수성에 대한 헌신을 통해 글로벌 제조 산업을 선도합니다.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">기업정보</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#company" className="hover:text-white transition-colors">회사소개</a></li>
            <li><a href="#history" className="hover:text-white transition-colors">연혁</a></li>
            <li><a href="#vision" className="hover:text-white transition-colors">비전 및 미션</a></li>
            <li><a href="#esg" className="hover:text-white transition-colors">ESG 경영</a></li>
          </ul>
        </div>

        {/* Business Areas */}
        <div>
          <h4 className="text-white font-semibold mb-6">사업분야</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#manufacturing" className="hover:text-white transition-colors">정밀 제조</a></li>
            <li><a href="#trading" className="hover:text-white transition-colors">글로벌 무역</a></li>
            <li><a href="#technology" className="hover:text-white transition-colors">핵심 기술</a></li>
            <li><a href="#supply-chain" className="hover:text-white transition-colors">공급망 솔루션</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-semibold mb-6">고객문의</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <span>서울특별시 강남구 테헤란로 123, ABC 글로벌 빌딩</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>02-1234-5678</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>contact@abcglobal.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; {currentYear} ABC 글로벌. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-white font-bold">개인정보처리방침</a>
          <a href="/terms" className="hover:text-white">이용약관</a>
        </div>
      </div>
    </footer>
  );
}
