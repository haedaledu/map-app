"use strict";

const continents = [
  { name: "북아메리카", color: "#77b99a", polygons: [
    [[-168,65],[-154,71],[-140,70],[-132,60],[-126,54],[-124,48],[-117,32],[-111,28],[-106,23],[-98,18],[-91,18],[-87,21],[-83,25],[-80,30],[-77,35],[-75,43],[-68,47],[-61,52],[-58,60],[-65,66],[-81,71],[-97,74],[-111,72],[-125,73],[-140,70],[-153,72],[-168,65]],
    [[-90,15],[-86,13],[-83,10],[-81,8],[-78,9],[-77,12],[-80,15],[-84,17],[-88,17],[-90,15]],
    [[-52,60],[-45,59],[-40,64],[-43,69],[-50,72],[-57,69],[-58,64],[-52,60]]
  ]},
  { name: "남아메리카", color: "#83ba8c", polygons: [
    [[-81,12],[-73,10],[-66,11],[-60,8],[-53,5],[-49,0],[-47,-7],[-42,-13],[-38,-20],[-42,-27],[-48,-30],[-51,-38],[-56,-44],[-63,-51],[-69,-55],[-73,-49],[-75,-40],[-72,-31],[-77,-19],[-80,-7],[-81,2],[-81,12]]
  ]},
  { name: "유럽", color: "#9cc9a0", polygons: [
    [[-10,36],[-9,42],[-6,44],[-9,51],[-5,55],[-7,59],[-2,58],[2,51],[7,54],[12,55],[15,58],[22,57],[25,62],[31,65],[35,69],[42,68],[45,61],[39,55],[34,52],[30,46],[27,41],[23,38],[18,40],[13,45],[9,44],[5,43],[2,47],[-2,48],[-5,43],[-10,36]],
    [[-8,58],[-6,55],[-3,55],[-2,58],[-5,59],[-8,58]],
    [[12,46],[17,46],[20,42],[18,39],[14,40],[12,43],[12,46]]
  ]},
  { name: "아프리카", color: "#d0b779", polygons: [
    [[-17,37],[-5,35],[10,37],[21,33],[31,31],[34,24],[43,12],[50,11],[48,2],[42,-5],[40,-12],[35,-18],[32,-26],[27,-34],[18,-35],[15,-28],[11,-18],[5,-12],[-1,-7],[-8,2],[-13,12],[-17,22],[-17,30],[-17,37]],
    [[-17,15],[-8,16],[-2,13],[3,10],[8,13],[10,17],[5,20],[1,23],[-5,24],[-11,20],[-17,15]]
  ]},
  { name: "아시아", color: "#85b8a5", polygons: [
    [[30,70],[42,69],[55,72],[70,72],[84,74],[99,72],[113,74],[127,71],[140,69],[154,62],[164,58],[162,51],[151,48],[145,43],[137,42],[131,35],[124,32],[121,24],[115,19],[108,16],[104,10],[99,8],[93,8],[88,21],[81,25],[76,30],[71,29],[67,24],[61,25],[57,27],[52,26],[49,30],[43,34],[39,38],[34,42],[35,48],[31,54],[30,61],[30,70]],
    [[43,40],[47,40],[52,37],[55,33],[52,30],[48,29],[44,32],[43,36],[43,40]],
    [[95,22],[100,19],[105,16],[108,10],[106,5],[102,1],[99,6],[97,12],[95,17],[95,22]],
    [[129,32],[133,34],[136,38],[141,41],[145,44],[143,39],[139,35],[135,32],[131,31],[129,32]]
  ]},
  { name: "오세아니아", color: "#8fc6ad", polygons: [
    [[113,-11],[118,-14],[123,-16],[129,-15],[135,-17],[140,-17],[146,-19],[151,-24],[154,-29],[151,-35],[146,-39],[139,-38],[134,-34],[128,-33],[123,-29],[116,-25],[113,-19],[113,-11]],
    [[130,-12],[135,-11],[137,-7],[134,-5],[131,-7],[130,-12]],
    [[166,-34],[173,-38],[177,-43],[174,-47],[169,-45],[166,-40],[166,-34]],
    [[-180,-17],[-174,-15],[-170,-17],[-172,-22],[-177,-22],[-180,-17]]
  ]}
];

