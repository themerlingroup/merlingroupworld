import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class Titles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decentralized: this.props.decentralized,
            elementList: [
                {
                    decentralized: 'Bitcoin is open to everyone, it is sovereign.',
                    immutable: 'There will only be 21 Million EVER MADE!',
                    security: 'Bitcoin Blockchain is secure, with little on-chain vulnerabilities.',
                    unitofaccount: 'The FED started pricing goods in Bitcoin.',
                    pow: 'Verification method for consensus requiring effort instead of high quantity of coins.',
                    no3rd: 'Peer-Peer payments without intermediaries.'
                }
            ]
        };
    }

render() {
 
  return (
    <tr className="elem-row">
        <td>{this.props.decentralized}</td>
        <td>{this.props.immutable}</td>
        <td>{this.props.security}</td>
        <td>{this.props.unitofaccount}</td>
        <td>{this.props.pow}</td>
        <td>{this.props.no3rd}</td>
      </tr>
  );
  }
}
Titles.propTypes = {
    decentralized: PropTypes.string,
    immutable: PropTypes.string,
    security: PropTypes.string,
    unitofaccount: PropTypes.string,
    pow: PropTypes.string,
    no3rd: PropTypes.string
  
}
