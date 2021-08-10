import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    } ;

   // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  handleChange (e) {
    console.log(this);
    this.setState({searchField: e.target.value}, () => {
      console.log(this.state)
    }) ;
  }
  render() {
    const  { monsters, searchField } = this.state;
    const filterMonosters = monsters.filter(monoster => (
      monoster.name.toLowerCase().includes(searchField.toLowerCase())
    ));
    console.log(filterMonosters);
  return (
    <div className="App">
      <h1>Monosters Rolodex</h1>
      <SearchBox placeholder='search monoster' 
      handleChange={(e) => this.handleChange(e) } />
      <CardList monsters={filterMonosters}>
      </CardList>
      
    </div>
  );
  }
}

export default App;