const landmarks = [
  { country:"대한민국", name:"경복궁", detail:"서울 · 아시아", continent:"아시아", lon:126.977, lat:37.579, icon:"⌂" },
  { country:"일본", name:"도쿄 타워", detail:"도쿄 · 아시아", continent:"아시아", lon:139.746, lat:35.658, icon:"⌁" },
  { country:"중국", name:"만리장성", detail:"베이징 · 아시아", continent:"아시아", lon:116.57, lat:40.43, icon:"⌁" },
  { country:"인도", name:"타지마할", detail:"아그라 · 아시아", continent:"아시아", lon:78.042, lat:27.175, icon:"◇" },
  { country:"싱가포르", name:"마리나 베이 샌즈", detail:"싱가포르 · 아시아", continent:"아시아", lon:103.86, lat:1.283, icon:"⌂" },
  { country:"아랍에미리트", name:"부르즈 할리파", detail:"두바이 · 아시아", continent:"아시아", lon:55.274, lat:25.197, icon:"⌁" },
  { country:"프랑스", name:"에펠탑", detail:"파리 · 유럽", continent:"유럽", lon:2.295, lat:48.858, icon:"⌁" },
  { country:"이탈리아", name:"콜로세움", detail:"로마 · 유럽", continent:"유럽", lon:12.492, lat:41.89, icon:"◉" },
  { country:"그리스", name:"파르테논 신전", detail:"아테네 · 유럽", continent:"유럽", lon:23.726, lat:37.972, icon:"⌂" },
  { country:"아이슬란드", name:"할그림스키르캬", detail:"레이캬비크 · 유럽", continent:"유럽", lon:-21.927, lat:64.142, icon:"⌂" },
  { country:"이집트", name:"기자의 대피라미드", detail:"기자 · 아프리카", continent:"아프리카", lon:31.134, lat:29.979, icon:"△" },
  { country:"탄자니아", name:"킬리만자로", detail:"킬리만자로 · 아프리카", continent:"아프리카", lon:37.355, lat:-3.067, icon:"△" },
  { country:"미국", name:"자유의 여신상", detail:"뉴욕 · 북아메리카", continent:"북아메리카", lon:-74.044, lat:40.689, icon:"⌁" },
  { country:"미국", name:"그랜드 캐니언", detail:"애리조나 · 북아메리카", continent:"북아메리카", lon:-112.113, lat:36.107, icon:"⌁" },
  { country:"멕시코", name:"치첸이트사", detail:"유카탄 · 북아메리카", continent:"북아메리카", lon:-88.568, lat:20.684, icon:"△" },
  { country:"브라질", name:"구세주 그리스도상", detail:"리우데자네이루 · 남아메리카", continent:"남아메리카", lon:-43.21, lat:-22.952, icon:"⌁" },
  { country:"페루", name:"마추픽추", detail:"쿠스코 · 남아메리카", continent:"남아메리카", lon:-72.545, lat:-13.163, icon:"⌂" },
  { country:"호주", name:"시드니 오페라 하우스", detail:"시드니 · 오세아니아", continent:"오세아니아", lon:151.215, lat:-33.857, icon:"⌂" }
];

const canvas = document.getElementById("globe");
const context = canvas.getContext("2d");
const welcome = document.getElementById("welcome");
const explorer = document.getElementById("explorer");
const searchInput = document.getElementById("search-input");
const landmarkList = document.getElementById("landmark-list");
const resultCount = document.getElementById("result-count");
const zoomLabel = document.getElementById("zoom-label");
const hint = document.getElementById("globe-hint");
const viewCoordinates = document.getElementById("view-coordinates");
const radians = Math.PI / 180;
const initialAngle = Math.PI / 2;
const state = { angle:initialAngle, tilt:0, zoom:1, activeContinent:"all", query:"", selected:null, dragging:false, pointer:null, width:0, height:0, pixelRatio:1 };

