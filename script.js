document.addEventListener('DOMContentLoaded', () => {

    // === ELEMEN-ELEMEN PENTING ===
    const pages = document.querySelectorAll('.page');
    const navButtons = document.querySelectorAll('.nav-button');
    const addButton = document.getElementById('addButton');
    const wasteList = document.getElementById('wasteList');
    const emptyStateMessage = document.querySelector('.empty-state');
    const chartCanvas = document.getElementById('wasteChart');
    let wasteChartInstance = null; // Untuk menyimpan instance grafik

    // === LOGIKA NAVIGASI ===
    const showPage = (pageId) => {
        pages.forEach(page => {
            page.classList.toggle('hidden', page.id !== pageId);
            page.classList.toggle('active', page.id === pageId);
        });

        navButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.page === pageId);
        });

        // Jika halaman yang dituju adalah Laporan, buat grafiknya
        if (pageId === 'report-page') {
            generateReport();
        }
    };

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            showPage(button.dataset.page);
        });
    });

    // === LOGIKA PENCATATAN SAMPAH (HOME PAGE) ===
    const checkEmptyState = () => {
        const itemCount = wasteList.querySelectorAll('li:not(.empty-state)').length;
        emptyStateMessage.style.display = itemCount === 0 ? 'block' : 'none';
    };

    const loadWasteData = () => {
        const storedWaste = localStorage.getItem('wasteDataV2'); // Pakai key baru
        const wasteItems = storedWaste ? JSON.parse(storedWaste) : [];
        wasteItems.forEach(item => addWasteItemToDOM(item));
        checkEmptyState();
    };

    const saveWasteData = () => {
        const items = [];
        wasteList.querySelectorAll('li:not(.empty-state)').forEach(li => {
            items.push({
                id: li.dataset.id,
                jenis: li.dataset.jenis,
                jumlah: li.dataset.jumlah
            });
        });
        localStorage.setItem('wasteDataV2', JSON.stringify(items));
    };

    const addWasteItemToDOM = (item) => {
        const listItem = document.createElement('li');
        listItem.dataset.id = item.id;
        listItem.dataset.jenis = item.jenis;
        listItem.dataset.jumlah = item.jumlah;

        listItem.innerHTML = `
            <span class="item-text">${item.jenis} - ${item.jumlah}</span>
            <button class="delete-button" title="Hapus item">×</button>
        `;

        wasteList.insertBefore(listItem, emptyStateMessage);

        listItem.querySelector('.delete-button').addEventListener('click', () => {
            listItem.remove();
            saveWasteData();
            checkEmptyState();
        });
    };

    addButton.addEventListener('click', () => {
        const jenis = prompt('Apa jenis sampahnya? (contoh: Botol Plastik)');
        if (!jenis) return;

        const jumlah = prompt('Berapa jumlahnya? (contoh: 5 buah)');
        if (!jumlah) return;

        const newItem = {
            id: Date.now().toString(),
            jenis: jenis.trim(),
            jumlah: jumlah.trim()
        };
        
        addWasteItemToDOM(newItem);
        saveWasteData();
        checkEmptyState();
    });

    // === LOGIKA LAPORAN (GRAFIK) ===
    const generateReport = () => {
        const storedWaste = localStorage.getItem('wasteDataV2');
        const wasteItems = storedWaste ? JSON.parse(storedWaste) : [];

        // Proses data untuk grafik
        const dataByCategory = {};
        wasteItems.forEach(item => {
            // Mengambil angka dari string jumlah (misal: "5 buah" -> 5)
            const count = parseInt(item.jumlah) || 0;
            if (dataByCategory[item.jenis]) {
                dataByCategory[item.jenis] += count;
            } else {
                dataByCategory[item.jenis] = count;
            }
        });

        const labels = Object.keys(dataByCategory);
        const data = Object.values(dataByCategory);

        // Hancurkan grafik lama jika ada, untuk mencegah duplikasi
        if (wasteChartInstance) {
            wasteChartInstance.destroy();
        }

        // Buat grafik baru
        wasteChartInstance = new Chart(chartCanvas, {
            type: 'bar', // Jenis grafik: batang
            data: {
                labels: labels,
                datasets: [{
                    label: 'Total Sampah per Jenis',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Grafik Jumlah Sampah'
                    }
                }
            }
        });
    };

    // === INISIALISASI APLIKASI ===
    loadWasteData();
});
