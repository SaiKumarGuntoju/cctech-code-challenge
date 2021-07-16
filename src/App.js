import { Component } from "react"
import './App.css'

class App extends Component{
  state={userDataList:[]}

  componentDidMount(){
    this.getUserDetails()
  }

  getUserDetails = async () =>{
    const url = 'https://randomuser.me/api/?results=10'
    const response = await fetch(url)
    const data = await response.json()
    const userDetails = data.results
    console.log(userDetails)
    const updatedData = userDetails.map(user => ({
      FullName: `${user.name.title} ${user.name.first} ${user.name.last}`,
      Email : user.email,
      Address : `${user.location.street.name},${user.location.city},
      ${user.location.state},${user.location.country},${user.location.postcode}`
    }))
    this.setState({userDataList:updatedData})
  }

  renderHeaderSection = () => (
          <div className="header-container">
            <p className="header-title">User List</p>
          </div>
  )

  renderUserData = () => {
    const {userDataList} = this.state
    return(
          <div className="app-body-section">
              {userDataList.map(eachUser => {
                return(
                  <div className="user-details-container">
                    <div className="photo-container"><p className="photo-text">Photo</p> </div>
                    <div className="vertical-line"></div>
                    <div className="user-bio-container">
                      <p>{eachUser.FullName}</p>
                      <p className="email">{eachUser.Email}</p>
                      <p className="address">{eachUser.Address}</p>
                    </div>
                  </div>
                )
              })}
          </div>
    )
  }

  renderFooterSection  = () => (
        <div className="footer-container">
          <p className="footer-title">Frontend development challenge 2021</p>
        </div>
  )

  render(){
    return(
      <div className="app-container">
          {this.renderHeaderSection()}
          {this.renderUserData()}
          {this.renderFooterSection()}
      </div>
    )
  }
}

export default App

