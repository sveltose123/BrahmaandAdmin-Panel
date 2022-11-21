import React, { Component } from "react";
import {
    Card, CardBody, Row, Col, CustomInput, Form, FormGroup, Label, Input, Button,
    Breadcrumb, BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { FiArrowDown } from "react-icons/fi";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import Axios from "axios";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import Select from "react-select";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel, } from "react-accessible-accordion";

export default class AddResource extends Component {
    constructor (props) {
        super(props);
        this.state = {
            link: "",
            category: "",
            sub_category: "",
            type: "",
            format: "",
            topics: "",
            desc: "",
            editorState: EditorState.createEmpty(),
            resTitle: "",
            creatorName: "",
            relYear: "",
            comment: "",
            selectedFile: null,
            selectedName: "",
            selectedLang: [],
            categoryT: [],
            sub_categoryT: [],
            yrN: [],
            langL: [],
            option: []

        };
        this.style = {
            chips: {
                background: "black",
            },
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
            desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        });
    };

    // handleChange = (language) => {
    //     this.setState({ language }, () =>
    //         console.log(`Option selected:`, this.state.language)
    //     );
    // };
    // onSelect(selectedList, selectItem) {
    //     var selectItem1 = [];
    //     for (var i = 0; i < selectedList.length; i++) {
    //         selectItem1.push(selectedList[i]._id);
    //     }
    //     // this.setState({ selectItem1: [...this.state.selectItem1, ...[1, 2, 3]] })
    //     //  this.setState.selectedLang = { selectItem1 };
    //     console.log("aa", selectItem1);

    //     // console.log("selectedLang", selectedLang);
    // }

    // onRemove(selectedList, removedItem) {
    //     console.log(selectedList);
    // }
    onChangeHandler = (event) => {
        this.setState({ selectedFile: event.target.files[0] });
        this.setState({ selectedName: event.target.files[0].name });
        console.log(event.target.files[0]);
    };
    onChangeHandler = (event) => {
        this.setState({ selectedFile: event.target.files });
        this.setState({ selectedName: event.target.files.name });
        console.log(event.target.files);
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    async componentDidUpdate() {
        if (
            this.state.category !== "" &&
            this.state.category !== undefined &&
            this.state.category !== null
        ) {
            Axios.get(
                `http://3.7.173.138:9000/admin/listbycategory/${this.state.category}`
            )
                .then((response) => {
                    console.log(response);
                    this.setState({
                        sub_categoryT: response.data.data,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            return null;
        }
    }

    async componentDidMount() {
        axiosConfig
            .get("/admin/getallCategory")
            .then((response) => {
                console.log(response);
                this.setState({
                    categoryT: response.data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });

        axiosConfig
            .get("/user/allYear")
            .then((response) => {
                console.log(response);
                this.setState({
                    yrN: response.data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });

        axiosConfig
            .get("/user/allLang")
            .then((response) => {
                console.log(response);
                this.setState({
                    langL: response.data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    submitHandler = (e) => {
        e.preventDefault();
        // console.log(this.state.link, this.state.category, this.state.sub_category, this.state.type, this.state.creatorName, this.state.topics, this.state.language, this.state.relYear,
        //     this.state.format, this.state.desc, this.state.comment)
        const data = new FormData();
        data.append("link", this.state.link);
        data.append("category", this.state.category);
        data.append("sub_category", this.state.sub_category);
        data.append("type", this.state.type);
        data.append("format", this.state.format);
        data.append("language", this.state.language);
        data.append("topics", this.state.topics);
        data.append("desc", this.state.desc);
        data.append("resTitle", this.state.resTitle);
        data.append("creatorName", this.state.creatorName);
        data.append("relYear", this.state.relYear);
        data.append("comment", this.state.comment);

        for (const file of this.state.selectedFile) {
            if (this.state.selectedFile !== null) {
                data.append("img", file, file.name);
            }
        }
        for (var value of data.values()) {
            console.log(value);
        }
        for (var key of data.keys()) {
            console.log(key)
                ;
        }

        axiosConfig
            .post("/admin/admin_Sub_resrc", data)
            .then((response) => {
                console.log(response);
                swal("Success!", "Submitted SuccessFull!", "success");
                this.props.history.push("/app/brahmaand/resource/resourceList");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <Row>
                    <Col sm="12">
                        <div>
                            <Breadcrumb listTag="div">
                                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                                    Home
                                </BreadcrumbItem>
                                <BreadcrumbItem
                                    href="/app/brahmaand/resource/resourceList"
                                    tag="a"
                                >
                                    Resource List
                                </BreadcrumbItem>
                                <BreadcrumbItem active>AddResource</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Add Resource
                            </h1>
                        </Col>
                        <Col>
                            <Route
                                render={({ history }) => (
                                    <Button
                                        className=" btn btn-danger float-right"
                                        onClick={() =>
                                            history.push("/app/brahmaand/resource/resourceList")
                                        }
                                    >
                                        Back
                                    </Button>
                                )}
                            />
                        </Col>
                    </Row>
                    <CardBody>
                        <Form className="m-1" onSubmit={this.submitHandler}>
                            <Row>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <FormGroup>
                                        <Label> Creator Name</Label>
                                        <Input
                                            type="text"
                                            name="creatorName"
                                            placeholder="Enter Name"
                                            value={this.state.creatorName}
                                            onChange={this.changeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <FormGroup>
                                        <Label>Link</Label>
                                        <Input
                                            type="text"
                                            name="link"
                                            value={this.state.link}
                                            onChange={this.changeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <FormGroup>
                                        <Label>Category Name</Label>
                                        <CustomInput
                                            type="select"
                                            name="category"
                                            value={this.state.category}
                                            onChange={this.changeHandler}
                                        >
                                            <option>select Category</option>
                                            {this.state.categoryT?.map((allCategory) => (
                                                <option value={allCategory?._id} key={allCategory?._id}>
                                                    {allCategory?.title}
                                                </option>
                                            ))}
                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2">
                                    <FormGroup>
                                        <Label>SubCategory Name</Label>
                                        <CustomInput
                                            type="select"
                                            name="sub_category"
                                            value={this.state.sub_category}
                                            onChange={this.changeHandler}
                                        >
                                            <option>select SubCategory</option>
                                            {this.state.sub_categoryT?.map((allSubCategory) => (
                                                <option
                                                    value={allSubCategory?._id}
                                                    key={allSubCategory?._id}
                                                >
                                                    {allSubCategory?.title}
                                                </option>
                                            ))}
                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <FormGroup>
                                        <Label>Type</Label>
                                        <CustomInput
                                            type="select"
                                            name="type"
                                            value={this.state.type}
                                            onChange={this.changeHandler}
                                        >
                                            <option>Select Type</option>
                                            <option value="Free">Free</option>
                                            <option value="Paid">Paid</option>
                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <FormGroup>
                                        <Label>Format</Label>
                                        <CustomInput
                                            type="select"
                                            name="format"
                                            value={this.state.format}
                                            onChange={this.changeHandler}
                                        >
                                            <option>Select Format</option>
                                            <option value="Video">Video</option>
                                            <option value="Text">Text</option>
                                            <option value="Video & Text">Video & Text</option>
                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <Label>Upload Image</Label>
                                    <CustomInput
                                        type="file"
                                        //   multiple
                                        onChange={this.onChangeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <FormGroup>
                                        <Label>Language</Label>
                                        <CustomInput
                                            type="select"
                                            name="language"
                                            value={this.state.language}

                                            onChange={this.changeHandler}
                                        >
                                            <option>select Language</option>
                                            {this.state.langL?.map((allLang) => (
                                                <option
                                                    value={allLang?._id}
                                                    key={allLang?._id}
                                                >
                                                    {allLang?.language}
                                                </option>
                                            ))}
                                        </CustomInput>

                                        {/* <Select */}
                                        {/* isMulti
                                            type="select"
                                            classNamePrefix="select"
                                            options={this.state.langL}
                                            style={this.style}
                                
                                        /> */}
                                        {/* <Multiselect
                                            options={this.state.langL}
                                            selectedValues={this.state.selectedValues}
                                            onSelect={this.onSelect}
                                            onRemove={this.onRemove}
                                            displayValue="language"
                                            onChange={() => this.selectHandler(this)}
                                          
                                        /> */}
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <FormGroup>
                                        <Label>Topic</Label>
                                        <Input
                                            type="text"
                                            name="topics"
                                            placeholder="Enter topic"
                                            value={this.state.topics}
                                            onChange={this.changeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6" className="mb-2">

                                    <Label>Optional</Label>
                                    <Accordion>
                                        <AccordionItem>
                                            <Col
                                                lg="12"
                                                className="d-flex justify-content-end align-items-end"
                                            >
                                                <AccordionItemButton
                                                    style={{
                                                        paddingLeft: "572px",
                                                        paddingRight: "40px",
                                                        marginRight: "-10px",
                                                        marginTop: "3px",
                                                        height: "36px",
                                                        backgroundColor: "white",
                                                        borderRadius: "0.5rem",
                                                        border: "1px solid #d9d9d9",
                                                    }}
                                                >
                                                    <FiArrowDown />
                                                </AccordionItemButton>
                                            </Col>
                                            <AccordionItemPanel>
                                                <Form onSubmit={this.submitHandler}>
                                                    <FormGroup>
                                                        {" "}
                                                        <Label>Title</Label>
                                                        <Input
                                                            type="text"
                                                            name="resTitle"
                                                            value={this.state.resTitle}
                                                            onChange={this.changeHandler}
                                                        />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>Release Year</Label>
                                                        <CustomInput
                                                            type="select"
                                                            name="relYear"
                                                            value={this.state.yrName}
                                                            onChange={this.changeHandler}
                                                        >
                                                            <option>select Year</option>
                                                            {this.state.yrN?.map((allYear) => (
                                                                <option
                                                                    value={allYear?._id}
                                                                    key={allYear?._id}
                                                                >
                                                                    {allYear?.yrName}
                                                                </option>
                                                            ))}
                                                        </CustomInput>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>Descripition</Label>
                                                        <Editor
                                                            toolbarClassName="demo-toolbar-absolute"
                                                            wrapperClassName="demo-wrapper"
                                                            editorClassName="demo-editor"
                                                            editorState={this.state.editorState}
                                                            onEditorStateChange={this.onEditorStateChange}
                                                        // toolbar={{
                                                        //     options: [
                                                        //         "inline",
                                                        //         "blockType",
                                                        //         "fontSize",
                                                        //         "fontFamily",

                                                        //         "image",


                                                        //     ],
                                                        //     inline: {
                                                        //         options: [
                                                        //             "bold",
                                                        //             "italic",
                                                        //             "underline",
                                                        //             "strikethrough",
                                                        //             "monospace",
                                                        //         ],
                                                        //         bold: {
                                                        //             className: "bordered-option-classname",
                                                        //         },
                                                        //         italic: {
                                                        //             className: "bordered-option-classname",
                                                        //         },
                                                        //         underline: {
                                                        //             className: "bordered-option-classname",
                                                        //         },
                                                        //         strikethrough: {
                                                        //             className: "bordered-option-classname",
                                                        //         },
                                                        //         code: {
                                                        //             className: "bordered-option-classname",
                                                        //         },
                                                        //     },
                                                        //     blockType: {
                                                        //         className: "bordered-option-classname",
                                                        //     },
                                                        //     fontSize: {
                                                        //         className: "bordered-option-classname",
                                                        //     },
                                                        //     fontFamily: {
                                                        //         className: "bordered-option-classname",
                                                        //     },
                                                        //     image: {
                                                        //         className: "bordered-option-classname"
                                                        //     },

                                                        // }}
                                                        />
                                                    </FormGroup>
                                                    <FormGroup>

                                                        <Label>Comments</Label>
                                                        <Input
                                                            type="text"
                                                            name="comment"
                                                            value={this.state.comment}
                                                            onChange={this.changeHandler}
                                                        />
                                                    </FormGroup>
                                                </Form>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button.Ripple
                                        color="primary"
                                        type="submit"
                                        className="mr-1 mb-1"
                                    >
                                        Add
                                    </Button.Ripple>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card >
            </div >
        );
    }
}


