import React from "react";
import { isPropertySignature } from "typescript";

interface Props {
    label: string;
    type: string;
}

export const TextInput: React.FC<Props> = ({label, type}) => (
    <div className="form">
        <label className="form__label">{label}</label>
        <input className="form__input" type={type} />
    </div>
);