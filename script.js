// script.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');
    const viewDetailBtns = document.querySelectorAll('.view-detail-btn');
    
	// Variabel baru untuk overlay gambar
    const fullImageOverlay = document.getElementById('full-image-overlay');
    const fullImage = document.getElementById('full-image');
    const overlayCloseBtn = document.getElementById('overlay-close-btn');
	
    // Data proyek (Anda bisa kustomisasi ini)
    const projects = {
        1: {
            title: "Nama Proyek 1",
            description: "Ini adalah deskripsi lengkap untuk Proyek 1. Jelaskan tantangan, solusi, dan hasil yang dicapai. Proyek ini adalah [jenis proyek], yang dibuat untuk [nama klien/tujuan]. Kami menggunakan [teknologi/alat] untuk mencapai hasil yang diinginkan.",
            images: [
                "https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/endingtemplatecsarindafood.jpg?raw=true",
                "https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/pesanan320paks.jpg?raw=true",
                "https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/nasibakulpost.jpg?raw=true",
                "https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true"
            ]
        },
        2: {
            title: "Nama Proyek 2",
            description: "Deskripsi lengkap untuk Proyek 2. Proyek ini melibatkan branding dan pengembangan identitas visual yang kuat untuk sebuah startup. Kami fokus pada logo, palet warna, dan tipografi.",
            images: [
                "https://via.placeholder.com/800x600?text=Proyek+2-1",
                "https://via.placeholder.com/800x600?text=Proyek+2-2",
                "https://via.placeholder.com/800x600?text=Proyek+2-3",
                "https://via.placeholder.com/800x600?text=Proyek+2-4"
            ]
        },
        3: {
            title: "Nama Proyek 3",
            description: "Deskripsi lengkap untuk Proyek 3. Proyek ini adalah desain website e-commerce yang berfokus pada pengalaman pengguna yang intuitif dan menarik. Kami mengintegrasikan sistem pembayaran yang mudah dan navigasi yang sederhana.",
            images: [
                "https://via.placeholder.com/800x600?text=Proyek+3-1",
                "https://via.placeholder.com/800x600?text=Proyek+3-2",
                "https://via.placeholder.com/800x600?text=Proyek+3-3",
                "https://via.placeholder.com/800x600?text=Proyek+3-4"
            ]
        },
		        4: {
            title: "Nama Proyek 3",
            description: "Deskripsi lengkap untuk Proyek 3. Proyek ini adalah desain website e-commerce yang berfokus pada pengalaman pengguna yang intuitif dan menarik. Kami mengintegrasikan sistem pembayaran yang mudah dan navigasi yang sederhana.",
            images: [
                "https://via.placeholder.com/800x600?text=Proyek+3-1",
                "https://via.placeholder.com/800x600?text=Proyek+3-2",
                "https://via.placeholder.com/800x600?text=Proyek+3-3",
                "https://via.placeholder.com/800x600?text=Proyek+3-4"
            ]
        },
		        5: {
            title: "Nama Proyek 3",
            description: "Deskripsi lengkap untuk Proyek 3. Proyek ini adalah desain website e-commerce yang berfokus pada pengalaman pengguna yang intuitif dan menarik. Kami mengintegrasikan sistem pembayaran yang mudah dan navigasi yang sederhana.",
            images: [
                "https://via.placeholder.com/800x600?text=Proyek+3-1",
                "https://via.placeholder.com/800x600?text=Proyek+3-2",
                "https://via.placeholder.com/800x600?text=Proyek+3-3",
                "https://via.placeholder.com/800x600?text=Proyek+3-4"
            ]
        },
		        6: {
            title: "Nama Proyek 3",
            description: "Deskripsi lengkap untuk Proyek 3. Proyek ini adalah desain website e-commerce yang berfokus pada pengalaman pengguna yang intuitif dan menarik. Kami mengintegrasikan sistem pembayaran yang mudah dan navigasi yang sederhana.",
            images: [
                "https://via.placeholder.com/800x600?text=Proyek+3-1",
                "https://via.placeholder.com/800x600?text=Proyek+3-2",
                "https://via.placeholder.com/800x600?text=Proyek+3-3",
                "https://via.placeholder.com/800x600?text=Proyek+3-4"
            ]
        },
		        7: {
            title: "Nama Proyek 3",
            description: "Deskripsi lengkap untuk Proyek 3. Proyek ini adalah desain website e-commerce yang berfokus pada pengalaman pengguna yang intuitif dan menarik. Kami mengintegrasikan sistem pembayaran yang mudah dan navigasi yang sederhana.",
            images: [
                "https://via.placeholder.com/800x600?text=Proyek+3-1",
                "https://via.placeholder.com/800x600?text=Proyek+3-2",
                "https://via.placeholder.com/800x600?text=Proyek+3-3",
                "https://via.placeholder.com/800x600?text=Proyek+3-4"
            ]
        },
    };

    // Fungsi untuk menampilkan modal
    function showModal(projectId) {
        const project = projects[projectId];
        if (!project) return;

		document.body.classList.add('modal-open'); 
        
        modal.classList.add('show');
    
	
        // Isi konten modal
        document.getElementById('modal-title').innerText = project.title;
        document.getElementById('modal-description').innerText = project.description;
        
        const gallery = document.getElementById('modal-gallery');
        gallery.innerHTML = ''; // Kosongkan galeri sebelumnya
		

        // Buat dan tambahkan gambar-gambar ke galeri
        project.images.forEach((imgSrc, index) => {
            const link = document.createElement('a');
            link.href = '#';
            //link.setAttribute('data-lightbox', 'modal-gallery');
            link.setAttribute('data-title', `${project.title} - Foto ${index + 1}`);

            const img = document.createElement('img');
            img.setAttribute('data-full-img', imgSrc);
			img.classList.add('can-overlay-img');
            img.src = imgSrc.replace("800x600", "400x300"); // Gunakan thumbnail
            img.alt = `Foto ${index + 1} dari ${project.title}`;
			
			img.addEventListener('click',()=>{
				const fullImageUrl = img.getAttribute('data-full-img');
				console.log(fullImageUrl);
				fullImage.src = fullImageUrl;
				fullImageOverlay.classList.add('show');
			})

            link.appendChild(img);
            gallery.appendChild(link);
        });

        // Tampilkan modal
        modal.classList.add('show');
    }

    // Fungsi untuk menyembunyikan modal
    function hideModal() {
        modal.classList.remove('show');
    
	
	document.body.classList.remove('modal-open');
    
    modal.classList.remove('show');
}

   overlayCloseBtn.addEventListener('click', function() {
        fullImageOverlay.classList.remove('show');
    });
    
    // Event listener untuk menutup overlay jika area di luar gambar diklik
    fullImageOverlay.addEventListener('click', function(e) {
        if (e.target === this || e.target === overlayCloseBtn) {
            fullImageOverlay.classList.remove('show');
        }
    });

    // Event listener untuk tombol "Lihat Detail"
    viewDetailBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            showModal(projectId);
        });
    });

    // Event listener untuk tombol close
    closeBtn.addEventListener('click', function() {
        hideModal();
    });

    // Menutup modal jika area di luar modal diklik
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });
});

// Tambahan untuk section Portofolio

// script.js
document.addEventListener('DOMContentLoaded', function() {
    // ... (kode Anda yang lain, seperti untuk modal) ...

    const allProjectsGrid = document.getElementById('all-projects');
    const seeMoreBtn = document.getElementById('see-more-btn');
    const itemsPerLoad = 3; // Jumlah item yang ditampilkan per klik

    function showItems() {
        const hiddenProjects = allProjectsGrid.querySelectorAll('.portfolio-item.hidden');
        
        for (let i = 0; i < itemsPerLoad && i < hiddenProjects.length; i++) {
            hiddenProjects[i].classList.remove('hidden');
        }

        const remainingHidden = allProjectsGrid.querySelectorAll('.portfolio-item.hidden').length;
        if (remainingHidden === 0) {
            seeMoreBtn.style.display = 'none';
        }
    }

    // Tampilkan 3 item pertama saat halaman dimuat
    showItems();

    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function() {
            showItems();
        });
    }
});