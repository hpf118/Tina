const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const fa = require("react-icons/fa");

const OUT = path.join(__dirname, "assets");
fs.mkdirSync(OUT, { recursive: true });

// name -> [IconComponent, hexColor]
const NAVY = "#1F3864", STEEL = "#5B7699", RED = "#9E3B3B", WHITE = "#FFFFFF", GRAY = "#8A93A3";
const icons = {
  // white versions (for colored circles / dark backgrounds)
  "diagram-w": [fa.FaProjectDiagram, WHITE],
  "grid-w": [fa.FaThLarge, WHITE],
  "camera-w": [fa.FaCamera, WHITE],
  "route-w": [fa.FaRoute, WHITE],
  "branch-w": [fa.FaCodeBranch, WHITE],
  "sitemap-w": [fa.FaSitemap, WHITE],
  "matrix-w": [fa.FaBorderAll, WHITE],
  "columns-w": [fa.FaColumns, WHITE],
  "layers-w": [fa.FaLayerGroup, WHITE],
  "listol-w": [fa.FaListOl, WHITE],
  "balance-w": [fa.FaBalanceScale, WHITE],
  "check-w": [fa.FaCheck, WHITE],
  "times-w": [fa.FaTimes, WHITE],
  "image-w": [fa.FaImage, WHITE],
  "bullseye-w": [fa.FaBullseye, WHITE],
  "users-w": [fa.FaUsers, WHITE],
  "laptop-w": [fa.FaLaptop, WHITE],
  "comments-w": [fa.FaComments, WHITE],
  "chalkboard-w": [fa.FaChalkboardTeacher, WHITE],
  "handshake-w": [fa.FaHandshake, WHITE],
  "book-w": [fa.FaBookOpen, WHITE],
  "shield-w": [fa.FaShieldAlt, WHITE],
  "key-w": [fa.FaKey, WHITE],
  "database-w": [fa.FaDatabase, WHITE],
  "mobile-w": [fa.FaMobileAlt, WHITE],
  "compass-w": [fa.FaCompass, WHITE],
  // category-01 deep-dive additions
  "sync-w": [fa.FaSyncAlt, WHITE],
  "stream-w": [fa.FaStream, WHITE],
  "flag-w": [fa.FaFlagCheckered, WHITE],
  "filter-w": [fa.FaFilter, WHITE],
  "stairs-w": [fa.FaSignal, WHITE],
  "circles-w": [fa.FaDotCircle, WHITE],
  "share-w": [fa.FaShareAlt, WHITE],
  "cogs-w": [fa.FaCogs, WHITE],
  "fish-w": [fa.FaFish, WHITE],
  "road-w": [fa.FaRoad, WHITE],
  "mountain-w": [fa.FaMountain, WHITE],
  "calendar-w": [fa.FaCalendarAlt, WHITE],
  "user-w": [fa.FaUser, WHITE],
  "search-w": [fa.FaSearch, WHITE],
  "wrench-w": [fa.FaWrench, WHITE],
  "clipboard-w": [fa.FaClipboardList, WHITE],
  "rocket-w": [fa.FaRocket, WHITE],
  "chart-w": [fa.FaChartLine, WHITE],
  // category-02 deep-dive additions
  "font-w": [fa.FaFont, WHITE],
  "tag-w": [fa.FaTag, WHITE],
  "arrowsh-w": [fa.FaArrowsAltH, WHITE],
  "thlist-w": [fa.FaThList, WHITE],
  "inbox-w": [fa.FaInbox, WHITE],
  "shapes-w": [fa.FaShapes, WHITE],
  "thumbs-w": [fa.FaThumbsUp, WHITE],
  "exchange-w": [fa.FaExchangeAlt, WHITE],
  "globe-w": [fa.FaGlobe, WHITE],
  "building-w": [fa.FaBuilding, WHITE],
  "lock-w": [fa.FaLock, WHITE],
  "boxes-w": [fa.FaBoxes, WHITE],
  // colored versions (on light backgrounds)
  "lightbulb-navy": [fa.FaLightbulb, NAVY],
  "lightbulb-gray": [fa.FaLightbulb, GRAY],
  "image-gray": [fa.FaImage, "#B8BEC9"],
  "camera-gray": [fa.FaCamera, "#B8BEC9"],
  "arrowup-navy": [fa.FaLongArrowAltUp, NAVY],
  "check-navy": [fa.FaCheckCircle, NAVY],
  "times-red": [fa.FaTimesCircle, RED],
};

(async () => {
  for (const [name, [Icon, color]] of Object.entries(icons)) {
    const svg = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Icon, { color, size: 256 })
    );
    const buf = await sharp(Buffer.from(svg)).resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    fs.writeFileSync(path.join(OUT, name + ".png"), buf);
  }
  console.log("icons done:", Object.keys(icons).length);
})();
