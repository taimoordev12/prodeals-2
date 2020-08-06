import React, { Component } from 'react'
import AppBar from './appBar.component'
import Table from './table.component'
import Axios from '../../axios';
import { times } from 'lodash';

class adminPanel extends Component {
    constructor(props){
        super(props);

        this.state = {
            tableData: [],
            tableHeaderValues: [],
            user: false,
            featureReq: false
        };

        Axios.get(`/admin/users`).then( res => {
            this.setState({
                tableData: res.data,
                tableHeaderValues:["User ID","First Name","Last Name","Email","Contact","Actions"],
                user: true,
                featureReq: false
            })
        })
    }

    handleApproveReqs = () => {
        Axios.get(`/admin/ads`).then( res => {
            this.setState({
                tableData: res.data,
                tableHeaderValues: ["Title", "Location", "Model", "Car Name","Contact", "Actions"],
                user: false,
                featureReq: false

            })
        })
    }

    handleInspectionForms = () => {
        Axios.get(`/admin/inspection-forms`).then( res => {
            this.setState({
                tableData: res.data

            })
        })
    }

    handleFeatureReqs = () => {
        Axios.get(`/admin/feature-requests`).then( res => {
            this.setState({
                tableData: res.data,
                tableHeaderValues: ["Title", "Location", "Model", "Car Name","Contact","Actions"],
                user: false,
                featureReq: true
            })
        })
    }

    handleUsers = () => {
        Axios.get(`/admin/users`).then( res => {
            this.setState({
                tableData: res.data,
                tableHeaderValues:["User ID","First Name","Last Name","Email","Contact","Actions"],
                user: true
            })
        })
    }

    render() {
        return (
            <div>
                <AppBar
                    getApproveReqs={this.handleApproveReqs}
                    getFeatureReqs={this.handleFeatureReqs}
                    getUsers={this.handleUsers}
                    getInspectionForms={this.handleInspectionForms}

                />
                <div className="container mt-2">
                <Table 
                    data={this.state.tableData}
                    header={this.state.tableHeaderValues}
                    user={this.state.user}
                    feature={this.state.featureReq}
                />
                </div>
                
            </div>
        )
    }
}

export default adminPanel
