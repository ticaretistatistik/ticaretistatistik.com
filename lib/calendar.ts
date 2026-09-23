import ical from 'node-ical';

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: "upcoming" | "past";
  category: string;
  rawDate: Date;
}

export async function getEvents(): Promise<CalendarEvent[]> {
  const ICAL_URL = process.env.GOOGLE_CALENDAR_ICAL_URL;

  if (!ICAL_URL) {
    console.warn("⚠️ GOOGLE_CALENDAR_ICAL_URL .env dosyasında bulunamadı.");
    return [];
  }

  try {
    // Fetch ical file with Next.js cache
    const res = await fetch(ICAL_URL, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error("iCal verisi alınırken hata:", res.status, res.statusText);
      return [];
    }

    const icsData = await res.text();
    const data = ical.parseICS(icsData);
    const now = new Date();
    
    let expandedEvents: any[] = [];
    const horizon = new Date(now.getTime() + 365 * 24 * 3600 * 1000); // +1 year
    const horizonPast = new Date(now.getTime() - 365 * 24 * 3600 * 1000); // -1 year

    for (const k in data) {
      if (data.hasOwnProperty(k)) {
        const ev = data[k];
        if (ev.type !== 'VEVENT') continue;

        if (ev.rrule) {
          let dates: Date[] = [];
          try {
            dates = ev.rrule.between(horizonPast, horizon, true);
          } catch (_) {
            dates = [];
          }
          if (dates.length === 0 && ev.start) dates = [ev.start];

          const duration = ev.end && ev.start ? new Date(ev.end).getTime() - new Date(ev.start).getTime() : 0;
          for (const d of dates) {
            const occStart = new Date(d);
            const occEnd = duration ? new Date(occStart.getTime() + duration) : null;
            expandedEvents.push({ ...ev, start: occStart, end: occEnd });
          }
        } else {
          expandedEvents.push(ev);
        }
      }
    }
    
    // Sort by start date ascending
    expandedEvents.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

    const events: CalendarEvent[] = expandedEvents.map((item: any) => {
      const startDate = new Date(item.start);
      const endDate = item.end ? new Date(item.end) : null;
      const isPast = startDate < now;

      const formatterDate = new Intl.DateTimeFormat('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' });
      const formatterTime = new Intl.DateTimeFormat('tr-TR', { hour: '2-digit', minute: '2-digit' });

      // node-ical handles all day events setting datetype to 'date' or just check hour
      const isAllDay = item.datetype === 'date' || (endDate && startDate.getHours() === 0 && endDate.getHours() === 0);
      
      let timeString = "Tüm Gün";
      if (!isAllDay && endDate) {
        timeString = `${formatterTime.format(startDate)} - ${formatterTime.format(endDate)}`;
      }

      let category = "Etkinlik";
      let title = item.summary || "İsimsiz Etkinlik";
      
      const match = title.match(/^\[(.*?)\]\s*(.*)/);
      if (match) {
        category = match[1];
        title = match[2];
      }

      // Format description: remove raw HTML and excessive whitespace
      let description = item.description || "Bu etkinlik için bir açıklama girilmemiş.";
      description = String(description).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

      return {
        id: item.uid + "-" + startDate.getTime(),
        title: title,
        date: formatterDate.format(startDate),
        time: timeString,
        location: item.location || "Konum belirtilmedi",
        description: description,
        status: isPast ? "past" : "upcoming",
        category: category,
        rawDate: startDate,
      };
    });

    return events;
  } catch (error) {
    console.error("Takvim verisi çekilirken hata oluştu:", error);
    return [];
  }
}
