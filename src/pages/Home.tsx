import React from 'react';
import { motion } from 'framer-motion';

const songs = [
  { title: "الأطلال", youtube: "https://www.youtube.com/watch?v=Fj7n06s3B14" },
  { title: "إنت عمري", youtube: "https://www.youtube.com/watch?v=r7tUprUixxQ" },
  { title: "أمل حياتي", youtube: "https://www.youtube.com/watch?v=k_l3j8_t0j8" },
  { title: "ألف ليلة وليلة", youtube: "https://www.youtube.com/watch?v=d_x-d6I9U6s" },
];

const quotes = [
  "إن الفن رسالة، فإذا لم يصاحبها صدق المشاعر، فلا يمكن أن يطلق عليها فناً.",
  "لا شيء يمنحني السعادة أكثر من سماع تصفيق الجمهور، لأنه عندها أشعر أنهم فهموا ما أريد قوله.",
  "الغناء هو نبض القلب، وإذا خرج من القلب وصل إلى القلب."
];

const timelineEvents = [
  { year: "1898", event: "ولادة فاطمة إبراهيم السيد البلتاجي في طماي الزهايرة" },
  { year: "1920s", event: "بداية شهرتها في القاهرة بمساعدة من مشاهير الموسيقى" },
  { year: "1930s", event: "توقيع عقد مع إذاعة القاهرة وظهورها السينمائي" },
  { year: "1940s", event: "تكوين فرقتها الموسيقية الخاصة وتقديم روائع مثل 'أنت عمري'" },
  { year: "1950s", event: "لقب 'كوكب الشرق' وتألقها في الحفلات العالمية" },
  { year: "1967", event: "حفلاتها لدعم المجهود الحربي بعد نكسة يونيو" },
  { year: "1975", event: "وفاتها في القاهرة تاركة إرثًا فنيًا لا يموت" },
];

const galleryImages = [
  "https://upload.wikimedia.org/wikipedia/commons/e/ee/Umm_Kulthum_ca_1930s.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/07/Umm_Kulthum%2C_c._1935.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/1a/Umm_Kulthum_1940-1950s.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Umm_Kulthum%27s_statue_on_the_Island_of_the_Rose_Garden%2C_El-Mansura_2017.jpg/800px-Umm_Kulthum%27s_statue_on_the_Island_of_the_Rose_Garden%2C_El-Mansura_2017.jpg",
  "https://m.akhbarelyom.com/NewsFiles/2019/12/28/964348-1.jpg",
  "https://gate.ahram.org.eg/Media/News/2019/12/29/21_2019-637132104523789410-378.jpg"
];

const Section = ({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-16 px-4 md:px-8 ${className}`}>
    <div className="container mx-auto max-w-4xl">
      {children}
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="bg-background text-foreground scroll-smooth">
      {/* Hero Section */}
      <motion.header
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B] to-[#DAA520] opacity-70 z-0"></div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Umm_Kulthum_1960.jpg/1200px-Umm_Kulthum_1960.jpg"
          alt="أم كلثوم"
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        />
        <div className="relative z-10 p-4">
          <motion.h1
            className="text-6xl md:text-8xl font-black text-white drop-shadow-lg leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
          >
            أم كلثوم
          </motion.h1>
          <motion.p
            className="text-3xl md:text-4xl text-white mt-4 tracking-wider"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1, type: "spring", stiffness: 100 }}
          >
            كوكب الشرق
          </motion.p>
        </div>
      </motion.header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm shadow-lg py-4 transition-all duration-300">
        <div className="container mx-auto flex justify-center space-x-8 text-lg font-bold">
          <a href="#bio" className="hover:text-primary transition-colors">السيرة الذاتية</a>
          <a href="#songs" className="hover:text-primary transition-colors">أشهر الأغاني</a>
          <a href="#gallery" className="hover:text-primary transition-colors">معرض الصور</a>
          <a href="#quotes" className="hover:text-primary transition-colors">اقتباسات</a>
          <a href="#timeline" className="hover:text-primary transition-colors">التايملاين</a>
        </div>
      </nav>

      {/* Biography Section */}
      <Section id="bio" className="bg-gradient-to-br from-background to-secondary/10">
        <h2 className="text-5xl font-extrabold text-primary text-center mb-10 border-b-2 border-primary pb-4 inline-block w-auto mx-auto">السيرة الذاتية</h2>
        <p className="text-lg leading-relaxed text-center md:text-right mb-6 text-muted-foreground">
          فاطمة إبراهيم السيد البلتاجي (اسمها الحقيقي)، والمعروفة عالميًا بأم كلثوم، ولدت في قرية طماي الزهايرة بمحافظة الدقهلية بمصر في 31 ديسمبر 1898 (أو ربما 4 مايو 1904 حسب مصادر أخرى). تعتبر من أبرز عمالقة الطرب في القرن العشرين، ولقبت بـ "كوكب الشرق" و "سيدة الغناء العربي".
        </p>
        <p className="text-lg leading-relaxed text-center md:text-right text-muted-foreground">
          بدأت أم كلثوم مسيرتها الفنية في سن مبكرة، حيث كانت تغني في الموالد والاحتفالات الدينية. انتقلت إلى القاهرة في عشرينيات القرن الماضي، حيث بدأت شهرتها بالتصاعد بفضل صوتها القوي والمعبر وأدائها الفريد. تعاونت مع كبار الملحنين والشعراء العرب، مما أثرى مكتبتها الفنية بأعمال خالدة تجاوزت حدود الزمان والمكان.
        </p>
        <p className="text-lg leading-relaxed text-center md:text-right mt-6 text-muted-foreground">
          لم تكن أم كلثوم مجرد مطربة، بل كانت ظاهرة ثقافية واجتماعية. كان لحفلاتها الشهرية صدى واسع في العالم العربي، حيث كانت الجماهير تنتظرها بفارغ الصبر. تركت خلفها إرثًا فنيًا غنيًا لا يزال يلهم الأجيال حتى اليوم.
        </p>
      </Section>

      {/* Famous Songs Section */}
      <Section id="songs" className="bg-gradient-to-br from-secondary/10 to-background">
        <h2 className="text-5xl font-extrabold text-primary text-center mb-10 border-b-2 border-primary pb-4 inline-block w-auto mx-auto">أشهر الأغاني</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {songs.map((song, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-all duration-300 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">{song.title}</h3>
              <a
                href={song.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.307 2.831-1.664L21.102 12l-13.771 8.011c-1.302.643-2.831-.237-2.831-1.664V5.653Z" clipRule="evenodd" />
                </svg>
                استمع على يوتيوب
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Photo Gallery */}
      <Section id="gallery" className="bg-gradient-to-br from-background to-secondary/10">
        <h2 className="text-5xl font-extrabold text-primary text-center mb-10 border-b-2 border-primary pb-4 inline-block w-auto mx-auto">معرض الصور</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <img
                src={src}
                alt={`صورة أم كلثوم ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Quotes Section */}
      <Section id="quotes" className="bg-gradient-to-br from-secondary/10 to-background">
        <h2 className="text-5xl font-extrabold text-primary text-center mb-10 border-b-2 border-primary pb-4 inline-block w-auto mx-auto">اقتباسات خالدة</h2>
        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <motion.blockquote
              key={index}
              className="p-6 bg-secondary text-secondary-foreground rounded-lg shadow-md border-r-4 border-primary italic text-xl md:text-2xl text-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15 }}
            >
              &quot;{quote}&quot;
            </motion.blockquote>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section id="timeline" className="bg-gradient-to-br from-background to-secondary/10">
        <h2 className="text-5xl font-extrabold text-primary text-center mb-10 border-b-2 border-primary pb-4 inline-block w-auto mx-auto">محطات في حياتها</h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-primary h-full border right-1/2"></div>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">{event.year.slice(2)}</h1>
              </div>
              <div className="order-1 bg-secondary rounded-lg shadow-xl w-5/12 px-6 py-4 text-secondary-foreground border border-border">
                <h3 className="mb-3 font-bold text-xl text-primary-foreground">{event.year}</h3>
                <p className="text-md leading-snug tracking-wide text-current">{event.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground text-center p-8 mt-12">
        <p>&copy; {new Date().getFullYear()} موقع أم كلثوم التكريمي. جميع الحقوق محفوظة.</p>
        <p className="mt-2 text-sm">تم التصميم بـ <a href="https://www.google.com/search?q=AI+Builder" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">AI Builder</a></p>
      </footer>
    </div>
  );
}
