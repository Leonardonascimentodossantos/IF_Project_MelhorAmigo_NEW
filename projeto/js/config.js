// Configurações do Site - Petshop Melhor Amigo
const CONFIG = {
    // Informações da Empresa
    empresa: {
        nome: "Melhor Amigo",
        slogan: "Cuidando do seu melhor amigo com amor e dedicação",
        proprietaria: "Marcia Oliveira Santos",
        funcionarios: 13,
        fundacao: "2013",
        crmv: "CRMV-SP 12345"
    },
    
    // Contato
    contato: {
        telefone: "(11) 99999-9999",
        telefoneFixo: "(11) 3333-3333",
        email: "contato@melhoramigo.com.br",
        emailAgendamento: "agendamento@melhoramigo.com.br",
        endereco: {
            rua: "Rua dos Pets, 123",
            bairro: "Vila Animal",
            cidade: "São Paulo",
            uf: "SP",
            cep: "01234-567"
        },
        whatsapp: "5511999999999"
    },
    
    // Horário de Funcionamento
    horarios: {
        segundaAViernes: "8h às 18h",
        sabado: "8h às 16h",
        domingo: "9h às 14h"
    },
    
    // Redes Sociais
    redesSociais: {
        facebook: "https://facebook.com/petshopmelhoramigo",
        instagram: "https://instagram.com/petshopmelhoramigo",
        whatsapp: "https://wa.me/5511999999999"
    },
    
    // Cores da Marca
    cores: {
        primario: "#2d8f2d",
        secundario: "#4caf50",
        escuro: "#1b5e20",
        claro: "#66bb6a",
        branco: "#ffffff",
        cinza: "#f8fffe"
    },
    
    // Serviços
    servicos: [
        {
            nome: "Banho Relaxante",
            descricao: "Banhos relaxantes com produtos de qualidade para deixar seu pet limpo e cheiroso.",
            preco: "A partir de R$ 35,00",
            categoria: "limpeza"
        },
        {
            nome: "Tosa Especializada",
            descricao: "Serviços profissionais de tosa com técnicas avançadas para um visual impecável.",
            preco: "A partir de R$ 45,00",
            categoria: "tosa"
        },
        {
            nome: "Ração Premium",
            descricao: "Seleção de rações premium com nutrição balanceada para todas as idades.",
            preco: "A partir de R$ 45,00",
            categoria: "racao"
        }
    ],
    
    // Promoções
    promocoes: [
        {
            nome: "Combo Banho + Tosa",
            preco: "R$ 80,00",
            precoOriginal: "R$ 100,00",
            desconto: "20%"
        },
        {
            nome: "Ração Premium 15kg",
            preco: "R$ 120,00",
            precoOriginal: "R$ 150,00",
            desconto: "20%"
        }
    ],
    
    // Pontos de Referência
    pontosReferencia: [
        "Próximo ao Shopping Pet Center",
        "Em frente à Praça dos Animais",
        "500m do metrô Estação Pet"
    ],
    
    // Facilidades
    facilidades: [
        "Estacionamento gratuito para clientes",
        "Ambiente climatizado",
        "Produtos de alta qualidade",
        "Profissionais especializados",
        "Atendimento personalizado"
    ],
    
    // Perguntas Frequentes
    faq: [
        {
            pergunta: "Preciso agendar horário?",
            resposta: "Sim, recomendamos agendamento para garantir o melhor atendimento. Você pode agendar por telefone, WhatsApp ou através do formulário de contato."
        },
        {
            pergunta: "Quanto tempo demora cada serviço?",
            resposta: "Varia conforme o serviço: Banho (30-45min), Tosa (45-90min), Higienização completa (60-120min)."
        },
        {
            pergunta: "Vocês atendem animais grandes?",
            resposta: "Sim! Atendemos pets de todos os tamanhos com equipamentos adequados e profissionais experientes."
        },
        {
            pergunta: "Posso acompanhar o serviço?",
            resposta: "Por questões de segurança e para o conforto do animal, preferimos que os tutores aguardem na recepção."
        }
    ],
    
    // Depoimentos
    depoimentos: [
        {
            nome: "Maria Silva",
            pet: "Max (Golden Retriever)",
            depoimento: "Meu Max sempre sai lindo daqui! A equipe é super carinhosa e profissional. Recomendo para todos!"
        },
        {
            nome: "João Santos",
            pet: "Bella (Poodle)",
            depoimento: "O melhor petshop da região! Minha Bella adora vir aqui. O cuidado com os animais é excepcional."
        },
        {
            nome: "Ana Costa",
            pet: "Simba (Persa)",
            depoimento: "Confio totalmente na equipe do Melhor Amigo. Eles transformaram meu gatinho resgatado!"
        }
    ],
    
    // Configurações do Site
    site: {
        titulo: "Petshop Melhor Amigo - Cuidando do seu melhor amigo",
        descricao: "Petshop especializado em cuidados para cães e gatos. Oferecemos serviços de banho, tosa, produtos premium e muito mais.",
        palavrasChave: "petshop, banho, tosa, ração, cães, gatos, pets, animais, São Paulo",
        autor: "Petshop Melhor Amigo",
        versao: "1.0.0"
    }
};

// Exporta as configurações para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
