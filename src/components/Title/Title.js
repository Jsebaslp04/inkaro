import './Title.css'

function Title (props) {
    return (
        <div className='letter_title'>
        <h1 className='Header'>{props.name_page}</h1>
        </div>
    )
}

export default Title
