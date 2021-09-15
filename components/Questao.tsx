import QuestaoModel from "../models/questao";
import questoes from "../pages/api/bancoDeQuestoes";
import styles from "../styles/Questao.module.css";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

interface QuestaoProps {
    valor: QuestaoModel
    tempoPraResposta?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

const letras = [
    { letra: 'A', cor: '#F2C866'},
    { letra: 'B', cor: '#F266BA'},
    { letra: 'C', cor: '#85D4F2'},
    { letra: 'D', cor: '#BCE596'},
]

export default function Questao(props: QuestaoProps) {
    const questao = props.valor;

    const renderizarRespostas = () => {
        return questao.respostas.map((resposta, i) => {
            return <Resposta 
                    key={`${i}-${questao.id}`}
                    valor={resposta}
                    indice={i}
                    letra={letras[i].letra}
                    corFundoLetra={letras[i].cor}
                    respostaFornecida={props.respostaFornecida}
                />
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            <Temporizador key={questao.id} duracao={props.tempoPraResposta ?? 10} tempoEsgotado={props.tempoEsgotado}/>
            {renderizarRespostas()}
        </div>
    )
}
