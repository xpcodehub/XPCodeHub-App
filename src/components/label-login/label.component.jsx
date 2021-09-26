import React, {Component} from "react";
import "./label.style.css";

export class LabelLogin extends Component {
    render() {
        return (
            <div className="input-group">
                {/*<i class={this.props.classeIcone}/>*/}
                <label>{this.props.texto}</label>
                <input className="texto-input" maxLength="60" type={this.props.type}
                       placeholder={this.props.placeholder} id={this.props.id} name={this.props.name}
                       onChange={this.props.onChange} value={this.props.value}
                       onKeyDown={this.props.pressionouEnter}/>
            </div>
        );
    }
}
