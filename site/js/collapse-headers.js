// docs/js/collapse-headers.js
document.addEventListener('DOMContentLoaded', () => {
  // Only target H2 headers with class 'collapsible'
  const root = document.querySelector('main') || document.querySelector('.md-content') || document.body;
  const headings = Array.from(root.querySelectorAll('h2.collapsible'));

  headings.forEach(header => {
    if (header.dataset._collapsibleProcessed) return;
    header.dataset._collapsibleProcessed = '1';

    // Create a wrapper for the section content
    const wrapper = document.createElement('div');
    wrapper.className = 'collapsible-section__wrapper';

    // Collect all siblings until the next H2
    let node = header.nextElementSibling;
    while (node && !(node.tagName && node.tagName.toLowerCase() === 'h2')) {
      const next = node.nextElementSibling;
      wrapper.appendChild(node);
      node = next;
    }

    // Insert the wrapper after the header
    header.insertAdjacentElement('afterend', wrapper);
    wrapper.classList.add('collapsed'); // collapsed by default

    // Add toggle button
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'collapse-toggle';
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span class="chev">▶</span>';
    header.prepend(btn);

    // Toggle handler
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const nowCollapsed = wrapper.classList.toggle('collapsed');
      btn.setAttribute('aria-expanded', String(!nowCollapsed));
      btn.querySelector('.chev').textContent = nowCollapsed ? '▶' : '▼';
    });
      // Auto-expand collapsible section when navigating via anchor links
      function expandCollapsibleFromHash() {
        // Remove auto-expanded from all sections
        document.querySelectorAll('.collapsible-section__wrapper.auto-expanded').forEach(function(el) {
          el.classList.remove('auto-expanded');
        });

        const hash = window.location.hash.replace('#', '');
        if (!hash) return;
        // Find the header with the matching id
        const header = document.getElementById(hash);
        if (header && header.classList.contains('collapsible')) {
          const section = header.nextElementSibling;
          if (section && section.classList.contains('collapsible-section__wrapper')) {
            section.classList.remove('collapsed');
            section.classList.add('auto-expanded');
            // Update toggle button state if present
            const btn = header.querySelector('.collapse-toggle');
            if (btn) {
              btn.setAttribute('aria-expanded', 'true');
              btn.querySelector('.chev').textContent = '▼';
            }
          }
        }
      }
      window.addEventListener('hashchange', expandCollapsibleFromHash);
      expandCollapsibleFromHash();

    // Clicking the header toggles (not when clicking the button itself)
    header.style.cursor = 'pointer';
    header.addEventListener('click', (e) => {
      if (e.target === btn || btn.contains(e.target)) return;
      btn.click();
    });
  });
});

// --- Copy inline code to clipboard on click ---
document.addEventListener('DOMContentLoaded', () => {
  // Only target inline code, not code blocks
  document.querySelectorAll('code:not(pre code):not(.hljs)').forEach(codeEl => {
    codeEl.style.cursor = 'pointer';
    codeEl.title = 'Click to copy';
    codeEl.addEventListener('click', function (e) {
      // Copy code text to clipboard
      navigator.clipboard.writeText(codeEl.textContent.trim()).then(() => {
        codeEl.classList.add('copied');
        codeEl.title = 'Copied!';
        setTimeout(() => {
          codeEl.classList.remove('copied');
          codeEl.title = 'Click to copy';
        }, 1200);
      });
    });
  });
});