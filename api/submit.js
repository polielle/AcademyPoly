// api/submit.js
// Função serverless (Vercel) para salvar mensagens no Supabase

export default async function handler(req, res) {
    // Permite apenas método POST
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    try {
      const { name, email, phone, message } = req.body || {};
  
      // Validação básica
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
      }
  
      // Pega variáveis de ambiente do Vercel
      const SUPABASE_URL = process.env.SUPABASE_URL;
      const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
      if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
        return res.status(500).json({ error: 'Configuração ausente no servidor' });
      }
  
      // Faz a requisição ao Supabase REST API
      const response = await fetch(`${SUPABASE_URL}/rest/v1/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message
        })
      });
  
      if (!response.ok) {
        const error = await response.text();
        return res.status(502).json({ error: 'Erro ao inserir no Supabase', detail: error });
      }
  
      const data = await response.json();
      return res.status(200).json({ success: true, record: data[0] });
  
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
  