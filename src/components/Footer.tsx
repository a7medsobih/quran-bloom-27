import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { label: "عن الجمعية", href: "#about" },
    { label: "الأقسام", href: "#sections" },
    { label: "المكتبة", href: "#library" },
    { label: "المدونات", href: "#blogs" },
    { label: "التواصل", href: "#contact" },
    { label: "الوظائف", href: "#careers" },
  ];

  const programs = [
    { label: "قسم الأطفال", href: "#children" },
    { label: "قسم الكبار", href: "#adults" },
    { label: "قسم الإجازات", href: "#ijazat" },
    { label: "التعليم عن بُعد", href: "#online" },
    { label: "البرامج الصيفية", href: "#summer" },
    { label: "التدريب التخصصي", href: "#training" },
  ];

  const resources = [
    { label: "مقاطع صوتية", href: "#audio" },
    { label: "فيديوهات تعليمية", href: "#videos" },
    { label: "نصوص تعليمية", href: "#texts" },
    { label: "تطبيق الجوال", href: "#app" },
    { label: "دليل المحفظ", href: "#guide" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 pattern-islamic opacity-10"></div>
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-primary-light/20 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold font-amiri mb-4">
                اشترك في نشرتنا الإخبارية
              </h3>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                احصل على آخر الأخبار والفعاليات والبرامج التعليمية الجديدة مباشرة في بريدك الإلكتروني
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="البريد الإلكتروني"
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-success focus:ring-success"
                />
                <Button className="btn-success whitespace-nowrap">
                  اشتراك
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Organization Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-4 space-x-reverse mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-success to-success-light rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl font-amiri">ق</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-amiri">بريده</h3>
                    <p className="text-primary-foreground/80 text-sm">جمعية تحفيظ القرآن الكريم</p>
                  </div>
                </div>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  نسعى لتحفيظ كتاب الله الكريم وتعليم علومه للجميع من خلال بيئة تعليمية متميزة وبرامج متنوعة تناسب جميع الأعمار.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <MapPin className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-primary-foreground/80">بريدة، منطقة القصيم، المملكة العربية السعودية</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Phone className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-primary-foreground/80" dir="ltr">+966 16 324 5678</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Mail className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-primary-foreground/80" dir="ltr">info@buraydah-quran.org</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Globe className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-primary-foreground/80" dir="ltr">www.buraydah-quran.org</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold font-amiri mb-6">روابط سريعة</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-success transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h4 className="text-lg font-bold font-amiri mb-6">البرامج</h4>
                <ul className="space-y-3">
                  {programs.map((program, index) => (
                    <li key={index}>
                      <a 
                        href={program.href}
                        className="text-primary-foreground/80 hover:text-success transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      >
                        {program.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-lg font-bold font-amiri mb-6">المكتبة والموارد</h4>
                <ul className="space-y-3 mb-6">
                  {resources.map((resource, index) => (
                    <li key={index}>
                      <a 
                        href={resource.href}
                        className="text-primary-foreground/80 hover:text-success transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      >
                        {resource.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Social Media */}
                <div>
                  <h5 className="font-semibold mb-4">تابعنا على</h5>
                  <div className="flex space-x-3 space-x-reverse">
                    {[
                      { Icon: Facebook, href: "#", color: "hover:text-blue-400" },
                      { Icon: Twitter, href: "#", color: "hover:text-blue-300" },
                      { Icon: Instagram, href: "#", color: "hover:text-pink-400" },
                      { Icon: Youtube, href: "#", color: "hover:text-red-400" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-primary-foreground/80 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                        aria-label={`رابط وسائل التواصل الاجتماعي ${index + 1}`}
                      >
                        <social.Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-light/20 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-primary-foreground/80 text-sm text-center md:text-right">
                <p>© 2024 جمعية تحفيظ القرآن الكريم - بريده. جميع الحقوق محفوظة.</p>
                <p className="mt-1">
                  مسجلة لدى وزارة الموارد البشرية والتنمية الاجتماعية برقم: 1234
                </p>
              </div>
              
              <div className="flex items-center space-x-6 space-x-reverse text-sm">
                <a href="#privacy" className="text-primary-foreground/80 hover:text-success transition-colors">
                  سياسة الخصوصية
                </a>
                <a href="#terms" className="text-primary-foreground/80 hover:text-success transition-colors">
                  الشروط والأحكام
                </a>
                <a href="#sitemap" className="text-primary-foreground/80 hover:text-success transition-colors">
                  خريطة الموقع
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 w-12 h-12 bg-success hover:bg-success-dark text-white rounded-full shadow-strong hover:shadow-glow transition-all duration-300 hover:scale-110 z-50"
        aria-label="العودة إلى الأعلى"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </button>
    </footer>
  );
};

export default Footer;