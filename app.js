document.addEventListener('DOMContentLoaded', () => {
    // --- TAB SYSTEM ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Toggle buttons
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Toggle panes
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === targetTab) {
                    pane.classList.add('active');
                }
            });
        });
    });

    // --- INTERACTIVE PYRAMID (TAB 2) ---
    const pyramidLevels = document.querySelectorAll('.pyramid-level');
    const detailsPanels = document.querySelectorAll('.details-panel');

    pyramidLevels.forEach(level => {
        level.addEventListener('click', () => {
            const targetPanel = level.getAttribute('data-level');

            // Toggle active level styles
            pyramidLevels.forEach(l => l.classList.remove('active'));
            level.classList.add('active');

            // Toggle active info panels
            detailsPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === targetPanel) {
                    panel.classList.add('active');
                }
            });
        });
    });

    // --- ACCORDION SYSTEM (TAB 1 - CIRCUITS) ---
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            // Check if clicked item is already active
            const isActive = item.classList.contains('active');

            // Close all items
            accordionItems.forEach(acc => acc.classList.remove('active'));

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
