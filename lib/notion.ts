import { Client } from "@notionhq/client";

// Notion istemcisini başlat. NOTION_API_KEY çevresel değişkenine ihtiyaç duyar.
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export interface NotionEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isUpcoming: boolean;
}

export async function getEvents(): Promise<NotionEvent[]> {
  const databaseId = process.env.NOTION_EVENTS_DATABASE_ID;
  
  if (!databaseId || !process.env.NOTION_API_KEY) {
    console.warn("NOTION_API_KEY veya NOTION_EVENTS_DATABASE_ID ayarlanmamış. Varsayılan (boş) etkinlikler dönülüyor.");
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    return response.results.map((page: any) => {
      const properties = page.properties;
      
      // Notion tablolarındaki kolon isimleri (Örn: "Name", "Description", "Location", "Date")
      const title = properties.Name?.title?.[0]?.plain_text || "İsimsiz Etkinlik";
      const description = properties.Description?.rich_text?.[0]?.plain_text || "";
      const location = properties.Location?.rich_text?.[0]?.plain_text || properties.Location?.select?.name || "Belirtilmedi";
      
      const dateObj = properties.Date?.date;
      const startDate = dateObj?.start ? new Date(dateObj.start) : new Date();
      
      // Tarih formatlama
      const dateString = startDate.toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' });
      
      // Saat formatlama
      let timeString = startDate.toLocaleTimeString("tr-TR", { hour: '2-digit', minute:'2-digit' });
      if (dateObj?.end) {
        timeString += " - " + new Date(dateObj.end).toLocaleTimeString("tr-TR", { hour: '2-digit', minute:'2-digit' });
      }
      
      return {
        id: page.id,
        title,
        date: dateString,
        time: timeString !== "00:00" ? timeString : "Saat belirtilmedi",
        location,
        description,
        isUpcoming: startDate > new Date(),
      };
    });
  } catch (error) {
    console.error("Notion API Hatası:", error);
    return [];
  }
}
