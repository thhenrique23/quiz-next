import { useEffect, useState } from "react"
import Questionario from "../components/Questionario"
import QuestaoModel from "../models/questao"
import router, { useRouter } from "next/router"

const BASE_URL = "http://localhost:3000/api"

export default function Home() {
  const [idsQuestoes, setIdQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  const carregarIds = async () => {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const ids = await resp.json();
    console.log(ids);
    setIdQuestoes(ids);
  }
  const carregarQuestao = async (idQuestao: number) => {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();

    setQuestao(QuestaoModel.criarUsandoObjeto(json));
  }

  useEffect(() => {
    carregarIds();
  }, [])

  useEffect(() => {
    idsQuestoes.length > 0 && carregarQuestao(idsQuestoes[0]);
  }, [idsQuestoes])

  const respostaFornecida = (indice: number) => {
    setQuestao(questao.responderCom(indice));
  }
  const tempoEsgotado = () => {
    if(questao.naoRespondida) {
      setQuestao(questao.responderCom(-1));
    }
  }

  const questaoRespondida = (questaoRespondida: QuestaoModel) => {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  }

  const obterProximoId = () => {
    if(questao) {
      const proximoIndice = idsQuestoes.indexOf(questao.id) + 1;
      return idsQuestoes[proximoIndice];
    }
  }

  const irPraProximoPasso = () => {
    const proximoId = obterProximoId();
    proximoId ? irPraProximaQuestao(proximoId) : finalizar();
  }

  const irPraProximaQuestao = (proximoId: number) => {
    carregarQuestao(proximoId);
  }

  const finalizar = () => {
    router.push({
      pathname: '/resultado',
      query: {
        total: idsQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  return (
    questao ? 
        <Questionario 
          questao={questao}
          ultima={!obterProximoId()}
          questaoRespondida={questaoRespondida}
          irPraProximoPasso={irPraProximoPasso}
        />
      : false
    
  )
}
