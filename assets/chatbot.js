(function () {
  if (window.ZeroEBChat) return;

  const inBlog = /\/blog\//.test(location.pathname);
  const root = inBlog ? '../' : '';
  const WA = 'https://wa.me/916385467892?text=' + encodeURIComponent('Hi ZeroEB, I have a question from the website chatbot.');
  const CALL = 'tel:+919042517415';
  const MAIL = 'mailto:ecopower2026@gmail.com';
  const MAP = 'https://www.google.com/maps/search/?api=1&query=No.5%2C+MSP+Complex%2C+F-3%2C+Medavakkam+Main+Rd%2C+opposite+Kumaran+Theatre%2C+Vigneshwar+Nagar%2C+Balaji+Nagar%2C+Madipakkam%2C+Chennai%2C+Tamil+Nadu+600091';

  const contactHtml =
    '<p><strong>ZeroEB, Madipakkam, Chennai</strong></p>' +
    '<ul>' +
    '<li>Call: <a href="' + CALL + '">+91 9042517415</a></li>' +
    '<li>WhatsApp: <a href="' + WA + '" target="_blank" rel="noopener">+91 63854 67892</a></li>' +
    '<li>Email: <a href="' + MAIL + '">ecopower2026@gmail.com</a></li>' +
    '<li>Address: No.5, MSP Complex, F-3, Medavakkam Main Rd, opposite Kumaran Theatre, Vigneshwar Nagar, Balaji Nagar, Madipakkam, Chennai 600091</li>' +
    '</ul>';

  const contactActions = [
    { href: CALL, label: 'Call now' },
    { href: WA, label: 'WhatsApp us', external: true },
    { href: MAIL, label: 'Email us' }
  ];

  const faqs = [
    {
      keys: ['contact', 'phone', 'call', 'number', 'mobile', 'whatsapp', 'email', 'address', 'location', 'office', 'where are you', 'reach', 'map'],
      answer: contactHtml + '<p>We serve homes across Chennai, including Madipakkam.</p>',
      actions: contactActions.concat([{ href: MAP, label: 'Open map', external: true }])
    },
    {
      keys: ['hour', 'timing', 'open', 'working day', 'sunday', 'monday', 'saturday', 'appointment'],
      answer: '<p>Panel-cleaning appointments are available <strong>Monday to Saturday</strong> at 10:00 AM, 1:00 PM, or 4:00 PM.</p><p>For a site visit or installation enquiry, call or WhatsApp and we will confirm a slot.</p>',
      actions: contactActions.concat([{ href: root + 'panel-cleaning.html', label: 'Book cleaning' }])
    },
    {
      keys: ['service', 'what do you do', 'offer', 'help with', 'what can you'],
      answer: '<p>ZeroEB designs and installs rooftop solar for Chennai homes, and also provides:</p><ul><li>Residential solar plants (site survey, design, installation, support)</li><li>Installation-only service if you already have panels and an inverter — from ₹3,000/kW</li><li>Panel cleaning and Annual Maintenance Contract (AMC)</li></ul>',
      actions: [
        { href: root + 'index.html#solar-quote', label: 'Free solar quote' },
        { href: root + 'installation-services.html', label: 'Installation service' },
        { href: root + 'panel-cleaning.html', label: 'Panel cleaning' }
      ]
    },
    {
      keys: ['install', 'installation only', 'already purchased', 'bought panel', 'inverter', '3000', '3,000', 'labour', 'civil work'],
      answer: '<p>Yes — we install systems you have already purchased. Residential installation starts at <strong>₹3,000 per kW</strong> and includes civil work for the mounting structure, panel and inverter installation, AC/DC wiring, earthing, testing, and commissioning.</p><p>Panels, inverter, structure materials, and cables are supplied by you unless we agree otherwise.</p>',
      actions: [{ href: root + 'installation-services.html', label: 'Installation details' }, { href: WA, label: 'Enquire on WhatsApp', external: true }]
    },
    {
      keys: ['clean', 'amc', 'maintenance', 'dust', 'washing', '750', '600', '500', '450', '25%'],
      answer: '<p>Panel cleaning is priced per kW:</p><ul><li>Up to 3 kW — ₹750/kW</li><li>Up to 5 kW — ₹600/kW</li><li>Up to 10 kW — ₹500/kW</li><li>Above 10 kW — ₹450/kW</li></ul><p>An <strong>Annual Maintenance Contract (AMC)</strong> gives 25% off every cleaning visit and includes a full health check, not just washing.</p>',
      actions: [{ href: root + 'panel-cleaning.html', label: 'Book a cleaning visit' }, { href: CALL, label: 'Call +91 9042517415' }]
    },
    {
      keys: ['subsidy', '78000', '78,000', 'government', 'scheme', 'pm surya'],
      answer: '<p>Eligible homeowners can get up to <strong>₹78,000 in government subsidy</strong>. We help with the application and paperwork.</p><p>Amount and approval depend on current scheme rules and eligibility — we confirm this during the site visit.</p>',
      actions: [{ href: root + 'index.html#solar-quote', label: 'Get a free quote' }, { href: WA, label: 'WhatsApp us', external: true }]
    },
    {
      keys: ['quote', 'price', 'cost', 'how much', 'rate', 'estimate', 'bill'],
      answer: '<p>A rooftop solar price depends on your roof, shading, and monthly electricity use, so we start with a <strong>free site inspection</strong>.</p><p>Published starting points:</p><ul><li>Installation-only labour: from ₹3,000/kW</li><li>Panel cleaning: ₹450–₹750/kW, or 25% off with AMC</li></ul>',
      actions: [{ href: root + 'index.html#solar-quote', label: 'Request a quote' }, { href: CALL, label: 'Call us' }]
    },
    {
      keys: ['site visit', 'inspection', 'survey', 'free', 'assessment'],
      answer: '<p>Yes — a rooftop site inspection is free and with no obligation. We check usable area, shading, roof type, and your EB bills, then recommend a system size.</p>',
      actions: [{ href: root + 'index.html#solar-quote', label: 'Book a site visit' }, { href: root + 'blog/free-solar-site-inspection-chennai.html', label: 'What we check' }]
    },
    {
      keys: ['size', 'capacity', 'kw', 'how many', '2 ac', 'air condition', 'units'],
      answer: '<p>System size is based on the units you consume, not a count of appliances. As a planning figure in Chennai, 1 kW of unshaded rooftop solar generates about 4–4.5 units a day.</p><p>We size from a year of EB bills plus your roof area.</p>',
      actions: [{ href: root + 'blog/how-to-size-your-solar-system.html', label: 'Sizing guide' }, { href: root + 'index.html#solar-quote', label: 'Get a quote' }]
    },
    {
      keys: ['terrace', 'small roof', 'no terrace', 'sloped', 'sheet roof', 'space'],
      answer: '<p>A small or sloped roof can still take solar. We often use an elevated structure so the terrace stays usable underneath. Allow roughly 80–100 sq ft of clear area per kW.</p>',
      actions: [{ href: root + 'blog/small-terrace-how-much-solar.html', label: 'Small terrace guide' }, { href: WA, label: 'Send a roof photo', external: true }]
    },
    {
      keys: ['eb', 'grid', 'net meter', 'connection', 'off grid', 'tneb', 'tangedco'],
      answer: '<p>A standard home system is grid-tied. You keep your EB connection. Solar covers daytime use; the grid covers nights and cloudy spells. Surplus can be exported through a net meter where applicable.</p>',
      actions: [{ href: root + 'blog/solar-with-eb-connection.html', label: 'How it works' }]
    },
    {
      keys: ['warranty', '25 year', 'guarantee'],
      answer: '<p>Typical rooftop plants carry a long panel performance warranty — often 25 years from the manufacturer — plus a separate product warranty. Workmanship cover is quoted with the installation.</p>',
      actions: contactActions
    },
    {
      keys: ['area', 'chennai', 'madipakkam', 'serve', 'local'],
      answer: '<p>We are based in Madipakkam and install across Chennai homes — independent houses, villas, and other residential rooftops.</p>' + contactHtml,
      actions: contactActions
    },
    {
      keys: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'vanakkam', 'thanks', 'thank you'],
      answer: '<p>Hello — I am the ZeroEB assistant. I can help with solar installation, panel cleaning, subsidy, pricing, or our contact details.</p>'
    }
  ];

  const chips = [
    { label: 'Our services', q: 'What services do you offer?' },
    { label: 'Get a quote', q: 'How do I get a solar quote?' },
    { label: 'Cleaning & AMC', q: 'What is panel cleaning pricing?' },
    { label: 'Subsidy', q: 'Do you help with government subsidy?' },
    { label: 'Contact', q: 'How can I contact ZeroEB?' }
  ];

  function hasKey(text, k) {
    if (k.indexOf(' ') !== -1) return text.indexOf(k) !== -1;
    return new RegExp('\\b' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b').test(text);
  }

  function score(text, keys) {
    let n = 0;
    keys.forEach(function (k) {
      if (hasKey(text, k)) n += k.length > 8 ? 3 : k.length > 4 ? 2 : 1;
    });
    return n;
  }

  function reply(raw) {
    const text = raw.toLowerCase().replace(/[?!.,]/g, ' ').replace(/\s+/g, ' ').trim();
    let best = faqs[faqs.length - 1];
    let bestScore = 0;
    faqs.forEach(function (item) {
      const s = score(text, item.keys);
      if (s > bestScore) {
        bestScore = s;
        best = item;
      }
    });
    if (bestScore === 0) {
      return {
        html: '<p>I may not have that exact answer, but our team can help right away.</p>' + contactHtml,
        actions: contactActions
      };
    }
    return best;
  }

  function el(tag, attrs, html) {
    const node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    if (html) node.innerHTML = html;
    return node;
  }

  function addMsg(log, html, who) {
    const bubble = el('div', { class: 'zeroeb-chat-msg zeroeb-chat-' + who });
    if (who === 'user') bubble.textContent = html;
    else bubble.innerHTML = html;
    log.appendChild(bubble);
    log.scrollTop = log.scrollHeight;
    return bubble;
  }

  function addActions(log, actions) {
    if (!actions || !actions.length) return;
    const wrap = el('div', { class: 'zeroeb-chat-actions' });
    actions.forEach(function (a) {
      const link = el('a', { href: a.href, text: a.label });
      if (a.external) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener');
      }
      wrap.appendChild(link);
    });
    log.lastElementChild.appendChild(wrap);
    log.scrollTop = log.scrollHeight;
  }

  function welcome(log, suggest) {
    addMsg(log, '<p>Hi, I am the ZeroEB assistant. Ask about rooftop solar, installation, panel cleaning, subsidy, or how to reach us.</p>', 'bot');
    suggest.hidden = false;
  }

  function boot() {
    const rootEl = el('div', { class: 'zeroeb-chat-root' });
    const toggle = el('button', {
      class: 'zeroeb-chat-toggle',
      type: 'button',
      'aria-expanded': 'false',
      'aria-controls': 'zeroeb-chat-panel',
      'aria-label': 'Open ZeroEB chat'
    });
    toggle.innerHTML = '<span class="zeroeb-chat-badge" aria-hidden="true"></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm3 5v2h10V9H7zm0 4v2h7v-2H7z"/></svg>';

    const panel = el('div', { id: 'zeroeb-chat-panel', class: 'zeroeb-chat-panel', role: 'dialog', 'aria-label': 'ZeroEB chat assistant', hidden: 'hidden' });
    panel.innerHTML =
      '<div class="zeroeb-chat-head"><div class="zeroeb-chat-avatar">ZE</div><div><h2>Chat with ZeroEB</h2><p>Solar questions · Chennai</p></div><button class="zeroeb-chat-close" type="button" aria-label="Close chat">×</button></div>' +
      '<div class="zeroeb-chat-log" id="zeroeb-chat-log"></div>' +
      '<div class="zeroeb-chat-suggest"></div>' +
      '<form class="zeroeb-chat-form"><label class="visually-hidden" for="zeroeb-chat-input" style="position:absolute;left:-9999px">Your message</label><input id="zeroeb-chat-input" name="message" autocomplete="off" placeholder="Ask about solar, cleaning, or contact…"><button type="submit" aria-label="Send"><svg viewBox="0 0 24 24"><path d="M2 21 23 12 2 3v7l15 2-15 2z"/></svg></button></form>';

    rootEl.appendChild(panel);
    rootEl.appendChild(toggle);
    document.body.appendChild(rootEl);

    const log = panel.querySelector('.zeroeb-chat-log');
    const form = panel.querySelector('.zeroeb-chat-form');
    const input = panel.querySelector('#zeroeb-chat-input');
    const suggest = panel.querySelector('.zeroeb-chat-suggest');
    const closeBtn = panel.querySelector('.zeroeb-chat-close');

    chips.forEach(function (c) {
      const b = el('button', { class: 'zeroeb-chat-chip', type: 'button', text: c.label });
      b.addEventListener('click', function () { ask(c.q); });
      suggest.appendChild(b);
    });

    function openChat() {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close ZeroEB chat');
      const badge = toggle.querySelector('.zeroeb-chat-badge');
      if (badge) badge.remove();
      if (!log.childElementCount) welcome(log, suggest);
      input.focus();
    }

    function closeChat() {
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open ZeroEB chat');
    }

    function ask(text) {
      const q = (text || '').trim();
      if (!q) return;
      suggest.hidden = true;
      addMsg(log, q, 'user');
      const out = reply(q);
      addMsg(log, out.answer || out.html, 'bot');
      addActions(log, out.actions);
    }

    toggle.addEventListener('click', function () {
      if (panel.hidden) openChat();
      else closeChat();
    });
    closeBtn.addEventListener('click', closeChat);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) closeChat();
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const q = input.value;
      input.value = '';
      ask(q);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  window.ZeroEBChat = true;
})();
