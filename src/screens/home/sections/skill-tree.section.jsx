import React, { Component } from 'react'
import './skill-tree.style.css'
import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider
} from 'beautiful-skill-tree';
import theme from '../sections/skill-tree.theme.js';


export class SkillTreeSection extends Component {

    render() {
            return (
                <>
                    <SkillProvider>
                        <SkillTreeGroup theme={theme}>
                            {() => {
                                return (
                                    <SkillTree treeId={this.props.data[0].tree.title} title={this.props.data[0].tree.title} data={this.props.data} />
                                )
                            }}
                        </SkillTreeGroup>
                    </SkillProvider>
                </>
            )
    }
}
