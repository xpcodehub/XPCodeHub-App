import React, { Component } from 'react'
import './skill-tree.style.css'
import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider
} from 'beautiful-skill-tree';
import theme from '../sections/skill-tree.theme.js';
import data from '../TODOreturn-from-back/TODOreturn-from-back-saved-data'; //TODO Tirar
import {Redirect} from "react-router-dom";


export class SkillTreeSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redireciona: false,
        }
    }

    getSkillTreeSavedData = (treeId) => {
        return data;
    };

    selectSkill = async (skillId) => {
        await new Promise(r => setTimeout(r, 400)); // Timer para dar tempo do efeito do click. Faz sentido ter isso? //TODO
        this.setState({
            redireciona: `/tech-steps/${skillId}`
        })
    };

    render() {
        if (this.state.redireciona) {
            return <Redirect to={this.state.redireciona}/>
        }
            return (
                <>
                    <SkillProvider>
                        <SkillTreeGroup theme={theme}>
                            {() => {
                                return (
                                    <SkillTree treeId={this.props.data.tree.title}
                                               title={this.props.data.tree.title}
                                               data={this.props.data.tree.root}
                                               savedData={this.getSkillTreeSavedData(this.props.data.tree.id)}
                                               handleNodeSelect={(event) => this.selectSkill(event.key)}
                                    />
                                )
                            }}
                        </SkillTreeGroup>
                    </SkillProvider>
                </>
            )
    }
}
