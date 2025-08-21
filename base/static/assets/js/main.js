async function loadProjects(){
  const wrap = document.getElementById('projects-wrap');
  if(!wrap) return;
  try{
    const res = await fetch('/static/assets/data/projects.json');
    const data = await res.json();
    wrap.innerHTML = '';
    data.forEach(p=>{
      const el = document.createElement('article');
      el.className = 'project';
      el.innerHTML = `
        <img src="${p.image.startsWith('http')?p.image:'/static/'+p.image}" alt="${p.title} preview">
        <div class="p">
          <div class="small">${p.year} • ${p.stack.join(' · ')}</div>
          <h3>${p.title}</h3>
          <p class="small">${p.summary}</p>
        </div>`;
      wrap.appendChild(el);
    });
  }catch(e){
    wrap.innerHTML = '<div class="small">Unable to load projects.json</div>';
    console.error(e);
  }
}
async function initMap(){
  const el = document.getElementById('map');
  if(!el || !window.L) return;
  const map = L.map('map').setView([27.7172,85.3240], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap'}).addTo(map);
  try{
    const res = await fetch('/static/assets/data/map.geojson');
    const gj = await res.json();
    const layer = L.geoJSON(gj, { onEachFeature:(f,l)=> l.bindPopup(f.properties?.name||'Feature')}).addTo(map);
    try{ map.fitBounds(layer.getBounds(), {padding:[20,20]}); }catch{}
  }catch(e){ console.warn('No geojson found'); }
}
document.addEventListener('DOMContentLoaded', ()=>{ loadProjects(); initMap(); });
