export const GifItem = ({title, url}) => {

  return (
    <div className='card'>
        <img src={url} alt={title} style={{ width: '400px' }}/>
        <p>{title}</p> 
    </div>
  )
}
