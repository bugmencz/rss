// ================== SOURCES BY REGION ==================
const sourcesByRegion = {
  "Russia 🪆": [
    { name: "Interfax", url: "https://www.interfax.ru/rss.asp", type: "xml" },
    { name: "Lenta", url: "https://lenta.ru/rss/news", type: "xml" },
    { name: "Moskovskij komsomolets", url: "https://www.mk.ru/rss/index.xml", type: "xml" },
    { name: "The Moscow Times", url: "https://www.themoscowtimes.com/rss/news", type: "xml" },
    { name: "RIA Novosti", url: "https://ria.ru/export/rss2/archive/index.xml", type: "xml" },
    { name: "Vedomosti", url: "https://www.vedomosti.ru/rss/news.xml", type: "xml" },
  ],
  "Ukraine 🌻": [
    { name: "LB", url: "https://lb.ua/rss/ukr/news.xml", type: "xml" },
    { name: "Radio Svoboda (UA)", url: "https://www.radiosvoboda.org/api/zrqitl-vomx-tpeoumq", type: "xml" },
    { name: "RBK Ukrajina", url: "https://www.rbc.ua/static/rss/all.ukr.rss.xml", type: "xml" },
    { name: "Ukrainska Pravda", url: "https://www.pravda.com.ua/rss/", type: "xml" },
  ],
  "USA 🍔": [
    { name: "AP", url: "https://feedx.net/rss/ap.xml", type: "xml" },
    { name: "CBS", url: "https://www.cbsnews.com/latest/rss/politics", type: "xml" },
    { name: "Fox", url: "https://moxie.foxnews.com/google-publisher/us.xml", type: "xml" },
    { name: "NBC", url: "https://feeds.nbcnews.com/feeds/topstories", type: "xml" },
    { name: "NPR", url: "https://feeds.npr.org/1001/rss.xml", type: "xml" },
    { name: "Politico", url: "https://www.politico.com/rss/politicopicks.xml", type: "xml" },
    { name: "Real Clear Politics", url: "https://www.realclearpolitics.com/index.xml", type: "xml" },
    { name: "The New York Times", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", type: "xml" },
  ],
  "Middle East 🐪": [
    { name: "Al Jazeera", url: "https://rss2json.com/api.json?rss_url=https://www.aljazeera.com/xml/rss/all.xml", type: "json" },
    { name: "The Jerusalem Post", url: "https://www.jpost.com/rss/rssfeedsfrontpage.aspx", type: "xml" },
    { name: "The Times of Israel", url: "https://www.timesofisrael.com/feed/", type: "xml" },
  ],
 "UK 🫖": [
   { name: "BBC News", url: "https://rss2json.com/api.json?rss_url=http://feeds.bbci.co.uk/news/rss.xml", type: "json" },
   { name: "The Daily Telegraph", url: "https://www.telegraph.co.uk/rss.xml", type: "xml" },
   { name: "The Daily Mail", url: "https://www.dailymail.co.uk/articles.rss", type: "xml" },
  { name: "The Guardian", url: "https://www.theguardian.com/uk/rss", type: "xml" },
   { name: "Sky News", url: "https://feeds.skynews.com/feeds/rss/home.xml", type: "xml" }, 
  ],
  "Czechia 🍺": [
    { name: "Aktuálně", url: "https://www.aktualne.cz/rss/", type: "xml" },
    { name: "ČTK", url: "https://www.ceskenoviny.cz/sluzby/rss/svet.php", type: "xml" },
    { name: "Deník N", url: "https://denikn.cz/feed", type: "xml" },
    { name: "iDNES", url: "https://servis.idnes.cz/rss.aspx", type: "xml" },
  ],

  "Europe ✈️": [
    { name: "Euronews", url: "https://www.euronews.com/rss?level=theme&name=news", type: "xml" },
  ],
    "Germany 🥨": [
    { name: "Bild", url: "https://www.bild.de/feed/alles.xml", type: "xml" },
    { name: "Deutsche Welle", url: "https://rss.dw.com/rdf/rss-en-all", type: "xml" },
    { name: "Die Welt",  url: "https://www.welt.de/feeds/latest.rss", type: "xml" },
    { name: "Focus", url: "https://www.focus.de/rss", type: "xml" },
    { name: "Frankfurter Allgemeine Zeitung", url: "https://www.faz.net/rss/aktuell", type: "xml" },
    { name: "n-tv", url: "https://www.n-tv.de/politik/rss", type: "xml" },
    { name: "Spiegel", url: "https://www.spiegel.de/schlagzeilen/index.rss", type: "xml" },
    { name: "Stern",  url: "https://www.stern.de/feed/standard/all/", type: "xml" },
    { name: "Süddeutsche Zeitung", url: "https://rss.sueddeutsche.de/rss/Alles", type: "xml" },
    { name: "Tagesschau (ARD)", url: "https://www.tagesschau.de/infoservices/alle-meldungen-100~rss2.xml", type: "xml" },
    { name: "Die Zeit", url: "https://newsfeed.zeit.de/index", type: "xml" },
  ],
"France 🗼": [
    { name: "Le Figaro", url: "https://www.lefigaro.fr/rss/figaro_actualites.xml", type: "xml" },
    { name: "Le Monde", url: "https://www.lemonde.fr/rss/une.xml", type: "xml" },
  ],

  "Italy 🍕": [
    { name: "ANSA", url: "https://www.ansa.it/sito/ansait_rss.xml", type: "xml" },
    { name: "Corriere della Sera", url: "https://www.corriere.it/rss/homepage.xml", type: "xml" },
    { name: "Il Sole 24 Ore", url: "https://www.ilsole24ore.com/rss/italia.xml", type: "xml" },
  ],
  "Austria 🏔️": [
    { name: "Der Standard", url: "https://www.derstandard.at/rss", type: "xml" },
    { name: "Kleine Zeitung", url: "https://www.kleinezeitung.at/rss", type: "xml" },
  ],
  "Poland 🥟": [
    { name: "Fakt", url: "https://www.fakt.pl/rss", type: "xml" },
    { name: "TVN24", url: "https://www.tvn24.pl/najnowsze.xml", type: "xml" },
  ],
  "Slovakia 🐑": [
    { name: "Pravda", url: "https://spravy.pravda.sk/rss.xml", type: "xml" },
    { name: "SME", url: "https://www.sme.sk/rss", type: "xml" },
  ],
 };

// ================== GLOBAL VARIABLES ==================
let allArticles = [];
let selectedSource = null;

const sourceList = document.getElementById('sourceList');
const articleList = document.getElementById('articleList');
const searchInput = document.getElementById('searchInput');
const allSourcesBtn = document.getElementById('allSourcesBtn');

// ================== LOAD SOURCES ==================
Object.keys(sourcesByRegion).forEach(region => {
  const regionHeader = document.createElement('li');
  regionHeader.textContent = region;
  regionHeader.classList.add('region-header');
  sourceList.appendChild(regionHeader);

  sourcesByRegion[region]
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(src => {
      const li = document.createElement('li');
      li.textContent = src.name;
      li.classList.add('source-item');
      li.addEventListener('click', () => {
        selectedSource = src;
        fetchAndDisplayArticles([src]);
      });
      sourceList.appendChild(li);
    });
});

// ================== ALL SOURCES BUTTON ==================
allSourcesBtn.addEventListener('click', () => {
  selectedSource = null;
  const allSources = Object.values(sourcesByRegion).flat();
  fetchAndDisplayArticles(allSources);
  searchInput.value = '';
});

// ================== INITIAL LOAD ==================
window.onload = () => {
  const allSources = Object.values(sourcesByRegion).flat();
  fetchAndDisplayArticles(allSources);
};

// ================== SEARCH ==================
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  const keywords = query.split(',').map(kw => kw.trim()).filter(kw => kw.length > 0);

  const filteredArticles = allArticles.filter(article => {
    const text = (article.title + " " + article.description).toLowerCase();
    return keywords.every(kw => text.includes(kw));
  });

  displayArticles(filteredArticles);
});