function visibleLandmarks() {
  const query = state.query.trim().toLocaleLowerCase("ko");
  return landmarks.filter((place) => (state.activeContinent === "all" || place.continent === state.activeContinent)
    && (!query || `${place.country} ${place.name} ${place.detail} ${place.continent}`.toLocaleLowerCase("ko").includes(query)));
}

function renderLandmarks() {
  const places = visibleLandmarks();
  resultCount.textContent = places.length ? String(places.length).padStart(2, "0") : "00";
  landmarkList.replaceChildren();
  if (!places.length) {
    const empty = document.createElement("p");
    empty.className = "empty-results";
    empty.textContent = "검색 결과가 없어요. 다른 나라나 장소를 찾아보세요.";
    landmarkList.append(empty);
    drawGlobe();
    return;
  }
  places.forEach((place, index) => {
    const button = document.createElement("button");
    button.className = `landmark-card${state.selected === place ? " is-selected" : ""}`;
    button.type = "button";
    button.setAttribute("aria-label", `${place.country} ${place.name}, 지구에서 보기`);
    button.innerHTML = `<span class="landmark-number">${String(index + 1).padStart(2, "0")}</span><span><span class="landmark-name"></span><span class="landmark-place"></span></span><span class="landmark-symbol">${place.icon}</span>`;
    button.querySelector(".landmark-name").textContent = `${place.country} · ${place.name}`;
    button.querySelector(".landmark-place").textContent = place.detail;
    button.addEventListener("click", () => focusLandmark(place));
    landmarkList.append(button);
  });
  drawGlobe();
}

function rotatePoint(lon, lat) {
  const longitude = lon * radians;
  const latitude = lat * radians;
  const cosLatitude = Math.cos(latitude);
  const x = cosLatitude * Math.cos(longitude);
  const y = Math.sin(latitude);
  const z = cosLatitude * Math.sin(longitude);
  const cosAngle = Math.cos(state.angle);
  const sinAngle = Math.sin(state.angle);
  const turnedX = x * cosAngle - z * sinAngle;
  const turnedZ = x * sinAngle + z * cosAngle;
  const cosTilt = Math.cos(state.tilt);
  const sinTilt = Math.sin(state.tilt);
  return { x:turnedX, y:y * cosTilt - turnedZ * sinTilt, z:y * sinTilt + turnedZ * cosTilt };
}

function project(lon, lat, centerX, centerY, radius) {
  const point = rotatePoint(lon, lat);
  return { x:centerX + point.x * radius, y:centerY - point.y * radius, z:point.z };
}

function drawGridLine(points, centerX, centerY, radius) {
  context.beginPath();
  let drawing = false;
  for (const [lon, lat] of points) {
    const point = project(lon, lat, centerX, centerY, radius);
    if (point.z > 0) {
      if (!drawing) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
      drawing = true;
    } else drawing = false;
  }
  context.stroke();
}

function drawPolygon(polygon, centerX, centerY, radius, color) {
  const points = polygon.map(([lon, lat]) => rotatePoint(lon, lat));
  const clipped = [];
  for (let i = 0; i < points.length; i += 1) {
    const current = points[i];
    const next = points[(i + 1) % points.length];
    const currentVisible = current.z >= 0;
    const nextVisible = next.z >= 0;
    if (currentVisible) clipped.push(current);
    if (currentVisible !== nextVisible) {
      const ratio = current.z / (current.z - next.z);
      clipped.push({ x:current.x + (next.x - current.x) * ratio, y:current.y + (next.y - current.y) * ratio, z:0 });
    }
  }
  if (clipped.length < 3) return;
  context.beginPath();
  clipped.forEach((point, index) => {
    const x = centerX + point.x * radius;
    const y = centerY - point.y * radius;
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  });
  context.closePath();
  context.fillStyle = color;
  context.fill();
  context.strokeStyle = "rgba(216,235,211,.34)";
  context.lineWidth = Math.max(.65, radius / 490);
  context.stroke();
}

