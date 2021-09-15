import styles from "../styles/Botao.module.css";
import Link from 'next/link';

interface BotaoProps {
    texto: string
    href?: string
    onClick?: (e: any) => void
}

export default function Botao(props: BotaoProps) {

    const renderizarBotao = () => {
        return <button onClick={props.onClick} className={styles.botao}>
                {props.texto}
            </button>
    }

    return props.href ? (
        <Link passHref href={props.href}>
            {renderizarBotao()}
        </Link>
    ) : (renderizarBotao())
}