// ================== FETCH & DISPLAY ==================
async function fetchAndDisplayArticles(sourceArray) {
  articleList.innerHTML = 'Loading...';

  const fetches = sourceArray.map(async (src) => {
    try {
      if (src.type === "json") {
        const res = await fetch(src.url);
        const data = await res.json();
        return data.items || [];
      } else {
        const xmlString = await fetchXML(src.url);
        return parseRSSXML(xmlString);
      }
    } catch (err) {
      console.error(`Error loading feed: ${src.name}`, err);
      return [];
    }
  });

  try {
    const results = await Promise.all(fetches);
    allArticles = results.flat();
    displayArticles(allArticles);
  } catch (err) {
    console.error("Error fetching feeds", err);
    articleList.innerHTML = '<li>Error loading feeds.</li>';
  }
}

// ================== FETCH XML WITH FALLBACK ==================
async function fetchXML(url) {
  try {
    const res = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent(url));
    const data = await res.json();
    if (data && data.contents) return data.contents;
    throw new Error("AllOrigins returned no content");
  } catch (err) {
    console.warn("AllOrigins failed, trying corsproxy.io", err);
    const res = await fetch("https://corsproxy.io/?" + encodeURIComponent(url));
    return await res.text();
  }
}

// ================== DISPLAY ARTICLES ==================
function displayArticles(articles) {
  articleList.innerHTML = '';
  articles.forEach(article => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${article.link}" target="_blank">${article.title}</a>`;
    articleList.appendChild(li);
  });
}

// ================== PARSE XML ==================
function parseRSSXML(xmlString) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlString, "application/xml");
  const items = xml.querySelectorAll("item");
  const articles = [];

  items.forEach(item => {
    const title = item.querySelector("title")?.textContent || "No title";
    const link = item.querySelector("link")?.textContent || "#";
    const description = item.querySelector("description")?.textContent || "";
    articles.push({ title, link, description });
  });

  return articles;
}











