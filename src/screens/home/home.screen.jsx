import React, {Component} from "react";
import "./home.style.css"
import {Header} from "../../components";
import {SkillTreeSection} from "./sections/skill-tree.section"
import {SkillTreeService} from "../../services";
import data from './TODOreturn-from-back/TODOreturn-from-back-teste';


export class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillTreeData: data
        }

        this.skillTreeService = new SkillTreeService()
        this.getSkillTreeData()
    }

    getSkillTreeData = async () => {
        const skillTree =  await this.skillTreeService.getSkillTreeList();
        this.setState({
            skillTreeData: skillTree
        })

    };

    render() {
        return (
            <>
                <div className="home">
                    <Header/>
                    <div className="skill-trees-container">
                        {this.state.skillTreeData.map((skillTree) => {
                            return <SkillTreeSection data={skillTree}/>
                        })}
                    </div>
                </div>
            </>
        );
    }
}
