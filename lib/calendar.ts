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
  const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
  const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

  if (!API_KEY || !CALENDAR_ID) {
    console.warn("⚠️ GOOGLE_CALENDAR_API_KEY veya GOOGLE_CALENDAR_ID .env dosyasında bulunamadı.");
    return [];
  }

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error("Google Calendar API hatası:", res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    const items = data.items || [];
    const now = new Date();

    const events: CalendarEvent[] = items.map((item: any) => {
      const startDateTime = item.start.dateTime || item.start.date;
      const endDateTime = item.end.dateTime || item.end.date;
      
      const startDate = new Date(startDateTime);
      const isPast = startDate < now;

      const formatterDate = new Intl.DateTimeFormat('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' });
      const formatterTime = new Intl.DateTimeFormat('tr-TR', { hour: '2-digit', minute: '2-digit' });

      let timeString = "Tüm Gün";
      if (item.start.dateTime && item.end.dateTime) {
        timeString = `${formatterTime.format(startDate)} - ${formatterTime.format(new Date(endDateTime))}`;
      }

      // We extract category from the title if it exists like "[Atölye] Python"
      let category = "Etkinlik";
      let title = item.summary || "İsimsiz Etkinlik";
      
      const match = title.match(/^\[(.*?)\]\s*(.*)/);
      if (match) {
        category = match[1];
        title = match[2];
      }

      return {
        id: item.id,
        title: title,
        date: formatterDate.format(startDate),
        time: timeString,
        location: item.location || "Konum belirtilmedi",
        description: item.description || "Bu etkinlik için bir açıklama girilmemiş.",
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
