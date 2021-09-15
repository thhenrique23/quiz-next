import QuestaoModel from "../models/questao";
import styles from "../styles/Questionario.module.css";
import Botao from "./Botao";
import Questao from "./Questao";

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    const respostaFornecida = (indice: number) => {
        if(props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {props.questao && (
                <>
                    <Questao 
                        valor={props.questao}
                        tempoPraResposta={6}
                        respostaFornecida={respostaFornecida}
                        tempoEsgotado={props.irPraProximoPasso}
                    />
                    <Botao 
                        onClick={props.irPraProximoPasso}
                        texto={props.ultima ? 'Finalizar' : 'Proximo'}
                    />
                </>
            )}
        </div>            
    )
}
