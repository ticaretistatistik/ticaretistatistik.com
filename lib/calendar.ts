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
  const url = "https://calendar.google.com/calendar/ical/3358654a63a1e4c7d975799b72ab7f2ef78554d12243f928f8886012fa6ff271%40group.calendar.google.com/public/basic.ics";

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error("iCal fetch error:", res.status, res.statusText);
      return [];
    }
    const icalData = await res.text();
    const parsedData = ical.sync.parseICS(icalData);
    
    const now = new Date();
    const events: CalendarEvent[] = [];

    for (const key in parsedData) {
      const rawEvent = parsedData[key];
      if (!rawEvent || rawEvent.type !== 'VEVENT') continue;

      const event = rawEvent as any; // TypeScript hatalarını (event özelliği yok, vs.) önlemek için any cast yapıyoruz

      const startDate = new Date(event.start);
      const endDate = new Date(event.end);
      // We also check if end of the day is past so we show it as upcoming while it's ongoing
      const isPast = endDate < now;

      const formatterDate = new Intl.DateTimeFormat('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' });
      const formatterTime = new Intl.DateTimeFormat('tr-TR', { hour: '2-digit', minute: '2-digit' });

      // If datetype is 'date', it's usually a full day event
      let timeString = "Tüm Gün";
      if (event.datetype !== 'date' && event.start && event.end) {
        // Only format time if it actually has time, full day events start at 00:00
        timeString = `${formatterTime.format(startDate)} - ${formatterTime.format(endDate)}`;
      }

      let category = "Etkinlik";
      let title = event.summary || "İsimsiz Etkinlik";
      
      const match = typeof title === 'string' ? title.match(/^\[(.*?)\]\s*(.*)/) : null;
      if (match) {
        category = match[1];
        title = match[2];
      }

      let description = typeof event.description === 'string' ? event.description : "Bu etkinlik için bir açıklama girilmemiş.";
      if (typeof event.description === 'object' && event.description !== null && 'val' in event.description) {
        description = event.description.val || description;
      }

      events.push({
        id: event.uid || key,
        title: title,
        date: formatterDate.format(startDate),
        time: timeString,
        location: event.location || "Konum belirtilmedi",
        description: description,
        status: isPast ? "past" : "upcoming",
        category: category,
        rawDate: startDate,
      });
    }

    events.sort((a, b) => a.rawDate.getTime() - b.rawDate.getTime());

    return events;
  } catch (error) {
    console.error("Takvim verisi çekilirken hata oluştu:", error);
    return [];
  }
}
