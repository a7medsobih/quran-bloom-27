import { Heart, Users, Target, TrendingUp, Gift, Star, Award, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const DonorsSection = () => {
  const topDonors = [
    { name: "مؤسسة الخير للتنمية", amount: "500,000", type: "مؤسسة", level: "ذهبي", impact: "50 طالب" },
    { name: "عبدالله محمد السالم", amount: "250,000", type: "فرد", level: "فضي", impact: "25 طالب" },
    { name: "شركة النور للاستثمار", amount: "200,000", type: "شركة", level: "فضي", impact: "20 طالب" },
    { name: "صندوق الخير المجتمعي", amount: "150,000", type: "صندوق", level: "برونزي", impact: "15 طالب" },
  ];

  const projects = [
    {
      id: 1,
      title: "كفالة معلم لمدة سنة",
      description: "ساهم في راتب محفظ متخصص لمدة عام كامل",
      target: 120000,
      current: 87500,
      currency: "ريال",
      beneficiaries: "200 طالب",
      timeLeft: "45 يوم",
      category: "تعليم"
    },
    {
      id: 2,
      title: "تجهيز فصل دراسي جديد",
      description: "تجهيز فصل بالمستلزمات التعليمية والتقنيات الحديثة",
      target: 50000,
      current: 35000,
      currency: "ريال",
      beneficiaries: "30 طالب",
      timeLeft: "20 يوم",
      category: "بنية تحتية"
    },
    {
      id: 3,
      title: "برنامج الحقيبة التعليمية",
      description: "توفير حقائب تعليمية للطلاب المحتاجين تحتوي على مصحف وأدوات",
      target: 25000,
      current: 18750,
      currency: "ريال",
      beneficiaries: "100 طالب",
      timeLeft: "30 يوم",
      category: "مساعدات"
    }
  ];

  const donationOptions = [
    { amount: 100, description: "كفالة طالب لشهر واحد", icon: Users },
    { amount: 500, description: "راتب محفظ لأسبوع واحد", icon: Star },
    { amount: 1000, description: "تجهيز مكتبة صغيرة", icon: Gift },
    { amount: 5000, description: "كفالة فصل دراسي لشهر", icon: Award },
  ];

  const impactStats = [
    { label: "إجمالي التبرعات", value: "2.5M", unit: "ريال", icon: Coins, color: "text-success" },
    { label: "المتبرعين النشطين", value: "1,247", unit: "متبرع", icon: Heart, color: "text-primary" },
    { label: "المشاريع المكتملة", value: "23", unit: "مشروع", icon: Target, color: "text-secondary" },
    { label: "الطلاب المستفيدين", value: "3,456", unit: "طالب", icon: TrendingUp, color: "text-accent-dark" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-amiri text-primary mb-4">
            المتبرعون والداعمون
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            شكراً لكل من ساهم في دعم رسالتنا النبيلة في تحفيظ كتاب الله الكريم
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="card-islamic text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-background to-muted rounded-full flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300">
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold font-amiri mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.unit}</div>
                <h3 className="text-lg font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
                  {stat.label}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Top Donors Recognition */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold font-amiri text-primary text-center">
              شكر وتقدير للمتبرعين
            </h3>

            <div className="space-y-4">
              {topDonors.map((donor, index) => (
                <div 
                  key={index}
                  className="card-islamic hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        donor.level === "ذهبي" ? "bg-gradient-to-br from-yellow-400 to-yellow-600" :
                        donor.level === "فضي" ? "bg-gradient-to-br from-gray-300 to-gray-500" :
                        "bg-gradient-to-br from-orange-400 to-orange-600"
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{donor.name}</h4>
                        <div className="flex items-center space-x-2 space-x-reverse text-sm">
                          <Badge variant="outline">{donor.type}</Badge>
                          <Badge 
                            className={
                              donor.level === "ذهبي" ? "bg-yellow-100 text-yellow-800" :
                              donor.level === "فضي" ? "bg-gray-100 text-gray-800" :
                              "bg-orange-100 text-orange-800"
                            }
                          >
                            {donor.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-xl font-bold text-success">
                        {donor.amount} ر.س
                      </div>
                      <div className="text-sm text-muted-foreground">
                        أثر: {donor.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recognition Message */}
            <div className="card-islamic bg-gradient-to-br from-success/10 to-success/5 border-success/20 text-center">
              <Heart className="w-12 h-12 text-success mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">
                جزاكم الله خيراً
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                بفضل تبرعاتكم الكريمة، تمكنا من تحفيظ آلاف الطلاب كتاب الله الكريم 
                وتوفير بيئة تعليمية متميزة. نسأل الله أن يجعل هذا العمل في ميزان حسناتكم.
              </p>
            </div>
          </div>

          {/* Active Projects & Donation Options */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold font-amiri text-primary text-center">
              المشاريع الحالية
            </h3>

            <div className="space-y-6">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="card-islamic hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline">{project.category}</Badge>
                    <Badge variant="secondary" className="text-xs">
                      {project.timeLeft} متبقي
                    </Badge>
                  </div>

                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">التقدم</span>
                      <span className="font-semibold">
                        {project.current.toLocaleString()} / {project.target.toLocaleString()} {project.currency}
                      </span>
                    </div>
                    <Progress value={(project.current / project.target) * 100} />
                    <div className="flex justify-between text-xs mt-2">
                      <span className="text-success font-semibold">
                        {Math.round((project.current / project.target) * 100)}% مكتمل
                      </span>
                      <span className="text-muted-foreground">
                        المستفيدين: {project.beneficiaries}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full btn-success">
                    تبرع للمشروع
                  </Button>
                </div>
              ))}
            </div>

            {/* Quick Donation Options */}
            <div className="card-islamic bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h4 className="text-xl font-bold text-foreground mb-6 text-center">
                تبرع سريع
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {donationOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <div 
                      key={index}
                      className="p-4 bg-background rounded-xl border border-border hover:border-primary cursor-pointer transition-all duration-300 hover:shadow-soft text-center group"
                    >
                      <IconComponent className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl font-bold text-primary mb-1">
                        {option.amount} ر.س
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {option.description}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center space-y-3">
                <Button className="btn-success w-full">
                  <Heart className="w-4 h-4 ml-2" />
                  تبرع الآن
                </Button>
                <Button variant="outline" className="w-full">
                  مبلغ مخصص
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Impact Visualization */}
        <div className="mt-16 card-islamic">
          <h3 className="text-2xl font-bold font-amiri text-primary text-center mb-8">
            أثر تبرعاتكم
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success-light rounded-full flex items-center justify-center mx-auto">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">3,456 طالب</h4>
              <p className="text-muted-foreground">استفادوا من برامج الجمعية</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">1,856 حافظ</h4>
              <p className="text-muted-foreground">أتموا حفظ كتاب الله</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mx-auto">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">67 فرع</h4>
              <p className="text-muted-foreground">يخدم جميع أنحاء المنطقة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorsSection;