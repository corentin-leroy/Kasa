import './Banner.scss'

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__image" />
      {title && (
        <h1 className="banner__title">
          <span className="banner__title-text">{title}</span>
        </h1>
      )}
    </div>
  )
}

export default Banner