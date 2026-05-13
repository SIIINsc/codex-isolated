const referralCode='STAR-9BBJ-ZKJV';
const showToast=(m)=>{const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)};
document.getElementById('copyReferral')?.addEventListener('click',async()=>{await navigator.clipboard.writeText(referralCode);showToast('Referral code copied');track('referral_copied',{code:referralCode})});
const track=(event,payload={})=>window.dispatchEvent(new CustomEvent('analytics:event',{detail:{event,payload,timestamp:Date.now()}}));
document.querySelectorAll('[data-event]').forEach(el=>el.addEventListener('click',()=>track(el.dataset.event)));
async function loadData(){
  const [packs,tools,communities,faqs]=await Promise.all(['data/starter-packs.json','data/tools.json','data/communities.json','data/faqs.json'].map(u=>fetch(u).then(r=>r.json())));
  renderCards('starterCards',packs.featured,'starter_pack_click');renderCards('industrialCards',packs.industrial,'starter_pack_click');
  renderTools('primaryTools',tools.primary);renderTools('secondaryTools',tools.secondary);renderCommunities(communities);renderFaq(faqs);
}
function renderCards(id,list,eventName){document.getElementById(id).innerHTML=list.map(i=>`<article class='card'><h3>${i.label}</h3><p>${i.role}</p><p class='small'>Price: ${i.price}</p><a class='tool-link' data-event='${eventName}' href='${i.link}'>View pack</a></article>`).join('')}
function renderTools(id,list){document.getElementById(id).innerHTML=list.map(t=>`<article class='card'><h3>${t.name}</h3><p>${t.what}</p><p class='small'>Why it matters: ${t.why}</p><p class='small'>Beginner relevance: ${t.relevance}</p><a class='tool-link' data-event='tool_click' href='${t.link}' target='_blank' rel='noopener'>Open tool</a></article>`).join('')}
function renderCommunities(data){document.getElementById('communityGroups').innerHTML=`<article class='card'><h3>Official routes</h3>${data.official.map(c=>`<p><a data-event='community_click' href='${c.link}'>${c.name}</a> — ${c.note}</p>`).join('')}</article><article class='card'><h3>Active communities</h3>${data.curated.map(c=>`<p><a data-event='community_click' href='${c.link}'>${c.name}</a> — ${c.note}</p>`).join('')}</article>`}
function renderFaq(faqs){document.getElementById('faqList').innerHTML=faqs.map(f=>`<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('');document.getElementById('faqSchema').textContent=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))});}
loadData();
