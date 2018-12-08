import React, { Component } from 'react';
import { Carousel, Image, Button, Grid, Col, Row, FormGroup, FormControl } from 'react-bootstrap';
import './Home.css';
import Comment from './HomeComponents/Comment';
import axios from 'axios'
var url = "http://120.79.149.156:8089/";
var uri_add = "comments/add";
var uri_all = "comments/all";
export default class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
        this.getContent = this.getContent.bind(this);
        this.getName = this.getName.bind(this);

        this.state = {
            btnContent: "提交",
            isLoading: false,
            commentList: [],
            content: "",
            name: "",
            isFirst: true
        };
        this.getAllComments();
    }
    handleClick() {
        if (this.state.content === "" || this.state.name === "") {
            this.setState({
                isFirst: false
            })
        }
        else {
            this.setState({
                btnContent: <img className="loading animation-rotate" src="assets/Loading.png" alt="flash" />,
                isLoading: true,
            });
            axios.post(url + uri_add, {
                "name": this.state.name,
                "content": this.state.content
            }).then(res => {
                if (res.data.isSuccess === true) {
                    this.setState({
                        btnContent: "提交",
                        isLoading: false,
                        isFirst: true,
                        name: "",
                        content: ""
                    });
                    this.getAllComments();
                }
            })
        }

    }
    getAllComments() {
        axios.get(url + uri_all)
            .then(res => {
                this.setState({
                    commentList: res.data
                });
            });
    }
    getContent(e) {
        this.setState({
            content: e.target.value,
        });
    }
    getName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    getContentState() {
        const length = this.state.content.length;
        if (!this.state.isFirst) {
            return length > 0 ? "success" : "error";
        } else {
            return length > 0 ? "success" : null;
        }
    }
    getNameState() {
        const length = this.state.name.length;
        if (!this.state.isFirst) {
            return length > 0 ? "success" : "error";
        } else {
            return length > 0 ? "success" : null;
        }
    }
    render() {
        const isLoading = this.state.isLoading;
        const btnContent = this.state.btnContent;
        const commentList = this.state.commentList;
        return (
            <div>
                <Carousel prevIcon={null} nextIcon={null}>
                    <Carousel.Item>
                        <img src="assets/code.jpg" draggable="false" alt="code" />
                        <Carousel.Caption>
                            <p>Coding is my life.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="assets/mountain.jpg" alt="mountain" />
                        <Carousel.Caption>
                            <p>I can do all things!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Grid>
                    <div className="information">
                        <h1 className="text-center">Hello!</h1>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我是一名来在西南石油大学软件工程的本科生。现在主要在学习前端开发，以及准备明年的研究生考试。我的兴趣爱好是看NBA，和玩dota2。欢迎各位小伙伴前来摆龙门阵和交流学习经验。</p>
                    </div>
                    <form>
                        <p className="text-center">留言板</p>
                        {/* 动态生成评论 */}
                        {Object.keys(commentList).map((i) => (
                            <Comment key={i} num={commentList[i].id} name={commentList[i].name} content={commentList[i].content}></Comment>
                        ))}

                        <FormGroup controlId="content" validationState={this.getContentState()}>
                            <FormControl type="text" placeholder="评论..." value={this.state.content} onChange={this.getContent} />
                            <FormControl.Feedback />
                        </FormGroup>
                        <Col xs={6}>
                            <FormGroup controlId="name" validationState={this.getNameState()}>
                                <FormControl type="text" placeholder="姓名..." value={this.state.name} onChange={this.getName} />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Col>
                        <Button bsStyle="primary"
                            disabled={isLoading}
                            onClick={!isLoading ? this.handleClick : null}
                            className="comment-submit">{btnContent}</Button>
                    </form>
                    <Col xs={12} className="text-center" style={{ color: 'black' }}>
                        <h2>Connect</h2>
                    </Col>
                    <Col xs={12} className="text-center">
                        <a href="https://plus.google.com/u/0/117722047773835163394?tab=wX"><Image className="social-img" src="assets/google.png" /></a>
                        <a href="https://github.com/stedylan"><Image className="social-img" src="assets/github.png" /></a>
                        <a href="https://www.weibo.com/2571148555/profile?topnav=1&wvr=6"><Image className="social-img" src="assets/weibo.png" /></a>
                    </Col>
                </Grid>
                <footer>
                    <Grid>
                        <Row className="foot">
                            <Col sm={6} className="text-center">
                                <p className="foot-title">联系方式</p>
                                <p className="foot-text">QQ:836671668</p>
                                <p className="foot-text">邮箱:836671668@qq.com</p>

                            </Col>
                            <Col sm={6} className="text-center">
                                <p className="foot-title">地址</p>
                                <a href="http://www.swpu.edu.cn/"><p className="foot-text">西南石油大学</p></a>
                            </Col>
                        </Row>
                    </Grid>
                </footer>
            </div>
        )
    }
}
