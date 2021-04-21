import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import style from '../Header/styles.module.scss';

export default function Header(){

    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    }) // yarn add date-fns

    return(
        <header className={style.headerContainer}>
            <img src="/logo.svg" alt="PodCastr"/>
            <p>O melhor para você ouvir</p>
            <span>{currentDate}</span>
        </header>
    )
}