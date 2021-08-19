import React, { Component } from 'react'


 class Card extends Component {
     constructor(props){
         super(props)
         this.state = {showPic : true }
     }

     handleClick = () => {
         this.setState({showPic : false})
         if(this.state.showPic === false){
             this.setState({showPic : true})
         }
     }


    render() {
        return (
                <div >
                    <button onClick={this.handleClick} className="btn frontpage">
                        
                            {
                            this.state.showPic?
                            <div className="content">
                                <img className="data-img" src={this.props.img} alt="data-image"/>
                                <h5>{this.props.name}</h5>
                            </div>

                                : 

                            <div className="info">
                                <ul>
                                    <li>{this.props.options[0]}</li>
                                    <li>{this.props.options[1]}</li>
                                    <li>{this.props.options[2]}</li>
                                </ul>
                             </div>
                            }
                            
                    </button>
                </div>
           
           
        )
    }
}




 
    


export default Card