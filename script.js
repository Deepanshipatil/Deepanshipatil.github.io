AOS.init({duration:800,once:true,offset:70});
document.getElementById('year').textContent=new Date().getFullYear();
const topBtn=document.getElementById('top');
window.addEventListener('scroll',()=>{
  document.querySelector('.navbar').classList.toggle('scrolled',window.scrollY>30);
  topBtn.classList.toggle('show',window.scrollY>500);
  document.querySelectorAll('section[id]').forEach(s=>{
    const r=s.getBoundingClientRect(), link=document.querySelector('.nav-link[href="#'+s.id+'"]');
    if(link && r.top<=130 && r.bottom>=130){document.querySelectorAll('.nav-link').forEach(x=>x.classList.remove('active'));link.classList.add('active')}
  });
});
topBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>{
  const menu=document.getElementById('nav'); if(menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));