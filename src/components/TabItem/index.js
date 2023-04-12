// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, selectedTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const applyStyle = isActive ? ` tab-item apply-tab-style` : `tab-item`

  const onSelectedTab = () => {
    selectedTab(tabId)
  }
  return (
    <li>
      <button type="button" className="button" onClick={onSelectedTab}>
        <p className={applyStyle}>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
