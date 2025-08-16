import { useState, useEffect } from "react";
import { Users, BookOpen, Award, MapPin, Target, Clock, Star, Heart } from "lucide-react";

const LiveStats = () => {
  const [stats, setStats] = useState([
    { id: 1, value: 0, target: 5247, label: "طالب وطالبة", icon: Users, color: "text-primary" },
    { id: 2, value: 0, target: 1856, label: "حافظ وحافظة", icon: Award, color: "text-success" },
    { id: 3, value: 0, target: 89420, label: "آية محفوظة", icon: BookOpen, color: "text-secondary" },
    { id: 4, value: 0, target: 67, label: "فرع", icon: MapPin, color: "text-accent-dark" },
    { id: 5, value: 0, target: 287, label: "محفظ ومحفظة", icon: Star, color: "text-primary" },
    { id: 6, value: 0, target: 12, label: "سنة من العطاء", icon: Clock, color: "text-success" },
    { id: 7, value: 0, target: 15623, label: "جزء محفوظ", icon: Target, color: "text-secondary" },
    { id: 8, value: 0, target: 2394, label: "متبرع كريم", icon: Heart, color: "text-accent-dark" },
  ]);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      stats.forEach((stat, index) => {
        const increment = stat.target / steps;
        let currentValue = 0;

        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= stat.target) {
            currentValue = stat.target;
            clearInterval(timer);
          }

          setStats(prevStats => 
            prevStats.map(s => 
              s.id === stat.id ? { ...s, value: Math.floor(currentValue) } : s
            )
          );
        }, stepTime);
      });
    };

    // Trigger animation when component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('live-stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="live-stats" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-amiri text-primary mb-4">
            إحصائيات حية
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أرقام تتحدث عن نجاحنا في خدمة كتاب الله وتحقيق رسالتنا النبيلة
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id}
                className="card-islamic text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-background to-muted flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300`}>
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`stats-counter ${stat.color}`}>
                    {stat.value.toLocaleString('ar-SA')}
                    {stat.id === 7 && '+'}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {stat.label}
                </h3>
                <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${
                      stat.color.includes('primary') ? 'from-primary to-primary-light' :
                      stat.color.includes('success') ? 'from-success to-success-light' :
                      stat.color.includes('secondary') ? 'from-secondary to-secondary-light' :
                      'from-accent to-accent-light'
                    } transition-all duration-2000 ease-out`}
                    style={{ width: `${(stat.value / stat.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Update Indicator */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-success/10 text-success px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">الإحصائيات محدثة لحظياً</span>
          </div>
        </div>

        {/* Interactive Progress Display */}
        <div className="mt-16 p-8 bg-gradient-card rounded-3xl border shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-amiri text-primary mb-2">
              إنجاز اليوم
            </h3>
            <p className="text-muted-foreground">
              متابعة يومية لتقدم الطلاب في حفظ كتاب الله
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold font-amiri text-secondary mb-2">247</div>
              <div className="text-muted-foreground">آية جديدة اليوم</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-amiri text-success mb-2">18</div>
              <div className="text-muted-foreground">طالب أتم حفظ سورة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-amiri text-primary mb-2">3</div>
              <div className="text-muted-foreground">حافظ جديد</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;