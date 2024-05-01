// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withDraw = id => {
    console.log(id)
    switch (id) {
      case 1:
        this.setState(prevState => ({amount: prevState.amount - 50}))
        break
      case 2:
        this.setState(prevState => ({amount: prevState.amount - 100}))
        break
      case 3:
        this.setState(prevState => ({amount: prevState.amount - 200}))
        break
      case 4:
        this.setState(prevState => ({amount: prevState.amount - 500}))
        break
      default:
        console.log('nothing')
    }
  }

  render() {
    const {amount} = this.state

    const {denominationsList} = this.props

    return (
      <div className="con">
        <div className="subCon">
          <div className="logoName">
            <h1 className="box">S</h1>

            <h1>Sivaram setty</h1>
          </div>
          <div className="logoName">
            <p>Your Balance</p>

            <p>{amount}</p>
          </div>
          <div className="ruppes">
            <p>In Ruppes</p>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <DenominationItem
            denominationsList={denominationsList}
            withDraw={this.withDraw}
          />
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
