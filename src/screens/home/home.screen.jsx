import React, {Component} from "react";
import "./home.style.css"
import {Header} from "../../components";
import {SkillTreeSection} from "./sections/skill-tree.section"
import {SkillTreeService} from "../../services";
import data from './TODOreturn-from-back/TODOreturn-from-back'; //TODO retirar


export class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.skillTreeService = new SkillTreeService()
    }

    getSkillTreeData = () => {
        // return await this.skillTreeService.getSkillTreeList() TODO fazer endpoint no backend e trazer do banco
        return data; //Fazer umas lista de 3
    };

    render() {
        return (
            <>
                <div className="home">
                    <Header/>
                    <div className="skill-trees-container">
                        {this.getSkillTreeData().map((skillTree) => {
                            return <SkillTreeSection data={skillTree}/>
                        })}
                    </div>
                </div>
            </>
        );
    }
}
