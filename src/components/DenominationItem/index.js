// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, withDraw} = props

  return (
    <ul className="amount">
      {denominationsList.map(each => (
        <li key={each.id}>
          <button type="button" onClick={() => withDraw(each.id)}>
            {each.value}
          </button>
        </li>
      ))}
    </ul>
  )
}
export default DenominationItem
