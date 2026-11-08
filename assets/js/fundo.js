(()=>{
const reduced=matchMedia("(prefers-reduced-motion: reduce)");if(reduced.matches)return;
  var vsSource = `
  attribute vec2 position;
  void main() {
      gl_Position = vec4(position, 0.0, 1.0);
  }
`;
  var fsSource = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform float u_intro;
  uniform float u_burst;
  uniform float u_scroll;

  uniform float u_strands;
  float random(float n) { return fract(sin(n) * 43758.5453123); }

  void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 p = uv;
      vec2 center = vec2(0.55, 0.48);

      vec2 mouse = u_mouse / u_resolution.xy;
      mouse.y = 1.0 - mouse.y;

      vec3 color = vec3(0.008, 0.015, 0.025);

      float bgGlow = max(0.0, 1.0 - distance(p, vec2(-0.1, 0.5)));
      color += vec3(0.015, 0.07, 0.15) * pow(bgGlow, 2.0) * 0.5 * u_intro;

      float rightGlow = max(0.0, 1.0 - distance(p, vec2(1.08, 0.35)));
      color += vec3(0.01, 0.05, 0.12) * pow(rightGlow, 2.0) * 0.35;

      float particleNoise = fract(sin(dot(p + u_time * 0.015, vec2(12.9898, 78.233))) * 43758.5453);
      color += vec3(0.6, 0.8, 1.0) * pow(particleNoise, 90.0) * 0.2 * u_intro;

      float radial = distance(p, center);
      float radialBurst = (1.0-smoothstep(0.0,0.55,radial));
      color += vec3(0.03, 0.09, 0.19) * radialBurst * 0.4 * u_burst;

      float ring1 = abs(radial - (0.08 + u_burst * 0.26));
      float ring2 = abs(radial - (0.18 + u_burst * 0.32));
      float burstRing = (1.0-smoothstep(0.0,0.035,ring1)) + (1.0-smoothstep(0.0,0.05,ring2));
      color += vec3(0.30, 0.65, 1.0) * burstRing * 0.22 * u_burst;

      float globalDriftY = sin(p.x * 2.0 - u_time * 0.4) * 0.15;
      float globalDriftX = cos(p.y * 1.5 + u_time * 0.3) * 0.05;

      p.y += globalDriftY * p.x;
      p.x += globalDriftX;
      p.x = max(p.x,0.0);
      p.y += sin((p.x + u_scroll * 0.65) * 8.0) * 0.015 * u_burst;

      float lineCount = 45.0;
      
      for(float i = 0.0; i < 45.0; i++) {
          if(i>=u_strands)break;
          float seed = i / u_strands;
          float speed = 0.05 + random(seed) * 0.1;
          float phase = seed * 6.2831;
          float startY = 0.5;

          float strandDelay = random(seed + 5.0) * 0.4; 
          float localIntro = clamp((u_intro - strandDelay) * 1.6, 0.0, 1.0);
          localIntro = localIntro * localIntro * (3.0 - 2.0 * localIntro);
          
          float spread = pow(p.x, 1.2) * 0.7 * localIntro; 
          
          float wave1 = sin(p.x * (1.8 + random(seed)*1.2) - u_time * speed + phase);
          float wave2 = cos(p.x * 2.5 + u_time * speed * 0.7 - phase * 1.1);
          float explosionWave = sin((p.x * 10.0) - u_time * 2.0 + seed * 14.0) * 0.08 * u_burst * pow(p.x, 1.4);
          
          float yPos = startY + (wave1 * 0.5 + wave2 * 0.3) * spread + explosionWave;

          vec2 linePoint = vec2(p.x, yPos);
          float distToMouse = distance(linePoint, mouse);
          float hoverInfluence = (1.0-smoothstep(0.0,0.4,distToMouse));
          
          float dy = mouse.y - yPos;
          float ripple = sin(distToMouse * 12.0 - u_time * 3.0) * 0.03 * hoverInfluence;
          yPos += dy * hoverInfluence * 0.4 * localIntro + ripple;

          float centerPush = (1.0-smoothstep(0.0,0.38,distance(vec2(p.x,yPos),center)));
          yPos += (yPos - center.y) * centerPush * 0.45 * u_burst;

          float distToLine = abs(p.y - yPos);
          float thickness = 0.001 + p.x * 0.005 + u_burst * 0.002; 
          float intensity = 0.0007 / (distToLine + thickness);
          
          float edgeFade = (1.0-smoothstep(0.1,1.0,p.x));
          float lengthFade = (1.0-smoothstep((u_intro*1.5)-0.35,u_intro*1.5,p.x));
          
          vec3 colDeepAqua = vec3(0.08, 0.45, 0.95);
          vec3 colTeal = vec3(0.10, 0.65, 1.0);
          vec3 colBrightCyan = vec3(0.25, 0.85, 1.0);
          
          vec3 lineColor = mix(colDeepAqua, colTeal, random(seed + 1.0));
          lineColor = mix(lineColor, colBrightCyan, random(seed + 2.0) * 0.4);
          lineColor += vec3(0.3, 0.65, 1.0) * centerPush * u_burst * 0.7;
          
          float coreGlow = (1.0-smoothstep(0.0,0.015,distToLine));
          lineColor += vec3(0.8, 0.9, 1.0) * coreGlow * 0.5;
          
          color += lineColor * intensity * edgeFade * lengthFade * localIntro;
      }

      gl_FragColor = vec4(color, 1.0);
  }
`;
  function compileShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  }
  function flowField(canvas, state, box) {
    var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) { canvas.hidden=true; return { start: function () {}, stop: function () {} }; }
    var program = gl.createProgram();
    gl.attachShader(program, compileShader(gl, gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, compileShader(gl, gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS)){canvas.hidden=true;return {start:function(){},stop:function(){}};}
    gl.useProgram(program);
    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    var posAttr = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);
    var uRes = gl.getUniformLocation(program, "u_resolution");
    var uTime = gl.getUniformLocation(program, "u_time");
    var uMouse = gl.getUniformLocation(program, "u_mouse");
    var uIntro = gl.getUniformLocation(program, "u_intro");
    var uBurst = gl.getUniformLocation(program, "u_burst");
    var uScroll = gl.getUniformLocation(program, "u_scroll");
    var uStrands = gl.getUniformLocation(program,"u_strands");
    var compact=matchMedia("(max-width:700px)");
    function size() { var w=box ? canvas.clientWidth : window.innerWidth, h=box ? canvas.clientHeight : window.innerHeight; var scale=Math.min(compact.matches?.8:1,1200/w); return [Math.round(w*scale),Math.round(h*scale)]; }
    var s0 = size(), mouseX = s0[0] / 2, mouseY = s0[1] / 2, targetMouseX = mouseX, targetMouseY = mouseY;
    window.addEventListener("mousemove", function (e) {
      if (!box) { var scale=canvas.width/window.innerWidth; targetMouseX = e.clientX*scale; targetMouseY = e.clientY*scale; return; }
      var r = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - r.left;
      targetMouseY = e.clientY - r.top;
    });
    function resize() {
      var s = size();
      canvas.width = s[0];
      canvas.height = s[1];
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener("resize", resize);
    var startTime = performance.now(), raf = 0, running = false;
    var previousFrame=0;
    function render(time) {
      if(!running)return;
      if(compact.matches&&time-previousFrame<32){raf=requestAnimationFrame(render);return;}
      previousFrame=time;
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (time - startTime) * 1e-3);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.uniform1f(uIntro, state.introValue);
      gl.uniform1f(uBurst, state.burstValue);
      gl.uniform1f(uScroll, state.scrollValue);
      gl.uniform1f(uStrands,compact.matches?22:45);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    }
    return {
      start: function () { if (running) return; running = true; resize(); raf = requestAnimationFrame(render); },
      stop: function () { running = false; cancelAnimationFrame(raf); }
    };
  }

const state={introValue:0,burstValue:0,scrollValue:0};
const flow=flowField(document.getElementById('bg-canvas'),state,false);flow.start();
document.addEventListener('visibilitychange',()=>document.hidden?flow.stop():flow.start());
reduced.addEventListener('change',()=>{if(reduced.matches){flow.stop();document.getElementById('bg-canvas').hidden=true;if(window.ScrollTrigger)ScrollTrigger.getAll().forEach(t=>t.kill(true));if(window.gsap)gsap.globalTimeline.clear();document.querySelectorAll('[style]').forEach(e=>{if(e.matches('.reveal-word,.hero-bottom p,.hero .actions,.service-card,.timeline article,.section-head,.about-grid,.contact-grid,.logo-frame,.solution-preview,.connection-node')){e.style.opacity='1';e.style.transform='none';}});}});
if(!window.gsap||!window.ScrollTrigger)return;gsap.registerPlugin(ScrollTrigger);
gsap.to(state,{introValue:1,duration:3.5,ease:'power2.inOut'});
gsap.to(state,{scrollValue:1,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:.65}});
gsap.to(state,{burstValue:1,ease:'power2.out',scrollTrigger:{trigger:'#metodo',start:'top 80%',end:'bottom 30%',scrub:.65}});
gsap.to('#bg-canvas',{y:'20%',scale:1.15,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:.65}});
function words(el){let walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),nodes=[];while(walk.nextNode())nodes.push(walk.currentNode);nodes.forEach(n=>{const fragment=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(w=>{if(!w.trim()){fragment.append(document.createTextNode(w));return;}const outer=document.createElement('span');outer.className='word-mask';const inner=document.createElement('span');inner.className='reveal-word';inner.textContent=w;outer.append(inner);fragment.append(outer);});n.replaceWith(fragment);});}
document.querySelectorAll('main h1,main h2').forEach(h=>{words(h);gsap.fromTo(h.querySelectorAll('.reveal-word'),{y:'110%'},{y:'0%',duration:.85,stagger:.045,ease:'power4.out',scrollTrigger:{trigger:h,start:'top 93%',once:true}});});
gsap.fromTo('.hero .eyebrow',{opacity:0,y:18},{opacity:1,y:0,duration:1,delay:.3});
gsap.fromTo('.hero-bottom>div>p',{opacity:0,y:24},{opacity:1,y:0,duration:.65,delay:.45});
gsap.fromTo('.hero .actions',{opacity:0,y:20},{opacity:1,y:0,duration:.65,delay:.6});
gsap.fromTo('.connection-panel',{opacity:0,scale:.85},{opacity:1,scale:1,duration:1.5,delay:.6,ease:'power3.out',onComplete:()=>floatSurface(document.querySelector('.connection-panel'),1)});
gsap.to('.connection-node',{y:-11,repeat:-1,yoyo:true,duration:4.8,stagger:.65,ease:'sine.inOut'});
function floatSurface(el,index=0){const motion=gsap.to(el,{y:matchMedia('(max-width:700px)').matches?-6:(index%2===0?-8:-11),duration:5.5+index*.65,ease:'sine.inOut',repeat:-1,yoyo:true,paused:true});const trigger=ScrollTrigger.create({trigger:el,start:'top bottom',end:'bottom top',onToggle:self=>self.isActive?motion.resume():motion.pause()});if(trigger.isActive)motion.play();}
gsap.fromTo('.service-card',{opacity:0,y:30,rotateY:0},{opacity:1,y:0,rotateY:0,duration:.75,stagger:.09,ease:'power3.out',scrollTrigger:{trigger:'.service-grid',start:'top 88%',once:true},onComplete:()=>document.querySelectorAll('.service-card').forEach((el,i)=>floatSurface(el,i))});
document.querySelectorAll('.timeline article,.about-grid,.contact-grid').forEach(el=>gsap.fromTo(el,{opacity:0,y:24},{opacity:1,y:0,duration:.75,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true},onComplete:()=>{if(el.matches('.timeline article'))floatSurface(el,[...el.parentNode.children].indexOf(el));}}));
gsap.to('.logo-frame',{y:-18,ease:'none',scrollTrigger:{trigger:'#sobre',start:'top bottom',end:'bottom top',scrub:.65}});
document.querySelectorAll('.service-card').forEach(card=>{card.addEventListener('pointermove',e=>{let r=card.getBoundingClientRect();card.style.setProperty('--mx',(e.clientX-r.left)+'px');card.style.setProperty('--my',(e.clientY-r.top)+'px');});});
document.querySelectorAll('details').forEach(el=>el.addEventListener('toggle',()=>ScrollTrigger.refresh()));
})();
