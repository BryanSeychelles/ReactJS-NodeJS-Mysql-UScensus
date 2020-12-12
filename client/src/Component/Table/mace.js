import * as React from 'react';
import {useState, useEffect } from 'react';
import Axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const Mace = () => {

  const classes = useStyles();

  const [data, setData]= useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const result = await Axios.get('http://localhost:3001/api/mace')
        setData(result.data)
        console.log(result.data)
    }
    fetchData()
}, [])

const cellEditProp = {
  mode: 'click'
};


class Section1 extends React.Component {
  constructor(props) {
      super(props);
  
      this.options = {
        sortIndicator: false ,
        sizePerPageList: [ {
            text: '25', value: 25
          }, {
            text: '50', value: 50
          }, {
            text: '100', value: 100
          },
        ]
      };
    }

  render() {

    return (
      <div>
          <BootstrapTable id="tablet" data={ data } options={ this.options } cellEdit={ cellEditProp } pagination>
              <TableHeaderColumn filter={ { type: 'TextFilter', delay: 1000 } } dataField='mace' dataAlign dataSort>Mace</TableHeaderColumn>
              <TableHeaderColumn filter={ { type: 'TextFilter', delay: 1000 } } isKey={ true }  dataField='COUNT(mace)' dataAlign dataSort>Count</TableHeaderColumn>
              <TableHeaderColumn filter={ { type: 'TextFilter', delay: 1000 } } dataField='AVG(age)' dataSort dataAlign dataSort>Average Age</TableHeaderColumn>
          </BootstrapTable>

      </div>
    );
  }
}

  return (
    <div>
    <Section1/>
  </div>
  );
}