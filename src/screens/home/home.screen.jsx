import React, {Component} from "react";
import "./home.style.css"
import {Header} from "../../components";
import {SkillTreeSection} from "./sections/skill-tree.section"
import {SkillTreeService} from "../../services";
import savedData from './TODOreturn-from-back/TODOreturn-from-back-saved-data'; //TODO Tirar
import _ from "lodash";


export class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillTreeData: false,
            savedData: false,
            user: {}
        }

        this.skillTreeService = new SkillTreeService()
        this.getSkillTreeData()
        this.getSkillTreeSavedData()
        this.getUserInfo()
    }

    getSkillTreeData = async () => {
        const skillTree =  await this.skillTreeService.getSkillTreeList();
        this.setState({
            skillTreeData: skillTree
        })
    };

    getSkillTreeSavedData = async (treeId) => {
        const savedData =  await this.skillTreeService.getSkillTreeSavedData();
        this.setState({
            savedData: savedData
        })
    };

    getUserInfo = async (treeId) => {
        // const user =  await this.skillTreeService.getUserInfo();
        // this.setState({
        //     user: user
        // })
    };

    render() {
        // console.log("igual?")
        // console.log(_.isEqual(this.state.user.skillTreeSavedData, savedData))
        // console.log(this.state.user.skillTreeSavedData)
        // console.log(savedData)

        return (
            <>
                <div className="home">
                    <Header/>
                    <div className="skill-trees-container">
                        {this.state.skillTreeData && this.state.savedData ? this.state.skillTreeData.map((skillTree) => {
                            return <SkillTreeSection data={skillTree} savedData={this.state.savedData}/>
                        }) : null}
                    </div>
                </div>
            </>
        );
    }
}
