import React, { Component } from 'react'
import './skill-tree.style.css'
import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider
} from 'beautiful-skill-tree';
import theme from '../sections/skill-tree.theme.js';
import {Redirect} from "react-router-dom";


export class SkillTreeSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redireciona: false,
            savedData: {}
        }
    }

    selectSkill = async (skillId) => {
        await new Promise(r => setTimeout(r, 400)); // Timer para dar tempo do efeito do click. Faz sentido ter isso? TODO
        this.setState({
            redireciona: `/tech-steps/${skillId}`
        })
    };

    render() {
        if (this.state.redireciona) {
            return <Redirect to={this.state.redireciona}/>
        }
        console.log("preula")
        console.log(this.props.savedData
            .filter((savedData) => savedData.treeId === this.props.data.id)[0]?.skillTreeSavedData ?? {}
        )

            return (
                <>
                    <SkillProvider>
                        <SkillTreeGroup theme={theme}>
                            {() => {
                                return (
                                    <SkillTree treeId={this.props.data.id}
                                               title={this.props.data.title}
                                               data={this.props.data.root}
                                               savedData={this.props.savedData
                                                   .filter((savedData) => savedData.treeId === this.props.data.id)[0]?.skillTreeSavedData ?? {}}
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
