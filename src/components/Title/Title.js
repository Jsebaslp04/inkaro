import styles from './Title.module.css'


function Title(props) {
    return ( 
        <h1 className={styles.title}>{props.name_page}</h1>
    )
}

export default Title
