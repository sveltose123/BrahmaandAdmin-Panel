import React from "react";
import {
    Card, CardBody, Input, Row, Col, Button, UncontrolledDropdown, DropdownMenu,
    DropdownItem, DropdownToggle,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
class Blogs extends React.Component {
    state = {
        rowData: [],
        status: "",
        paginationPageSize: 20,
        currenPageSize: "",
        getPageSize: "",
        defaultColDef: {
            sortable: true,
            editable: true,
            resizable: true,
            suppressMenu: true,
        },

        columnDefs: [
            {
                headerName: "S.No",
                valueGetter: "node.rowIndex + 1",
                field: "node.rowIndex + 1",
                width: 150,
            },
            {
                headerName: "Title",
                field: "blog_title",
                width: 150,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex align-items-center cursor-pointer">
                            <span>{params.data.blog_title}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Descripiton",
                field: "desc",
                width: 200,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex align-items-center cursor-pointer">
                            <span>{params.data.desc}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Blog Type",
                field: "blog_type",
                width: 150,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex align-items-center cursor-pointer">
                            <span>{params.data.blog_type}</span>
                        </div>
                    );
                },
            },

            {
                headerName: " Thumnail Image",
                field: "blogImg",
                width: 120,
                cellRendererFramework: (params) => {
                    return (
                        <img className=" d-flex align-items-center cursor-pointer w-50 h-50 rounded" src={params.data.blogImg} />
                    );
                },
            },
            {
                headerName: "Posted By",
                field: "posted_by",
                width: 120,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex align-items-center cursor-pointer">
                            <span>{params.data.posted_by}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Posted Image",
                field: "posted_by_img",
                width: 120,
                cellRendererFramework: (params) => {
                    return (
                        <img className=" d-flex align-items-center cursor-pointer w-50 h-50 rounded" src={params.data.posted_by_img} />
                    );
                },
            },
            {
                headerName: "Status",
                field: "status",
                filter: true,
                width: 120,
                cellRendererFramework: (params) => {
                    return params.value == "Active" ? (
                        <div className="badge badge-pill badge-success">
                            {params.data.status}
                        </div>
                    ) : params.value == "Deactive" ? (
                        <div className="badge badge-pill badge-warning">
                            {params.data.status}
                        </div>
                    ) : null;
                },
            },

            {
                headerName: "Actions",
                field: "sortorder",
                width: 150,
                cellRendererFramework: (params) => {
                    return (
                        <div className="actions cursor-pointer">
                            <Route
                                render={({ history }) => (
                                    <Edit
                                        className="mr-50"
                                        size="25px"
                                        color="blue"
                                        onClick={() =>
                                            history.push(`/app/brahmaand/blogs/editBlog/${params.data._id}`)
                                        }
                                    />
                                )}
                            />
                            <Trash2
                                size={20}
                                color="red"
                                onClick={() => {
                                    let selectedData = this.gridApi.getSelectedRows();
                                    this.runthisfunction(params.data._id);
                                    this.gridApi.updateRowData({ remove: selectedData });
                                }}
                            />
                        </div>
                    );
                },
            },
        ],
    };

    async componentDidMount() {
        await axiosConfig
            .get("/admin/getBlog")
            .then((response) => {
                const rowData = response.data.data;
                console.log(rowData);
                this.setState({ rowData });
            });
    }
    async runthisfunction(id) {
        console.log(id);
        await axiosConfig.get(`/admin/delBlog/${id}`).then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        );
    }
    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.setState({
            currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
            getPageSize: this.gridApi.paginationGetPageSize(),
            totalPages: this.gridApi.paginationGetTotalPages(),
        });
    };

    updateSearchQuery = (val) => {
        this.gridApi.setQuickFilter(val);
    };

    filterSize = (val) => {
        if (this.gridApi) {
            this.gridApi.paginationSetPageSize(Number(val));
            this.setState({
                currenPageSize: val,
                getPageSize: val,
            });
        }
    };

    render() {
        const { rowData, columnDefs, defaultColDef } = this.state;
        return (
            console.log(rowData),
            (
                <Row className="app-user-list">
                    <Col sm="12"></Col>
                    <Col sm="12">
                        <Card>
                            <Row className="m-2">
                                <Col>
                                    <h1 sm="6" className="float-left">
                                        Blog List
                                    </h1>
                                </Col>
                                <Col>
                                    <Route
                                        render={({ history }) => (
                                            <Button
                                                className="btn btn-success float-right"
                                                onClick={() =>
                                                    history.push("/app/brahmaand/blogs/addBlog")
                                                }
                                            >
                                                Add Blog
                                            </Button>
                                        )}
                                    />
                                </Col>
                            </Row>
                            <CardBody>
                                {this.state.rowData === null ? null : (
                                    <div className="ag-theme-material w-100 my-2 ag-grid-table">
                                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                                            <div className="mb-1">
                                                <UncontrolledDropdown className="p-1 ag-dropdown">
                                                    <DropdownToggle tag="div">
                                                        {this.gridApi
                                                            ? this.state.currenPageSize
                                                            : "" * this.state.getPageSize -
                                                            (this.state.getPageSize - 1)}{" "}
                                                        -{" "}
                                                        {this.state.rowData.length -
                                                            this.state.currenPageSize *
                                                            this.state.getPageSize >
                                                            0
                                                            ? this.state.currenPageSize *
                                                            this.state.getPageSize
                                                            : this.state.rowData.length}{" "}
                                                        of {this.state.rowData.length}
                                                        <ChevronDown className="ml-50" size={15} />
                                                    </DropdownToggle>
                                                    <DropdownMenu right>
                                                        <DropdownItem
                                                            tag="div"
                                                            onClick={() => this.filterSize(20)}
                                                        >
                                                            20
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            tag="div"
                                                            onClick={() => this.filterSize(50)}
                                                        >
                                                            50
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            tag="div"
                                                            onClick={() => this.filterSize(100)}
                                                        >
                                                            100
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            tag="div"
                                                            onClick={() => this.filterSize(134)}
                                                        >
                                                            134
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                            <div className="d-flex flex-wrap justify-content-between mb-1">
                                                <div className="table-input mr-1">
                                                    <Input
                                                        placeholder="search..."
                                                        onChange={(e) =>
                                                            this.updateSearchQuery(e.target.value)
                                                        }
                                                        value={this.state.value}
                                                    />
                                                </div>
                                                <div className="export-btn">
                                                    <Button.Ripple
                                                        color="primary"
                                                        onClick={() => this.gridApi.exportDataAsCsv()}
                                                    >
                                                        Export as CSV
                                                    </Button.Ripple>
                                                </div>
                                            </div>
                                        </div>
                                        <ContextLayout.Consumer>
                                            {(context) => (
                                                <AgGridReact
                                                    gridOptions={{}}
                                                    rowSelection="multiple"
                                                    defaultColDef={defaultColDef}
                                                    columnDefs={columnDefs}
                                                    rowData={rowData}
                                                    onGridReady={this.onGridReady}
                                                    colResizeDefault={"shift"}
                                                    animateRows={true}
                                                    floatingFilter={false}
                                                    pagination={true}
                                                    paginationPageSize={this.state.paginationPageSize}
                                                    pivotPanelShow="always"
                                                    enableRtl={context.state.direction === "rtl"}
                                                />
                                            )}
                                        </ContextLayout.Consumer>
                                    </div>
                                )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            )
        );
    }
}
export default Blogs;
