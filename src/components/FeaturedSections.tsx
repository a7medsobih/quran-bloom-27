import { BookOpen, Users, GraduationCap, Video, FileText, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentsLearning from "@/assets/students-learning.jpg";

const FeaturedSections = () => {
  const sections = [
    {
      id: 1,
      title: "قسم الأطفال",
      description: "برامج مخصصة للأطفال من سن 5-12 سنة مع أساليب تعليمية ممتعة ومحفزة",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10",
      students: "1,200 طفل",
      teachers: "45 محفظة",
      image: studentsLearning
    },
    {
      id: 2,
      title: "قسم الكبار",
      description: "برامج متخصصة للبالغين مع مرونة في الأوقات ومراعاة الظروف الخاصة",
      icon: GraduationCap,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      students: "800 دارس",
      teachers: "32 محفظ",
      image: studentsLearning
    },
    {
      id: 3,
      title: "قسم الإجازات",
      description: "برنامج منح الإجازات في القراءات المختلفة للحفاظ المتقنين",
      icon: BookOpen,
      color: "text-success",
      bgColor: "bg-success/10",
      students: "150 مجاز",
      teachers: "15 شيخ",
      image: studentsLearning
    }
  ];

  const library = [
    {
      title: "مقاطع صوتية",
      count: "2,500+ تسجيل",
      icon: Headphones,
      color: "text-primary"
    },
    {
      title: "فيديوهات تعليمية",
      count: "1,800+ فيديو",
      icon: Video,
      color: "text-secondary"
    },
    {
      title: "نصوص تعليمية",
      count: "5,200+ مادة",
      icon: FileText,
      color: "text-success"
    }
  ];

  return (
    <section id="sections" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Sections Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-amiri text-primary mb-4">
            أقسام الجمعية
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            برامج متنوعة ومتخصصة تناسب جميع الفئات العمرية والمستويات التعليمية
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div 
                key={section.id}
                className="card-islamic group hover:shadow-strong cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <div className={`absolute top-4 right-4 w-12 h-12 ${section.bgColor} rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${section.color}`} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-amiri text-foreground mb-3 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {section.description}
                </p>

                <div className="flex justify-between items-center mb-6 text-sm">
                  <div className={`${section.color} font-semibold`}>
                    {section.students}
                  </div>
                  <div className="text-muted-foreground">
                    {section.teachers}
                  </div>
                </div>

                <Button className="w-full btn-primary group-hover:scale-105 transition-transform">
                  تفاصيل القسم
                </Button>
              </div>
            );
          })}
        </div>

        {/* Library Section */}
        <div className="bg-gradient-card rounded-3xl p-8 border shadow-soft">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-amiri text-primary mb-4">
              المكتبة الرقمية
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              مجموعة شاملة من المواد التعليمية المصممة لدعم رحلة التعلم والحفظ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {library.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 bg-background rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-muted to-accent/20 rounded-full flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className={`${item.color} font-medium`}>
                    {item.count}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="btn-secondary">
              استكشف المكتبة
            </Button>
          </div>
        </div>

        {/* Latest Content Preview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-amiri text-primary mb-4">
              أحدث المحتوى
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Latest Blogs */}
            <div className="card-islamic">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2 space-x-reverse">
                <FileText className="w-5 h-5 text-primary" />
                <span>أحدث المدونات</span>
              </h4>
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <h5 className="font-semibold text-foreground mb-2">فضل حفظ القرآن الكريم</h5>
                  <p className="text-sm text-muted-foreground">مقال شامل عن الأجر العظيم لحافظ كتاب الله...</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <h5 className="font-semibold text-foreground mb-2">قصص نجاح ملهمة</h5>
                  <p className="text-sm text-muted-foreground">تجارب حقيقية لطلابنا في رحلة الحفظ...</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                عرض جميع المدونات
              </Button>
            </div>

            {/* Latest Videos */}
            <div className="card-islamic">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2 space-x-reverse">
                <Video className="w-5 h-5 text-secondary" />
                <span>أحدث الفيديوهات</span>
              </h4>
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <h5 className="font-semibold text-foreground mb-2">تلاوة خاشعة - سورة الفجر</h5>
                  <p className="text-sm text-muted-foreground">بصوت أحد طلابنا المتميزين...</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <h5 className="font-semibold text-foreground mb-2">ورشة طرق الحفظ الفعالة</h5>
                  <p className="text-sm text-muted-foreground">تقنيات مثبتة علمياً لتسهيل الحفظ...</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                عرض جميع الفيديوهات
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSections;