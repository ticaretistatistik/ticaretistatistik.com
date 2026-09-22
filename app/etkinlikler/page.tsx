import { Metadata } from "next";
import { Calendar, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Etkinlikler",
  description: "İstatistik Topluluğu güncel etkinlik takvimi ve planlanan organizasyonlar.",
};

export default function EventsPage() {
  return (
    <div className="bg-slate-50 dark:bg-background min-h-screen">
      <div className="container-custom pt-12 pb-24">
        
        {/* Header */}
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center bg-brand-accent/10 p-3 rounded-2xl mb-6">
            <Calendar className="w-8 h-8 text-brand-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-ink dark:text-white mb-6">
            Etkinlik Takvimi
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Eğitimler, paneller, atölyeler ve teknik gezilerimizi aşağıdaki takvimden takip edebilir, doğrudan kendi Google takviminize ekleyebilirsiniz.
          </p>
        </header>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start">
            <div className="bg-brand-accent/10 p-3 rounded-lg mr-4 text-brand-accent shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-brand-ink dark:text-white mb-1">Düzenli Buluşmalar</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Her hafta Çarşamba günleri saat 15:00'da bölüm hocalarımız eşliğinde değerlendirme toplantıları yapıyoruz.</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start">
            <div className="bg-brand-accent/10 p-3 rounded-lg mr-4 text-brand-accent shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-brand-ink dark:text-white mb-1">Konum</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Fiziksel etkinliklerimiz ağırlıklı olarak İstanbul Ticaret Üniversitesi Sütlüce Yerleşkesi C Blok'ta gerçekleşmektedir.</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start">
            <div className="bg-brand-accent/10 p-3 rounded-lg mr-4 text-brand-accent shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-brand-ink dark:text-white mb-1">Kayıt & Katılım</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Etkinliklerimize katılmak için sosyal medya hesaplarımızdan duyurduğumuz formları doldurmanız yeterlidir.</p>
            </div>
          </div>
        </div>

        {/* Google Calendar Iframe Wrapper */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="aspect-[4/3] md:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950/50">
            {/* 
              Kullanıcı kendi Google Calendar Iframe URL'sini src kısmına eklemelidir. 
              Örnek (Placeholder) URL verilmiştir.
            */}
            <iframe 
              src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FIstanbul&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&mode=MONTH&src=ZW4udHVya2lzaCNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%230B8043" 
              style={{ borderWidth: 0, width: "100%", height: "100%" }} 
              frameBorder="0" 
              scrolling="no"
              title="İstatistik Topluluğu Etkinlik Takvimi"
            ></iframe>
          </div>
        </div>
        
      </div>
    </div>
  );
}
