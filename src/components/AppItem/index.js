// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="appItem">
      <img src={imageUrl} alt={appName} className="appImage" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