function drawGlobe() {
  if (!context || !state.width || !state.height || explorer.hidden) return;
  const { width, height, pixelRatio } = state;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);
  const centerX = width / 2;
  const centerY = height / 2 - 3;
  const radius = Math.max(90, Math.min(width * .325, height * .405, 315)) * state.zoom;
  context.beginPath();
  context.arc(centerX, centerY, radius + 12, 0, Math.PI * 2);
  context.fillStyle = "rgba(68,185,163,.045)";
  context.fill();
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  const ocean = context.createRadialGradient(centerX - radius * .35, centerY - radius * .4, radius * .05, centerX, centerY, radius * 1.16);
  ocean.addColorStop(0, "#205763");
  ocean.addColorStop(.55, "#12404d");
  ocean.addColorStop(1, "#071d2b");
  context.fillStyle = ocean;
  context.fill();
  context.save();
  context.clip();
  context.strokeStyle = "rgba(182,222,220,.16)";
  context.lineWidth = Math.max(.5, radius / 650);
  for (let lat = -60; lat <= 60; lat += 30) {
    const points = [];
    for (let lon = -180; lon <= 180; lon += 3) points.push([lon, lat]);
    drawGridLine(points, centerX, centerY, radius);
  }
  for (let lon = -180; lon < 180; lon += 30) {
    const points = [];
    for (let lat = -90; lat <= 90; lat += 3) points.push([lon, lat]);
    drawGridLine(points, centerX, centerY, radius);
  }
  for (const continent of continents) for (const polygon of continent.polygons) drawPolygon(polygon, centerX, centerY, radius, continent.color);

  for (const place of visibleLandmarks()) {
    const point = project(place.lon, place.lat, centerX, centerY, radius);
    if (point.z < .04) continue;
    const selected = state.selected === place;
    context.beginPath();
    context.arc(point.x, point.y, selected ? 12 : 8, 0, Math.PI * 2);
    context.fillStyle = selected ? "rgba(134,244,202,.18)" : "rgba(134,244,202,.11)";
    context.fill();
    context.beginPath();
    context.arc(point.x, point.y, selected ? 5 : 3.2, 0, Math.PI * 2);
    context.fillStyle = selected ? "#eafff5" : "#91f0ca";
    context.fill();
    context.strokeStyle = "rgba(16,51,52,.9)";
    context.lineWidth = 1;
    context.stroke();
    if (selected) {
      context.font = "11px 'Gowun Dodum', sans-serif";
      const label = `${place.country} · ${place.name}`;
      const labelWidth = context.measureText(label).width;
      const labelX = point.x + 14 + labelWidth > centerX + radius ? point.x - labelWidth - 16 : point.x + 14;
      context.fillStyle = "rgba(7,20,28,.82)";
      context.fillRect(labelX - 6, point.y - 12, labelWidth + 12, 23);
      context.fillStyle = "#d9f9e9";
      context.fillText(label, labelX, point.y + 4);
    }
  }
  context.restore();
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.strokeStyle = "rgba(158,234,212,.35)";
  context.lineWidth = 1;
  context.stroke();
  const edge = context.createRadialGradient(centerX, centerY, radius * .8, centerX, centerY, radius * 1.02);
  edge.addColorStop(0, "rgba(72,196,171,0)");
  edge.addColorStop(1, "rgba(72,196,171,.18)");
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.strokeStyle = edge;
  context.lineWidth = 7;
  context.stroke();
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  state.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  state.width = rect.width;
  state.height = rect.height;
  canvas.width = Math.round(rect.width * state.pixelRatio);
  canvas.height = Math.round(rect.height * state.pixelRatio);
  drawGlobe();
}

function focusLandmark(place) {
  state.selected = place;
  state.angle = Math.PI / 2 - place.lon * radians;
  state.tilt = place.lat * radians;
  state.zoom = Math.max(state.zoom, 1.12);
  hint.classList.add("is-hidden");
  zoomLabel.textContent = `${Math.round(state.zoom * 100)}%`;
  viewCoordinates.textContent = `${place.country} · ${place.detail.split(" · ")[0]}`;
  renderLandmarks();
}

