document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    const stepInfo = document.getElementById('current-step-info');

    // Informasi langkah-langkah
    const stepDetails = {
        1: "**Langkah 1: Foto Barang**. Ambil foto jelas dari barang bekas Anda. Tulis deskripsi yang jujur.",
        2: "**Langkah 2: Posting & Tunggu**. Unggah di platform kami. Tentukan harga terbaik Anda.",
        3: "**Langkah 3: COD Kampus**. Sepakati waktu dan tempat COD (sangat disarankan di area kampus) dengan pembeli."
    };

    // Fungsi untuk mengubah tampilan langkah
    function updateStep(activeStep) {
        steps.forEach(step => {
            const stepNumber = parseInt(step.getAttribute('data-step'));
            
            // Mengubah kelas active
            if (stepNumber === activeStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Mengubah teks penjelasan
        stepInfo.innerHTML = stepDetails[activeStep];
    }

    // Menambahkan event listener ke setiap langkah
    steps.forEach(step => {
        step.addEventListener('click', function() {
            const activeStep = parseInt(this.getAttribute('data-step'));
            updateStep(activeStep);
        });
    });

    // Event listener untuk tombol CTA (menggulir ke bagian 'Hubungi Kami')
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Inisiasi awal: Set langkah 1 aktif
    updateStep(1);
});