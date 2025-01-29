const validarCusto = (req, res, next) => { // Funcao que vai validar a requisicao
    const { nome, data, tipoCusto, descricao, valorCusto } = req.body; // Pega os dados do corpo da requisicao
  
    if (!nome || !data || !tipoCusto || !descricao || !valorCusto) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }
  
    next();
  };
  
  module.exports = {
    validarCusto,
  };
  
  app.use(express.json());
