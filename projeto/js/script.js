// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Inicialização das funcionalidades
    initMobileMenu();
    initGallery();
    initContactForm();
    initSmoothScrolling();
    initAnimations();
    initImageModal();
    
    console.log('🐾 Petshop Melhor Amigo - Site carregado com sucesso!');
});

// ===== MENU MOBILE =====
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fecha o menu quando clica em um link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Fecha o menu quando clica fora dele
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// ===== GALERIA =====
function initGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

// ===== MODAL DE IMAGENS =====
function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close')[0];
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    let currentImageIndex = 0;
    let visibleImages = [];
    
    if (modal && modalImg && galleryItems.length > 0) {
        // Adiciona evento de clique para cada imagem da galeria
        galleryItems.forEach((img, index) => {
            img.addEventListener('click', function() {
                // Atualiza a lista de imagens visíveis
                updateVisibleImages();
                currentImageIndex = visibleImages.indexOf(index);
                
                modal.style.display = 'block';
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
                
                // Adiciona classe para animação
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);
            });
        });
        
        // Fecha o modal quando clica no X
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        
        // Fecha o modal quando clica fora da imagem
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Fecha o modal com a tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
            if (e.key === 'ArrowLeft' && modal.style.display === 'block') {
                changeImage(-1);
            }
            if (e.key === 'ArrowRight' && modal.style.display === 'block') {
                changeImage(1);
            }
        });
    }
    
    function updateVisibleImages() {
        visibleImages = [];
        galleryItems.forEach((img, index) => {
            if (img.closest('.gallery-item').style.display !== 'none') {
                visibleImages.push(index);
            }
        });
    }
    
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Função para navegação entre imagens no modal
function changeImage(direction) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    if (modal.style.display === 'block') {
        // Atualiza a lista de imagens visíveis
        let visibleImages = [];
        galleryItems.forEach((img, index) => {
            if (img.closest('.gallery-item').style.display !== 'none') {
                visibleImages.push(index);
            }
        });
        
        let currentIndex = visibleImages.findIndex(i => galleryItems[i].src === modalImg.src);
        currentIndex += direction;
        
        if (currentIndex >= visibleImages.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = visibleImages.length - 1;
        }
        
        const newImageIndex = visibleImages[currentIndex];
        modalImg.src = galleryItems[newImageIndex].src;
        captionText.innerHTML = galleryItems[newImageIndex].alt;
    }
}

// Função para carregar mais fotos
function loadMorePhotos() {
    const button = document.querySelector('.load-more-btn');
    if (button) {
        button.innerHTML = 'Carregando...';
        button.disabled = true;
        
        // Simula carregamento de mais fotos
        setTimeout(() => {
            // Aqui você adicionaria a lógica para carregar mais fotos
            // Por enquanto, apenas mostra uma mensagem
            button.innerHTML = 'Todas as fotos carregadas!';
            
            setTimeout(() => {
                button.style.display = 'none';
            }, 2000);
        }, 1500);
    }
}

// ===== FORMULÁRIO DE CONTATO =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            if (validateForm()) {
                submitForm();
            }
        });
        
        // Máscara para telefone
        const telefoneInput = document.getElementById('telefone');
        if (telefoneInput) {
            telefoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                value = value.replace(/(\d{2})(\d)/, '($1) $2');
                value = value.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
                e.target.value = value;
            });
        }
    }
}

function validateForm() {
    const form = document.getElementById('contactForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    // Remove mensagens de erro anteriores
    document.querySelectorAll('.error-message').forEach(msg => msg.remove());
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'Este campo é obrigatório');
            isValid = false;
        }
    });
    
    // Validação específica para email
    const emailField = document.getElementById('email');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            showFieldError(emailField, 'Por favor, insira um e-mail válido');
            isValid = false;
        }
    }
    
    // Validação específica para telefone
    const telefoneField = document.getElementById('telefone');
    if (telefoneField && telefoneField.value) {
        const telefoneRegex = /\(\d{2}\) \d{4,5}-\d{4}/;
        if (!telefoneRegex.test(telefoneField.value)) {
            showFieldError(telefoneField, 'Por favor, insira um telefone válido');
            isValid = false;
        }
    }
    
    return isValid;
}

function showFieldError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.5rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#e74c3c';
    
    // Remove o erro quando o usuário começa a digitar
    field.addEventListener('input', function() {
        errorDiv.remove();
        field.style.borderColor = '';
    }, { once: true });
}

function submitForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Mostra loading
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simula envio do formulário
    setTimeout(() => {
        // Aqui você faria a requisição real para o servidor
        showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        form.reset();
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function showMessage(text, type) {
    // Remove mensagens anteriores
    document.querySelectorAll('.message').forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
    
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(messageDiv, form);
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// ===== SOLICITAÇÃO DE INFORMAÇÕES DE PRODUTOS =====
function requestInfo(productName) {
    // Redireciona para a página de contato com o produto pré-selecionado
    const url = new URL('contato.html', window.location.origin);
    url.searchParams.set('produto', productName);
    window.location.href = url.toString();
}

// Preenche o formulário com informações do produto (se vier da URL)
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const produto = urlParams.get('produto');
    
    if (produto) {
        const servicoSelect = document.getElementById('servico');
        const mensagemTextarea = document.getElementById('mensagem');
        
        if (servicoSelect) {
            // Tenta encontrar o produto no select
            const option = Array.from(servicoSelect.options).find(
                opt => opt.text.toLowerCase().includes(produto.toLowerCase())
            );
            if (option) {
                servicoSelect.value = option.value;
            }
        }
        
        if (mensagemTextarea && !mensagemTextarea.value) {
            mensagemTextarea.value = `Olá! Gostaria de mais informações sobre: ${produto}`;
        }
    }
});

// ===== SCROLL SUAVE =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== ANIMAÇÕES =====
function initAnimations() {
    // Intersection Observer para animações ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observa elementos que devem ser animados
    document.querySelectorAll('.service-card, .product-card, .gallery-item, .testimonial-card, .faq-item').forEach(el => {
        observer.observe(el);
    });
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#ffffff';
            navbar.style.backdropFilter = 'none';
        }
    }
});

// ===== NEWSLETTER =====
function subscribeNewsletter(email) {
    if (!email || !email.includes('@')) {
        alert('Por favor, insira um e-mail válido');
        return;
    }
    
    // Simula inscrição na newsletter
    console.log('Newsletter subscription:', email);
    alert('Obrigado por se inscrever! Você receberá nossas novidades em breve.');
}

// ===== UTILITÁRIOS =====

// Formatar telefone
function formatPhone(value) {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
}

// Validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Erro JavaScript:', e.error);
    // Em produção, você enviaria este erro para um serviço de monitoramento
});

// ===== LAZY LOADING DE IMAGENS =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== PERFORMANCE =====
// Debounce function para otimizar eventos de scroll/resize
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplica debounce aos eventos de scroll
const debouncedScrollHandler = debounce(function() {
    // Handlers de scroll aqui
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

// ===== ACESSIBILIDADE =====
// Navegação por teclado
document.addEventListener('keydown', function(e) {
    // ESC fecha modals/menus
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal[style*="block"]');
        const activeMenu = document.querySelector('.nav-menu.active');
        
        if (activeModal) {
            activeModal.style.display = 'none';
        }
        if (activeMenu) {
            activeMenu.classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        }
    }
});

// Focus trap para modals
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}
