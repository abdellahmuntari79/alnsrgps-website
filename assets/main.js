document.addEventListener('DOMContentLoaded',()=>{
  const b=document.querySelector('.burger'),m=document.querySelector('.menu');
  if(b)b.addEventListener('click',()=>m.classList.toggle('open'));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('on',x===t));
    document.querySelectorAll('.pane').forEach(p=>p.classList.toggle('on',p.id===t.dataset.p));
  }));
  const f=document.getElementById('quote');
  if(f)f.addEventListener('submit',e=>{
    e.preventDefault();
    const d=new FormData(f),en=document.documentElement.lang==='en';
    const lines=en?
      ['New quote / site-survey request',`Name: ${d.get('name')}`,`Phone: ${d.get('phone')}`,`Service: ${d.get('service')}`,`Details: ${d.get('details')||'-'}`]:
      ['طلب عرض سعر / معاينة جديد',`الاسم: ${d.get('name')}`,`الهاتف: ${d.get('phone')}`,`الخدمة: ${d.get('service')}`,`التفاصيل: ${d.get('details')||'-'}`];
    window.open('https://wa.me/971551855006?text='+encodeURIComponent(lines.join('\n')),'_blank');
  });
});
