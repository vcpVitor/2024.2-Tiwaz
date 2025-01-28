const validarCusto = (req, res, next) => {
    const { nome, data, tipoCusto, descricao, valorCusto } = req.body;
  
    if (!nome || !data || !tipoCusto || !descricao || !valorCusto) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }
  
    next();
  };
  
  module.exports = {
    validarCusto,
  };
  
  app.use(express.json());
