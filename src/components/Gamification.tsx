import { useState } from "react";
import { Trophy, Star, Target, Medal, Crown, Zap, Gift, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Gamification = () => {
  const [activeTab, setActiveTab] = useState("leaderboard");

  const topStudents = [
    { 
      rank: 1, 
      name: "محمد عبدالله", 
      verses: 2847, 
      level: "حافظ متقن", 
      badge: "ذهبي",
      points: 15420,
      avatar: "م"
    },
    { 
      rank: 2, 
      name: "فاطمة أحمد", 
      verses: 2534, 
      level: "حافظة مجتهدة", 
      badge: "فضي",
      points: 14210,
      avatar: "ف"
    },
    { 
      rank: 3, 
      name: "عبدالرحمن سالم", 
      verses: 2398, 
      level: "حافظ نشيط", 
      badge: "برونزي",
      points: 13890,
      avatar: "ع"
    },
    { 
      rank: 4, 
      name: "عائشة محمد", 
      verses: 2156, 
      level: "حافظة متميزة", 
      badge: "ذهبي",
      points: 12740,
      avatar: "ع"
    },
    { 
      rank: 5, 
      name: "يوسف إبراهيم", 
      verses: 1987, 
      level: "حافظ صاعد", 
      badge: "فضي",
      points: 11930,
      avatar: "ي"
    }
  ];

  const badges = [
    { name: "حافظ الفاتحة", icon: Star, color: "text-success", earned: true },
    { name: "حافظ عمّ", icon: Trophy, color: "text-primary", earned: true },
    { name: "حافظ تبارك", icon: Medal, color: "text-secondary", earned: true },
    { name: "حافظ الجزء الأول", icon: Crown, color: "text-accent-dark", earned: false },
    { name: "المثابر", icon: Target, color: "text-success", earned: true },
    { name: "المبكر", icon: Zap, color: "text-primary", earned: false },
  ];

  const challenges = [
    {
      id: 1,
      title: "تحدي الأسبوع",
      description: "احفظ 3 صفحات هذا الأسبوع",
      progress: 67,
      deadline: "3 أيام متبقية",
      reward: "500 نقطة + شارة المثابر",
      difficulty: "متوسط"
    },
    {
      id: 2,
      title: "تحدي المراجعة",
      description: "راجع 10 صفحات محفوظة",
      progress: 30,
      deadline: "5 أيام متبقية",
      reward: "300 نقطة",
      difficulty: "سهل"
    },
    {
      id: 3,
      title: "تحدي الجماعة",
      description: "احفظ مع زملائك في المجموعة",
      progress: 85,
      deadline: "يوم واحد متبقي",
      reward: "800 نقطة + شارة الفريق",
      difficulty: "صعب"
    }
  ];

  const achievements = [
    { title: "إتمام حفظ جزء عمّ", date: "منذ أسبوع", points: 1000 },
    { title: "حضور 30 يوم متتالي", date: "منذ أسبوعين", points: 750 },
    { title: "مساعدة زميل في الحفظ", date: "منذ شهر", points: 500 },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-amiri text-primary mb-4">
            لوحة التحديات والإنجازات
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            تحفيز وتشجيع من خلال التنافس الشريف والإنجازات المتميزة
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-card rounded-2xl p-2 max-w-2xl mx-auto shadow-soft">
          {[
            { id: "leaderboard", label: "لوحة الشرف", icon: Trophy },
            { id: "challenges", label: "التحديات", icon: Target },
            { id: "badges", label: "الشارات", icon: Medal },
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 space-x-reverse px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Leaderboard Tab */}
          {activeTab === "leaderboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Top 3 Podium */}
                <div className="lg:col-span-2">
                  <div className="card-islamic">
                    <h3 className="text-2xl font-bold font-amiri text-primary mb-6 text-center">
                      المراكز الأولى
                    </h3>
                    <div className="flex justify-center items-end space-x-8 space-x-reverse mb-8">
                      {topStudents.slice(0, 3).map((student, index) => (
                        <div key={student.rank} className={`text-center ${index === 1 ? 'order-1' : index === 0 ? 'order-2' : 'order-3'}`}>
                          <div className={`relative ${index === 1 ? 'mb-8' : index === 0 ? 'mb-4' : ''}`}>
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                              index === 1 ? 'from-success to-success-light' :
                              index === 0 ? 'from-secondary to-secondary-light' :
                              'from-accent to-accent-light'
                            } flex items-center justify-center text-white font-bold text-xl mb-3 mx-auto shadow-medium`}>
                              {student.avatar}
                            </div>
                            {index === 1 && <Crown className="w-8 h-8 text-success absolute -top-4 left-1/2 transform -translate-x-1/2" />}
                          </div>
                          <h4 className="font-bold text-foreground mb-1">{student.name}</h4>
                          <p className="text-sm text-primary font-semibold">{student.verses} آية</p>
                          <Badge variant={index === 1 ? "default" : "secondary"} className="mt-2">
                            {student.badge}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Current User Stats */}
                <div className="space-y-6">
                  <div className="card-islamic text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl mx-auto mb-4">
                      أ
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">أنت</h3>
                    <p className="text-muted-foreground mb-4">المرتبة #12</p>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">الآيات المحفوظة</span>
                        <span className="font-semibold text-primary">1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">النقاط</span>
                        <span className="font-semibold text-success">8,450</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">المستوى</span>
                        <span className="font-semibold text-secondary">طالب مجتهد</span>
                      </div>
                    </div>
                  </div>

                  <div className="card-islamic">
                    <h4 className="font-bold text-foreground mb-4">التقدم الأسبوعي</h4>
                    <Progress value={75} className="mb-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">15/20 صفحة</span>
                      <span className="text-primary font-semibold">75%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Leaderboard */}
              <div className="card-islamic">
                <h3 className="text-xl font-bold text-foreground mb-6">جميع المراتب</h3>
                <div className="space-y-4">
                  {topStudents.map((student) => (
                    <div key={student.rank} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          student.rank === 1 ? 'bg-success' :
                          student.rank === 2 ? 'bg-secondary' :
                          student.rank === 3 ? 'bg-accent-dark' :
                          'bg-muted-foreground'
                        }`}>
                          {student.rank}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{student.name}</h4>
                          <p className="text-sm text-muted-foreground">{student.level}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-primary">{student.verses} آية</div>
                        <div className="text-sm text-muted-foreground">{student.points} نقطة</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Challenges Tab */}
          {activeTab === "challenges" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-amiri text-primary">التحديات النشطة</h3>
                  {challenges.map((challenge) => (
                    <div key={challenge.id} className="card-islamic hover:shadow-medium transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-2">{challenge.title}</h4>
                          <p className="text-muted-foreground text-sm">{challenge.description}</p>
                        </div>
                        <Badge variant={challenge.difficulty === "سهل" ? "secondary" : challenge.difficulty === "متوسط" ? "default" : "destructive"}>
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">التقدم</span>
                          <span className="font-semibold">{challenge.progress}%</span>
                        </div>
                        <Progress value={challenge.progress} />
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-success font-semibold">{challenge.reward}</p>
                          <p className="text-xs text-muted-foreground">{challenge.deadline}</p>
                        </div>
                        <Button size="sm" className="btn-primary">
                          المشاركة
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-amiri text-primary">الإنجازات الأخيرة</h3>
                  <div className="card-islamic">
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-4 space-x-reverse p-4 bg-success/10 rounded-lg">
                          <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                            <Trophy className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground">{achievement.date}</p>
                          </div>
                          <div className="text-left">
                            <span className="font-bold text-success">+{achievement.points}</span>
                            <p className="text-xs text-muted-foreground">نقطة</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weekly Challenge Stats */}
                  <div className="card-islamic">
                    <h4 className="font-bold text-foreground mb-4">إحصائيات التحدي الأسبوعي</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">المشاركون</span>
                        <span className="font-semibold">1,247 طالب</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">المكتملون</span>
                        <span className="font-semibold text-success">342 طالب</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">معدل الإنجاز</span>
                        <span className="font-semibold text-primary">67%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Badges Tab */}
          {activeTab === "badges" && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold font-amiri text-primary mb-4">مجموعة الشارات</h3>
                <p className="text-muted-foreground">اكسب الشارات من خلال إنجازاتك في حفظ كتاب الله</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {badges.map((badge, index) => {
                  const IconComponent = badge.icon;
                  return (
                    <div 
                      key={index}
                      className={`card-islamic text-center transition-all duration-300 ${
                        badge.earned 
                          ? 'hover:shadow-medium hover:scale-105' 
                          : 'opacity-60 grayscale'
                      }`}
                    >
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        badge.earned 
                          ? 'bg-gradient-to-br from-background to-muted shadow-medium' 
                          : 'bg-muted'
                      }`}>
                        <IconComponent className={`w-10 h-10 ${badge.earned ? badge.color : 'text-muted-foreground'}`} />
                      </div>
                      <h4 className={`font-bold mb-2 ${badge.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {badge.name}
                      </h4>
                      {badge.earned ? (
                        <Badge className="bg-success text-success-foreground">
                          محقق
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          غير محقق
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Badge Progress */}
              <div className="card-islamic">
                <h4 className="text-xl font-bold text-foreground mb-6 text-center">تقدمك في الشارات</h4>
                <div className="max-w-md mx-auto">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">الشارات المحققة</span>
                    <span className="font-semibold">4 من 6</span>
                  </div>
                  <Progress value={67} className="mb-4" />
                  <div className="text-center text-sm text-muted-foreground">
                    شارتان متبقيتان للحصول على لقب "الحافظ المتميز"
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gamification;