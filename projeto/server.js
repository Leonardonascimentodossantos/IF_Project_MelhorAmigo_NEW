// Servidor Node.js para o Petshop Melhor Amigo
// Este arquivo é opcional e serve para implementar funcionalidades de backend

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Configuração do nodemailer (exemplo)
const transporter = nodemailer.createTransporter({
    service: 'gmail', // ou outro provedor
    auth: {
        user: process.env.EMAIL_USER || 'contato@melhoramigo.com.br',
        pass: process.env.EMAIL_PASS || 'sua_senha_aqui'
    }
});

// Rotas

// Página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API para envio de formulário de contato
app.post('/api/contact', async (req, res) => {
    try {
        const { nome, email, telefone, petNome, petTipo, servico, mensagem, newsletter } = req.body;
        
        // Validação básica
        if (!nome || !email || !telefone || !mensagem) {
            return res.status(400).json({
                success: false,
                message: 'Campos obrigatórios não preenchidos'
            });
        }
        
        // Configurar email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'contato@melhoramigo.com.br',
            subject: `Novo contato do site - ${nome}`,
            html: `
                <h2>Novo contato recebido pelo site</h2>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${telefone}</p>
                <p><strong>Nome do Pet:</strong> ${petNome || 'Não informado'}</p>
                <p><strong>Tipo do Pet:</strong> ${petTipo || 'Não informado'}</p>
                <p><strong>Serviço de Interesse:</strong> ${servico || 'Não especificado'}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${mensagem}</p>
                <p><strong>Quer receber newsletter:</strong> ${newsletter ? 'Sim' : 'Não'}</p>
                <hr>
                <p><em>Enviado através do site do Petshop Melhor Amigo</em></p>
            `
        };
        
        // Enviar email
        await transporter.sendMail(mailOptions);
        
        // Se newsletter foi marcado, adicionar à lista (implementar conforme necessário)
        if (newsletter) {
            // Aqui você adicionaria o email à lista de newsletter
            console.log(`Newsletter subscription: ${email}`);
        }
        
        res.json({
            success: true,
            message: 'Mensagem enviada com sucesso!'
        });
        
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.status(500).json({
            success: false,
            message: 'Erro interno do servidor'
        });
    }
});

// API para newsletter
app.post('/api/newsletter', async (req, res) => {
    try {
        const { email } = req.body;
        
        if (!email || !email.includes('@')) {
            return res.status(400).json({
                success: false,
                message: 'E-mail inválido'
            });
        }
        
        // Aqui você implementaria a lógica para adicionar à newsletter
        // Por exemplo: salvar em banco de dados, integrar com serviços como Mailchimp, etc.
        
        console.log(`Nova inscrição na newsletter: ${email}`);
        
        res.json({
            success: true,
            message: 'Inscrição realizada com sucesso!'
        });
        
    } catch (error) {
        console.error('Erro na newsletter:', error);
        res.status(500).json({
            success: false,
            message: 'Erro interno do servidor'
        });
    }
});

// API para obter produtos/serviços
app.get('/api/services', (req, res) => {
    const services = [
        {
            id: 1,
            name: 'Banho Relaxante',
            category: 'limpeza',
            price: 'A partir de R$ 35,00',
            description: 'Banhos relaxantes com produtos de qualidade para deixar seu pet limpo e cheiroso.',
            duration: '30-45 minutos'
        },
        {
            id: 2,
            name: 'Tosa Especializada',
            category: 'tosa',
            price: 'A partir de R$ 45,00',
            description: 'Serviços profissionais de tosa com técnicas avançadas para um visual impecável.',
            duration: '45-90 minutos'
        },
        {
            id: 3,
            name: 'Ração Premium',
            category: 'racao',
            price: 'A partir de R$ 45,00',
            description: 'Seleção de rações premium com nutrição balanceada para todas as idades.',
            availability: 'Em estoque'
        }
    ];
    
    res.json(services);
});

// API para agendamento
app.post('/api/schedule', async (req, res) => {
    try {
        const { nome, email, telefone, petNome, servico, data, hora, observacoes } = req.body;
        
        // Validação
        if (!nome || !email || !telefone || !petNome || !servico || !data || !hora) {
            return res.status(400).json({
                success: false,
                message: 'Todos os campos são obrigatórios para agendamento'
            });
        }
        
        // Aqui você implementaria a lógica de agendamento
        // Por exemplo: verificar disponibilidade, salvar no banco, enviar confirmação
        
        console.log('Novo agendamento:', {
            nome, email, telefone, petNome, servico, data, hora, observacoes
        });
        
        // Enviar email de confirmação
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Agendamento Confirmado - Petshop Melhor Amigo',
            html: `
                <h2>Agendamento Confirmado! 🐾</h2>
                <p>Olá ${nome},</p>
                <p>Seu agendamento foi confirmado com sucesso!</p>
                <hr>
                <p><strong>Pet:</strong> ${petNome}</p>
                <p><strong>Serviço:</strong> ${servico}</p>
                <p><strong>Data:</strong> ${data}</p>
                <p><strong>Horário:</strong> ${hora}</p>
                ${observacoes ? `<p><strong>Observações:</strong> ${observacoes}</p>` : ''}
                <hr>
                <p>Aguardamos você e seu melhor amigo!</p>
                <p><strong>Petshop Melhor Amigo</strong><br>
                📞 (11) 99999-9999<br>
                📍 Rua dos Pets, 123 - São Paulo</p>
            `
        };
        
        await transporter.sendMail(mailOptions);
        
        res.json({
            success: true,
            message: 'Agendamento realizado com sucesso! Você receberá um e-mail de confirmação.'
        });
        
    } catch (error) {
        console.error('Erro no agendamento:', error);
        res.status(500).json({
            success: false,
            message: 'Erro interno do servidor'
        });
    }
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Algo deu errado!'
    });
});

// Middleware para rotas não encontradas
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🐾 Servidor do Petshop Melhor Amigo rodando na porta ${PORT}`);
    console.log(`🌐 Acesse: http://localhost:${PORT}`);
});

module.exports = app;
