import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const onChangeImage = () => {
    changeImage(id)
  }
  const smallImageClassName = isActive
    ? `thumbnailImage active`
    : 'thumbnailImage'
  return (
    <li className="smallImage">
      <button className="imageBtn" onClick={onChangeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={smallImageClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
