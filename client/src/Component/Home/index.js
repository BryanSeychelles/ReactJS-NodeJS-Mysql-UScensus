import React, {useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav'
import Axios from 'axios'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {ClassOfWorker} from '../Table/classofworker'
import {Education} from '../Table/education'
import {LastEducation} from '../Table/lasteducation'
import {MaritalStatus} from '../Table/maritalstatus'
import {MajorIndustryCode} from '../Table/majorindustrycode'
import {Mace} from '../Table/mace'


const tabsOne = () => {
    var elmt = document.getElementById('one')

    elmt.style.display = 'block'
    document.getElementById('two').style.display = 'none'
    document.getElementById('three').style.display = 'none'
    document.getElementById('four').style.display = 'none'
    document.getElementById('five').style.display = 'none'
    document.getElementById('six').style.display = 'none'
    document.getElementById('seven').style.display = 'none'

}

const tabsTwo = () => {
    var elmt = document.getElementById('two')

    elmt.style.display = 'block'
    document.getElementById('one').style.display = 'none'
    document.getElementById('three').style.display = 'none'
    document.getElementById('four').style.display = 'none'
    document.getElementById('five').style.display = 'none'
    document.getElementById('six').style.display = 'none'
    document.getElementById('seven').style.display = 'none'

}

const tabsThree = () => {
    var elmt = document.getElementById('three')

    elmt.style.display = 'block'
    document.getElementById('one').style.display = 'none'
    document.getElementById('two').style.display = 'none'
    document.getElementById('four').style.display = 'none'
    document.getElementById('five').style.display = 'none'
    document.getElementById('six').style.display = 'none'
    document.getElementById('seven').style.display = 'none'


}

const tabsFour= () => {
    var elmt = document.getElementById('four')

    elmt.style.display = 'block'
    document.getElementById('one').style.display = 'none'
    document.getElementById('two').style.display = 'none'
    document.getElementById('three').style.display = 'none'
    document.getElementById('five').style.display = 'none'
    document.getElementById('six').style.display = 'none'
    document.getElementById('seven').style.display = 'none'


}

const tabsFive= () => {
    var elmt = document.getElementById('five')

    elmt.style.display = 'block'
    document.getElementById('one').style.display = 'none'
    document.getElementById('two').style.display = 'none'
    document.getElementById('three').style.display = 'none'
    document.getElementById('four').style.display = 'none'
    document.getElementById('six').style.display = 'none'
    document.getElementById('seven').style.display = 'none'


}

const tabsSix = () => {
    var elmt = document.getElementById('six')

    elmt.style.display = 'block'
    document.getElementById('one').style.display = 'none'
    document.getElementById('two').style.display = 'none'
    document.getElementById('three').style.display = 'none'
    document.getElementById('four').style.display = 'none'
    document.getElementById('five').style.display = 'none'
    document.getElementById('seven').style.display = 'none'


}

const tabsSeven = () => {
    var elmt = document.getElementById('seven')

    elmt.style.display = 'block'
    document.getElementById('one').style.display = 'none'
    document.getElementById('two').style.display = 'none'
    document.getElementById('three').style.display = 'none'
    document.getElementById('four').style.display = 'none'
    document.getElementById('five').style.display = 'none'
    document.getElementById('six').style.display = 'none'

}



export const Home = () => {

    const [data, setData]= useState([]);
    

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response)=>{
            setData(response)
        })
    }, [])

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
                <BootstrapTable id="tablet" data={ data.data } options={ this.options } pagination>
                    <TableHeaderColumn filter={ { type: 'TextFilter', delay: 1000 } } dataField='age' dataSort dataAlign>Average Age</TableHeaderColumn>
                    <TableHeaderColumn filter={ { type: 'TextFilter', delay: 1000 } } dataField='classofworker' dataAlign dataSort>Class Of Worker</TableHeaderColumn>
                    <TableHeaderColumn filter={ { type: 'TextFilter', delay: 1000 } } dataField='occupationcode' dataAlign dataSort>Occupation Code</TableHeaderColumn>
                    <TableHeaderColumn filter={ { type: 'TextFilter', delay: 1000 } } dataField='industrycode' isKey={true} dataAlign dataSort>Industry Code</TableHeaderColumn>
                </BootstrapTable>
            </div>
          );
        }
      }

    return(
        <section>
            <div className="container">
                <div className="row">
                    <Nav fill variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" onClick={tabsOne}>Tabs One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" onClick={tabsTwo}>Class of Worker</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3" onClick={tabsThree}>Education</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4" onClick={tabsFour}>Last Education</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-5" onClick={tabsFive}>Marital Status</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-6" onClick={tabsSix}> Major Industry Code </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-7" onClick={tabsSeven}>Mace</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <section className="sect" id="one">
                        <div>
                            <Section1/>
                        </div>
                    </section>
                    <section className="sect" id="two">
                        <div>
                            <ClassOfWorker/>
                        </div>
                    </section>
                    <section className="sect" id="three">
                        <div>
                            <Education/>
                        </div>
                    </section>
                    <section className="sect" id="four">
                        <div>
                            <LastEducation/>
                        </div>
                    </section>
                    <section className="sect" id="five">
                        <div>
                            <MaritalStatus/>
                        </div>
                    </section>
                    <section className="sect" id="six">
                        <div>
                            <MajorIndustryCode/>
                        </div>
                    </section>
                    <section className="sect" id="seven">
                        <div>
                            <Mace/>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}