import { Calendar, Clock, MapPin, Users, ArrowLeft, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NewsEvents = () => {
  const news = [
    {
      id: 1,
      title: "انطلاق مسابقة حفظ القرآن الكريم الكبرى",
      excerpt: "تعلن الجمعية عن انطلاق المسابقة السنوية الكبرى لحفظ القرآن الكريم بجوائز قيمة تصل إلى مليون ريال",
      date: "2024-03-15",
      category: "مسابقات",
      image: "/api/placeholder/400/250",
      urgent: true
    },
    {
      id: 2,
      title: "افتتاح فرع جديد في حي النفل",
      excerpt: "يسر الجمعية أن تعلن عن افتتاح الفرع الجديد رقم 68 في حي النفل لخدمة أهالي المنطقة",
      date: "2024-03-12",
      category: "إعلانات",
      image: "/api/placeholder/400/250",
      urgent: false
    },
    {
      id: 3,
      title: "ورشة تدريبية للمحفظين الجدد",
      excerpt: "دورة تدريبية شاملة للمحفظين الجدد تتضمن أحدث طرق التحفيظ والتعامل مع الطلاب",
      date: "2024-03-10",
      category: "تدريب",
      image: "/api/placeholder/400/250",
      urgent: false
    }
  ];

  const events = [
    {
      id: 1,
      title: "محاضرة: آداب تلاوة القرآن الكريم",
      description: "محاضرة علمية قيمة عن آداب التلاوة والاستماع لكتاب الله العزيز",
      date: "2024-03-20",
      time: "20:00",
      location: "المسجد الكبير - قاعة المحاضرات",
      attendees: 250,
      speaker: "الشيخ محمد العثيمين",
      type: "محاضرة",
      status: "مفتوح للتسجيل"
    },
    {
      id: 2,
      title: "حفل تكريم الحفاظ الجدد",
      description: "حفل بهيج لتكريم الطلاب الذين أتموا حفظ كتاب الله هذا الفصل",
      date: "2024-03-25",
      time: "16:00",
      location: "مركز الجمعية الرئيسي",
      attendees: 500,
      speaker: "إدارة الجمعية",
      type: "حفل",
      status: "قريباً"
    },
    {
      id: 3,
      title: "دورة تجويد متقدمة",
      description: "دورة مكثفة في علم التجويد للطلاب المتقدمين والمحفظين",
      date: "2024-04-01",
      time: "19:00",
      location: "فرع الملك عبدالعزيز",
      attendees: 80,
      speaker: "الشيخ أحمد الحذيفي",
      type: "دورة",
      status: "مفتوح للتسجيل"
    },
    {
      id: 4,
      title: "مسابقة الأسرة القرآنية",
      description: "مسابقة عائلية ممتعة تجمع بين أفراد الأسرة في حفظ ومراجعة القرآن",
      date: "2024-04-10",
      time: "17:30",
      location: "متعدد الفروع",
      attendees: 200,
      speaker: "فريق المسابقات",
      type: "مسابقة",
      status: "قريباً"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-amiri text-primary mb-4">
            الأخبار والفعاليات
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ابق على اطلاع بآخر أخبار الجمعية والفعاليات القادمة
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold font-amiri text-primary">أحدث الأخبار</h3>
              <Button variant="outline" size="sm">
                جميع الأخبار
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
            </div>

            <div className="space-y-6">
              {news.map((item) => (
                <article 
                  key={item.id}
                  className="card-islamic hover:shadow-medium transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-2xl font-amiri">
                        {item.id}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 space-x-reverse mb-2">
                        <Badge 
                          variant={item.category === "مسابقات" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {item.category}
                        </Badge>
                        {item.urgent && (
                          <Badge variant="destructive" className="text-xs animate-pulse">
                            عاجل
                          </Badge>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {item.excerpt}
                      </p>
                      
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-4 h-4 ml-1" />
                        {formatDate(item.date)}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Notification Settings */}
            <div className="card-islamic bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-1">الإشعارات الذكية</h4>
                  <p className="text-sm text-muted-foreground">
                    احصل على تحديثات فورية عن أخبار الجمعية والفعاليات
                  </p>
                </div>
                <Button className="btn-success">
                  فعّل الإشعارات
                </Button>
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold font-amiri text-primary">الفعاليات القادمة</h3>
              <Button variant="outline" size="sm">
                جميع الفعاليات
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
            </div>

            <div className="space-y-6">
              {events.map((event) => (
                <div 
                  key={event.id}
                  className="card-islamic hover:shadow-medium transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Badge 
                      variant={
                        event.type === "محاضرة" ? "default" :
                        event.type === "حفل" ? "secondary" :
                        event.type === "دورة" ? "outline" :
                        "destructive"
                      }
                    >
                      {event.type}
                    </Badge>
                    <Badge 
                      variant={event.status === "مفتوح للتسجيل" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {event.status}
                    </Badge>
                  </div>

                  <h4 className="text-lg font-bold text-foreground mb-2 hover:text-primary transition-colors">
                    {event.title}
                  </h4>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 ml-2" />
                      {formatDate(event.date)}
                      <Clock className="w-4 h-4 mr-4 ml-2" />
                      {event.time}
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 ml-2" />
                      {event.location}
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 ml-2" />
                      {event.attendees} مقعد متاح
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm">
                      <span className="text-muted-foreground">المحاضر: </span>
                      <span className="font-semibold text-foreground">{event.speaker}</span>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className={
                        event.status === "مفتوح للتسجيل" 
                          ? "btn-primary" 
                          : "btn-secondary"
                      }
                      disabled={event.status !== "مفتوح للتسجيل"}
                    >
                      {event.status === "مفتوح للتسجيل" ? "سجل الآن" : "قريباً"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Events Calendar Widget */}
            <div className="card-islamic bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h4 className="font-bold text-foreground mb-4 text-center">تقويم الفعاليات</h4>
              <div className="grid grid-cols-7 gap-1 text-center text-xs mb-4">
                {['س', 'ج', 'خ', 'أ', 'ث', 'إ', 'ح'].map((day, index) => (
                  <div key={index} className="p-2 font-semibold text-muted-foreground">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => (
                  <div 
                    key={i} 
                    className={`p-2 rounded ${
                      [5, 12, 19, 26].includes(i) 
                        ? 'bg-primary text-primary-foreground font-bold' 
                        : 'hover:bg-muted/50 cursor-pointer'
                    }`}
                  >
                    {i > 6 && i < 32 ? i - 6 : ''}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" size="sm" className="w-full">
                  عرض التقويم الكامل
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;