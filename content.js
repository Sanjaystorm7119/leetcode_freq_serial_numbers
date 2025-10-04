function addSerialNumbers() {
  // Find all problem rows - they have this specific class structure
  const problemRows = document.querySelectorAll('div.flex.h-\\[44px\\].w-full.items-center.space-x-3.px-4');
  
  if (problemRows.length === 0) {
    console.log('No problem rows found');
    return;
  }
  
  console.log(`Found ${problemRows.length} rows`);
  
  problemRows.forEach((row, index) => {
    // Skip if already has serial number
    if (row.querySelector('.lc-serial-number')) {
      return;
    }
    
    // Create serial number span
    const serialSpan = document.createElement('span');
    serialSpan.className = 'lc-serial-number';
    serialSpan.textContent = `${index + 1}. `;
    serialSpan.style.cssText = `
      font-weight: 700;
      color: #ef4444;
      font-size: 14px;
      margin-right: 8px;
      flex-shrink: 0;
    `;
    
    // Insert at the very beginning of the row
    row.insertBefore(serialSpan, row.firstChild);
  });
  
  console.log(`Added ${problemRows.length} serial numbers`);
}

// Run after page loads
setTimeout(() => {
  addSerialNumbers();
}, 2000);

// Watch for DOM changes (pagination, filtering, sorting)
const observer = new MutationObserver(() => {
  addSerialNumbers();
});

setTimeout(() => {
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}, 2500);

// Handle user interactions
document.addEventListener('click', () => {
  setTimeout(addSerialNumbers, 600);
});

// Handle scrolling (lazy loading)
document.addEventListener('scroll', () => {
  setTimeout(addSerialNumbers, 300);
});