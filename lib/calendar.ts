export interface GoogleCalendarEvent {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  location: string;
  description: string;
}

export async function getGoogleCalendarEvents(): Promise<GoogleCalendarEvent[]> {
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  
  if (!apiKey || !calendarId) {
    console.warn("GOOGLE_CALENDAR_API_KEY veya GOOGLE_CALENDAR_ID eksik.");
    return [];
  }
  
  // singleEvents=true ile tekrarlayan etkinlikleri tekil hale getiriyoruz
  // orderBy=startTime ile tarihe göre sıralıyoruz
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&singleEvents=true&orderBy=startTime`;
  
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();
    
    if (!data.items) return [];
    
    return data.items.map((item: any) => ({
      id: item.id,
      title: item.summary || "İsimsiz Etkinlik",
      startDate: new Date(item.start.dateTime || item.start.date),
      endDate: new Date(item.end.dateTime || item.end.date),
      location: item.location || "",
      description: item.description || "",
    }));
  } catch (error) {
    console.error("Google Calendar API Hatası:", error);
    return [];
  }
}
