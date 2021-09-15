// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import questoes from "../bancoDeQuestoes";

export default function handler(req, res) {
  const id = +req.query.id;

  const unicaQuestaoOuNada = questoes.find(questao => questao.id === id);

  if(unicaQuestaoOuNada) {
    const questaoSelecionada = unicaQuestaoOuNada.embaralharRespostas();
    res.status(200).json(questaoSelecionada.paraObjeto());
  }else {
    res.status(204).send();
  }
}
