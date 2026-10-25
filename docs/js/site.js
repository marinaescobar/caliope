/* Calíope web: mejoras progresivas. Sin este archivo la página se lee entera (todo visible, una cosa tras otra). */
(function () {
  "use strict";
  var d = document;
  function $(s, c) { return (c || d).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || d).querySelectorAll(s)); }
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mírala por dentro: pestañas y tema de las capturas ---------- */
  var gal = $("[data-gal]");
  if (gal) {
    var tabs = $$("[role=tab]", gal), panels = $$("[role=tabpanel]", gal);
    var select = function (i, focus) {
      tabs.forEach(function (b, k) { b.setAttribute("aria-selected", String(k === i)); b.tabIndex = k === i ? 0 : -1; });
      panels.forEach(function (p, k) { p.hidden = k !== i; });
      if (focus) tabs[i].focus();
    };
    tabs.forEach(function (b, i) {
      b.addEventListener("click", function () { select(i); });
      b.addEventListener("keydown", function (e) {
        var n = tabs.length, k = e.key;
        if (k === "ArrowRight") { select((i + 1) % n, true); e.preventDefault(); }
        else if (k === "ArrowLeft") { select((i + n - 1) % n, true); e.preventDefault(); }
        else if (k === "Home") { select(0, true); e.preventDefault(); }
        else if (k === "End") { select(n - 1, true); e.preventDefault(); }
      });
    });
    if (tabs.length) select(0);
    var themeBtns = $$("[data-gt]");
    var setTheme = function (t) {
      gal.dataset.theme = t;
      $$("img[data-n]", gal).forEach(function (img) {
        var n = img.dataset.n, w = img.dataset.w;
        img.src = "img/" + t + "/" + n + ".webp";
        img.srcset = "img/" + t + "/" + n + "-800.webp 800w, img/" + t + "/" + n + ".webp " + w + "w";
      });
      themeBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.gt === t)); });
    };
    themeBtns.forEach(function (b) { b.addEventListener("click", function () { setTheme(b.dataset.gt); }); });
  }

  /* ---------- Un día con Calíope: una escena por vez ---------- */
  var story = $("[data-story]");
  if (story) {
    var chs = $$(".ch", story), dots = [], cur = 0;
    var ctrl = $(".ctrl", story), prev = $("[data-prev]", story), next = $("[data-next]", story), live = $(".sr", story);
    var dotsBox = $(".dots", story);
    story.classList.add("is-stage");
    story.setAttribute("tabindex", "0");
    story.setAttribute("role", "group");
    story.setAttribute("aria-roledescription", "recorrido");
    story.setAttribute("aria-label", "Un día con Calíope, en cinco escenas");
    chs.forEach(function (c, i) {
      var li = d.createElement("li"), b = d.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Escena " + (i + 1) + ": " + c.dataset.title);
      b.addEventListener("click", function () { go(i); });
      li.appendChild(b); dotsBox.appendChild(li); dots.push(b);
    });
    var go = function (i, silent) {
      cur = Math.max(0, Math.min(chs.length - 1, i));
      chs.forEach(function (c, k) {
        c.classList.toggle("on", k === cur);
        c.setAttribute("aria-hidden", String(k !== cur));
        if ("inert" in c) c.inert = k !== cur;
      });
      dots.forEach(function (b, k) { b.setAttribute("aria-current", String(k === cur)); });
      prev.disabled = cur === 0;
      next.disabled = cur === chs.length - 1;
      if (live && !silent) live.textContent = "Escena " + (cur + 1) + " de " + chs.length + ": " + chs[cur].dataset.title;
    };
    prev.addEventListener("click", function () { go(cur - 1); });
    next.addEventListener("click", function () { go(cur + 1); });
    story.addEventListener("keydown", function (e) {
      if (e.target.closest && e.target.closest("button") && (e.key === "Enter" || e.key === " ")) return;
      if (e.key === "ArrowRight") { go(cur + 1); e.preventDefault(); }
      else if (e.key === "ArrowLeft") { go(cur - 1); e.preventDefault(); }
      else if (e.key === "Home") { go(0); e.preventDefault(); }
      else if (e.key === "End") { go(chs.length - 1); e.preventDefault(); }
    });
    var sx = null, sy = null;
    story.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    story.addEventListener("touchend", function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      sx = null;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) go(cur + (dx < 0 ? 1 : -1));
    }, { passive: true });
    go(0, true);
  }

  /* ---------- Imprenta: un formato a la vez ---------- */
  var imp = $("[data-imp]");
  if (imp) {
    var fb = $$("[data-f]", imp), fd = $$("[data-fd]", imp), fm = $$("[data-fm]", imp);
    imp.classList.add("is-tabs");
    var pick = function (key, focus) {
      fb.forEach(function (b) { var on = b.dataset.f === key; b.setAttribute("aria-selected", String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
      fd.forEach(function (x) { x.classList.toggle("on", x.dataset.fd === key); });
      fm.forEach(function (x) { x.classList.toggle("on", x.dataset.fm === key); });
    };
    fb.forEach(function (b, i) {
      b.addEventListener("click", function () { pick(b.dataset.f); });
      b.addEventListener("keydown", function (e) {
        var n = fb.length;
        if (e.key === "ArrowRight") { pick(fb[(i + 1) % n].dataset.f, true); e.preventDefault(); }
        else if (e.key === "ArrowLeft") { pick(fb[(i + n - 1) % n].dataset.f, true); e.preventDefault(); }
      });
    });
    pick("epub");
  }

  /* ---------- Tarjetas: se abren también al pulsar y con teclado ---------- */
  var els = $$(".card, .line");
  var closeAll = function (except) { els.forEach(function (e) { if (e !== except) { e.classList.remove("open"); e.setAttribute("aria-expanded", "false"); } }); };
  els.forEach(function (e) {
    e.setAttribute("role", "button");
    e.setAttribute("aria-expanded", "false");
    var toggle = function () { var o = !e.classList.contains("open"); closeAll(e); e.classList.toggle("open", o); e.setAttribute("aria-expanded", String(o)); };
    e.addEventListener("click", toggle);
    e.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); toggle(); }
      else if (ev.key === "Escape") closeAll();
    });
  });
  d.addEventListener("click", function (ev) { if (!ev.target.closest(".card, .line")) closeAll(); });
})();
