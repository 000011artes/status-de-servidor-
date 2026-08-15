const cpu=document.querySelector('#cpu'),ram=document.querySelector('#ram'),disk=document.querySelector('#disk'),update=document.querySelector('#last-update'),clock=document.querySelector('#clock'),bars=document.querySelector('#bars');

function random(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function refresh(){
  cpu.textContent=random(8,42)+'%';
  ram.textContent=random(24,68)+'%';
  disk.textContent=random(31,57)+'%';
  const now=new Date();
  update.textContent='Atualizado agora';
  clock.textContent=now.toLocaleTimeString('pt-BR');
}
for(let i=0;i<48;i++){const b=document.createElement('div');b.className='bar'+(i===17?' warn':'');b.style.height=random(35,100)+'%';bars.appendChild(b)}
refresh(); setInterval(refresh,5000);
