import React, { useState, useEffect } from "react";
import { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  CustomInput,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { FiArrowDown } from "react-icons/fi";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import imageToBase64 from "image-to-base64/browser";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import Select from "react-select";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function AddResource() {
  const [link, setLink] = useState([]);
  const [category, setCategory] = useState("");
  const [sub_category, setSub_category] = useState("");
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
  const [topics, setTopics] = useState([]);
  const [desc, setDesc] = useState("");
  const [resTitle, setResTitle] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [relYear, setRelYear] = useState([]);
  const [comment, setComment] = useState("");
  // const [selectedFile, setSelectedFile] = useState("");
  const [selectedLang, setSelectedLang] = useState([]);
  const [categoryT, setCategoryT] = useState([]);
  const [sub_categoryT, setSub_categoryT] = useState([]);
  const [yrN, setYrN] = useState([]);
  const [langL, setLangL] = useState([]);
  const [yrName, setYrName] = useState([]);
  const [cat_img, setCat_img] = useState({});
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [sellang, setSellang] = useState();
  const [conimg, setConimg] = useState("");
  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);
    var selectItem1 = [];

    for (var i = 0; i < selectedList.length; i++) {
      selectItem1.push(selectedList[i]._id);
    }
    console.log("aaaa", selectItem1);
    setSellang(selectItem1);
    // console.log(sellang);
  };

  const onEditorStateChange = (editorState) => {
    // editorState.preventDefault();
    setEditorState(editorState);

    setDesc(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  // console.log(desc);
  imageToBase64(cat_img) // Path to the image
    .then((response) => {
      setConimg(response); // "cGF0aC90by9maWxlLmpwZw=="
      console.log(response);
    })
    .catch((error) => {
      console.log(error); // Logs an error if there was one
    });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      "all data",
      link,
      category,
      sub_category,
      type,
      creatorName,
      topics,
      selectedLang,
      yrName,
      format,
      desc,
      comment,
      conimg,
      sellang,
      desc
    );

    axios
      .post(`http://3.7.173.138:9000/admin/admin_Sub_resrc`, {
        link: link,
        category: category,
        sub_category: sub_category,
        type: type,
        format: format,
        language: sellang,
        topics: topics,
        desc: desc,
        resTitle: resTitle,
        creatorName: creatorName,
        relYear: yrName,
        comment: comment,
        img: conimg,
      })

      .then((response) => {
        console.log(response.data.data);
        swal("Success!", "Submitted SuccessFully!", "success");
        // history.push("/app/brahmaand/resource/resourceList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function onRemove(selectedList, removedItem) {
    console.log(selectedList);
  }

  const onChangeHandler = (event) => {
    // setCat_img({
    //   picturePreview: URL.createObjectURL(event.target.files[0]),

    //   pictureAsFile: event.target.files[0],
    // });
    setCat_img(event.target.files[0]);
  };

  console.log(cat_img.picturePreview);
  useEffect(() => {
    listbycategorydata();
    getallcategorydata();
    getallyear();
    getalllang();
  }, [category]);

  const listbycategorydata = () => {
    if (category !== "" && category !== undefined && category !== null) {
      axios
        .get(`http://3.7.173.138:9000/admin/listbycategory/${category}`)
        .then((response) => {
          console.log(response);
          setSub_categoryT(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return null;
    }
  };

  const getallcategorydata = () => {
    axiosConfig
      .get("/admin/getallCategory")
      .then((response) => {
        console.log(response);
        setCategoryT(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getallyear = () => {
    axiosConfig
      .get("/user/allYear")
      .then((response) => {
        console.log(response.data.data);
        setYrN(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getalllang = () => {
    axiosConfig
      .get("/user/allLang")
      .then((response) => {
        console.log(response);
        setLangL(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
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
            <Form className="m-1" onSubmit={submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <FormGroup>
                    <Label> Creator Name</Label>
                    <Input
                      type="text"
                      name="creatorName"
                      placeholder="Enter Name"
                      value={creatorName}
                      onChange={(e) => setCreatorName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <FormGroup>
                    <Label>Link</Label>
                    <Input
                      type="text"
                      name="link"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <FormGroup>
                    <Label>Category Name</Label>
                    <CustomInput
                      type="select"
                      name="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>select Category</option>
                      {categoryT?.map((allCategory) => (
                        <option value={allCategory?._id} key={allCategory?._id}>
                          {allCategory?.title}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <FormGroup>
                    <Label>Sub-Category Name</Label>
                    <CustomInput
                      type="select"
                      name="sub_category"
                      value={sub_category}
                      onChange={(e) => setSub_category(e.target.value)}
                    >
                      <option>select SubCategory</option>
                      {sub_categoryT?.map((allSubCategory) => (
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
                    {/* <CustomInput
                      type="select"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option>Select Type</option>
                      <option value="Free">Free</option>
                      <option value="Paid">Paid</option>
                    </CustomInput> */}
                    <select
                      onChange={(e) => setType(e.target.value)}
                      value={type}
                      className="form-control"
                    >
                      <option>Select type</option>
                      <option>Free</option>
                      <option>Paid</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <FormGroup>
                    <Label>Format</Label>
                    <CustomInput
                      type="select"
                      value={format}
                      onChange={(e) => setFormat(e.target.value)}
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
                    onChange={onChangeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2 languageselect">
                  <FormGroup>
                    <Label>Language</Label>
                    {/* <CustomInput
                      type="select"
                      name="language"
                      value={this.state.language}
                      onChange={this.changeHandler}
                    >
                      <option>select Language</option>
                      {this.state.langL?.map((allLang) => (
                        <option value={allLang?._id} key={allLang?._id}>
                          {allLang?.language}
                        </option>
                      ))}
                    </CustomInput> */}

                    {/* <Select */}
                    {/* isMulti
                                            type="select"
                                            classNamePrefix="select"
                                            options={this.state.langL}
                                            style={this.style}
                                
                                        /> */}
                    <Multiselect
                      placeholder="Select language"
                      options={langL}
                      // selectedValues={selectedValues}
                      onSelect={onSelect}
                      onRemove={onRemove}
                      displayValue="language"
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <FormGroup>
                    <Label>Topic</Label>
                    <Input
                      type="text"
                      name="topics"
                      placeholder="Enter topic"
                      value={topics}
                      onChange={(e) => setTopics(e.target.value)}
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
                            paddingLeft: "517px",
                            paddingRight: "10px",
                            marginRight: "-10px",
                            marginTop: "1px",
                            height: "37px",
                            backgroundColor: "white",
                            borderRadius: "0.5rem",
                            border: "1px solid #d9d9d9",
                          }}
                        >
                          <FiArrowDown />
                        </AccordionItemButton>
                      </Col>
                      <AccordionItemPanel>
                        <Form>
                          <FormGroup>
                            <Label>Title</Label>
                            <Input
                              type="text"
                              name="resTitle"
                              value={resTitle}
                              onChange={(e) => setResTitle(e.target.value)}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label>Release Year</Label>
                            <CustomInput
                              type="select"
                              name="relYear"
                              value={yrName}
                              onChange={(e) => setYrName(e.target.value)}
                            >
                              <option>select Year</option>
                              {yrN?.map((allYear) => (
                                <option value={allYear?._id} key={allYear?._id}>
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
                              editorState={editorState}
                              onEditorStateChange={onEditorStateChange}
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
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
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
                  <Button
                    onClick={submitHandler}
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Your Content
                  </Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default AddResource;
