import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchTerm } from '../actions/index'
import styles from '../../style/searchbar.css';

class SearchBar extends Component {

	render(){
		return <div className={styles.div} >
		<input className={styles.default} 
		value={this.props.term} 
		onChange={event => this.onInputChange(event.target.value)} />
		</div>
	}
	onInputChange(term){
    	this.props.setSearchTerm(term);
	}
	
};

function mapStateToProps(state) {
	return{
		term: state.video.term
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSearchTerm: setSearchTerm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);