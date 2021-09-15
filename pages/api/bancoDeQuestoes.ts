import QuestaoModel from "../../models/questao";
import RespostaModel from "../../models/resposta";


const questoes: QuestaoModel[] = [
    new QuestaoModel(201, 'Qual bicho transmite a doença de Chagas?', [
        RespostaModel.errada("Barata"),
        RespostaModel.errada("Pulga"),
        RespostaModel.errada("Aranha"),
        RespostaModel.certa("Barbeiro"),
    ]),    
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum"?', [
        RespostaModel.errada("Caju"),
        RespostaModel.errada("Côco"),
        RespostaModel.errada("Chuchu"),
        RespostaModel.certa("Abóbora"),
    ]),
    new QuestaoModel(203, 'Qual coletivo de cães?', [
        RespostaModel.errada("Manada"),
        RespostaModel.errada("Alcateia"),
        RespostaModel.errada("Rebanho"),
        RespostaModel.certa("Matilha"),
    ]),
    new QuestaoModel(204, 'Qual é o trinagulo que possui todos os lados diferentes?', [
        RespostaModel.errada("Èquilatero"),
        RespostaModel.errada("Isóceles"),
        RespostaModel.errada("Trapézio"),
        RespostaModel.certa("Escaleno"),
    ]),

]

export default questoes;