function changeZoom(amount) {
  state.zoom = Math.min(1.55, Math.max(.75, state.zoom + amount));
  zoomLabel.textContent = `${Math.round(state.zoom * 100)}%`;
  drawGlobe();
}

function startExplorer() {
  welcome.hidden = true;
  explorer.hidden = false;
  resizeCanvas();
  renderLandmarks();
  searchInput.focus({ preventScroll:true });
}

document.getElementById("start-button").addEventListener("click", startExplorer);
document.getElementById("home-button").addEventListener("click", () => { explorer.hidden = true; welcome.hidden = false; });
document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  explorer.hidden = true;
  welcome.hidden = false;
});
document.querySelectorAll(".continent-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeContinent = button.dataset.continent;
    state.selected = null;
    document.querySelectorAll(".continent-button").forEach((item) => item.classList.toggle("is-active", item === button));
    viewCoordinates.textContent = state.activeContinent === "all" ? "지구 · 3D 탐험" : `${state.activeContinent} · 탐험`;
    renderLandmarks();
  });
});
searchInput.addEventListener("input", () => { state.query = searchInput.value; state.selected = null; renderLandmarks(); });
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    state.query = "";
    renderLandmarks();
    searchInput.blur();
  }
});
document.getElementById("zoom-in").addEventListener("click", () => changeZoom(.12));
document.getElementById("zoom-out").addEventListener("click", () => changeZoom(-.12));
document.getElementById("reset-view").addEventListener("click", () => {
  state.angle = initialAngle;
  state.tilt = 0;
  state.zoom = 1;
  state.selected = null;
  state.activeContinent = "all";
  state.query = "";
  searchInput.value = "";
  document.querySelectorAll(".continent-button").forEach((button, index) => button.classList.toggle("is-active", index === 0));
  viewCoordinates.textContent = "지구 · 3D 탐험";
  zoomLabel.textContent = "100%";
  renderLandmarks();
});

canvas.addEventListener("pointerdown", (event) => {
  state.dragging = true;
  state.pointer = { x:event.clientX, y:event.clientY };
  canvas.classList.add("is-dragging");
  canvas.setPointerCapture(event.pointerId);
  event.preventDefault();
});
canvas.addEventListener("pointermove", (event) => {
  if (!state.dragging || !state.pointer) return;
  const deltaX = event.clientX - state.pointer.x;
  const deltaY = event.clientY - state.pointer.y;
  state.angle += deltaX / Math.max(150, canvas.clientWidth * .38);
  state.tilt = Math.max(-1.35, Math.min(1.35, state.tilt + deltaY / Math.max(180, canvas.clientHeight * .42)));
  state.pointer = { x:event.clientX, y:event.clientY };
  state.selected = null;
  hint.classList.add("is-hidden");
  viewCoordinates.textContent = "지구 · 3D 탐험";
  drawGlobe();
});
function stopDragging() {
  state.dragging = false;
  state.pointer = null;
  canvas.classList.remove("is-dragging");
}
canvas.addEventListener("pointerup", stopDragging);
canvas.addEventListener("pointercancel", stopDragging);
canvas.addEventListener("wheel", (event) => {
  event.preventDefault();
  changeZoom(event.deltaY < 0 ? .08 : -.08);
}, { passive:false });
canvas.addEventListener("click", (event) => {
  if (state.pointer) return;
  const rect = canvas.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2 - 3;
  const radius = Math.max(90, Math.min(rect.width * .325, rect.height * .405, 315)) * state.zoom;
  const x = (event.clientX - rect.left - centerX) / radius;
  const y = (centerY - (event.clientY - rect.top)) / radius;
  if (x * x + y * y > 1) return;
  let best = null;
  let bestDistance = .035;
  for (const place of visibleLandmarks()) {
    const point = rotatePoint(place.lon, place.lat);
    if (point.z < 0) continue;
    const distance = (point.x - x) ** 2 + (point.y - y) ** 2;
    if (distance < bestDistance) { best = place; bestDistance = distance; }
  }
  if (best) focusLandmark(best);
});

new ResizeObserver(resizeCanvas).observe(canvas);
window.addEventListener("resize", resizeCanvas);
